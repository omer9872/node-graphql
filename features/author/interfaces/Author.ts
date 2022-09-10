import { Types } from "mongoose"

export interface IAuthor {
  _id: Types.ObjectId,
  username: string,
  email: string,
  auth: {
    password: string,
    lastLogin: Date,
  },
  likes: number,
  createdAt: Date
  updatedAt: Date
}