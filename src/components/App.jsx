import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import styles from './App.module.css'; 

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = (type) => {
    setFeedback(prevFeedback => ({ ...prevFeedback, [type]: prevFeedback[type] + 1 }));
  };

  const { good, neutral, bad } = feedback;
  const hasFeedback = good + neutral + bad > 0;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Feedback App</h1>
      <FeedbackOptions
        onGood={() => handleFeedback('good')}
        onNeutral={() => handleFeedback('neutral')}
        onBad={() => handleFeedback('bad')}
      />
      {hasFeedback ? (
        <Statistics good={good} neutral={neutral} bad={bad} />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};

export default App;
