import { Box, Button } from '@mui/material';

import { useKeypress } from '../../hooks/keypress.hooks';
import { API } from '../../services/api.service';
import { config } from '../../config';

export const RegisterButton = (props) => {
  const { email, password } = props.values;
  const api = new API();
  const enterKeyCode = 13;

  useKeypress(enterKeyCode, handleClick);

  async function handleClick() {
    const payload = { email, password };
    const url = config.API_URL + '/auth/register';

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
        Submit
      </Button>
    </Box>
  );
};
