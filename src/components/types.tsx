export enum UserRole {
  Admin = "Admin",
  Regular = "Regular User",
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
}
