export type FavoriteButtonTypeProps = {
  bemBlock?: 'offer' | 'place-card';
  isFavorite: boolean | null | undefined;
  offerId: string;
  width?: number;
}

export enum Default {
  HeightCoefficient = 18 / 17
}
