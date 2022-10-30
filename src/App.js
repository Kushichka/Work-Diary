import './App.css';
import AppRouter from './AppRouter';
import NavBar from './components/NavBar/NavBar';

function App() {

  return (
    <div className="app">
      <nav>
        <NavBar />
      </nav>
      <main>
        <AppRouter />
      </main>
    </div>
  );
}

export default App;
