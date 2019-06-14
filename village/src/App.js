import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import './App.css';
import Navigation from './components/Navigation';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount = () => {
    this.getSmurfsFromServer();
  }

  getSmurfsFromServer = () => {
    axios.get('//localhost:3333/smurfs')
      .then( res  => this.setState({ smurfs : res.data }))
      .catch( err => console.log(err));
  }

  addSmurfToServer = (newSmurf, func) => {
    axios.post('//localhost:3333/smurfs', newSmurf)
      .then( res  => this.setState({ smurfs : res.data }))
      .then( func(), this.props.history.push('/') )
      .catch( err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        
        <Route path="/smurf-form" render={ props => <SmurfForm {...props} addSmurfToServer={this.addSmurfToServer} /> } />
        <Route exact path="/" render={ props => <Smurfs {...props} smurfs={this.state.smurfs} /> } />
      </div>
    );
  }
}

export default App;
