import React from 'react';
import PropTypes from 'prop-types';
import ProfileStats from './ProfileStats';
import styles from './Profile.module.css';

function Profile({ avatar, name, tag, location, stats }) {
  const statsKeys = Object.keys(stats);

  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          className={styles.avatar}
          src={avatar}
          alt={name}
          width="100"
          height="100"
        />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        {statsKeys.map(statsKey => (
          <li key={stats[statsKey]} className={styles.statsItem}>
            <ProfileStats stats={stats} statsKey={statsKey} />
          </li>
        ))}
      </ul>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
