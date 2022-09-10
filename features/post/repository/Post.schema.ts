import { Schema } from 'mongoose';

const postSchema = new Schema({
  title: {
    type: String,
    default: null
  },
  content: {
    type: String,
    default: null
  },
  imageURL: {
    type: String,
    default: null
  },
  likes: {
    type: Number,
    default: 0
  },
  createdBy: Schema.Types.ObjectId,
  updatedAt: {
    type: Date,
    default: Date.now
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
});

export default postSchema;