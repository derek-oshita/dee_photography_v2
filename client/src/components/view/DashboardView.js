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
  }, [currentUser]);

  const fetchUser = async (userID, token) => {
    await userAPI
      .getUserByID(userID, token)
      .then((res) => setUserData({ name: res.name, email: res.email }))
      .catch((err) => console.log('err', err));
  };

  return (
    <div>
      <p>Welcome, {userData?.email}</p>
    </div>
  );
};
