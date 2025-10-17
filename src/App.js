import './App.css';

// pages
import Navbar from './pages/Navbar';
import Simple from './pages/Simple';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Simple />
      </header>
    </div>
  );
}

export default App;
