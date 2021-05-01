import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import {useForm, Controller} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {signInWithUsernameAndPassword} from '../../../Store/Actions/Auth';

const Login = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const {formState, handleSubmit, control} = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });
  const onSubmit = (data) => {
    dispatch(signInWithUsernameAndPassword(data));
  };

  const validationErrors = formState.errors;

  return (
    <Grid container style={{height: '100vh'}} justify="center" alignItems="center">
      <Grid item xs={12} md={4}>
        <Paper style={{padding: '50px 20px'}}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container justify="center" alignItems="center" spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h3">Welcome Back</Typography>
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="username"
                  control={control}
                  rules={{
                    required: true,
                  }}
                  defaultValue=""
                  render={({field}) => <TextField fullWidth error={validationErrors.username} label="Username" variant="outlined" {...field} />}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="password"
                  control={control}
                  rules={{
                    required: true,
                  }}
                  defaultValue=""
                  render={({field}) => <TextField fullWidth error={validationErrors.password} label="Password" variant="outlined" type="password" {...field} />}
                />
              </Grid>
              <Grid item xs={12}>
                <Button fullWidth variant="contained" color="primary" type="submit">
                  LOGIN
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;
