import React from "react";
import ReactDOM from "react-dom";

import SeasonDisplay from "./SeasonDisplay.js"
import Spinner from "./Spinner.js"

class App extends React.Component {

  state = {// setando os stados / data da aplicação
    lat: null,
    errorMessage: ''
  }

  renderContent() { //função auxiliar que formata o "html"/jsx para ser enviado para o render
    if (!this.state.lat && this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div >
    }

    if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplay lat={this.state.lat} />; // chamando o compoenent
    }

    return <Spinner message="Please accept location request" /> // chamando o compoenent
  }

  // React says we have define render
  render() { // renderiza o html/jsx na tela
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    )
  }

  componentDidMount() { // eusado para definir metodos que serão executados depois do component ser criado. Mounted
    window.navigator.geolocation.getCurrentPosition( // pega a localização do usuário
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate() { // usado para definir metodos que serão executados quando algum stado for alterado / whatch

  }

  componentWillUnmount() { // usado para definir métodos que serão executados quando o component for desmontado / initValues

  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
