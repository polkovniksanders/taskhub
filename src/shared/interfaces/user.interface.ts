export interface User {
  id: string;
  name: string;
  email: string;
  image: string;
}

export interface UserAuth {
  id?: string;
  name: string;
  email: string;
  image?: string;
  password: string;
}
