import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import { places, cities, favoritePlaces, offersFilters, reviews, offer } from './components/utils/mocks';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App places={places}
      cities={cities}
      favoritePlaces={favoritePlaces}
      filters={offersFilters}
      reviews={reviews}
      offer={offer}
    />
  </React.StrictMode>
);
