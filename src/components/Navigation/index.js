import React from "react";

function Navigation(props) {
  const {
    aboutSelected,
    portfolioSelected,
    resumeSelected,
    setAboutSelected,
    setPortfolioSelected,
    setResumeSelected,
  } = props;

  function selectAbout() {
    //setContactSelected(false);
    setAboutSelected(true);
    setPortfolioSelected(false);
    setResumeSelected(false);
  }
  function selectPortfolio() {
    //setContactSelected(false);
    setAboutSelected(false);
    setPortfolioSelected(true);
    setResumeSelected(false);
  }
  function selectResume() {
    //setContactSelected(false);
    setAboutSelected(false);
    setPortfolioSelected(false);
    setResumeSelected(true);
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
          <li className={`${resumeSelected ? 'navActive' : 'mx-2 navH'}`}>
            <a href="#resume" onClick={() => selectResume()}>Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;