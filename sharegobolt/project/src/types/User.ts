export type UserType = 'user' | 'captain' | 'admin';

export interface User {
  id: string;
  email: string;
  name: string;
  type: UserType;
  isPremium: boolean;
  isApproved: boolean;
  phone?: string;
  avatar?: string;
  joinedAt?: Date;
}