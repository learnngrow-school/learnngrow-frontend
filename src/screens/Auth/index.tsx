import { useDispatch } from 'react-redux';
import { setToken } from '../../store/authSlice';
import { useEffect } from 'react';

interface IAuthProps {
    children?: React.ReactNode;
  }

const Auth = ({ children }: IAuthProps) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        if (token) {
          dispatch(setToken(token));
        }
      }, []);

    return <>{children}</>;
}

export default Auth