type UserType = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type ReviewType = {
  id: string;
  date: string;
  user: UserType;
  comment: string;
  rating: number;
}

