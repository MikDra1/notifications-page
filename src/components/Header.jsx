/* eslint-disable react/prop-types */
import styles from "./Header.module.css";

function Header({isNew, setIsNew, newComments, setNewComments}) {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <h1>Notifications</h1>
        <span>{newComments}</span>
      </div>
      <button onClick={() => {
        setIsNew(false)
        setNewComments(0)
      } }>Mark all as read</button>
    </header>
  );
}

export default Header;
