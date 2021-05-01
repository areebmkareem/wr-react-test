import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
        <Grid item>
          <Typography>Welcome Back</Typography>
        </Grid>
        <Grid item>
          <Controller
            name="username"
            control={control}
            rules={{
              required: true,
            }}
            defaultValue=""
            render={({field}) => <TextField error={validationErrors.username} label="Username" variant="outlined" {...field} />}
          />
        </Grid>
        <Grid item>
          <Controller
            name="password"
            control={control}
            rules={{
              required: true,
            }}
            defaultValue=""
            render={({field}) => <TextField error={validationErrors.password} label="Password" variant="outlined" type="password" {...field} />}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" type="submit">
            LOGIN
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Login;
