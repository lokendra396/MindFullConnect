import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  story: {
    type: String,
    reuired: true,
  },
});
export default mongoose.model("posts", postSchema);
