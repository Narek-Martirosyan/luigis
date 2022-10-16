import './App.css';
import { MyRoutes } from './myRoutes';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUser } from './api/user';
import { useDispatch, useSelector } from 'react-redux';
import { changeUserData } from './features/user/userSlice';
import goTop from "./img/goTop.png";

function App() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartCounter = useSelector(state => state.user.cartCounter);
  const localToken = useSelector(state => state.user.token);
  const [scrollTo, setScrollTo] = useState(false);

  useEffect(() => {
    console.log(123);
    getUser().then(res => dispatch(changeUserData(res?.data)))
      .catch(() => {
        !localToken && localStorage.removeItem("token");
        navigate(pathname);
      });
  }, [pathname, cartCounter]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  window.addEventListener("scroll", function () {
    if (this.scrollY > 1000) {
      setScrollTo(true);
    } else {
      setScrollTo(false);
    }
  })

  
  return (
    <div className="App">
      <MyRoutes />
      {scrollTo && <img src={goTop} alt='scrolltotop' className='go-to-top-img' onClick={() => window.scrollTo(0, 0)} />}
    </div>
  );
}

export default App;
