import { User } from './user';



export interface Order {
  id: string,
  user: {
    name: string,
    lastName: string
  }
  isPaid: boolean,
  total: number,
  createdAt: Date
}