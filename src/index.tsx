import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import { cities } from './components/utils/constants';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        cities={cities}
      />
    </Provider>
  </React.StrictMode>
);
