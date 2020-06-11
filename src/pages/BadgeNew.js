import React from "react";

import "../components/styles/BadgeNew.css";
import header from "../images/badge-header.svg";
import Navbar from "../components/Navbar";
import Badge from "../components/badges";

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img src={header} alt="Logo" className="image-fluid" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName="Andres"
                lastName="Carrion"
                jobTittle="System Engineer"
                twitter="@freehyoga"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
