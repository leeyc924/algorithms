import { postStart } from '@api';
import { useEffect, useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';

const AuthLayout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate= useNavigate();
  const a = useParams();

  useEffect(() => {
    (async function () {
      try {
        const response = await postStart({ problem: 1 });
        localStorage.setItem('authorization', response.auth_key);
      } catch (error) {
        console.log(error);
        navigate('/problem');
      }
    })();
  }, []);

  return (

      isLoading ?'...loading' : 
      <Outlet />
       

  );
};

export default AuthLayout;
