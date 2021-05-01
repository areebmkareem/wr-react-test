import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import {useForm, Controller} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import React from 'react';
import {getUsers} from '../../Store/Actions/Users';

import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {getUsersFromStore} from '../../Store/reduxSelectors';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return {name, calories, fat, carbs, protein};
}

const rows = [createData('Frozen yoghurt', 159, 6.0, 24, 4.0), createData('Ice cream sandwich', 237, 9.0, 37, 4.3), createData('Eclair', 262, 16.0, 24, 6.0), createData('Cupcake', 305, 3.7, 67, 4.3), createData('Gingerbread', 356, 16.0, 49, 3.9)];
const Login = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => getUsersFromStore(state));

  const {formState, handleSubmit, control} = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });
  const onSubmit = (data) => {};

  const validationErrors = formState.errors;

  React.useEffect(() => {
    dispatch(getUsers());
  }, []);
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid container alignItems="center" justify="space-between">
          <Grid item>
            <Typography>Users</Typography>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary">
              <Typography>Create User</Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>DOB</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userList.map((item, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    <Grid style={{display: 'flex', alignItems: 'center'}}>
                      <Avatar src={item.user.picture.thumbnail} style={{marginRight: 10}} />
                      <Typography> {`${item.user.name.first} ${item.user.name.last}`}</Typography>
                    </Grid>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Typography> {item.user.email}</Typography>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Typography> {item.user.username}</Typography>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Typography> {item.user.phone}</Typography>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Typography> {item.user.dob}</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default Login;
