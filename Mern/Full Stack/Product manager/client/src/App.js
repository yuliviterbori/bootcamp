import './App.css';
import Main from './views/Main';
import ProductDetail from './views/ProductDetail';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/:id" exact={true}  render={ (routeProps) => <ProductDetail {...routeProps.match.params} />} />
        <Route path={'/'} exact={true} render={()=> <Main />} />
      </BrowserRouter>
    
    </div>
  );
}

export default App;
