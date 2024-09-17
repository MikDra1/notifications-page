/* eslint-disable react/prop-types */
import Comment from "./Comment";
import styles from "./Comments.module.css";

function Comments({ isNew, newComments, setNewComments }) {
  return (
    <div className={styles.comments}>
      <Comment
        image="./images/avatar-mark-webber.webp"
        name="Mark Webber"
        text="reacted to your recent post"
        highlighted="My first tournament today!"
        highlightedClass="highlightedGray"
        fontWeight='bold'
        time="1m"
        isNew={isNew}
        setNewComments={setNewComments}
        newComments={newComments}
      ></Comment>

      <Comment
        image="./images/avatar-angela-gray.webp"
        name="Angela Gray"
        text="followed you"
        highlighted=""
        highlightedClass="highlightedGray"
        time="5m"
        isNew={isNew}
        setNewComments={setNewComments}
        newComments={newComments}
      ></Comment>

      <Comment
        image="./images/avatar-jacob-thompson.webp"
        name="Jacob Thompson"
        text="has joined your group"
        highlighted="Chess Club"
        highlightedClass="highlightedBlue"
        fontWeight='bold'
        time="1 day"
        isNew={isNew}
        setNewComments={setNewComments}
        newComments={newComments}
      ></Comment>

      <Comment
        image="./images/avatar-rizky-hasanuddin.webp"
        name="Rizky Hasanuddin"
        text="sent you a private message"
        time="5 days"
      >Hello, thanks for setting up the Chess Club. I&apos;ve been a member for a few weeks now and I&apos;m already having lots of fun and improving my game.</Comment>

      <Comment
        image="./images/avatar-kimberly-smith.webp"
        name="Kimberly Smith"
        text="commented on your picture"
        time="1 week"
        additImage="./images/image-chess.webp"
      ></Comment>

      <Comment
        image="./images/avatar-nathan-peterson.webp"
        name="Nathan Peterson"
        text="reacted to your recent post"
        highlighted="5 end-game strategies to increase your win rate"
        highlightedClass="highlightedGray"
        fontWeight='bold'
        time="2 weeks"
      ></Comment>

      <Comment
        image="./images/avatar-anna-kim.webp"
        name="Anna Kim"
        text="left the group"
        highlighted="Chess Club"
        highlightedClass="highlightedBlue"
        fontWeight='bold'
        time="2 weeks"
      ></Comment>
    </div>
  );
}

export default Comments;
