import { useEffect, useRef } from 'react';
import { LocationType } from '../../blocks/place-card/types';
import { PlaceCardPropsType } from '../place-card/types';
import useMap from './use-map';
import leaflet from 'leaflet';

export default function Map(props: { city: LocationType; places: Array<PlaceCardPropsType>; activeCardId?: PlaceCardPropsType['id'] | null }): JSX.Element {
  const MapRef = useRef<HTMLDivElement>(null);
  const map = useMap(MapRef, props.city);
  const defaultCustomIcon = leaflet.icon({
    iconUrl: '../../../markup/img/pin.svg',
    iconSize: [27, 39],
    iconAnchor: [14, 39],
  });
  const currentCustomIcon = leaflet.icon({
    iconUrl: '../../../markup/img/pin-active.svg',
    iconSize: [27, 39],
    iconAnchor: [14, 39],
  });

  useEffect((): void => {
    if (map) {
      props.places.forEach((place) => {
        leaflet.marker({
          lat: place.location.latitude,
          lng: place.location.longitude
        },
        {icon: place.id === props.activeCardId ? currentCustomIcon : defaultCustomIcon}
        )
          .addTo(map);
      });
    }
  }, [map, props.places, props.activeCardId]);

  return (
    <section
      className="cities__map map"
      style={{ height: '631px' }}
      ref={MapRef}
    >
    </section>
  );
}
