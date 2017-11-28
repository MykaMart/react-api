import React, { Component } from 'react';
import './App.css';
import Show from "./Show"
import Select from "./Select"

class App extends Component {

  constructor(){
    super();
    this.state = {
      data: []
      showDatum: false;
    }
  }

  componentDidMount(){
    fetch("https://data.cityofnewyork.us/resource/ns8x-c6af.json")
      .then(res => res.json())
      .then(data => {
        const state = this.state;
        state.data = data;
        this.setState(state);
      })
  }

  showDatum = (selectedDatum) => {
    const state = this.sate;
    state.showDatum = !state.showDatum;
    const datum = selectedDatum
    this.setState(state)
  }

  render() {
    return (
      <div className="App">
        <Show data={this.state.data}/>
        <Select<
      </div>
    );
  }
}

export default App;
