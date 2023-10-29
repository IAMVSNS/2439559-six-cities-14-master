import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offersCityCard } from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const settings = {
  sum: 0,
  email: 'Oliver.conner@gmail.com',
  password: '12345678',
} as const;

root.render(
  <React.StrictMode>
    <App sum={settings.sum} />
    <App offers = {offersCityCard}/>
  </React.StrictMode>
);
