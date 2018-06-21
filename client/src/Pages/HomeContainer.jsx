import React, { Component } from 'react';
import Results from './Results';
import Home from './HomePage';

export default class HomeContainer extends Component {
  state = {
    vendors: null,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.vendors !== nextState.vendors;
  }

  submitSearch = query => {
    axios
      .get('/search', {
        params: {
          query: `${query}`,
        },
      })
      .then(({ data }) => {
        this.setState({
          vendors: data,
        });
      })
      .catch(error => {
        console.error(error);
      });
    this.props.history.push(`/search?query=${query}`);
  };

  render() {
    return (
      <div>
        {this.state.vendors ? (
          <Results vendors={this.state.vendors} />
        ) : (
          <Home submitSearch={this.submitSearch} />
        )}
      </div>
    );
  }
}
