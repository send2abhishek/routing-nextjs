import mongoose from "mongoose";
import Comment from "pages/api/models/comment";
import Db from "pages/api/database";

export default async (req, res) => {
  await Db();
  if (req.method === "POST") {
    const { email, name, text } = req.body;

    const newComment = new Comment({
      _id: new mongoose.Types.ObjectId(),
      name,
      text,
    });

    try {
      const result = await newComment.save();
      res.status(201).json({
        message: "Comment Added",
        responseCode: 800,
        result,
      });
    } catch (ex) {
      res.status(500).json({
        message: "Something Went Wrong",
        info: ex.message,
      });
    }
  }

  if (req.method === "GET") {
    const result = await Comment.find({});
    console.log("result", result);
    res.status(200).json(result);
  }
};
