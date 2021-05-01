import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import Login from './Components/Auth/Login';
import UserList from './Components/UserList';
import {getCurrentUser, currentUserLoading} from '../src/Store/reduxSelectors';
import React from 'react';
import {getUserInfo} from './Store/Actions/Auth';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => getCurrentUser(state));
  const loading = useSelector((state) => currentUserLoading(state));

  React.useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  const PublicRoutes = () => (
    <Switch>
      <Route path="/">
        <Login />
      </Route>
    </Switch>
  );
  const PrivateRoutes = () => (
    <Switch>
      <Route path="/">
        <UserList />
      </Route>
    </Switch>
  );
  return (
    <div className="App">
      {loading ? (
        <Grid container justify="center" alignItems="center">
          <Grid item style={{padding: 20}}>
            <CircularProgress />
          </Grid>
        </Grid>
      ) : (
        <Router>{currentUser.username ? <PrivateRoutes /> : <PublicRoutes />}</Router>
      )}
    </div>
  );
}

export default App;
