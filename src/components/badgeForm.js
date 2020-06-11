import React from "react";

class BadgeForm extends React.Component {
  handleChange = (e) => {
    console.log({
      name: e.target.name,
      value: e.target.value,
    });
  };

  /* handleOnClick = (e) => {
    console.log("Button was clicked");
  }; */

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Button was clicked");
  };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="firstName"
            />
          </div>
          <button
            /* type="button" */
            /*  onClick={this.handleOnClick} */
            className="btn btn-primary"
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
