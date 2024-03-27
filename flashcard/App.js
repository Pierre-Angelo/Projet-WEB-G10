import React, { useState } from "react";
import "./styles.css"; 

const FlashcardApp = () => {
  const [flashcards, setFlashcards] = useState([
    {
      id: 1,
      question: "question",
      answer: "réponse",
      flipped: false, 
    },

  ]);

  const handleFlipCard = (id) => {
    setFlashcards(
      flashcards.map((flashcard) =>
        flashcard.id === id
          ? { ...flashcard, flipped: !flashcard.flipped }
          : flashcard
      )
    );
  };

  return (
    <div className="flashcard-app">
      <div className="flashcard-container">
        {flashcards.map((flashcard) => (
          <div
            key={flashcard.id}
            className={`flashcard ${flashcard.flipped ? "flipped" : ""}`}
            onClick={() => handleFlipCard(flashcard.id)}
          >
            <div className="content">
              <div className="front">
                <p>{flashcard.question}</p>
              </div>
              <div className="back">
                <p>{flashcard.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashcardApp;
