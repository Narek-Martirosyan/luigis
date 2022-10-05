import './App.css';
import { MyRoutes } from './myRoutes';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { getUser } from './api/user';
import { useDispatch, useSelector } from 'react-redux';
import { changeUserData } from './features/user/userSlice';

function App() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const cartCounter = useSelector(state => state.user.cartCounter);
  const localToken = useSelector(state => state.user.token);

  useEffect(() => {
    getUser().then(res => dispatch(changeUserData(res?.data)))
      .catch(() => !localToken && localStorage.removeItem("token"));
  }, [pathname, cartCounter]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App">
      <MyRoutes />
    </div>
  );
}

export default App;
