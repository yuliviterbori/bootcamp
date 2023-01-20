import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/home';
import Number from './components/number';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
           <Route path="/home" render={() => <Home />}/>
           <Route path="/:number" children={<Number/>} />
        </div>
    </BrowserRouter>
  );
}

export default App;
