import React from "react";
import PropTypes from "prop-types";
import styles from "./FriendList.module.scss";

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(({ id, avatar, name, isOnline }) => (
      <li key={id} className={styles.item}>
        <span
          className={
            isOnline ? `${styles.status} ${styles.active}` : `${styles.status}`
          }
        ></span>
        <img className={styles.avatar} src={avatar} alt={name} width="80" />
        <p className={styles.name}>{name}</p>
      </li>
    ))}
  </ul>
);

export default FriendList;

FriendList.defaultProps = {
  friends: [],
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ),
};
