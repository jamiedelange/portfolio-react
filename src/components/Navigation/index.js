import React from "react";
import { Link } from 'react-router-dom';

function Navigation(props) {
  const {
    aboutSelected,
    portfolioSelected,
    /* setAboutSelected,
    setPortfolioSelected, */
  } = props;

  /* function selectAbout() {
    setAboutSelected(true);
    setPortfolioSelected(false);
  }
  function selectPortfolio() {
    setAboutSelected(false);
    setPortfolioSelected(true);
  } */

  return (
    <header className="flex-row">
      <h1 className="title">
        JAMIE DE LANGE
      </h1>
      <nav className="nav-main">
        <ul className="flex-row">
          <Link to='/'>
            <li className={`${aboutSelected ? 'navActive' : 'mx-2 navH'}`}>
              <a href="#about" /* onClick={() => selectAbout()} */>About me</a>
            </li>
          </Link>
          <Link to='/portfolio'>
            <li className={`${portfolioSelected ? 'navActive' : 'mx-2 navH'}`}>
              <a href="#portfolio" /* onClick={() => selectPortfolio()} */>Portfolio</a>
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;