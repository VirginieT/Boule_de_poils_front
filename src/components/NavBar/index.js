import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from 'src/actions/login';


import './navbar.scss';

import logo from 'src/assets/img/logo_bdp_dark.png';

const NavBar = () => {
  const role = useSelector((state) => (state.Login.role));
  const dispatch = useDispatch();
  const connectedUser = useSelector((state) => (state.Login.tokenUserConnected));

  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className={`navbar ${showLinks ? 'show-nav' : 'hide-nav'}`}>
      <a href="/" label="homepage" className="logo__link"><img className="navbar__logo" src={logo} alt="" /></a>
      <h1 className="navbar__title">Boules de poil</h1>
      <ul className="navbar__links">
        {connectedUser && (
          <li className="navbar__item slideInDown-1 ">
            <a href="/#searchForm" className="navbar__link">
              Mes favoris
            </a>
          </li>
        )}
        <li className="navbar__item slideInDown-2 ">
          <a href="/" className="navbar__link">
            Rechercher un animal
          </a>
        </li>
        <li className="navbar__item slideInDown-3">
          <a href="/conseils" className="navbar__link">
            Conseils pour l'adoption
          </a>
        </li>
        <li className="navbar__item slideInDown-4">
          <a href="/associations" className="navbar__link">
            Les associations
          </a>
        </li>
        {(role !== 'ROLE_USER' && role !== null) && (
          <li className="navbar__item slideInDown-5">
            <a href="/login" className="navbar__link">
              Admin/compte user
            </a>
          </li>
        )}
        {connectedUser ? (
          <li>
            <Link
              to="/"
              className="items"
              onClick={() => (dispatch(logout()))}
            >
              Logout
            </Link>
          </li>
        ) : (
          <li>
            <Link
              to="/login"
              className="items"
            >
              Login
            </Link>
          </li>
        )}
      </ul>
      <button type="button" className="navbar__burger" onClick={handleShowLinks}>
        <span className="burger-bar" />
      </button>
    </nav>
  );
};

export default NavBar;
