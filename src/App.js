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

const Theme = ({name,handleClick}) => {
  return(
    <div>
    <button className="theme" onClick={handleClick}>{name}</button>
    </div>
  )
}


const App = () => {
  const db = {
    DCO : [
      { id: 1, question: "DCO 1", answer: "Réponse 1" },
      { id: 2, question: "DCO 2", answer: "Réponse 2" },
      { id: 3, question: "DCO 3", answer: "Réponse 3" },
    ],
    MAS : [
      { id: 1, question: "MAS 1", answer: "Réponse 1" },
      { id: 2, question: "MAS 2", answer: "Réponse 2" },
      { id: 3, question: "MAS 3", answer: "Réponse 3" },
    ],
    NAS : [
      { id: 1, question: "NAS 1", answer: "Réponse 1" },
      { id: 2, question: "NAS 2", answer: "Réponse 2" },
      { id: 3, question: "NAS 3", answer: "Réponse 3" },
    ],
    
  };

  const  [activeTheme, setActiveTheme] = useState([])

  const handleDeleteFlashcard = (id) => {};

  const handleAddFlashcard = () => {};

  const handleReviewFlashcards = () => {};

  return (
    <div className="app">
      <div className="sidebar">
        <h3>Thèmes</h3>
          {(Object.keys(db)).map((theme) => (
            <Theme 
            name = {theme}
            handleClick={() => setActiveTheme(db[theme])}
            />
          ))}
        <button>
          Créer un nouveau thème
        </button>
      </div>
      <hr className="separator" />
      <div className="flashcard-library">
        <h2>Bibliothèque de flashcards</h2>
        {activeTheme.map((flashcard) => (
          <Flashcard
            key={flashcard.id}
            question={flashcard.question}
          />
        ))}
        <div className="controls">
          <button className="addFC" onClick={handleAddFlashcard}>ajouter une flashcard</button>
          <button>
            Supprimer une flashcard
          </button>
        </div>
        <div>
          <button onClick={handleReviewFlashcards}>Réviser</button>
          </div>
      </div>
    </div>
  );
};

export default App;
