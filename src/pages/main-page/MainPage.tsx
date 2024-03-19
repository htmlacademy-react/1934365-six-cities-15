import { useState } from 'react';
import LocationList from '../../components/blocks/location-list/LocationsList';
import Map from '../../components/blocks/map/Map';
import PlaceCardList from '../../components/blocks/place-card-list/PlaceCardList';
import Select from '../../components/blocks/select/Select';
import { CitiesList, PlaceCardType } from '../../components/blocks/place-card/types';
import { MainPropsType } from './types';
import { useAppDispatch, useAppSelector } from '../../store';
import { changeCity } from '../../store/action';
import { offersFilters } from '../../components/utils/types';

export default function MainPage({ places, cities }: MainPropsType): JSX.Element {
  const [activeCardId, setActiveCardId] = useState<PlaceCardType['id']>(null);
  const [isSelected, setIsSelected] = useState(offersFilters.Popular);
  const currentCity = useAppSelector((state) => state.city);
  const filteredPlaces = places.filter((place) => currentCity.name === place.city.name);
  const activeCity = cities[0];

  // const offers = useAppSelector((state) => state.places)
  const dispatch = useAppDispatch();

  const onCardHover = (placeId: PlaceCardType['id']): void => {
    places.some((place) => {
      if (place.id === placeId) {
        setActiveCardId(placeId);
      }
    });
  };
  const onSelectItemClick = (selectName: string) => {
    Object.values(offersFilters).find((filter) => {
      if (filter === selectName) {
        setIsSelected(filter);
      }
    });
  };

  const onSelectItemClickForFilters = (cards: Array<PlaceCardType>) => {
    const copyPlaces: Array<PlaceCardType> = JSON.parse(JSON.stringify(cards)) as Array<PlaceCardType>;
    if (isSelected === offersFilters.Popular) {
      return cards;
    } else if (isSelected === offersFilters.PriceLowToHigh) {
      const sortedPlacesToHigh: Array<PlaceCardType> = copyPlaces.sort((a, b) => a.price - b.price);
      return sortedPlacesToHigh;
    } else if (isSelected === offersFilters.PriceHighToLow) {
      const sortedPlacesToLow: Array<PlaceCardType> = copyPlaces.sort((a, b) => b.price - a.price);
      return sortedPlacesToLow;
    } else if (isSelected === offersFilters.TopRatedFirst) {
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
          <LocationList cities={cities} onCityItemClick={(cityName: CitiesList) => dispatch(changeCity({name: cityName}))} activeCityName={currentCity.name} />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{filteredPlaces.length} places to stay in {currentCity.name}</b>
              <Select filters={offersFilters} onSelectItemClick={onSelectItemClick} isSelected={isSelected} />
              <div className="cities__places-list places__list tabs__content">
                <PlaceCardList places={sortedPlaces} onCardHover={onCardHover} activeCityName={currentCity.name} />
              </div>
            </section>
            <div className="cities__right-section">
              <Map city={activeCity} places={places} activeCardId={activeCardId} activeCityName={currentCity.name} className='cities__map' />
            </div>
          </div>
        </div>
      </main>
    </div >
  );
}
