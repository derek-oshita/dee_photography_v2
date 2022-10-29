import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';

import { LandingView } from '../components/view/LandingView';
import { RegisterView } from '../components/view/RegisterView';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <LandingView />,
  },
  {
    path: '/register',
    element: <RegisterView />,
  },
]);
