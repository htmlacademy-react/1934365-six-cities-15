import React from 'react';
import ReactDOM from 'react-dom/client';
import { CITIES } from './components/utils/constants';
import { Provider } from 'react-redux';
import { store } from './store';
import AppCopy from './components/app/app-copy';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppCopy
        cities={CITIES}
      />
    </Provider>
  </React.StrictMode>
);
