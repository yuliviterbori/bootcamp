import { useState } from 'react'
import Pestanas from './components/pestanas';
import './App.css';

function App() {

  const [activeTab, setActiveTab] = useState(1);

  const items =[
    {id: 1, content:"first tab"},{id: 2, content:"second tab"},{id: 3, content:"third tab"}
  ]

  return (
    <div className="App">
      <Pestanas items = {items} activeId={activeTab} handleClick={id => setActiveTab(id)}/>
    </div>
  );
}

export default App;
