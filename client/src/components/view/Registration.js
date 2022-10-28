import { Grid } from '@mui/material';
import { RegistrationImage } from '../content/RegistrationImage';
import { RegistrationForm } from '../content/RegistrationForm';

/**
 https://github.com/mui/material-ui/tree/v5.10.11/docs/data/material/getting-started/templates/sign-in-side
 */

export const Registration = () => {
  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <RegistrationImage />
      <RegistrationForm />
    </Grid>
  );
};
