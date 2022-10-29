import { Link, Typography } from '@mui/material';

export const RegisterLink = (props) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Need an account? '}
      <Link color="inherit" href="/register">
        Register here.
      </Link>{' '}
    </Typography>
  );
};
