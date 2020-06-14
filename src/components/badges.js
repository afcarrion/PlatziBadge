import React from "react";

import "./styles/Badges.css";
import confLogo from "../images/badge-header.svg";
import itsMe from "../images/hero.jpg";
import Gravatar from "./Gravatar";

class Badge extends React.Component {
  /* Metodo obligatorio */
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo" />
        </div>
        <div className="Badge__section-name">
          <Gravatar className="Badge__avatar" email={this.props.email} />
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3>{this.props.jobTittle}</h3>
          <div>{this.props.twitter}</div>
        </div>
        <div className="Badge__footer">#CarriConf</div>
      </div>
    );
  }
}

export default Badge;
