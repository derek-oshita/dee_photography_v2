import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

import { UserAPI } from '../../services/auth/userApi.service';

export const DashboardView = (props) => {
  const { currentUser } = props;
  const [userData, setUserData] = useState({
    name: '',
    email: '',
  });

  const userAPI = new UserAPI();
  const navigate = useNavigate();
  const token = localStorage.getItem('access_token') || '';

  useEffect(() => {
    if (currentUser.isLoggedIn && token) {
      fetchUser(currentUser.userID, token);
    }
  }, [currentUser, token]);

  const fetchUser = async (userID, token) => {
    await userAPI
      .getUserByID(userID, token)
      .then((res) => setUserData({ name: res.name, email: res.email }))
      .catch((err) => navigate('/login'));
  };

  const renderGreeting = (data) => {
    return data.name ? data.name : data.email;
  };

  return (
    <div>
      <p>Welcome, {renderGreeting(userData)}</p>
    </div>
  );
};
