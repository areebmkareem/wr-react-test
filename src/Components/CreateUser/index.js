import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import {useForm, Controller} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import React from 'react';
import {addUser} from '../../Store/Actions/Users';

import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker} from '@material-ui/pickers';

const CreateUser = ({onClose}) => {
  const dispatch = useDispatch();

  const {formState, handleSubmit, control} = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });
  const onSubmit = (data) => {
    dispatch(addUser(data));
    onClose();
  };

  const validationErrors = formState.errors;

  return (
    <Grid style={{padding: 20}}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={12}>
            <Grid style={{paddingBottom: 20}}>
              <Typography variant="h4">Create User</Typography>
            </Grid>
            <Divider />
          </Grid>

          <Grid item xs={12} sm={2}>
            <Controller
              name="name.title"
              control={control}
              rules={{
                required: true,
              }}
              defaultValue=""
              render={({field}) => <TextField fullWidth error={validationErrors.name && validationErrors.name.title} label="Title" variant="outlined" {...field} />}
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <Controller
              name="name.first"
              control={control}
              rules={{
                required: true,
              }}
              defaultValue=""
              render={({field}) => <TextField fullWidth error={validationErrors.name && validationErrors.name.first} label="First Name" variant="outlined" {...field} />}
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <Controller
              name="name.last"
              control={control}
              rules={{
                required: true,
              }}
              defaultValue=""
              render={({field}) => <TextField fullWidth error={validationErrors.name && validationErrors.name.last} label="Last Name" variant="outlined" {...field} />}
            />
          </Grid>
          <Grid item xs={6}>
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
          <Grid item xs={6}>
            <Controller
              name="gender"
              control={control}
              rules={{
                required: true,
              }}
              defaultValue=""
              render={({field}) => <TextField fullWidth error={validationErrors.gender} label="Gender" variant="outlined" {...field} />}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="email"
              control={control}
              rules={{
                required: true,
              }}
              defaultValue=""
              render={({field}) => <TextField fullWidth error={validationErrors.email} label="Email" variant="outlined" {...field} />}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="password"
              control={control}
              rules={{
                required: true,
              }}
              defaultValue=""
              render={({field}) => <TextField fullWidth error={validationErrors.password} label="Password" variant="outlined" {...field} />}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="dob"
              control={control}
              rules={{
                required: true,
              }}
              defaultValue=""
              render={({field: {value, onChange}}) => (
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    error={validationErrors.dob}
                    id="date-picker-dialog"
                    label="DOB"
                    format="MM/dd/yyyy"
                    inputVariant="outlined"
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                    fullWidth
                    value={value || null}
                    maxDate={new Date()}
                    onChange={onChange}
                  />
                </MuiPickersUtilsProvider>
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="phone"
              control={control}
              rules={{
                required: true,
              }}
              defaultValue=""
              render={({field}) => <TextField fullWidth error={validationErrors.phone} label="Phone" variant="outlined" {...field} />}
            />
          </Grid>
          <Grid item xs={12}>
            <Divider />
            <Grid container justify="space-between" alignItems="center" spacing={2} style={{paddingTop: 20}}>
              <Grid item xs={12} md={6}>
                <Button fullWidth variant="outlined" color="primary" onClick={() => onClose()}>
                  Cancel
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                <Button fullWidth variant="contained" color="primary" type="submit">
                  Save
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};

export default CreateUser;
