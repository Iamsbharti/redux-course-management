import React from "react";
import Proptypes from "prop-types";
function PageNotFound(props) {
  const path_source = props.history.location.pathname;
  let msg = "";
  msg = path_source.endsWith("Author") ? "Author" : "Course";

  return <h1 style={{ color: "red" }}>Ooops!! {msg} Not Found</h1>;
}

PageNotFound.propTypes = {
  history: Proptypes.object,
};
export default PageNotFound;
