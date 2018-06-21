import React, { Component } from 'react';
import ProfilePage from '../components/UserProfile/ProfileComp';

export default class Profile extends Component {
  render() {
    const { displayName } = this.props.user;
    const { photoURL } = this.props.user.providerData[0];
    return (
      <div>
        <ProfilePage name={displayName} picture={photoURL} />
      </div>
    );
  }
}
