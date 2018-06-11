import React from "react";

import { getToken } from "../todoAPI";

const { Provider, Consumer } = React.createContext({
  page: "main",
  goToMainPage: () => {},
  goToLoginPage: () => {}
});

class PageProvider extends React.Component {
  goToMainPage = () => {
    this.setState({
      page: "main"
    });
  };

  goToLoginPage = () => {
    this.setState({
      page: "login"
    });
  };

  state = {
    page: getToken() ? "main" : "login",
    goToMainPage: this.goToMainPage,
    goToLoginPage: this.goToLoginPage
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export { PageProvider, Consumer as PageConsumer };
