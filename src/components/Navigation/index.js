import React from "react";

function Navigation(props) {
  const {
    aboutSelected,
    portfolioSelected,
    setAboutSelected,
    setPortfolioSelected,
  } = props;

  function selectAbout() {
    //setContactSelected(false);
    setAboutSelected(true);
    setPortfolioSelected(false);
  }
  function selectPortfolio() {
    //setContactSelected(false);
    setAboutSelected(false);
    setPortfolioSelected(true);
  }

  return (
    <header  className="flex-row">
      <h1 className="title">
        JAMIE DE LANGE
      </h1>
      <nav className="nav-main">
        <ul className="flex-row">
          <li className={`${aboutSelected ? 'navActive' : 'mx-2 navH'}`}>
            <a href="#about" onClick={() => selectAbout()}>About me</a>
          </li>
          <li className={`${portfolioSelected ? 'navActive' : 'mx-2 navH'}`}>
            <a href="#portfolio" onClick={() => selectPortfolio()}>Portfolio</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;