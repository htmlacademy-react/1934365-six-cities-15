import { CityPropsType } from '../blocks/place-card/types';

export const IMAGE_WIDTH = {
  small: 150,
  large: 260
};

export const IMAGE_HEIGHT = {
  small: 110,
  large: 200
};

export const NEAR_PLACES_AMOUNT = 3;

export const MAX_REVIEW_ITEMS_AMOUNT = 10;

export const MIN_TEXT_LENGTH = 50;

export const MAX_TEXT_LENGTH = 300;

export const Endpoint = {
  Comments: '/comments',
  Favorite: '/favorite',
  Login: '/login',
  Logout: '/logout',
  Offers: '/offers'
};

export const MAX_OFFER_IMAGES_AMOUNT = 6;

export const CITIES: Array<CityPropsType> = [
  {
    name: 'Paris',
    location: {
      'latitude': 48.85661,
      'longitude': 2.351499,
      'zoom': 13
    }
  },
  {
    name: 'Cologne',
    location: {
      'latitude': 50.938361,
      'longitude': 6.959974,
      'zoom': 13
    }
  },
  {
    name: 'Brussels',
    location: {
      'latitude': 50.846557,
      'longitude': 4.351697,
      'zoom': 13
    }
  },
  {
    name: 'Amsterdam',
    location: {
      'latitude': 52.37454,
      'longitude': 4.897976,
      'zoom': 13
    }
  },
  {
    name: 'Hamburg',
    location: {
      'latitude': 53.550341,
      'longitude': 10.000654,
      'zoom': 13
    }
  },
  {
    name: 'Dusseldorf',
    location: {
      'latitude': 51.225402,
      'longitude': 6.776314,
      'zoom': 13
    }
  },
];

