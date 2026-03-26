

export interface User {
  id?: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
}
export interface SessionUser {
  id: string;
  name: string;
  lastName: string;
  email: string;
  emailVerified: Date | null
}

