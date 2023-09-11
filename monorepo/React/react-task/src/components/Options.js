import React, { useState,useEffect } from 'react';
//import { BrowserRouter as Router } from 'react-router-dom'; 
import Header from './Header';


const containerStyle = {
  backgroundColor: '#f4f4f4', 
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100vh',
};

const formStyle = {
  backgroundColor: 'white',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  marginBottom: '20px', 
};


const optionStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '10px',
  border: '1px solid #ccc',
  margin: '5px 0',
  cursor: 'pointer',
  height: '50px',
  width: '600px', 
  margin: '10px 0',
};
const additionalDivStyle = {
  backgroundColor: 'white',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  width:'630px' ,
  height:'10px',

};
const imageStyle = {
  width: '50px',
  height: '50px',
  marginRight: '15px',
};

const nameStyle = {
  fontSize: '16px',
  fontWeight: 'bold',
};

const arrowStyle = {
  fontSize: '24px',
  marginLeft: 'auto',
};

const Option = ({ imageSrc, name, onClick }) => (
  <div
    style={{ ...optionStyle }}
    onClick={onClick}
  >
    <img src={imageSrc} alt={name} style={{ ...imageStyle }} />
    <div style={{ ...nameStyle }}>{name}</div>
    <div style={{ ...arrowStyle }}>&gt;</div>
  </div>
);

const OptionsForm = ({ step, setStep }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { id: 1, imageSrc: '../assets/botox.jpg', name: 'Botox' },
    { id: 2, imageSrc: '../assets/facials.jpg', name: 'Facials' },
    { id: 3, imageSrc: '../assets/growth.jpg', name: 'Growth Factors' },
    { id: 4, imageSrc: '../assets/fat.jpg', name: 'Fat Dissolve' },
    { id: 5, imageSrc: '../assets/consultation.jpg', name: 'Consultation' },
  ];

  const handleOptionClick = (optionId) => {
    console.log("Option Clicked! Option ID:", optionId);
    setSelectedOption(optionId);
    if (step === 1) {
      console.log("Changing Step to 2");
      setStep(2);
    }
  };

  const handleBackClick = () => {
    console.log("Back Button Clicked!");
    setStep(1);
    setSelectedOption(null);
  };
  return (
    <div style={{ ...containerStyle }}>
       <Header step={step} /> 
      {step === 1 && (
        <div style={{ ...formStyle }}>
          {options.map((option) => (
            <Option
              key={option.id}
              imageSrc={option.imageSrc}
              name={option.name}
              onClick={() => handleOptionClick(option.id)}
            />
          ))}
        </div>
      )}
      {step === 2 && (
        <div style={{ ...additionalDivStyle, marginTop: '10px' }}>
          <p style={{ margin: 0, textAlign: 'center', color: 'rgb(118, 118, 118)' }}>
            <span style={{ color: 'green' }}>{options[selectedOption - 1].name}</span>.
          </p>
        </div>
      )}
      {step === 2 && (
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <button onClick={handleBackClick}>Back</button>
        </div>
      )}
      {step === 1 && (
        <div style={{ ...additionalDivStyle, marginTop: '10px' }}>
          <p style={{ margin: 0, textAlign: 'center', color: 'rgb(118, 118, 118)' }}>
            Not sure about consultation type? Please, call{' '}
            <span style={{ color: 'blue' }}>0203 7959063</span>.
          </p>
        </div>
      )}
    </div>
  );
};

export default OptionsForm;