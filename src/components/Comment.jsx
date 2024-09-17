/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import styles from "./Comment.module.css";

function Comment({
  children,
  image,
  name,
  text,
  highlighted,
  time,
  isNew,
  setNewComments,
  newComments,
  additImage,
  highlightedClass
}) {
  // Use useState to manage the state of 'isNewComment'
  const [isNewComment, setIsNewComment] = useState(isNew);

  useEffect(() => {
    setIsNewComment(isNew);
  }, [isNew]);

  return (
    <div
      onClick={() => {
        setIsNewComment(false);
        setNewComments(newComments === 0 ? newComments : newComments - 1); // Update state using
      }}
      style={{
        backgroundColor: isNewComment ? "hsl(210, 60%, 98%)" : "transparent",
      }}
      className={`${styles.comment} ${isNewComment ? styles.newComment : ''}`}
    >
        <div className={styles.commentContainer}>
      <img src={image} alt="" className={styles.personIcon} />
      <div className={styles.commentDesc}>
        <p>
          <span className={styles.commentName}>{name}</span> {text}
          <span className={styles[highlightedClass]} > {highlighted}</span>
          <span className={styles.dotNew}>{isNewComment ? "•" : ""}</span>
        </p>

        <p className={styles.timeAgo}>{time} ago</p>
        {children ? <p className={styles.additionalCommentContent}>{children}</p> : ''}
      </div>
      </div>
      <img className={styles.additImage} src={additImage} alt="" />
    </div>
  );
}

export default Comment;
