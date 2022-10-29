import { Box, Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom';

import { useKeypress } from '../../hooks/keypress.hooks';
import { API } from '../../services/api.service';
import { config } from '../../config';

export const LoginButton = (props) => {
  const { email, password } = props.values;
  const api = new API();
  const navigate = useNavigate();
  const enterKeyCode = 13;

  useKeypress(enterKeyCode, handleClick);

  async function handleClick() {
    const payload = { email, password };
    const url = config.API_URL + '/auth/login';

    api
      .post(url, payload)
      .then((res) => {
        console.log('res', res);
        navigate('/dashboard');
      })
      .catch((err) => {
        console.log('err', err);
      });
  }

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Button
        onClick={handleClick}
        variant="contained"
        sx={{ mt: 3, mb: 2, width: '50%', bgcolor: 'primary.main' }}
      >
        Submit <LoginIcon />
      </Button>
    </Box>
  );
};
