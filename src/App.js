import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import './components/loader/loader.css'
import NavBar from './components/NavBar';
import IntemListContainer from './components/IntemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from './contexts/CartContext';
import Cart from './components/cart';
import Checkout from './components/checkout';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<IntemListContainer greeting={'Bienvenidos a Kuro Sushi'} />}></Route>
            <Route path="/categoria/:id" element={<IntemListContainer greeting={'Bienvenidos a Kuro Sushi'} />}></Route>
            <Route path="/item/:itemId" element={<ItemDetailContainer />}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/checkout" element={<Checkout/>}></Route>
            <Route path="*" element={<h1>404 NOT FOUND</h1>}></Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;