import logo from './logo.svg';
import { Screen } from './Screen.tsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Screen onClick={console.log('click')}/>
      </header>
    </div>
  );
}

export default App;
