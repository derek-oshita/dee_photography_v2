import { Box, Button } from '@mui/material';

export const RegisterButton = (props) => {
  function handleSubmit() {
    console.log('submit');
  }
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Button
        onSubmit={handleSubmit}
        type="submit"
        variant="contained"
        sx={{ mt: 3, mb: 2, width: '50%' }}
      >
        Submit
      </Button>
    </Box>
  );
};
