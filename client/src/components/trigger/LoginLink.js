import { Link, Typography } from '@mui/material';

export const LoginLink = (props) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Have an account? '}
      <Link color="inherit" href="/login">
        Login here.
      </Link>{' '}
    </Typography>
  );
};
