import mongoose from "mongoose";

import authorSchema from "./Author.schema";

const AuthorModel = mongoose.model('Author', authorSchema);
export default AuthorModel;
