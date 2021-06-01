import { useState, useEffect } from "react";

import CommentList from "./comment-list";
import NewComment from "./new-comment";
import classes from "./comments.module.css";
import { addCommentToDb, getCommentFromDb } from "utils/api-utils";

function Comments(props) {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  useEffect(async () => {
    if (showComments) {
      const result = await getCommentFromDb(eventId);
      setComments(result);
    }
  }, [showComments]);

  async function addCommentHandler(commentData) {
    // send data to API
    const response = await addCommentToDb(commentData, eventId);
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments &&
        comments.map((element, index) => (
          <CommentList key={index} data={element} />
        ))}
    </section>
  );
}

export default Comments;
