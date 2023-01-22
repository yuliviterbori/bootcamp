
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Form from './components/form';
import PeopleData from './components/peopleData';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/:id" render={(props) => {
          return <PeopleData id={props.match.params.id} />
        }} />
        <Route exact path="/" render={() => <Form />} />
        
      </div>
    </BrowserRouter>
    
  );
}

export default App;
