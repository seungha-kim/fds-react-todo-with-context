import React from "react";
import classNames from "classnames";

export default class TodoForm extends React.Component {
  static defaultProps = {
    loading: false,
    onTodoCreate: () => {}
  };

  inputRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.body.value;
    if (value) {
      const { onTodoCreate } = this.props;
      onTodoCreate(value);
      e.target.reset();
    }
  };

  componentDidUpdate(prevProps) {
    if (!!prevProps.loading === true && !!this.props.loading === false) {
      this.inputRef.current.focus();
    }
  }

  render() {
    const { loading } = this.props;
    const buttonClass = classNames(
      "todo-form__submit",
      "button",
      "is-primary",
      { "is-loading": loading }
    );
    return (
      <form onSubmit={this.handleSubmit} autoComplete="off">
        <fieldset className="todo-form__fieldset" disabled={loading}>
          <div className="field has-addons">
            <div className="control">
              <input
                ref={this.inputRef}
                className="input"
                name="body"
                type="text"
                autoComplete="off"
              />
            </div>
            <div className="control">
              <button className={buttonClass}>추가</button>
            </div>
          </div>
        </fieldset>
      </form>
    );
  }
}
