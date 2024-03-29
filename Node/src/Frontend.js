import React, { useState } from "react";
import "./Frontend.css";


const Flashcard = ({ question, answer }) => {
  return (
    <div className="flashcardd">
      <div className="question">{question}</div>
      <div className="answer">{answer}</div>
    </div>
  );
};

const Theme = ({name,handleClick}) => {
  return(
    <div className="boutonsdetheme">
    <button className="theme" onClick={handleClick}>{name}</button>
    </div>
  )
}


const App = (DATA) => {
  let DB = DATA.DATA;
  /*const db = {
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
    
  };*/

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
      <div><div className="blockinput">
        <input className="inputthema" type="text"
        value={inputThema}
        onChange={handleChange}
        placeholder="Type your new theme..."
        />
        <button className="ajout" onClick={handleThema}>Ajouter</button></div>
        <p>New Thema : {addToData}</p>
      </div>
    );
  }

  const Question = () => { return(
    <li>
      <label htmlFor="question">Question : </label>
      <input className='bullets' type="text" id="question" name="question"/>
    </li>
    )}
    
    const Answer = () => {return(
    <li>
      <label htmlFor="answer">Answer : </label>
      <input className='bullets'type="text" id="answer" name="answer"/>
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
                <div><button className="ellipse" onClick={handleHide}><Flashcard
                //key={flashcard.id}
                question={flashcard.response}         
                /></button>
               </div>))}
      </div>}

      {!visible && <div>
                {activeTheme.map((flashcard) => (
                <div><button onClick={handleShow}><Flashcard
                //key={flashcard.id}
                question={flashcard.question}
                /></button><button className="dele" onClick={handleHide}>
                Delete the flashcard
              </button>
               </div>))}</div>}
      </div>
    );
  };

  const [flashcards, setFlashcards] = useState("je suis vide");

  const FlashcardApp = () => {
  
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

  const NewFlashcard = () => {
    const [isVisibl, setIsVisibl] = useState(false);
    const [study, setStudy] = useState(false);
    
    const handleStudy = () => {
      setStudy(true);
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
  
        {!isVisibl && !study && Boolean(activeTheme.length) &&
        <div><hr className="separator" />
        
        <div className="app">
        <Block/>
        <HandleAnswer/>
        <div className="ligne">
        <button className="ajouter" onClick={handleShow}>
           Add a new flashcard
        </button>
          <button id = 'revise' className="revise" onClick={handleStudy}>
            Study
          </button>
        </div>
        </div>
        </div>}

        {!isVisibl && study &&

        <div><hr className="separator" />
        
        <FlashcardApp/>
        
        <div className="terminer">
        <button className="ajouter" onClick={handleNotStudy}>
          Go back
        </button></div></div>}
        
        {isVisibl &&
           <div className="upnew"><hr className="separator" />
           <ul className="newflash">
           <Question/>
           <Answer/>
           </ul>
           <button className="ajouter">
           Save
           </button>         
           <button className="ajouter" onClick={handleHide}>
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
        <button className="addflashcard" onClick={handleShow}>
            Créer un nouveau thème
        </button>}
  
        {isVisib &&
        <div className="marge">
        <HandleNewThema/>
        <button className="cancel" onClick={handleHide}>
        Cancel
        </button>
      </div>
            }
      </div>
    )
  }

  const Toggle = () => {
    
  
    return(
        <div className="range"><CreateNewThema/><div className="marge">
   	</div>
        
      </div>
    )
  }

  return (
    <div className="app">
      <div className="sidebar">
        <h3>Themes</h3>
          {(DB).map((theme) => (
            <Theme 
            name = {theme.name}
            handleClick={() => 
              (setActiveTheme(theme.cardArray),
              setFlashcards(activeTheme.map((flashcard,index) => (
                {
                  id: index,
                  question: flashcard.question,
                  answer: flashcard.response,
                  flipped: false,
                }
              ))))}
            />
          ))}
      </div>
      <Toggle/> <NewFlashcard/>
      {/*<NewFlashcard/><hr className="separator" />
      => CSS*/}
    </div>
  );
};

export default App;