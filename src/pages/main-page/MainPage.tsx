import { useState } from 'react';
import LocationList from '../../components/blocks/location-list/LocationsList';
import Map from '../../components/blocks/map/Map';
import PlaceCardList from '../../components/blocks/place-card-list/PlaceCardList';
import Select from '../../components/blocks/select/Select';
import { CityPropsType, PlaceCardType } from '../../components/blocks/place-card/types';
import { MainPropsType } from './types';

export default function MainPage({ placesAmount, places, cities, filters }: MainPropsType): JSX.Element {
  const [activeCardId, setActiveCardId] = useState<PlaceCardType['id']>(null);
  const [activeCity,] = useState<CityPropsType>(cities[0]);
  const [activeCityName, setActiveCityName] = useState<CityPropsType['name']>(cities[0].name);
  const [isSelected, setIsSelected] = useState(filters[0]);

  const onCardHover = (placeId: PlaceCardType['id']): void => {
    places.some((place) => {
      if (place.id === placeId) {
        setActiveCardId(placeId);
      }
    });
  }

  const onCityItemClick = (cityName: CityPropsType['name']): void => {
    cities.find((el) => {
      if (el.name === cityName) {
        setActiveCityName(cityName);
      }
    });
  }

  const onSelectItemClick = (selectName: string) => {
    filters.find((filter) => {
      if (filter === selectName) {
        setIsSelected(filter)
      }
    })
  }

  const onSelectItemClickForFilters = (places: Array<PlaceCardType>) => {
    if (isSelected && isSelected === 'Popular') {
      return places
    }
    else if (isSelected && isSelected === 'Price: low to high') {
      const sortedPlacesToHigh: Array<PlaceCardType> = places.sort((a, b) => a.price - b.price)
      return sortedPlacesToHigh
    }
    else if (isSelected && isSelected === 'Price: high to low') {
      const sortedPlacesToLow: Array<PlaceCardType> = places.sort((a, b) => b.price - a.price)
      return sortedPlacesToLow
    }
    else if (isSelected && isSelected === 'Top rated first') {
      const sortedPlacesToHighRating: Array<PlaceCardType> = places.sort((a, b) => b.rating - a.rating)
      return sortedPlacesToHighRating
    }
  }

  const sortedPlaces = onSelectItemClickForFilters(places)

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
              <b className="places__found">{placesAmount} places to stay in Amsterdam</b>
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
