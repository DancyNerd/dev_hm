import logo from './logo.svg';
import './App.css';
import LoginForm from './loginform';
import AcctForm from './accountform';

function App() {
  //Add cookie logic??
  /*
  if cookie:
  return (
    <div className="App">
      <HomeView />
    </div>
  );
  else:
  return
  */
  return (
    <div className="App">
      <AcctForm />
    </div>
  );
}

export default App;
