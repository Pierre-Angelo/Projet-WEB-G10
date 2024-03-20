import React, { useState } from "react";
import "./styles.css"; // Assurez-vous d'avoir le fichier CSS approprié

const Flashcard = ({ question, answer }) => {
  return (
    <div className="flashcard">
      <div className="question">{question}</div>
      <div className="answer">{answer}</div>
    </div>
  );
};

const App = () => {
  const [flashcards, setFlashcards] = useState([
    { id: 1, question: "Question 1", answer: "Réponse 1" },
    { id: 2, question: "Question 2", answer: "Réponse 2" },
    { id: 3, question: "Question 3", answer: "Réponse 3" },
  ]);

  const [themes, setThemes] = useState([
    // Vos thèmes peuvent être initialisés ici ou obtenus à partir de votre base de données
    "Thème 1",
    "Thème 2",
    "Thème 3",
  ]);

  const handleDeleteFlashcard = (id) => {};

  const handleAddFlashcard = () => {};

  const handleReviewFlashcards = () => {};

  return (
    <div className="app">
      <div className="sidebar">
        <h3>Thèmes</h3>
        <ul>
          {themes.map((theme, index) => (
            <li key={index}>{theme}</li>
          ))}
        </ul>
        <button onClick={handleReviewFlashcards}>Réviser</button>
      </div>
      <hr className="separator" />
      <div className="flashcard-library">
        <h2>Bibliothèque de flashcards</h2>
        {flashcards.map((flashcard) => (
          <Flashcard
            key={flashcard.id}
            question={flashcard.question}
            answer={flashcard.answer}
          />
        ))}
        <div className="controls">
          <button onClick={handleAddFlashcard}>Ajouter une flashcard</button>
          <button onClick={() => handleDeleteFlashcard(id)}>
            Supprimer une flashcard
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
