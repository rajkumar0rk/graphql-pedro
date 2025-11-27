export interface User {
  id: string;
  name: string;
  username: string;
  age: number;
  nationality?: string;
}

export interface CreateUser{
  name: string;
  username: string;
  age: number;
  nationality?: string;
}