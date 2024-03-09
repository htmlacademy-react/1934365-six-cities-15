import { useEffect, useRef } from 'react';
import useMap from './use-map';
import leaflet, { LayerGroup } from 'leaflet';
import '../../../../node_modules/leaflet/dist/leaflet.css';
import { currentCustomIcon, defaultCustomIcon } from './consts';
import { MapPropsType } from './types';

export default function Map({city, places, activeCardId, activeCity, className}: MapPropsType): JSX.Element {
  const MapRef = useRef<HTMLDivElement>(null);
  const markerLayer = useRef<LayerGroup>(leaflet.layerGroup());
  const map = useMap(MapRef, city);
  const currentCity = places.find((el) => el.city.name === activeCity);

  useEffect((): void => {
    if (map && currentCity) {
      map.setView([currentCity.city.location.latitude, currentCity.city.location.longitude], city.zoom);
      markerLayer.current.addTo(map);
      // markerLayer.current.clearLayers();
    }
  }, [currentCity, map]);

  useEffect((): void => {
    if (map) {
      places.forEach((place) => {
        leaflet.marker({
          lat: place.location.latitude,
          lng: place.location.longitude
        },
        {icon: place.id === activeCardId ? currentCustomIcon : defaultCustomIcon}
        )
          .addTo(markerLayer.current);
      });
    }
  }, [map, places, activeCardId]);

  return (
    <section
      className={`${className} map`}
      ref={MapRef}
    >
    </section>
  );
}
