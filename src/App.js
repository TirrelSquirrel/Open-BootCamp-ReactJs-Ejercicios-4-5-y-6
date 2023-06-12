import logo from './logo.svg';
import './App.css';
import ClockClase from './components/ClockClase';
import Clock from './components/Clock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ClockClase></ClockClase>
      </header>
      <div>
        <Clock nombre='Baute'></Clock>
      </div>
    </div>
  );
}

export default App;
