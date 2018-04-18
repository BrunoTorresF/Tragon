import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {ref, firebaseAuth, provider} from './client';

export default class Login extends Component {
  state = {
    loggedIn: false,
  }

  componentDidMount() {
    window.fbAsyncInit = function() {
      window.FB.init({
        appId: '163273487712660',
        cookie: true,
        xfbml: true,
        version: 'v2.12'
      });

      window.FB.Event.subscribe('auth.statusChange', (response) => {
        if (response.authResponse) {
          this.updateLoggedOutState()
        }
      })

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
          return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    }
  }

  handleFacebook = (e) => {
    e.preventDefault();
    firebaseAuth().signInWithPopup(provider)
      .then(() => {
        this.setState({
          loggedIn: true,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  checkLoginState = () => {
    FB.getLoginStatus((response) => {
      statusChangeCallback(response);
    });
  }

  saveUser = (user) => {
    ref.child(`users/${user.uid}`)
      .set(user)
      .then(() => user);
  }

  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <div className="col-md-4">
        <div className="form-group col-md-4">
          <a className="btn btn-block btn-social btn-facebook" onClick={this.handleFacebook}>
            <i className="fab fa-facebook-square" />
            Sign in with Facebook
          </a>
        </div>
      </div>
    );
  }
}
