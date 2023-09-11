import React from 'react';

const Header = ({ step }) => {
 
  const stepCount = step === 1 ? '1/2' : '2/2';

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
