import { useState } from 'react';
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
      <Link to="/" label="homepage"><img className="logo__link" src={logo} alt="logo" /></Link>
      <h1 className="navbar__title">Boules de poil</h1>
      <ul className="navbar__links">
        {connectedUser && (
          <li className="navbar__item slideInDown-1 ">
            <Link href="/favoris" className="navbar__link">
              Mes favoris
            </Link>
          </li>
        )}
        <li className="navbar__item slideInDown-2 ">
          <Link to="/#searchForm" className="navbar__link">
            Rechercher un animal
          </Link>
        </li>
        <li className="navbar__item slideInDown-3">
          <Link to="/conseils" className="navbar__link">
            Conseils pour l'adoption
          </Link>
        </li>
        <li className="navbar__item slideInDown-4">
          <Link to="/associations" className="navbar__link">
            Les associations
          </Link>
        </li>
        {(role !== 'ROLE_USER' && role !== null) && (
          <li className="navbar__item slideInDown-5">
            <Link to="/login" className="navbar__link">
              Admin/compte user
            </Link>
          </li>
        )}
        {connectedUser ? (
          <li className="navbar__item slideInDown-6">
            <Link
              to="/"
              className="navbar__link"
              onClick={() => (dispatch(logout()))}
            >
              Logout
            </Link>
          </li>
        ) : (
          <li className="navbar__item slideInDown-6">
            <Link
              to="/login"
              className="navbar__link"
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
