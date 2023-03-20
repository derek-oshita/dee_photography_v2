import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import LoginIcon from '@mui/icons-material/Login';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import { useKeypress } from '../../hooks/keypress.hooks';
import { LoginAPI } from '../../services/auth/loginApi.service';
import { useToastAPI } from '../../hooks/useToastAPI.hooks';

export const LoginButton = (props) => {
  const { email, password, setCurrentUser, setError } = props;
  const [isLoading, setIsLoading] = useState(false);

  const loginAPI = new LoginAPI();
  const navigate = useNavigate();
  const enterKeyCode = 13;

  useKeypress(enterKeyCode, handleClick);

  async function handleClick() {
    const payload = { email, password, };
    setIsLoading(true);
    setError(null)
    await loginAPI
      .post(payload)
      .then((res) => {
        localStorage.setItem('access_token', res.token);
        setCurrentUser({
          userID: res.userID,
          isLoggedIn: true,
        });
        setIsLoading(false);
        navigate('/dashboard');
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
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
