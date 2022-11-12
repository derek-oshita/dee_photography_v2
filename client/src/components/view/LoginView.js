import { Grid } from '@mui/material';
import { LoginImage } from '../content/LoginImage';
import { LoginForm } from '../content/LoginForm';

/**
 https://github.com/mui/material-ui/tree/v5.10.11/docs/data/material/getting-started/templates/sign-in-side
 */

export const LoginView = (props) => {
  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <LoginImage />
      <LoginForm setCurrentUser={props.setCurrentUser} />
    </Grid>
  );
};
