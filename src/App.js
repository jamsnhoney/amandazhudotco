import './App.css';

// pages
import Navbar from './pages/Navbar';
import Simple from './pages/Simple';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Simple />
        <Footer />
      </header>
    </div>
  );
}

export default App;
