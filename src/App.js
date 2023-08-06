import './App.css';
import NavBar from './components/NavBar';
import IntemListContainer from './components/IntemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
     <NavBar />
     <IntemListContainer greeting={'Bienbenidos a Kuro Sushi'}/>
    </div>
  );
}

export default App;
