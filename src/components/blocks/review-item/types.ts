type UserType = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type ReviewType = {
  id: string;
  date: string | Date;
  user: UserType;
  comment: string;
  rating: number;
}

