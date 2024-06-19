import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AuthSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    if (token) {
      localStorage.setItem('token', token);
      // Redirect to home or another page
      navigate('/homePage');
    } else {
      navigate('/login');
    }
  }, [location, navigate]);

  return <div>Loading...</div>;
};

export default AuthSuccess;
