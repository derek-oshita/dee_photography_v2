import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

import { UserAPI } from '../../services/auth/userApi.service';

export const DashboardView = (props) => {
  const { currentUser } = props;
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const userAPI = new UserAPI();

  useEffect(() => {
    if (currentUser.isLoggedIn) {
      console.log('currentUser: ', currentUser);

      // fetchUser(currentUser.id, currentUser.token);
    }
  }, [currentUser]);

  const fetchUser = async (userID, token) => {
    const data = await userAPI.getUserByID(userID, token);
  };

  return (
    <div>
      <p>Welcome, {userData?.email}</p>
    </div>
  );
};
