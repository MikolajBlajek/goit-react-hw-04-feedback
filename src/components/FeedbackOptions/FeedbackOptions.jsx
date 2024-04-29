import React from "react"; 
import "../FeedbackOptions/FeedbackOptions.css"

 export const FeedbackOptions = ({ options, handleButtonClick }) => {
  return (
    <div className="feedback_block">
      {options.map((option) => (
        <button key={option} onClick={() => handleButtonClick(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};
