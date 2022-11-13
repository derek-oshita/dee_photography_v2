import { Routes, Route, Navigate } from 'react-router-dom';

import { DashboardView } from '../components/view/DashboardView';
import { LandingView } from '../components/view/LandingView';
import { LoginView } from '../components/view/LoginView';
import { RegisterView } from '../components/view/RegisterView';

export const Router = (props) => {
  const { currentUser, setCurrentUser } = props;

  const renderViewIfLoggedIn = (view) => {
    if (currentUser.isLoggedIn) {
      return view;
    }
    return <Navigate to="/login" replace={true} />;
  };

  return (
    <Routes>
      <Route path="/" element={<LandingView />} />
      <Route path="/register" element={<RegisterView />} />
      <Route
        path="/login"
        element={<LoginView setCurrentUser={setCurrentUser} />}
      />

      {/* Routes that require login */}
      <Route
        path="/dashboard"
        element={renderViewIfLoggedIn(
          <DashboardView currentUser={currentUser} />,
        )}
      />
    </Routes>
  );
};
