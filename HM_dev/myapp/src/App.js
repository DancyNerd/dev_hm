import logo from './logo.png';
import './App.css';
//import './index.css';
import AppRouting from './jsrouting';

function App() {
  return (
    <div className="App">
      <img src={logo} name="logo" align='left'>
      </img><br />
      <AppRouting />
    </div>
  );
}

export default App;
