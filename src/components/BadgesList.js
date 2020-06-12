import React from "react";
import "../components/styles/Badges.css";

class BadgesList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled mt-4">
        {this.props.badges.map((badge) => {
          return (
            <li className="pb-3" key={badge.id}>
              <div className="Badge">
                <div className="Badge__section-name">
                  <img
                    className="Badge__avatar"
                    src={badge.avatarUrl}
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
