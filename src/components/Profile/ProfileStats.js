import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

function ProfileStats({ stats, statsKey }) {
  return (
    <>
      <span className={styles.label}>{statsKey}</span>
      <span className={styles.quantity}>{stats[statsKey]}</span>
    </>
  );
}

ProfileStats.propTypes = {
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
  statsKey: PropTypes.string.isRequired,
};

export default ProfileStats;
