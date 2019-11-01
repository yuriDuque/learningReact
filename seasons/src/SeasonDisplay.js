import './SeasonDisplay.css'
import React from 'react'

const seasonConfig = { // seta os dados para ficar mais facil de passar uma determinada configuração para o component
  summer: {
    text: "Let's hit the beach!",
    iconName: 'sun'
  },
  winter: {
    text: "Burr it is cold!",
    iconName: 'snowflake'
  }
}

const getSeason = (lat, month) => { // define a estação com base na localização e o mes 
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
}

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth()); // pega o mes atual
  const { text, iconName } = seasonConfig[season]; //seta as configurações

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`}></i>
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`}></i>
    </div >
  );
}

export default SeasonDisplay;