import React from "react";
import "../components/styles/Badges.css";
import { Link } from "react-router-dom";
import Gravatar from "../components/Gravatar";

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState("");

  //La siguiente funcion es muy costosa, por tal motivo se utiliza use Memo
  /* const filteredBadges = badges.filter((badge) => {
    return `${badge.firstName} ${badge.lastName}`
      .toLowerCase()
      .includes(query.toLowerCase());
  }); */
  const [filteredBadges, setFilteredBadges] = React.useState(badges);

  React.useMemo(() => {
    const result = badges.filter((badge) => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });
    setFilteredBadges(result);
  }, [badges, query]);

  return { query, setQuery, filteredBadges };
}

function BadgesList(props) {
  const badges = props.badges;
  const { query, setQuery, filteredBadges } = useSearchBadges(badges);

  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Filter</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={(e) => {
              //console.log(e.target.value);
              setQuery(e.target.value);
            }}
          />
        </div>
        <h3>No badges were found</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Create new badge
        </Link>
      </div>
    );
  }
  return (
    <div className="BadgesList">
      <div className="form-group">
        <label>Filter</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={(e) => {
            //console.log(e.target.value);
            setQuery(e.target.value);
          }}
        />
      </div>
      <ul className="list-unstyled mt-4">
        {filteredBadges.map((badge) => {
          return (
            <li className="pb-3" key={badge.id}>
              <div className="Badge">
                <Link
                  className="text-reset text-decoration-none"
                  to={`/badges/${badge.id}`}
                >
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
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BadgesList;
