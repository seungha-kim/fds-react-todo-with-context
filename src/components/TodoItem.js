import React from "react";
import classNames from "classnames";

export default class TodoItem extends React.Component {
  static defaultProps = {
    id: null,
    body: "할 일 내용",
    complete: false,
    onTodoComplete: () => {}, // 할 일 완료시 호출될 함수
    onTodoDelete: () => {},
    onTodoBodyUpdate: () => {},
    allowEditing: false
  };

  state = {
    editing: false
  };

  inputRef = React.createRef();

  handleDeleteClick = e => {
    const { onTodoDelete, id } = this.props;
    onTodoDelete(id);
  };

  handleBodyClick = e => {
    if (this.props.complete || !this.props.allowEditing) return;
    this.setState(
      {
        editing: true
      },
      () => {
        this.inputRef.current.focus();
      }
    );
  };

  handleInputKeyDown = e => {
    if (e.key === "Escape" || e.key === "Enter") {
      if (e.key === "Enter") {
        const { id, onTodoBodyUpdate } = this.props;
        onTodoBodyUpdate(id, e.target.value);
      }
      this.setState({
        editing: false
      });
    }
  };

  handleInputBlur = e => {
    const { id, onTodoBodyUpdate } = this.props;
    onTodoBodyUpdate(id, e.target.value);
    this.setState({
      editing: false
    });
  };

  handleCheckboxChange = e => {
    const { id, onTodoComplete, complete } = this.props;
    onTodoComplete(id, !complete);
  };

  render() {
    const { id, body, complete } = this.props;
    const { editing } = this.state;
    const wrapClass = classNames({
      "todo-item--complete": complete
    });
    const deleteClass = classNames("todo-item__delete", "delete", "is-small");
    const checkboxClass = classNames("todo-item__checkbox", "checkbox");
    return (
      <li className={wrapClass}>
        <input
          type="checkbox"
          className={checkboxClass}
          checked={complete}
          onChange={this.handleCheckboxChange}
        />
        {editing ? (
          <input
            ref={this.inputRef}
            onBlur={this.handleInputBlur}
            onKeyDown={this.handleInputKeyDown}
            defaultValue={body}
          />
        ) : (
          <span onClick={this.handleBodyClick}>{body}</span>
        )}
        <button className={deleteClass} onClick={this.handleDeleteClick} />
      </li>
    );
  }
}
