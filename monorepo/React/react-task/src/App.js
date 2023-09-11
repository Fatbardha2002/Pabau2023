// App.js

import React, { useState } from 'react';
import Header from './components/Header';
import OptionsForm from './components/Options';
import Footer from './components/Footer';

function App() {
  const [step, setStep] = useState(1);

  return (
    <div className="App">
      <Header step={step} /> 
      <OptionsForm step={step} setStep={setStep} /> 
      <Footer />
    </div>
  );
}

export default App;
