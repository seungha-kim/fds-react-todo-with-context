import React from "react";

export default class OnMount extends React.Component {
  componentDidMount() {
    const { onMount } = this.props;
    onMount && onMount();
  }
  render() {
    return null;
  }
}
