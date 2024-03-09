import { useEffect, useRef } from 'react';
import useMap from './use-map';
import leaflet from 'leaflet';
import '../../../../node_modules/leaflet/dist/leaflet.css';
import { currentCustomIcon, defaultCustomIcon } from './consts';
import { MapPropsType } from './types';

export default function Map({city, places, activeCardId, activeCity}: MapPropsType): JSX.Element {
  const MapRef = useRef<HTMLDivElement>(null);
  const map = useMap(MapRef, city);
  const currentCity = places.find((el) => el.city.name === activeCity);

  useEffect((): void => {
    if (map && currentCity) {
      map.setView([currentCity.city.location.latitude, currentCity.city.location.longitude], city.zoom);
    }
  }, [currentCity]);

  useEffect((): void => {
    if (map) {
      places.forEach((place) => {
        leaflet.marker({
          lat: place.location.latitude,
          lng: place.location.longitude
        },
        {icon: place.id === activeCardId ? currentCustomIcon : defaultCustomIcon}
        )
          .addTo(map);
      });
    }
  }, [map, places, activeCardId]);

  return (
    <section
      className="cities__map map"
      style={{ height: '631px' }}
      ref={MapRef}
    >
    </section>
  );
}
