import React from "react";
import confLogo from "../images/badge-header.svg";
import itsMe from "../images/hero.jpg";
import "./styles/Badges.css";
class Badge extends React.Component {
  /* Metodo obligatorio */
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo" />
        </div>
        <div className="Badge__section-name">
          <img className="Badge__avatar" src={itsMe} alt="Avatar" />
          <h1>
            Andres <br /> Carrion
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3>Java Engineer</h3>
          <div>@freehyoga</div>
        </div>
        <div className="Badge__footer">#CarriConf</div>
      </div>
    );
  }
}

export default Badge;
