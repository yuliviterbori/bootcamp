import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Main from './views/Main'
import Detail from './views/Detail';
import Update from './views/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/people/" exact={true} render={ (routeProps) => <Main {...routeProps} /> } />
        <Route path="/people/:id/" exact={true}  render={ (routeProps) => <Detail {...routeProps.match.params} />} />
        <Route path="/people/:id/edit/" exact={true}  render={ (routeProps) => <Update {...routeProps.match.params} />} />
      </BrowserRouter>
    </div>
  );
}

export default App;
