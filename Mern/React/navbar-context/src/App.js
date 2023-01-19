import React, { useState } from 'react';
import './App.css';
import FormWapper from './components/formwrapper';
import Navbar from './components/navbar';
import Wrapper from './components/wrapper';
import NameContext from './context/nameContext';

function App() {
const [name, setName] = useState("");

  return (
    <div className="App">
      <NameContext.Provider value={{name, setName}}>
        <Wrapper>
          <Navbar />
          <FormWapper />
        </Wrapper>
      </NameContext.Provider>
    </div>
  );
}

export default App;
