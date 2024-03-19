export enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  Root = '/'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export type isAuthType = {
  isAuth: boolean;
}

export enum offersFilters {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first'
}

