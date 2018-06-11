import React from "react";
import { UserConsumer } from "../contexts/UserContext";
import { TodoConsumer } from "../contexts/TodoContext";
import { PageConsumer } from "../contexts/PageContext";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import OnMount from "../components/OnMount";
import { getToken } from "../todoAPI";

export default class TodoContainer extends React.Component {
  render() {
    return (
      <UserConsumer>
        {() => (
          <PageConsumer>
            {({ goToLoginPage }) => (
              <TodoConsumer>
                {({
                  todos,
                  loading,
                  fetchTodos,
                  handleTodoBodyUpdate,
                  handleTodoComplete,
                  handleTodoCreate,
                  handleTodoDelete
                }) =>
                  getToken() ? (
                    <div>
                      <h1 className="title">TodoList</h1>
                      <TodoForm
                        onTodoCreate={handleTodoCreate}
                        loading={loading}
                      />
                      <TodoList
                        todos={todos}
                        allowEditing={!loading}
                        onTodoComplete={handleTodoComplete}
                        onTodoDelete={handleTodoDelete}
                        onTodoBodyUpdate={handleTodoBodyUpdate}
                        fetchTodos={fetchTodos}
                      />
                      <OnMount onMount={fetchTodos} />
                    </div>
                  ) : (
                    <OnMount onMount={goToLoginPage} />
                  )
                }
              </TodoConsumer>
            )}
          </PageConsumer>
        )}
      </UserConsumer>
    );
  }
}
