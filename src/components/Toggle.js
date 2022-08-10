import React, { useState } from "react";

function Toggle() {
  const [ onOff, setOnOff ] = useState(false)

  function toggleButton() {
    setOnOff((onOff) => !onOff)
  }

  const color = onOff ? 'red' : 'white'

  return <button style={{background: color}} onClick={toggleButton}>{onOff ? 'On' : 'Off'}</button>;
}

export default Toggle;
