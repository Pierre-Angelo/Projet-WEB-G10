import React, { Component } from 'react';
import 'whatwg-fetch';
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
    this.addFlashcardsToServer = this.addFlashcardsToServer.bind(this);
    this.rmFlashcardsFromServer = this.rmFlashcardsFromServer.bind(this);
    this.addThemeToServer = this.addThemeToServer.bind(this);
    this.rmThemeFromServer = this.rmThemeFromServer.bind(this);
    this.loadFlashcardsFromServer = this.loadFlashcardsFromServer.bind(this)
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
        <Frontend DATA = {this.state.data}
        addFlashcardsToServer={this.addFlashcardsToServer}
        rmFlashcardsFromServer={this.rmFlashcardsFromServer}
        addThemeToServer={this.addThemeToServer}
        rmThemeFromServer={this.rmThemeFromServer}
        loadFlashcardsFromServer={this.loadFlashcardsFromServer}
        />
      </div>
    );
  }
}
//<Frontend DATA = {this.state.data}/>
//<Interface DATA = {this.state.data}/>

export default Container;
