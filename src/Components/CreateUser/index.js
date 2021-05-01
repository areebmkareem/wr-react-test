import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import {useForm, Controller} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import React from 'react';
import {addUser} from '../../Store/Actions/Users';

const CreateUser = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const {formState, handleSubmit, control} = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });
  const onSubmit = (data) => {
    console.log('data: ', data);
    dispatch(addUser(data));
  };

  const validationErrors = formState.errors;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={12}>
          <Typography>Create User</Typography>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Controller
            name="name.title"
            control={control}
            // rules={{
            //   required: true,
            // }}
            defaultValue=""
            render={({field}) => <TextField fullWidth error={validationErrors.username} label="Mrs" variant="outlined" {...field} />}
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Controller
            name="name.first"
            control={control}
            // rules={{
            //   required: true,
            // }}
            defaultValue=""
            render={({field}) => <TextField fullWidth error={validationErrors.password} label="First Name" variant="outlined" {...field} />}
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Controller
            name="name.last"
            control={control}
            // rules={{
            //   required: true,
            // }}
            defaultValue=""
            render={({field}) => <TextField fullWidth error={validationErrors.password} label="Last Name" variant="outlined" {...field} />}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            name="username"
            control={control}
            // rules={{
            //   required: true,
            // }}
            defaultValue=""
            render={({field}) => <TextField fullWidth error={validationErrors.password} label="Username" variant="outlined" {...field} />}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            name="gender"
            control={control}
            // rules={{
            //   required: true,
            // }}
            defaultValue=""
            render={({field}) => <TextField fullWidth error={validationErrors.password} label="Gender" variant="outlined" {...field} />}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="email"
            control={control}
            // rules={{
            //   required: true,
            // }}
            defaultValue=""
            render={({field}) => <TextField fullWidth error={validationErrors.password} label="Email" variant="outlined" {...field} />}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="password"
            control={control}
            // rules={{
            //   required: true,
            // }}
            defaultValue=""
            render={({field}) => <TextField fullWidth error={validationErrors.password} label="Password" variant="outlined" {...field} />}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="dob"
            control={control}
            // rules={{
            //   required: true,
            // }}
            defaultValue=""
            render={({field}) => <TextField fullWidth error={validationErrors.password} label="DOB" variant="outlined" {...field} />}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="phone"
            control={control}
            // rules={{
            //   required: true,
            // }}
            defaultValue=""
            render={({field}) => <TextField fullWidth error={validationErrors.password} label="Phone" variant="outlined" {...field} />}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="outlined" color="primary">
            Cancel
          </Button>
          <Button variant="contained" color="primary" type="submit">
            CreateUser
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default CreateUser;
