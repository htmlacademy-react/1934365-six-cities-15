import { useEffect, useRef, useState } from 'react';
import leaflet, {Map as LeafletMap} from 'leaflet';
import { CityPropsType } from '../place-card/types';

export default function useMap(mapRef: React.RefObject<HTMLDivElement | null>, city: CityPropsType) {
  const [map, setMap] = useState<LeafletMap | null>(null);
  const isRenderRef = useRef(false);

  useEffect((): void => {
    if (mapRef.current !== null && !isRenderRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude
        },
        zoom: city.location.zoom
      }
      );
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
  }, [mapRef, city]);

  return map;

}
