import React from 'react';

class Smurf extends React.Component {
  state = {
    id: 0,
    name: '',
    height: '',
    age: 0,
  }

  componentDidMount() {
    this.setState({
      id: this.props.id,
      name: this.props.name,
      height: this.props.height,
      age: this.props.age,
    })
  }
  
  removeSmurf = () => {
    this.props.removeSmurfFromServer(this.props.id);
  }
  
  editSmurf = () => {
    if(this.state.id !== this.props.id || this.state.name !== this.props.name || this.state.height !== this.props.height || this.state.age !== this.props.age) {
      let containcm = this.state.height.substr(-2);
      if( containcm !== 'cm') {
        let addCM = this.state.height + 'cm';
        this.setState({
          height: addCM
        }, () => this.props.editSmurfToServer(this.state));
      } else {
        this.props.editSmurfToServer(this.state);
      }
    }
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <li className="Smurf">
        <h3><input type="text" onChange={this.handleInputChange} name="name" value={this.state.name} /></h3>
        <strong><input type="text" onChange={this.handleInputChange} name="height" value={this.state.height} /> tall</strong>
        <p><input type="text" onChange={this.handleInputChange} name="age" value={this.state.age} /> smurf years old</p>
        <button onClick={this.removeSmurf}>Remove Smurf</button>
        <button onClick={this.editSmurf}>Save Smurf</button>
      </li>
    );
  }
};

export default Smurf;

