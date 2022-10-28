import { Avatar, TextField, Paper, Box, Grid, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useState } from 'react';

import { Copyright } from '../trigger/Copyright';
import { RegisterButton } from '../trigger/RegisterButton';

export const RegistrationForm = () => {
  const [registerValues, setRegisterValues] = useState({
    name: '',
    email: '',
    password: '',
  });

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
          {/* NAME */}
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="email"
            autoComplete="name"
            autoFocus
          />
          {/* EMAIL */}
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          {/* PASSWORD */}
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <RegisterButton />
          <Copyright sx={{ mt: 5 }} />
        </Box>
      </Box>
    </Grid>
  );
};
