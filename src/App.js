import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar';
import IntemListContainer from './components/IntemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<IntemListContainer greeting={'Bienvenidos a Kuro Sushi'} />}></Route>
          <Route path="/categoria/:id" element={<IntemListContainer greeting={'Bienvenidos a Kuro Sushi'} />}></Route>
          <Route path="/item/:itemId" element={<ItemDetailContainer />}></Route>
          <Route path="*" element={<h1>404 NOT FOUND</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
