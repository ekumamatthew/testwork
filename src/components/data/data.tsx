import { User, UserRole } from "../types";

export const initialUsers: User[] = [
  {
    id: 1,
    name: "Matthew",
    email: "ekumamatthew1@gmail.com",
    role: UserRole.Admin,
  },
  {
    id: 2,
    name: "Ekuma",
    email: "udematthew@gmail.com",
    role: UserRole.Regular,
  },
  {
    id: 2,
    name: "Ude",
    email: "matt@gmail.com",
    role: UserRole.Regular,
  },
];
