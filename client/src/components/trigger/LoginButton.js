import { Box, Button, CircularProgress } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useKeypress } from '../../hooks/keypress.hooks';
import { LoginAPI } from '../../services/auth/loginApi.service';

export const LoginButton = (props) => {
  const { email, password } = props.values;
  const [isLoading, setIsLoading] = useState(false);

  const loginAPI = new LoginAPI();
  const navigate = useNavigate();
  const enterKeyCode = 13;

  useKeypress(enterKeyCode, handleClick);

  async function handleClick() {
    const payload = { email, password };
    setIsLoading(true);
    await loginAPI
      .post(payload)
      .then((res) => {
        localStorage.setItem('access_token', res.token);
        props.setCurrentUser({
          userID: res.userID,
          isLoggedIn: true,
        });
        setIsLoading(false);
        navigate('/dashboard');
      })
      .catch((err) => {
        setIsLoading(false);
        props.setError(err);
      });
  }

  return (
    <Box sx={{ textAlign: 'center' }}>
      {isLoading ? (
        <CircularProgress color="secondary" />
      ) : (
        <Button
          onClick={handleClick}
          variant="contained"
          sx={{ mt: 3, mb: 2, width: '50%', bgcolor: 'primary.main' }}
        >
          Submit <LoginIcon />
        </Button>
      )}
    </Box>
  );
};
