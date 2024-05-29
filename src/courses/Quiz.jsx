import React, { useState } from 'react';
import './Quiz.css'; // Import the CSS file

const Quiz = ({ question, answers, correctAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleCheckAnswer = () => {
    setIsAnswered(true); // Mark as answered

    // Update isCorrect based on selected answer
    setIsCorrect(selectedAnswer === correctAnswer);

    // Update isButtonClicked for feedback display
    setIsButtonClicked(true);
  };

  return (
    <div className="quiz-container">
      <div className="quiz">
        <h2>Quiz</h2>
        <p className="question">{question}</p>
        <div className="answer-options">
          {answers.map((answer, index) => (
            <label key={index} htmlFor={answer} className="answer-option">
              <input
                type="radio"
                id={answer}
                name="answer"
                value={answer}
                checked={selectedAnswer === answer}
                onChange={() => setSelectedAnswer(answer)}
              />
              {answer}
            </label>
          ))}
        </div>
        <button className="check-answer" disabled={!selectedAnswer} onClick={handleCheckAnswer}>
          Check Answer
        </button>
        <div className="feedback">
          {isAnswered && isButtonClicked && ( // Show feedback only after answering and clicking button
            <p className={isCorrect ? 'correct-feedback' : 'incorrect-feedback'}>
              {isCorrect ? 'Jawaban Anda Benar!' : 'Jawaban Anda Salah. Coba lagi!'}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
