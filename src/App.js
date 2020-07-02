import React from 'react';

import ResultBox from './Results/ResultsBox'
import Heats from './Heats/Heats'
import ControlPanel from './ControlPanel/ControlPanel'

import './App.css';

function App() {
  return (
    <div className="App">
      <ResultBox />
      <Heats />
      <ControlPanel />
    </div>
  );
}

export default App;
