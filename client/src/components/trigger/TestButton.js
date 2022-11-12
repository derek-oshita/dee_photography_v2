import { Box, Button } from '@mui/material';

import { useKeypress } from '../../hooks/keypress.hooks';
import { DashboardAPI } from '../../services/auth/dashboardApi.service';
import { config } from '../../config';

export const TestButton = () => {
  const api = new DashboardAPI();
  const enterKeyCode = 13;

  useKeypress(enterKeyCode, handleClick);

  async function handleClick() {
    const url = config.API_URL + '/welcome';

    api
      .get(url, token)
      .then((res) => {
        console.log('res: ', res);
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
