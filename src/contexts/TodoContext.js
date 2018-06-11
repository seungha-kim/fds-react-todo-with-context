import React from "react";
import todoAPI from "../todoAPI";

const { Consumer, Provider } = React.createContext({
  loading: false,
  todos: [],
  fetchTodos: () => {},
  handleTodoComplete: () => {},
  handleTodoCreate: () => {},
  handleTodoDelete: () => {},
  handleTodoBodyUpdate: () => {}
});

class TodoProvider extends React.Component {
  async withLoading(promise) {
    this.setState(prevState => ({
      loading: prevState.loading + 1
    }));
    try {
      return await promise;
    } finally {
      this.setState(prevState => ({
        loading: prevState.loading - 1
      }));
    }
  }

  fetchTodos = async () => {
    const res = await this.withLoading(todoAPI.get("/todos"));
    this.setState({
      todos: res.data
    });
  };

  handleTodoComplete = async (id, complete = true) => {
    await this.withLoading(
      todoAPI
        .patch(`/todos/${id}`, {
          complete
        })
        .then(this.fetchTodos)
    );
  };

  handleTodoCreate = async body => {
    await this.withLoading(
      todoAPI
        .post("/todos", {
          body,
          complete: false
        })
        .then(this.fetchTodos)
    );
  };

  handleTodoDelete = async id => {
    await this.withLoading(
      todoAPI.delete(`/todos/${id}`).then(this.fetchTodos)
    );
  };

  handleTodoBodyUpdate = async (id, body) => {
    await this.withLoading(
      todoAPI
        .patch(`/todos/${id}`, {
          body
        })
        .then(this.fetchTodos)
    );
  };

  state = {
    loading: false,
    todos: [
      // {
      //   id: 1,
      //   body: "React 공부",
      //   complete: true
      // }
    ],
    fetchTodos: this.fetchTodos,
    handleTodoComplete: this.handleTodoComplete,
    handleTodoCreate: this.handleTodoCreate,
    handleTodoDelete: this.handleTodoDelete,
    handleTodoBodyUpdate: this.handleTodoBodyUpdate
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export { TodoProvider, Consumer as TodoConsumer };
