import { useEffect, useRef, useState } from "react";
import { CityType } from "../../utils/types";
import leaflet, {Map as LeafletMap} from 'leaflet';

export default function useMap(mapRef: React.RefObject<HTMLDivElement | null>, city: CityType) {
  const [map, setMap] = useState<LeafletMap | null>(null);
  const isRenderRef = useRef(false);

  useEffect((): void => {
    if (mapRef.current !== null && !isRenderRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: city.latitude,
          lng: city.longitude
        },
        zoom: city.zoom
      }
      )
      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(instance);
      setMap(instance);
      isRenderRef.current = true;
    }
  }, [mapRef, city])

  return map

}
