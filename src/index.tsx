import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import { places, cities, favoritePlaces, reviews, offer } from './components/utils/mocks';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App places={places}
        cities={cities}
        favoritePlaces={favoritePlaces}
        reviews={reviews}
        offer={offer}
      />
    </Provider>
  </React.StrictMode>
);
