import { useState } from 'react';
import LocationList from '../../components/blocks/location-list/LocationsList';
import Map from '../../components/blocks/map/Map';
import PlaceCardList from '../../components/blocks/place-card-list/PlaceCardList';
import Select from '../../components/blocks/select/Select';
import { CityPropsType, PlaceCardType } from '../../components/blocks/place-card/types';
import { MainPropsType } from './types';

export default function MainPage({placesAmount, places, cities, filters }: MainPropsType): JSX.Element {
  const [activeCardId, setActiveCardId] = useState<PlaceCardType['id']>(null);
  const [activeCity, ] = useState<CityPropsType>(cities[0]);
  const [activeCityName, setActiveCityName] = useState<CityPropsType['name']>(cities[0].name);

  function onCardHover(placeId: PlaceCardType['id']): void {
    places.some((place) => {
      if (place.id === placeId) {
        setActiveCardId(placeId);
      }
    });
  }

  function onCityItemClick(cityName: CityPropsType['name']): void {
    cities.find((el) => {
      if (el.name === cityName) {
        setActiveCityName(cityName);
      }
    });
  }

  return (
    < div className="page page--gray page--main" >
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationList cities={cities} onCityItemClick = {onCityItemClick} activeCityName = {activeCityName}/>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{placesAmount} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <Select filters = {filters}/>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <PlaceCardList places={places} onCardHover = {onCardHover} activeCityName = {activeCityName}/>
              </div>
            </section>
            <div className="cities__right-section">
              <Map city={activeCity} places = {places} activeCardId={activeCardId} activeCityName = {activeCityName} className = 'cities__map'/>
            </div>
          </div>
        </div>
      </main>
    </div >
  );
}
