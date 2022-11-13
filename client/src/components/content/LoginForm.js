import { Avatar, TextField, Paper, Box, Grid, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useState } from 'react';

import { Copyright } from '../trigger/Copyright';
import { RegisterLink } from '../trigger/RegisterLink';
import { LoginButton } from '../trigger/LoginButton';

export const LoginForm = (props) => {
  const [loginValues, setLoginValues] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);

  function handleChange(event) {
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
          />
          <LoginButton
            values={loginValues}
            setCurrentUser={props.setCurrentUser}
            setError={setError}
          />
          <RegisterLink sx={{ mt: 2.5 }} />
        </Box>
      </Box>
    </Grid>
  );
};
