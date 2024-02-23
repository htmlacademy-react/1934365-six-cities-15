type HousingType = 'apartment' | 'room' | 'house' | 'hotel'

export type PlaceCardPropsType = {
  'id'?: string;
  'title': string;
  'type': HousingType;
  'price': number;
  'previewImage': string;
  'isFavorite'?: boolean;
  'isPremium': boolean;
  'rating'?: number;
  'className'?: string;
  'width'?: number;
  'height'?: number;
}

export const places: Array<PlaceCardPropsType> =
[
  {
    'id': '854bbd80-6ba5-4c41-a0e1-6fc8b5c4fad4',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'apartment',
    'price': 478,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/6.jpg',
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.7,
    'className': 'cities'
  },
  {
    'id': 'b7d55565-278b-4a97-9600-ead99f238222',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'house',
    'price': 934,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.4,
    'className': 'cities'
  },
  {
    'id': '5c581e97-fa51-4032-bae4-aefb75334f00',
    'title': 'Tile House',
    'type': 'house',
    'price': 777,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.2,
    'className': 'cities'
  },
  {
    'id': 'b859adcf-6095-46c9-927e-8764281cf9d5',
    'title': 'Loft Studio in the Central Area',
    'type': 'apartment',
    'price': 378,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/6.jpg',
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.9,
    'className': 'cities'
  },
  {
    'id': '0998f31d-cd7f-42db-a9c2-d97d78ed4385',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'hotel',
    'price': 452,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/15.jpg',
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.8,
    'className': 'cities'
  },
  {
    'id': 'b727dca6-5d2c-43f3-81ef-e5b774849327',
    'title': 'Loft Studio in the Central Area',
    'type': 'house',
    'price': 123,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
    'isFavorite': false,
    'isPremium': true,
    'rating': 3,
    'className': 'cities'
  }
];

export const favoritePlaces: Array<PlaceCardPropsType> =
[
  {
    'id': '854bbd80-6ba5-4c41-a0e1-6fc8b5c4fad4',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'apartment',
    'price': 478,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/6.jpg',
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.7,
    'className': 'favorites'
  },
  {
    'id': 'b7d55565-278b-4a97-9600-ead99f238222',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'house',
    'price': 934,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.4,
    'className': 'favorites'
  },
];
