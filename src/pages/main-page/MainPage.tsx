import { useState } from 'react';
import LocationList from '../../components/blocks/location-list/LocationsList';
import Map from '../../components/blocks/map/Map';
import PlaceCardList from '../../components/blocks/place-card-list/PlaceCardList';
import Select from '../../components/blocks/select/Select';
import { CityPropsType, PlaceCardType } from '../../components/blocks/place-card/types';
import { MainPropsType } from './types';
import { useAppDispatch, useAppSelector } from '../../store';
import { changeCity } from '../../store/action';

export default function MainPage({ places, cities, filters }: MainPropsType): JSX.Element {
  const [activeCardId, setActiveCardId] = useState<PlaceCardType['id']>(null);
  const [activeCityName, setActiveCityName] = useState<CityPropsType['name']>(cities[0]?.name);
  const [isSelected, setIsSelected] = useState(filters[0]);
  const filteredPlaces = places.filter((place) => activeCityName === place.city.name);
  const activeCity = cities[0];

  const offers = useAppSelector((state) => console.log(state))
  // console.log(offers)
  // const currentCity = useAppSelector((state) => state.city)
  // const dispatch = useAppDispatch();

  const onCardHover = (placeId: PlaceCardType['id']): void => {
    places.some((place) => {
      if (place.id === placeId) {
        setActiveCardId(placeId);
      }
    });
  };
  const onCityItemClick = (cityName: CityPropsType['name']): void => {
    cities.find((el) => {
      if (el.name === cityName) {
        setActiveCityName(cityName);
      }
    });
  };
  const onSelectItemClick = (selectName: string) => {
    filters.find((filter) => {
      if (filter === selectName) {
        setIsSelected(filter);
      }
    });
  };
  const onSelectItemClickForFilters = (cards: Array<PlaceCardType>) => {
    const copyPlaces: Array<PlaceCardType> = JSON.parse(JSON.stringify(cards));
    if (isSelected === 'Popular') {
      return cards;
    } else if (isSelected === 'Price: low to high') {
      const sortedPlacesToHigh: Array<PlaceCardType> = copyPlaces.sort((a, b) => a.price - b.price);
      return sortedPlacesToHigh;
    } else if (isSelected === 'Price: high to low') {
      const sortedPlacesToLow: Array<PlaceCardType> = copyPlaces.sort((a, b) => b.price - a.price);
      return sortedPlacesToLow;
    } else if (isSelected === 'Top rated first') {
      const sortedPlacesToHighRating: Array<PlaceCardType> = copyPlaces.sort((a, b) => b.rating - a.rating);
      return sortedPlacesToHighRating;
    } else {
      return cards;
    }
  };
  const sortedPlaces: Array<PlaceCardType> = onSelectItemClickForFilters(filteredPlaces);

  return (
    < div className="page page--gray page--main" >
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationList cities={cities} onCityItemClick={onCityItemClick} activeCityName={activeCityName} />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{filteredPlaces.length} places to stay in {activeCityName}</b>
              <Select filters={filters} onSelectItemClick={onSelectItemClick} isSelected={isSelected} />
              <div className="cities__places-list places__list tabs__content">
                <PlaceCardList places={sortedPlaces} onCardHover={onCardHover} activeCityName={activeCityName} />
              </div>
            </section>
            <div className="cities__right-section">
              <Map city={activeCity} places={places} activeCardId={activeCardId} activeCityName={activeCityName} className='cities__map' />
            </div>
          </div>
        </div>
      </main>
    </div >
  );
}
