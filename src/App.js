import logo from './logo.svg';
import './App.css';
import {useSelector} from 'react-redux';
import Login from './Components/Auth/Login';
import UserList from './Components/UserList';

function App() {
  // const state = useSelector((state) => state);

  return (
    <div className="App">
      <UserList />
    </div>
  );
}

export default App;
