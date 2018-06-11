import React from "react";

export default props => {
  const { navbar, main } = props;
  return (
    <div>
      <div>{navbar}</div>
      <div>{main}</div>
    </div>
  );
};
