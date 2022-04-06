import { useEffect, useState } from 'react';

import './navbar.scss';

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);

  const toggleNavSmallScreen = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setLargeur(window.innerWidth);

      if (window.innerWidth > 500) {
        setToggleMenu(false);
      }
    };

    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

  return (
    <div className="container">

      <ul className="alignement">

        <li>logo</li>
        <li id="title">Boule de poils</li>
      </ul>
      {(toggleMenu || largeur > 500) && (
        <ul className="Navbar-Menu">

          <li className="items">Mes Favoris</li>
          <li className="items">Rechercher un animal</li>
          <li className="items">Conseils pour adoption</li>
          <li className="items">Les associations</li>
          <li className="items">Admin/compte user</li>
        </ul>
      )}

      <ul className="alignementlogin">

        <li>Login</li>
      </ul>

      <button type="button" onClick={toggleNavSmallScreen} className="btn">---</button>

    </div>
  );
};

export default NavBar;
