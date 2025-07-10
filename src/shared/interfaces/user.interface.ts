export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
}

export interface UserCreate {
  id: string;
  name: string;
  email: string;
  image?: string;
  password: string;
}
