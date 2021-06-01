import mongoose from "mongoose";

const connectDb = (req, res) => {
  mongoose
    .connect(
      "mongodb+srv://send2abhishek:aryan@cluster0-orw7v.mongodb.net/nextjs",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )

    .then(() => {
      console.log("Db Connected");
    })
    .catch((err) => {
      console.log("Error in connecting db", err.message);
    });
};
export default connectDb;
