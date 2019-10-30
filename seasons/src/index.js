import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

  // created
  constructor(props) {
    super(props);

    this.state = {
      lat: null,
      errorMessage: ''
    };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // we call setState
        this.setState({ lat: position.coords.latitude })
      },
      (err) => {
        this.setState({ errorMessage: err.message })
      }
    );
  }


  // React says we have define render
  render() {
    if (this.state.lat && !this.state.errorMessage) {
      return <div>Latitude: {this.state.lat}</div >;
    }

    if (!this.state.lat && this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div >
    }

    return <div>Loading...</div >
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
