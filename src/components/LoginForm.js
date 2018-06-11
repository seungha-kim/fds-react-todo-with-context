import React from "react";

export default class LoginPage extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    const { onLogin } = this.props;
    onLogin(username, password);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="username" required />
        <input type="password" name="password" required />
        <button>전송</button>
      </form>
    );
  }
}
