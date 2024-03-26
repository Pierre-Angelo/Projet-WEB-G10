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
      }).then(console.log(this.state.data[0]));
  }

  sendFlashcardsToServer = () => {
    fetch('/api/newFlashcard', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({"je test": "oui"}),
    }).then(res => res.json()).then((res) => {
      if (!res.success) console.log("marche pas");
    });
  }

  render() {
    return (
      <div className="container">
        <div className="App">
      Test
      <button onClick={this.sendFlashcardsToServer}>test</button>
    </div>
      </div>
    );
  }
}

export default Flashcard;
