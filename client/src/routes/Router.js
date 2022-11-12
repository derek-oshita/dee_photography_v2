import { useState } from 'react';
import { Routes, Route, Redirect } from 'react-router-dom';

import { DashboardView } from '../components/view/DashboardView';
import { LandingView } from '../components/view/LandingView';
import { LoginView } from '../components/view/LoginView';
import { RegisterView } from '../components/view/RegisterView';

export const Router = (props) => {
  const { currentUser, setCurrentUser } = props;

  const renderPageIfLoggedIn = (element) => {
    if (!currentUser) {
      return <LoginView />;
    }
    return element;
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
        element={renderPageIfLoggedIn(
          <DashboardView currentUser={currentUser} />,
        )}
      />
    </Routes>
  );
};
