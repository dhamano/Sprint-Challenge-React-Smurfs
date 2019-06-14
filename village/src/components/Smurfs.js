import React, { Component } from 'react';

import Smurf from './Smurf';
import EditSmurf from './EditSmurf';
import './Smurfs.css';

class Smurfs extends Component {
  state = {
    isEditable: false
  }

  changeEditable = () => {
    this.setState({
      isEditable: !this.state.isEditable
    })
  }

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        { (this.state.isEditable) ? <button onClick={this.changeEditable} className="edit">Done Editing</button> : <button onClick={this.changeEditable} className="edit">Edit Smurfs</button> }
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
                (this.state.isEditable) ?
                  <EditSmurf
                    key={smurf.id}
                    name={smurf.name}
                    id={smurf.id}
                    age={smurf.age}
                    height={smurf.height}
                    key={smurf.id}
                    changeEditable={this.changeEditable}
                    editSmurfToServer={this.props.editSmurfToServer}
                    removeSmurfFromServer={this.props.removeSmurfFromServer}
                  />
                :
                  <Smurf
                    key={smurf.id}
                    name={smurf.name}
                    id={smurf.id}
                    age={smurf.age}
                    height={smurf.height}
                    key={smurf.id}
                    changeEditable={this.changeEditable}
                  />
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
