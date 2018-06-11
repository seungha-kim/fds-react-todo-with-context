import React from "react";
import todoAPI, { getToken, setToken, removeToken } from "../todoAPI";

const { Provider, Consumer } = React.createContext({
  loading: false,
  user: null,
  register: () => {},
  login: () => {},
  logout: () => {}
});

class UserProvider extends React.Component {
  async componentDidMount() {
    try {
      const token = getToken();
      if (token) {
        const meRes = await todoAPI.get("/me");
        this.setState({
          user: meRes.data
        });
      }
    } finally {
      this.setState({ loading: false });
    }
  }

  register = async (username, password) => {
    this.setState({ loading: true });
    try {
      const res = await todoAPI.post("/users/register", { username, password });
      setToken(res.data.token);
      const meRes = await todoAPI.get("/me");
      this.setState({
        user: meRes.data
      });
    } finally {
      this.setState({ loading: false });
    }
  };

  login = async (username, password) => {
    this.setState({ loading: true });
    try {
      const res = await todoAPI.post("/users/login", { username, password });
      setToken(res.data.token);
      const meRes = await todoAPI.get("/me");
      this.setState({
        user: meRes.data
      });
    } catch (e) {
      if (e.response && e.response.status === 400) {
        alert("사용자 이름 혹은 비밀번호가 잘못되었습니다.");
      } else {
        throw e;
      }
    } finally {
      this.setState({ loading: false });
    }
  };

  logout = () => {
    removeToken();
    this.setState({
      user: null
    });
  };

  state = {
    loading: true,
    user: null,
    register: this.register,
    login: this.login,
    logout: this.logout
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export { UserProvider, Consumer as UserConsumer };
