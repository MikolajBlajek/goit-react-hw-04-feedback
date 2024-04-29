import React, { useState } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistic } from "./Statistic/Statistic";
import { Section } from "./Section/Section";
import { Noti } from "./Notifinction/Noti";

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleButtonClick = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positiveFeedbackPercentage = totalFeedback === 0 ? 0 : (feedback.good / totalFeedback) * 100;

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101'
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions options={['good', 'neutral', 'bad']} handleButtonClick={handleButtonClick}/> 
      </Section>
      
      {totalFeedback === 0 ? (
        <Noti message="There is no feedback" />
      ) : (
        <Section title="Statistics">
          <Statistic 
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={totalFeedback}
            positivePercentage={positiveFeedbackPercentage}
          />
        </Section>
      )}
    </div>
  );
};
