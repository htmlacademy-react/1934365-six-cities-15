type HousingType = 'apartment' | 'room' | 'house' | 'hotel';
export type CitiesList = 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf'

export type LocationType = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type CityPropsType = {
  name: CitiesList;
  location: LocationType;
}

export type PlaceCardType = {
  id: string | null;
  title: string;
  type: HousingType;
  price: number;
  previewImage?: string;
  city: CityPropsType;
  location: LocationType;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description?: string;
  bedrooms?: number;
  goods?: [string];
  host?: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  images?: [string];
  maxAdults?: number;
}

export type PlaceCardPropsType = {
  card: PlaceCardType;
  onCardHover?: (id: string | null) => void;
  className?: string;
  width: number;
  height: number;
}
