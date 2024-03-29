import React, { Component } from 'react';
import 'whatwg-fetch';
import Interface from './inteface';
import Frontend from './Frontend';



class Container extends Component {
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
    
  }

  loadFlashcardsFromServer = () => {
    fetch('/api/getDB')
      .then(data => data.json())
      .then((res) => {
        if (!res.success) this.setState({ error: res.error });
        else this.setState({ data: res.data });
      });
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
        <Frontend DATA = {this.state.data}/>
      </div>
    );
  }
}

export default Container;
