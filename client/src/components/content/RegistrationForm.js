import { Avatar, TextField, Paper, Box, Grid, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useState } from 'react';

import { LoginLink } from '../trigger/LoginLink';
import { RegisterButton } from '../trigger/RegisterButton';

export const RegistrationForm = () => {
  const [registerValues, setRegisterValues] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  
  console.log('error ------->', error)

  function handleChange(event) {
    setRegisterValues(() => {
      return {
        ...registerValues,
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
          Register
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          {/* Name */}
          <TextField
            fullWidth
            autoFocus
            margin="normal"
            autoComplete="name"
            id="name"
            label="Name"
            name="name"
            value={registerValues.name}
            onChange={handleChange}
          />
          {/* EMAIL */}
          <TextField
            required
            fullWidth
            autoFocus
            margin="normal"
            autoComplete="email-address"
            id="email"
            label="Email Address"
            name="email"
            value={registerValues.email}
            onChange={handleChange}
          />
          {/* PASSWORD */}
          <TextField
            required
            fullWidth
            margin="normal"
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={registerValues.password}
            onChange={handleChange}
          />
          <RegisterButton values={registerValues} onSetError={setError}/>
          <LoginLink sx={{ mt: 2.5 }} />
        </Box>
      </Box>
    </Grid>
  );
};
