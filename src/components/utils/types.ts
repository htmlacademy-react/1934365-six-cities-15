export enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offers/:id',
  Root = '/'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum OffersFilters {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first'
}

export enum RequestStatus { Idle, Loading, Success, Failed }

export type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
}

export type loginData = {
  email: string;
  password: string;
}


