import logo from './logo.svg';
import './App.css';
import {useSelector} from 'react-redux';
import Login from './Components/Auth/Login';

function App() {
  // const state = useSelector((state) => state);

  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
