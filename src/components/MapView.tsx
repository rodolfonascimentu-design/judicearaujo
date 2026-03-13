import { useEffect, useRef, useCallback } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useNavigate } from "react-router-dom";

// Neighborhood coordinates in Rio de Janeiro
const neighborhoodCoords: Record<string, [number, number]> = {
  "Barra da Tijuca": [-23.0005, -43.3651],
  "Jardim Botânico": [-22.9668, -43.2249],
  "Leblon": [-22.9836, -43.2243],
  "Gávea": [-22.9755, -43.2330],
  "Ipanema": [-22.9838, -43.2096],
  "São Conrado": [-22.9985, -43.2636],
  "Lagoa": [-22.9722, -43.2101],
  "Joá": [-23.0127, -43.2917],
  "Vidigal": [-22.9930, -43.2337],
  "Humaitá": [-22.9558, -43.1964],
  "Flamengo": [-22.9320, -43.1756],
};

interface MapProperty {
  id: string;
  image: string;
  title: string;
  neighborhood: string;
  street?: string;
  type?: string;
  price: string;
  bedrooms: number;
  area: number;
  parking: number;
  coords: [number, number];
}

interface MapViewProps {
  properties: MapProperty[];
  highlightedId: string | null;
  onHoverPin: (id: string | null) => void;
}

// Custom SVG pin using institutional green
const createPinIcon = (highlighted: boolean) => {
  const size = highlighted ? 36 : 28;
  const height = Math.round(size * 1.4);
  const color = "hsl(171,100%,12%)";
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${height}" viewBox="0 0 24 34">
    <path d="M12 0C5.4 0 0 5.4 0 12c0 9 12 22 12 22s12-13 12-22C24 5.4 18.6 0 12 0z" fill="${color}" opacity="${highlighted ? 1 : 0.85}"/>
    <circle cx="12" cy="12" r="5" fill="white" opacity="0.9"/>
  </svg>`;
  return L.divIcon({
    html: svg,
    className: "custom-pin",
    iconSize: [size, height],
    iconAnchor: [size / 2, height],
    popupAnchor: [0, -height + 4],
  });
};

const MapView = ({ properties, highlightedId, onHoverPin }: MapViewProps) => {
  const mapRef = useRef<L.Map | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const markersRef = useRef<Map<string, L.Marker>>(new Map());
  const navigate = useNavigate();

  // Initialize map
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      center: [-22.98, -43.23],
      zoom: 12,
      scrollWheelZoom: true,
    });

    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
      markersRef.current.clear();
    };
  }, []);

  // Add/update markers
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    // Clear existing markers
    markersRef.current.forEach((m) => m.remove());
    markersRef.current.clear();

    properties.forEach((prop) => {
      const marker = L.marker(prop.coords, { icon: createPinIcon(false) }).addTo(map);

      marker.bindPopup(`
        <div style="width:240px;cursor:pointer;position:relative;" class="map-popup-card" data-id="${prop.id}">
          <div style="position:relative">
            <img src="${prop.image}" alt="${prop.title}" style="width:100%;height:150px;object-fit:cover;display:block;" />
          </div>
          <div style="padding:12px 14px 14px">
            <h4 style="font-family:Montserrat,sans-serif;font-size:12px;font-weight:600;margin:0 0 3px;line-height:1.3">${prop.type || ""} | ${prop.neighborhood}</h4>
            <p style="font-family:Montserrat,sans-serif;font-size:10px;color:#888;margin:0 0 5px">${prop.street || prop.title}</p>
            <p style="font-family:Montserrat,sans-serif;font-size:12px;font-weight:500;color:hsl(171,100%,12%);margin:0 0 8px">${prop.price}</p>
            <div style="font-family:Montserrat,sans-serif;font-size:9px;color:#aaa;display:flex;gap:10px">
              <span>${prop.bedrooms} quartos</span>
              <span>${prop.area} m²</span>
              <span>${prop.parking} vagas</span>
            </div>
          </div>
        </div>
      `, {
        closeButton: true,
        className: "custom-map-popup",
        maxWidth: 260,
        minWidth: 240,
      });

      marker.on("mouseover", () => onHoverPin(prop.id));
      marker.on("mouseout", () => onHoverPin(null));
      marker.on("popupopen", () => {
        const el = document.querySelector(`.map-popup-card[data-id="${prop.id}"]`);
        el?.addEventListener("click", () => navigate(`/imovel/${prop.id}`));
      });

      markersRef.current.set(prop.id, marker);
    });
  }, [properties, navigate, onHoverPin]);

  // Update highlighted marker icon (skip if popup is open to avoid closing it)
  useEffect(() => {
    markersRef.current.forEach((marker, id) => {
      if (!marker.isPopupOpen()) {
        marker.setIcon(createPinIcon(id === highlightedId));
      }
    });
  }, [highlightedId]);

  return (
    <>
      <style>{`
        .custom-pin { background: none !important; border: none !important; }
        .custom-map-popup .leaflet-popup-content-wrapper {
          border-radius: 6px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.12);
          padding: 0;
          overflow: hidden;
        }
        .custom-map-popup .leaflet-popup-content {
          margin: 0;
          line-height: 1;
        }
        .custom-map-popup .leaflet-popup-close-button {
          z-index: 10;
          top: 6px !important;
          right: 6px !important;
          width: 22px;
          height: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,0.35);
          backdrop-filter: blur(4px);
          border-radius: 50%;
          color: white !important;
          font-size: 14px;
          font-weight: 400;
          line-height: 1;
          text-align: center;
        }
        .custom-map-popup .leaflet-popup-close-button:hover {
          background: rgba(0,0,0,0.55);
        }
        .custom-map-popup .leaflet-popup-tip {
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }
      `}</style>
      <div className="w-full h-[600px] lg:h-[700px] rounded-[4px] border border-border" style={{ zIndex: 1 }}>
        <div
          ref={containerRef}
          className="w-full h-full"
        />
      </div>
    </>
  );
};

export { neighborhoodCoords };
export type { MapProperty };
export default MapView;
