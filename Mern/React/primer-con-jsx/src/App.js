import './App.css';
import List from './components/List'

function App() {
  const items = ["Learn React", "Climb Mt Everest", "Run a marathon", "Feed the dogs"];
  return (
    <div className="App">
      <h1>Hello Dojo!</h1>
      <h4>Things I need to do:</h4>
      <List items={items} />
    </div>
  );
}

export default App;
