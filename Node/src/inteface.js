import "./styles.css";


const Interface = (DATA) => {
    let DB = DATA.DATA;
    return (
    <div className="App">
        Test
        <div>
        <button onClick={() => this.addThemeToServer("PPC")}>addPPC</button>
        <button onClick={() => this.rmThemeFromServer("PPC")}>rmPPC</button>
        </div>
        <div>
        <button onClick={() => this.addFlashcardsToServer("PPC", "test1", "test2")}>addCard</button>
        <button onClick={() => this.rmFlashcardsFromServer("PPC", 0)}>rmCard</button>
        </div>
        <div>Voici une flashcard {DB[0].name}</div>
    </div>)}

export default Interface