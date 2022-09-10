import mongoose from "mongoose";

import postSchema from "./Post.schema";

const PostModel = mongoose.model('Post', postSchema);
export default PostModel;
