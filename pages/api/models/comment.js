import mongoose from "mongoose";

//  returns a class
const Comments = mongoose.Schema;

const userComments = new Comments({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  text: { type: String, required: true },
});

// returns a class
export default mongoose.model("comment", userComments);
