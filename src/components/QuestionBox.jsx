import React, { useState } from "react";
import "../App.css"
import questions from "../questions";

export default function QuestionBox() {
  const [setQuestion, setCurrentQuestion] = useState(0);
  const [setResults, setShowResults] = useState(false);
  const [score, setMainScore] = useState(0);

  const optionClicked = (isCorrect) => {
    if (isCorrect) 
    {
      setMainScore(score + 1);
    }

    if (setQuestion + 1 < questions.length) {
      setCurrentQuestion(setQuestion + 1);
    }
    else 
    {
      setShowResults(true);
    }
  };

  const restartGame = () => {
    setMainScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className = "S2">
      <h4>Kalvium</h4>
      {setResults ? (
        <div className = "Output">
          <h1>Final Results</h1>
          <h2>{score} out of {questions.length} correct - ({(score / questions.length) * 100}%)</h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        <div className = "Question-box">
          <h2>Question: {setQuestion + 1} out of {questions.length}</h2>
          <h3 className = "Questions">{questions[setQuestion].text}</h3>
          <ol>
            {questions[setQuestion].options.map((option) => {
              return (
                <li key={option.id} onClick={() => optionClicked(option.isCorrect)}>
                  {option.text}
                </li>
              );
            })}
          </ol>
        </div>
      )}
    </div>
  );
}




