import React from "react";

import LoginContainer from "../containers/LoginContainer";
import NavBarContainer from "../containers/NavBarContainer";
import MainLayout from "../components/MainLayout";

export default class LoginPage extends React.Component {
  render() {
    return (
      <MainLayout navbar={<NavBarContainer />} main={<LoginContainer />} />
    );
  }
}
