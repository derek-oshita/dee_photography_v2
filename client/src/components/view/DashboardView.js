import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

export const DashboardView = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('token');
    if (!user) {
      navigate('/login');
    }
  }, []);

  return (
    <div>
      <p>Welcome to your Dashboard</p>
    </div>
  );
};
