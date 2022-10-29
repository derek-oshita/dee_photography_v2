import { Box, Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';

import { API } from '../../services/api.service';
import { config } from '../../config';

export const LoginButton = (props) => {
  const { email, password } = props.values;
  const api = new API();

  async function handleClick() {
    const payload = { email, password };
    const url = config.API_URL + '/auth/login';

    api
      .post(url, payload)
      .then((res) => {
        console.log('res', res);
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
