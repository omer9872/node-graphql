import { Schema } from 'mongoose';

const authorSchema = new Schema({
  username: String,
  email: String,
  auth: {
    password: String,
    lastLogin: {
      type: Date,
      default: Date.now
    },
  },
  likes: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

export default authorSchema;