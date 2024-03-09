type HousingType = 'apartment' | 'room' | 'house' | 'hotel';

export type LocationType = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type CityPropsType = {
  name: string;
  location: LocationType;
}

export type PlaceCardPropsType = {
  id: string | null;
  title: string;
  type: HousingType;
  price: number;
  previewImage: string;
  city: CityPropsType;
  location: LocationType;
  isFavorite: boolean;
  isPremium: boolean;
  rating?: number;
  width?: number;
  height?: number;
}
