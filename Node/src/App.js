import "./styles.css";
import React, { Component } from 'react';
import 'whatwg-fetch';



class Flashcard extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      error: null,               
      text: '',
      id:''
    };
    this.pollInterval = null;
  }

  componentDidMount() {
    this.loadFlashcardsFromServer();
    if (!this.pollInterval) {
      this.pollInterval = setInterval(this.loadFlashcardsFromServer, 2000);
    }
  }

  componentWillUnmount() {
    if (this.pollInterval) clearInterval(this.pollInterval);
    this.pollInterval = null;
  }

  loadFlashcardsFromServer = () => {
    fetch('/api/getDB')
      .then(data => data.json())
      .then((res) => {
        if (!res.success) this.setState({ error: res.error });
        else this.setState({ data: res.data });
      }).then(console.log(this.state.data));
  }

  addFlashcardsToServer = (theme, question, response) => {
    fetch('/api/addFlashcard', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({"theme": theme, "question": question, "response": response}),
    }).then(res => res.json()).then((res) => {
      if (!res.success) console.log("marche pas");
    });
  }

  rmFlashcardsFromServer = (theme, cardID) => {
    fetch('/api/rmFlashcard', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({"theme": theme, "cardID": cardID}),
    }).then(res => res.json()).then((res) => {
      if (!res.success) console.log("marche pas");
    });
  }

  addThemeToServer = (theme) => {
    fetch('/api/addTheme', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({"theme": theme}),
    }).then(res => res.json()).then((res) => {
      if (!res.success) console.log("marche pas");
    });
  }

  rmThemeFromServer = (theme) => {
    fetch('/api/rmTheme', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({"theme": theme}),
    }).then(res => res.json()).then((res) => {
      if (!res.success) console.log("marche pas");
    });
  }

  render() {
    return (
      <div className="container">
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
        </div>
      </div>
    );
  }
}

export default Flashcard;
