import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

function FriendListItem({ avatar, name, isOnline }) {
  const friendClass = isOnline ? styles.isOnline : styles.status;

  return (
    <>
      <span className={friendClass}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
