import { Types } from "mongoose";

export interface IPost {
  _id: Types.ObjectId,
  title: string,
  content: string,
  imageURL: string,
  likes: number,
  createdBy: Types.ObjectId,
  updatedAt: Date,
  createdAt: Date,
}