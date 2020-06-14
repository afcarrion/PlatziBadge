import React from "react";

import "../components/styles/BadgeNew.css";
import header from "../images/platziconf-logo.svg";
import Badge from "../components/badges";
import BadgeForm from "../components/badgeForm";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";

import api from "../api";

class BadgeNew extends React.Component {
  state = {
    loading: false,
    error: false,
    form: {
      firstName: "",
      lastName: "",
      jobTitle: "",
      email: "",
      twitter: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false });

      //Go to Bagdes List
      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img
            src={header}
            alt="Logo"
            className="BadgeNew__hero-image image-fluid"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || `First Name`}
                lastName={this.state.form.lastName || `Last Name`}
                email={this.state.form.email || `prueba@gmail.co`}
                jobTittle={this.state.form.jobTitle || `Job Title`}
                twitter={this.state.form.twitter || `@Twitter`}
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
