import React from 'react';

const Header = ({ step }) => {
  const maxSteps = 2;
  const stepCount = `${step}/${maxSteps}`;

  return (
    <header style={headerStyle}>
      <div style={innerHeaderStyle}>
        <div style={titleStyle}>Choose Service</div>
        <div style={stepStyle}>Step {stepCount}</div>
      </div>
    </header>
  );
};

const headerStyle = {
  backgroundColor: 'white',
  padding: '10px 0',
  textAlign: 'center',
};

const innerHeaderStyle = {
  maxWidth: '600px',
  margin: '0 auto',
};

const titleStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
};

const stepStyle = {
  fontSize: '18px',
  color: '#888',
};

export default Header;
