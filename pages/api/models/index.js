import mongoose from "mongoose";

//  returns a class
const NewsLetters = mongoose.Schema;

const userNewsLetters = new NewsLetters({
  _id: mongoose.Schema.Types.ObjectId,
  email: { type: String, required: true },
});

// returns a class
export default mongoose.model("newsletter", userNewsLetters);
