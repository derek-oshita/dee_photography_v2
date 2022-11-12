import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

import { UserAPI } from '../../services/auth/userApi.service';

export const DashboardView = (props) => {
  const { currentUser } = props;
  const navigate = useNavigate();
  const userAPI = new UserAPI();

  useEffect(() => {
    if (currentUser) {
    }
  }, [currentUser]);

  const fetchUser = async () => {
    const data = userAPI;
  };

  return (
    <div>
      <p>Welcome to your Dashboard</p>
    </div>
  );
};
