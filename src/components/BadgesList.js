import React from "react";
import "../components/styles/Badges.css";
import { Link } from "react-router-dom";
import Gravatar from "../components/Gravatar";

class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new badge
          </Link>
        </div>
      );
    }
    return (
      <ul className="list-unstyled mt-4">
        {this.props.badges.map((badge) => {
          return (
            <li className="pb-3" key={badge.id}>
              <div className="Badge">
                <div className="Badge__section-name">
                  <Gravatar
                    className="Badge__avatar"
                    email={badge.email}
                    alt="Avatar"
                  />
                  <div className="BadgeList__section-info ">
                    <h3>
                      {badge.firstName} {badge.lastName}
                    </h3>
                    <div>
                      <h6>@{badge.twitter}</h6>
                      <p>{badge.jobTitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
