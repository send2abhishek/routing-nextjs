import mongoose from "mongoose";
import NewsLetter from "pages/api/models/";
import Db from "pages/api/database";

export default async (req, res) => {
  await Db();
  if (req.method === "POST") {
    const newsLetter = new NewsLetter({
      _id: new mongoose.Types.ObjectId(),
      email: req.body.email,
    });

    try {
      const result = await newsLetter.save();
      res.status(201).json({
        message: "Email Register",
        responseCode: 800,
        result,
      });
    } catch (ex) {
      res.status(500).json({
        message: "Something Went Wrong",
        info: ex.message,
      });
    }
  } else {
    res.status(200).json({ name: "email" });
  }
};
