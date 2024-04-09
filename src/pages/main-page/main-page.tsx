import { useState } from 'react';
import LocationList from '../../components/blocks/location-list/locations-list';
import Map from '../../components/blocks/map/map';
import PlaceCardList from '../../components/blocks/place-card-list/place-card-list';
import Select from '../../components/blocks/select/select';
import { CitiesList, CityPropsType, PlaceCardType } from '../../components/blocks/place-card/types';
import { useActionCreators, useAppSelector } from '../../store/hooks';
import { RequestStatus, OffersFilters } from '../../components/utils/types';
import { offersActions, offersSelectors } from '../../store/slices/offers';
import Loader from '../../components/ui/loader/loader';
import MainEmpty from '../main-empty/main-empty';
import classNames from 'classnames';

export default function MainPage({ cities }: { cities: Array<CityPropsType> }): JSX.Element {
  const [isSelected, setIsSelected] = useState(OffersFilters.Popular);
  const currentCity = useAppSelector(offersSelectors.city);
  const offers = useAppSelector(offersSelectors.offers);
  const status = useAppSelector(offersSelectors.status);
  const activeId = useAppSelector(offersSelectors.activeId);
  const { changeCity, setActiveId } = useActionCreators(offersActions);
  const hasOffers = offers.length > 0;

  const filteredPlaces = offers.filter((place) => currentCity.name === place.city.name);

  const onCardHover = (placeId: PlaceCardType['id'] | null): void => {
    offers.some((place) => {
      if (place.id === placeId) {
        setActiveId(placeId);
      }
    });
  };
  const onSelectItemClick = (selectName: OffersFilters) => {
    Object.values(OffersFilters).find((filter) => {
      if (filter === selectName) {
        setIsSelected(filter);
      }
    });
  };

  const onSelectItemClickForFilters = (cards: Array<PlaceCardType>) => {
    const copyPlaces: Array<PlaceCardType> = JSON.parse(JSON.stringify(cards)) as Array<PlaceCardType>;
    if (isSelected === OffersFilters.Popular) {
      return cards;
    } else if (isSelected === OffersFilters.PriceLowToHigh) {
      const sortedPlacesToHigh: Array<PlaceCardType> = copyPlaces.sort((a, b) => a.price - b.price);
      return sortedPlacesToHigh;
    } else if (isSelected === OffersFilters.PriceHighToLow) {
      const sortedPlacesToLow: Array<PlaceCardType> = copyPlaces.sort((a, b) => b.price - a.price);
      return sortedPlacesToLow;
    } else if (isSelected === OffersFilters.TopRatedFirst) {
      const sortedPlacesToHighRating: Array<PlaceCardType> = copyPlaces.sort((a, b) => b.rating - a.rating);
      return sortedPlacesToHighRating;
    } else {
      return cards;
    }
  };
  const sortedPlaces: Array<PlaceCardType> = onSelectItemClickForFilters(filteredPlaces);

  if (status === RequestStatus.Loading) {
    return (
      <Loader />
    );
  }

  return (
    < div className="page page--gray page--main" >
      <main className={classNames(
        'page__main page__main--index',
        { 'page__main--index-empty': hasOffers === false}
      )}
      >
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationList cities={cities} onCityItemClick={(cityName: CitiesList) => changeCity({ name: cityName })} activeCityName={currentCity.name} />
        </div>
        <div className="cities">
          {hasOffers ?
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{filteredPlaces.length} place{filteredPlaces.length > 1 && 's'} to stay in {currentCity.name}</b>
                <Select filters={Object.values(OffersFilters)} onSelectItemClick={onSelectItemClick} isSelected={isSelected} />
                <div className="cities__places-list places__list tabs__content">
                  <PlaceCardList places={sortedPlaces} onCardHover={onCardHover} activeCityName={currentCity.name} />
                </div>
              </section>
              <div className="cities__right-section">
                <Map city={currentCity} places={offers} activeCardId={activeId} activeCityName={currentCity.name} className='cities__map' />
              </div>
            </div>
            : <MainEmpty />}
        </div>
      </main>
    </div >
  );
}
