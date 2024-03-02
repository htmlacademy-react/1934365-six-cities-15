import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import { places, cities, favoritePlaces } from './components/utils/mocks';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App places = {places} cities={cities} favoritePlaces = {favoritePlaces}/>
  </React.StrictMode>
);
