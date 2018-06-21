import React, { Component } from 'react';
import AddUser from '../components/Login/AddUser.jsx';

export default class Mongo extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
    };
  }

  updateUser = event => {
    this.setState({
      userName: event.target.value,
    });
  };

  submitUser = () => {
    axios
      .post('/ProfilePage', {
        Name: this.state.userName,
      })
      .then(res => {
        console.log('OK');
      })
      .catch(err => {
        console.error(err);
      });

    this.setState({
      userName: '',
    });
  };

  render() {
    return (
      <div>
        Username:{' '}
        <input
          onChange={this.updateUser}
          placeholder="Enter username"
          value={this.state.userName}
        />
        <br />
        <button onClick={this.submitUser}>Add User</button>
      </div>
    );
  }
}
