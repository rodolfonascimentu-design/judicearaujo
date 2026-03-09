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

const defaultIcon = L.icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const highlightedIcon = L.icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  iconSize: [35, 57],
  iconAnchor: [17, 57],
  popupAnchor: [1, -48],
  shadowSize: [57, 57],
});

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
      const marker = L.marker(prop.coords, { icon: defaultIcon }).addTo(map);

      marker.bindPopup(`
        <div style="width:220px;cursor:pointer" class="map-popup-card" data-id="${prop.id}">
          <img src="${prop.image}" alt="${prop.title}" style="width:100%;height:112px;object-fit:cover;border-radius:3px;margin-bottom:8px" />
          <h4 style="font-family:Montserrat,sans-serif;font-size:13px;font-weight:600;margin:0 0 2px;line-height:1.3">${prop.title}</h4>
          <p style="font-family:Montserrat,sans-serif;font-size:11px;color:#666;margin:0 0 4px">${prop.neighborhood}</p>
          <p style="font-family:Montserrat,sans-serif;font-size:13px;font-weight:600;color:hsl(171,100%,12%);margin:0 0 8px">${prop.price}</p>
          <div style="font-family:Montserrat,sans-serif;font-size:10px;color:#999;display:flex;gap:12px">
            <span>${prop.bedrooms} quartos</span>
            <span>${prop.area} m²</span>
            <span>${prop.parking} vagas</span>
          </div>
        </div>
      `);

      marker.on("mouseover", () => onHoverPin(prop.id));
      marker.on("mouseout", () => onHoverPin(null));
      marker.on("popupopen", () => {
        const el = document.querySelector(`.map-popup-card[data-id="${prop.id}"]`);
        el?.addEventListener("click", () => navigate(`/imovel/${prop.id}`));
      });

      markersRef.current.set(prop.id, marker);
    });
  }, [properties, navigate, onHoverPin]);

  // Update highlighted marker icon
  useEffect(() => {
    markersRef.current.forEach((marker, id) => {
      marker.setIcon(id === highlightedId ? highlightedIcon : defaultIcon);
    });
  }, [highlightedId]);

  return (
    <div
      ref={containerRef}
      className="w-full h-[600px] lg:h-[700px] rounded-[4px] overflow-hidden border border-border"
      style={{ zIndex: 1 }}
    />
  );
};

export { neighborhoodCoords };
export type { MapProperty };
export default MapView;
