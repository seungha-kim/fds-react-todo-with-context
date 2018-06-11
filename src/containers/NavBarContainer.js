import React from "react";

import { PageConsumer } from "../contexts/PageContext";
import { UserConsumer } from "../contexts/UserContext";
import NavBar from "../components/NavBar";

export default class NavBarContainer extends React.Component {
  render() {
    return (
      <PageConsumer>
        {({ goToLoginPage }) => (
          <UserConsumer>
            {({ user, logout }) => (
              <NavBar
                username={user && user.username}
                onLogout={logout}
                onLogin={goToLoginPage}
              />
            )}
          </UserConsumer>
        )}
      </PageConsumer>
    );
  }
}
