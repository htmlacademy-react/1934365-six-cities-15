// import Favorites from '../../pages/favorites-page/Favorites';
import Main from '../../pages/main-page/Main';
// import Offer from '../../pages/offer-page/Offer';
import { PLACES_AMOUNT } from '../utils/constants';

export default function App(): JSX.Element {
  return (
    // <Offer />
    // <Favorites />
    <Main placesAmount = {PLACES_AMOUNT}/>
  );
}
