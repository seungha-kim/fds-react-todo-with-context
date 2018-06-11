import React from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends React.Component {
  static defaultProps = {
    todos: [
      // {
      //   id: 1,
      //   body: 'React 공부',
      //   complete: false
      // }
    ],
    allowEditing: false,
    onTodoComplete: () => {},
    onTodoDelete: () => {},
    onTodoBodyUpdate: () => {}
  };
  render() {
    const {
      todos,
      allowEditing,
      onTodoComplete,
      onTodoDelete,
      onTodoBodyUpdate
    } = this.props;
    return (
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            allowEditing={allowEditing}
            onTodoComplete={onTodoComplete}
            onTodoDelete={onTodoDelete}
            onTodoBodyUpdate={onTodoBodyUpdate}
            {...todo}
          />
        ))}
      </ul>
    );
  }
}
