import React from "react";

import TodoContainer from "../containers/TodoContainer";
import NavBarContainer from "../containers/NavBarContainer";
import MainLayout from "../components/MainLayout";

export default class MainPage extends React.Component {
  render() {
    return <MainLayout navbar={<NavBarContainer />} main={<TodoContainer />} />;
  }
}
