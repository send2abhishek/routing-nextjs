import classes from "./comment-list.module.css";

function CommentList({ data }) {
  const { name, text } = data;
  return (
    <ul className={classes.comments}>
      <li>
        <p>{text}</p>
        <div>
          By <address>{name}</address>
        </div>
      </li>
    </ul>
  );
}

export default CommentList;
