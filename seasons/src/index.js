import React from "react";
import ReactDOM from "react-dom";

import SeasonDisplay from "./SeasonDisplay.js"
import Spinner from "./Spinner.js"

class App extends React.Component {

  state = {
    lat: null,
    errorMessage: ''
  }

  renderContent() {
    if (!this.state.lat && this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div >
    }

    if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please accept location request" />
  }

  // React says we have define render
  render() {
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    )
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate() {

  }

  componentWillUnmount() {

  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
