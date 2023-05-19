import React, { useState } from 'react';
import On from './light-on.png'
import Of from './light-off.png'
import './Light.css'


const Light = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleLight = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="light-container">

      <img
        src={isOn ? `${On}` : `${Of}`}
        alt={isOn ? 'Light On' : 'Light Off'}
        className={`light-image ${isOn ? 'on' : 'off'}`}
      />
      <button onClick={toggleLight} className={`toggle-button ${isOn ? 'on' : 'off'}`}>
        {isOn ? 'Turn Off' : 'Turn On'}
      </button>
    </div>
  );
};

export default Light;
