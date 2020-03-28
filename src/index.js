import React from "react";
import { render } from "react-dom";

function Hi() {
  return <p>Welcome user 42</p>;
}
render(<Hi />, document.getElementById("app"));
