import React, { useState } from "react";
import "./App.css"; // Assurez-vous d'avoir le fichier CSS approprié


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
      { id: 1, question: "DCO 1", answer: "Réponse  DCo1" },
      { id: 2, question: "DCO 2", answer: "Réponse 2" },
      { id: 3, question: "DCO 3", answer: "Réponse 3" },
    ],
    MAS : [
      { id: 1, question: "MAS 1", answer: "Réponse MaS1" },
      { id: 2, question: "MAS 2", answer: "Réponse 2" },
      { id: 3, question: "MAS 3", answer: "Réponse 3" },
    ],
    NAS : [
      { id: 1, question: "NAS 1", answer: "Réponse NAs1" },
      { id: 2, question: "NAS 2", answer: "Réponse 2" },
      { id: 3, question: "NAS 3", answer: "Réponse 3" },
    ],
    
  };

  const Block = () => {
    return (
      <div>
      <div className="app">
      <div className="flashcard-library">
        <h2>Flashcards</h2>
          <div>
            
          </div>

      </div>
      </div>
      </div>
    )
  }

  const HandleNewThema = () => {
    const [inputThema, setInputThema] = useState('');
    const [addToData, setAddToData] = useState('');

    const handleChange = (event) => {
      setInputThema(event.target.value);
    };

    const handleThema = () => {
      setAddToData(inputThema);
      setInputThema('');
    };

    return (
      <div>
        <input type="text"
        value={inputThema}
        onChange={handleChange}
        placeholder="Type your new Thema..."
        />
        <button onClick={handleThema}>Ajouter</button>
        <p>New Thema : {addToData}</p>
      </div>
    );
  }

  const Thema = () => { return(
    <li className='bullets'>
      <label htmlFor="theme">Theme : </label>
      <input type="text" id="theme" name="theme"/>
    </li>
    )}

  const Question = () => { return(
    <li className='bullets'>
      <label htmlFor="question">Question : </label>
      <input type="text" id="question" name="question"/>
    </li>
    )}
    
    const Answer = () => {return(
    <li className='bullets'>
      <label htmlFor="answer">Answer : </label>
      <input type="text" id="answer" name="answer"/>
    </li>
    )}

  const  [activeTheme, setActiveTheme] = useState([])

  //const handleDeleteFlashcard = (id) => {};

  const HandleAnswer = () => {
    const [visible, setVisible] = useState(false);

    const handleHide = () => {
      setVisible(false);
    };

    const handleShow = () => {
      setVisible(true);
    };

    return (
      <div>
      {visible && <div>
        {activeTheme.map((flashcard) => (
                <div><button onClick={handleHide}><Flashcard
                key={flashcard.id}
                question={flashcard.answer}         
                /></button>
               </div>))}
      </div>}

      {!visible && <div>
                {activeTheme.map((flashcard) => (
                <div><button onClick={handleShow}><Flashcard
                key={flashcard.id}
                question={flashcard.question}
                /></button><button onClick={handleHide}>
                Supprimer une flashcard
              </button>
               </div>))}</div>}
      </div>
    );
  };

  const NewFlashcard = () => {
    const [isVisibl, setIsVisibl] = useState(false);
    const [study, setStudy] = useState(false);
    
    const handleStudy = () => {
      setStudy(true)
    };

    const handleNotStudy = () => {
      setStudy(false)
    };

    const handleHide = () => {
      setIsVisibl(false)
    }
  
    const handleShow = () => {
      setIsVisibl(true)
    }
  
    return(
      <div>
  
        {!isVisibl && !study &&
        <div><hr className="separator" />
        
        <div className="app">
        <Block/>
        <HandleAnswer/>
        <button onClick={handleShow}>
           Ajouter une flashcard
        </button>
        </div>
        <div>
          <button id = 'revise' className="revise" onClick={handleStudy}>
            Réviser
          </button>
        </div>
        </div>}

        {!isVisibl && study &&

        <div><hr className="separator" /><p>interface pour étudier</p>
        <button onClick={handleNotStudy}>
          Terminer
        </button></div>}
        
        {isVisibl &&
           <div><hr className="separator" />
           <Thema/>
           <Question/>
           <Answer/>
           <button onClick={handleHide}>
           Cancel
           </button>
     </div>}
      </div>
    )
  };

  const CreateNewThema = () => {
    const [isVisib, setIsVisib] = useState(false);
    
    const handleHide = () => {
      setIsVisib(false)
    }
  
    const handleShow = () => {
      setIsVisib(true)
    }
  
    return(
      <div>
        {!isVisib && 
        <button className="addFC" onClick={handleShow}>
            Créer un nouveau thème
        </button>}
  
        {isVisib &&
        <div>
        <HandleNewThema/>
        <button onClick={handleHide}>
        Cancel
        </button>
      </div>
            }
      </div>
    )
  }

  const Toggle = () => {
    const [isVisible, setIsVisible] = useState(true);
    
    const handleHide = () => {
      setIsVisible(false)
    }
  
    return(
        <div><CreateNewThema/>
        <button onClick={handleHide}>
            Hide
        </button>
        
  
        {isVisible &&
            <div> 
                <NewFlashcard/> 
            </div>}
      </div>
    )
  }

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
      </div>
      <Toggle/>
      {/*<NewFlashcard/><hr className="separator" />
      => problème d'affichage à la réinitialisation
      => CSS*/}
    </div>
  );
};

export default App;