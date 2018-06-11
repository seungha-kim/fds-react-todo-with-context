import React from "react";

import { UserConsumer } from "../contexts/UserContext";
import { PageConsumer } from "../contexts/PageContext";
import LoginForm from "../components/LoginForm";

export default class LoginPage extends React.Component {
  render() {
    return (
      <PageConsumer>
        {({ goToMainPage }) => (
          <UserConsumer>
            {({ login }) => (
              <LoginForm
                onLogin={async (username, password) => {
                  await login(username, password);
                  goToMainPage();
                }}
              />
            )}
          </UserConsumer>
        )}
      </PageConsumer>
    );
  }
}
