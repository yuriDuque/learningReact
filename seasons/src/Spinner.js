import React from 'react'

const Spinner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">
        {props.message}
      </div>
    </div>
  );
}

Spinner.defaultProps = { // usado para definir valores default para as propriedades / props
  message: "Loading..."
}

export default Spinner;