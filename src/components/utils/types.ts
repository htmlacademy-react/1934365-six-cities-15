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
  city: CityType;
}

type HousingType = 'apartment' | 'room' | 'house' | 'hotel'

export type CityPropsType = {
  id?: number;
  name: string;
  location?: Location | undefined
}

export type Location = {
  latitude: number | undefined;
  longitude: number | undefined;
  zoom: number
}

export type PlaceCardPropsType = {
  'id'?: string | null;
  'title': string;
  'type': HousingType;
  'price': number;
  'previewImage': string;
  city?: CityPropsType;
  location?: Location;
  'isFavorite'?: boolean;
  'isPremium': boolean;
  'rating'?: number;
  'className'?: string;
  'width'?: number;
  'height'?: number;
}

export type CityType = {
  latitude: number;
  longitude: number;
  zoom: number;
}



