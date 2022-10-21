import './App.css';
import AppRouter from './AppRouter';
import NavBar from './components/NavBar/NavBar';

function App() {

  return (
    <div className="app">
      <NavBar />
      <AppRouter />
    </div>
  );
}

export default App;
