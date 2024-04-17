import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onGood, onNeutral, onBad }) => {
  return (
    <div className={styles.container}>
      <button type="button" className={styles.goodButton} onClick={onGood}>
        Good
      </button>
      <button type="button" className={styles.neutralButton} onClick={onNeutral}>
        Neutral
      </button>
      <button type="button" className={styles.badButton} onClick={onBad}>
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onGood: PropTypes.func.isRequired,
  onNeutral: PropTypes.func.isRequired,
  onBad: PropTypes.func.isRequired,
};

export default FeedbackOptions;
