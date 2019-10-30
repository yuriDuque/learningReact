import React from "react";

class SeasonDisplay extends React.Component {

  state = {
    season: "",
    month: ""
  }

  render() {
    return <div>Latitute: {this.state.season}</div>
  }

  componentDidMount() {
    this.setState({ month: new Date().getMonth() })

    if (this.state.month > 2 && this.state.month < 9) {
      this.setState({ season: this.props.lat > 0 ? 'summer' : 'winter' })
    } else {
      this.setState({ season: this.props.lat > 0 ? 'winter' : 'summer' })
    }
  }
}

export default SeasonDisplay;