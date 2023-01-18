import { useState } from 'react'
import Boxes from './components/boxes';
import Form from './components/form';
import './App.css';

function App() {
  const [colorList, setColorList] = useState(["red", "blue"])

  const addNewColor = (newColor) => {
    setColorList([newColor, ...colorList])
  }
  return (
    <div className="App">
      <Form handleNewColor={addNewColor} />
      <Boxes items={colorList} />
    </div>
  );
}

export default App;
