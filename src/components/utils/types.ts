export enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  Root = '/'
}

export enum AutorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export type isAuthType = {
  isAuth: boolean;
}

export type AppPropsType = {
  places: Array<PlaceCardPropsType>;
  cities: Array<CityPropsType>;
  favoritePlaces: Array<PlaceCardPropsType>;
  filters: string[];
}

type HousingType = 'apartment' | 'room' | 'house' | 'hotel'

export type CityPropsType = {
  id: number;
  title: string;
}

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


