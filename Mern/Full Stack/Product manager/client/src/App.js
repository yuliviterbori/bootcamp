import './App.css';
import Main from './views/Main';
import ProductDetail from './views/ProductDetail';
import EditProduct from './views/EditProduct';
import { BrowserRouter, Routes,  Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/:id" exact  element={<ProductDetail/>} />
        <Route path="/:id/edit" exact  element={<EditProduct />} />
        <Route path={'/'} exact element={<Main />} />
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
