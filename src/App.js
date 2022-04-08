import logo from './logo.svg';
import './App.css';
import { CompA } from './compA';
import Routes from './component/router/routes';
import NoteState from './context/notes/NoteState';
function App() {
  return (
    <div className="App">
      <CompA/>
      <NoteState>
      <Routes/>
      </NoteState>
     
    </div>
  );
}

export default App;
