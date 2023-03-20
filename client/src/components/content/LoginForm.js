import Avatar from '@mui/material/Avatar'
import TextField from '@mui/material/TextField'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControl from '@mui/material/FormControl';

import { useState, useEffect } from 'react';

import { Copyright } from '../trigger/Copyright';
import { RegisterLink } from '../trigger/RegisterLink';
import { LoginButton } from '../trigger/LoginButton';
import { useToastAPI } from '../../hooks/useToastAPI.hooks';

import { useToast, immediateToast } from 'izitoast-react';
import "izitoast-react/dist/iziToast.css";


export const LoginForm = (props) => {
  const [loginValues, setLoginValues] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const isEmailAddressFieldEmpty = Boolean(error) && loginValues.email.length === 0;
  const isPasswordFieldEmpty = Boolean(error) && loginValues.password.length === 0;

  


  const showMessage = useToast({
    title: "Test",
    message: "Show my message :)",
    theme: "light",
    icon: "warn"
  });

  useEffect(() => {
    

    if (error) {

      showMessage()
      
    }
  }, [error]);

  function handleChange(event) {
    event.preventDefault();
    setLoginValues(() => {
      return {
        ...loginValues,
        [event.target.id]: event.target.value,
      };
    });
  }

  return (
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          {/* EMAIL */}
          <TextField
            required
            fullWidth
            autoFocus
            margin="normal"
            autoComplete="email-address"
            id="email"
            label="Email Address"
            name="email-login"
            value={loginValues.email}
            onChange={handleChange}
            error={isEmailAddressFieldEmpty}
          />
          {/* PASSWORD */}
          <TextField
            required
            fullWidth
            margin="normal"
            autoComplete="current-password"
            name="password-login"
            label="Password"
            type="password"
            id="password"
            value={loginValues.password}
            onChange={handleChange}
            error={isPasswordFieldEmpty}
          />
          <LoginButton
            email={loginValues.email}
            password={loginValues.password}
            setCurrentUser={props.setCurrentUser}
            setError={setError}
          />
          <RegisterLink sx={{ mt: 2.5 }} />
        </Box>
      </Box>
    </Grid>
  );
};
