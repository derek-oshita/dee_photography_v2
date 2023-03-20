import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useKeypress } from '../../hooks/keypress.hooks';
import { RegisterAPI } from '../../services/auth/registerApi.service';
import { config } from '../../config';

export const RegisterButton = (props) => {
  const { email, password, name, setError } = props.values;
  const registerAPI = new RegisterAPI();
  const navigate = useNavigate();
  const enterKeyCode = 13;

  useKeypress(enterKeyCode, handleClick);

  async function handleClick() {
    const payload = { email, password, name };
    const url = config.API_URL + '/auth/register';

    registerAPI
      .post(url, payload)
      .then((res) => {
        // todo: notify of success!
        console.log(res);
        navigate('/login');
      })
      .catch((err) => {
        console.log('err: ', err);
        setError(err)
      });
  }

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Button
        onClick={handleClick}
        variant="contained"
        sx={{ mt: 3, mb: 2, width: '50%', bgcolor: 'primary.main' }}
      >
        Submit
      </Button>
    </Box>
  );
};
