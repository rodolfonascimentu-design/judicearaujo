import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useNavigate } from "react-router-dom";
import { Bed, Maximize, Car } from "lucide-react";

// Fix default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

const defaultIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const highlightedIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  iconSize: [35, 57],
  iconAnchor: [17, 57],
  popupAnchor: [1, -48],
  shadowSize: [57, 57],
});

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

const MapView = ({ properties, highlightedId, onHoverPin }: MapViewProps) => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-[600px] lg:h-[700px] rounded-[4px] overflow-hidden border border-border">
      <MapContainer
        center={[-22.98, -43.23]}
        zoom={12}
        scrollWheelZoom
        className="w-full h-full"
        style={{ zIndex: 1 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        {properties.map((prop) => (
          <Marker
            key={prop.id}
            position={prop.coords}
            icon={highlightedId === prop.id ? highlightedIcon : defaultIcon}
            eventHandlers={{
              mouseover: () => onHoverPin(prop.id),
              mouseout: () => onHoverPin(null),
            }}
          >
            <Popup>
              <div
                className="w-56 cursor-pointer"
                onClick={() => navigate(`/imovel/${prop.id}`)}
              >
                <img
                  src={prop.image}
                  alt={prop.title}
                  className="w-full h-28 object-cover rounded-[3px] mb-2"
                />
                <h4 className="font-sans text-sm font-semibold text-foreground mb-0.5 leading-tight">
                  {prop.title}
                </h4>
                <p className="font-sans text-xs text-muted-foreground mb-1">
                  {prop.neighborhood}
                </p>
                <p className="font-sans text-sm font-semibold text-primary mb-2">
                  {prop.price}
                </p>
                <div className="flex items-center gap-3 text-muted-foreground text-[10px] font-sans">
                  <span className="flex items-center gap-1">
                    <Bed className="w-3 h-3" />
                    {prop.bedrooms}
                  </span>
                  <span className="flex items-center gap-1">
                    <Maximize className="w-3 h-3" />
                    {prop.area} m²
                  </span>
                  <span className="flex items-center gap-1">
                    <Car className="w-3 h-3" />
                    {prop.parking}
                  </span>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export { neighborhoodCoords };
export type { MapProperty };
export default MapView;
