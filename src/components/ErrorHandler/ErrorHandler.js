import React, { Component } from 'react';

class ErrorHandler extends Component {
  state = {
    hasError: '',
    errorMessage: '',
  };

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    this.setState({ errorMessage: error });
  }

  render() {
    if(this.state.hasError) {
        return '<h1>{this.state.errorMessage}</h1>';
    }
    return this.props.children;
  }
}

export default ErrorHandler;
