import React from "react";

export default class NavBar extends React.Component {
  static defaultProps = {
    username: null,
    onLoginPageClick: () => {},
    onLogout: () => {}
  };
  render() {
    const { username, onLogin, onLogout } = this.props;
    return (
      <div className="nav-bar">
        <div>TodoList</div>
        <div>
          {username ? (
            <React.Fragment>
              <span>{username}</span>
              <button onClick={onLogout}>로그아웃</button>
            </React.Fragment>
          ) : (
            <button onClick={onLogin}>로그인</button>
          )}
        </div>
      </div>
    );
  }
}
