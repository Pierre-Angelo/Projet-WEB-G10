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


const App = ({DATA, addThemeToServer, rmThemeFromServer, addFlashcardsToServer, rmFlashcardsFromServer}) => {
  const DB = DATA;

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
      addThemeToServer(inputThema);
    };

    return (
      <div><div className="blockinput">
        <input className="inputthema" type="text"
        value={inputThema}
        onChange={handleChange}
        placeholder="Type your new theme..."
        />
        <button className="ajout" onClick={handleThema}>Add</button></div>
        <p>New Thema : {addToData}</p>
      </div>
    );
  }

  const HandelDeleteThema = () => {

    return (
      <div>
        <p>Thema to delete : {activeThemeName}</p>
        <button className="ajout" onClick={() => rmThemeFromServer(activeThemeName)}>Delete</button>
      </div>
    );
  }

  const  [question, setQuestion] = useState("")

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const Question = () => { return(
    <li>
      <label htmlFor="question">Question : </label>
      <input className='bullets' type="text" id="question" name="question"/>
    </li>
    )}

    const  [answer, setAnswer] = useState("")

    const handleAnswerChange = (event) => {
      setAnswer(event.target.value);
    };
    
    const Answer = () => {return(
    <li>
      <label htmlFor="answer">Answer : </label>
      <input className='bullets'type="text" id="answer" name="answer"/>
    </li>
    )}

  const  [activeTheme, setActiveTheme] = useState([])
  const  [activeThemeName, setActiveThemeName] = useState("")

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
        {activeTheme.map((flashcard,index) => (
          <div>
            <button className="ellipse" onClick={handleHide}>
              <Flashcard
                key={index}
                question={flashcard.response}         
              />
            </button>
          </div>))}
      </div>}

      {!visible && <div>
        {activeTheme.map((flashcard, index) => (
          <div>
            <button onClick={handleShow}>
              <Flashcard
                key={index}
                question={flashcard.question}
              />
            </button>
            <button className="dele" onClick={() => rmFlashcardsFromServer(activeThemeName, index)}>
              Delete the flashcard
            </button>
          </div>))}
      </div>}
      </div>
    );
  };

  const [flashcards, setFlashcards] = useState([]);

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

  const [isVisibl, setIsVisibl] = useState(false);
  const [study, setStudy] = useState(false);
  
  const NewFlashcard = () => {
    
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
            <div>
              Current theme : {activeThemeName}
            </div>
           <Question/>
           <Answer/>
           </ul>
           <button className="ajouter" onClick={addFlashcardsToServer(activeThemeName,question,answer)}>
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
    const [isAdd, setIsAdd] = useState(false);
    
    const handleHide = () => {
      setIsVisib(false)
    }
  
    const handleShow = () => {
      setIsVisib(true)
    }

    const handleAdd = () => {
      setIsAdd(true)
      setIsVisib(true)
    }

    const handleDell = () => {
      setIsAdd(false)
      setIsVisib(true)
    }
  
    return(
      <div>
        {!isVisib && 
        <button className="addflashcard" onClick={handleAdd}>
            Add a new theme
        </button>}
        {!isVisib && 
        <button className="addflashcard" onClick={handleDell}>
            Delete an existing theme
        </button>}
  
        {isVisib && isAdd &&
        <div className="marge">
        <HandleNewThema/>
        <button className="cancel" onClick={handleHide}>
        Cancel
        </button>
      </div>
            }
        {isVisib && !isAdd &&
        <div className="marge">
        <HandelDeleteThema/>
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
          {(DB).map((theme, index) => (
            <Theme 
            key = {index}
            name = {theme.name}
            handleClick={() => 
              (setActiveTheme(theme.cardArray),
              setActiveThemeName(theme.name),
              setFlashcards(theme.cardArray.map((flashcard,index) => (
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