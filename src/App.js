import React from "react";

import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";

import { PageProvider, PageConsumer } from "./contexts/PageContext";
import { TodoProvider } from "./contexts/TodoContext";
import { UserProvider } from "./contexts/UserContext";

export default class App extends React.Component {
  render() {
    return (
      <PageProvider>
        <TodoProvider>
          <UserProvider>
            <PageConsumer>
              {({ page }) =>
                page === "main" ? (
                  <MainPage />
                ) : page === "login" ? (
                  <LoginPage />
                ) : null
              }
            </PageConsumer>
          </UserProvider>
        </TodoProvider>
      </PageProvider>
    );
  }
}
