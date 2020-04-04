import React, { useEffect } from "react";
import AuthorList from "./AuthorList";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadAuthors } from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";

function AuthorPage({ authors, actions, loading }) {
  useEffect(() => {
    if (authors.length === 0) {
      actions.loadAuthors();
    }
  }, []);

  return loading ? <Spinner /> : <AuthorList authors={authors} />;
}
function mapStateToProps(state) {
  //debugger;
  return {
    authors: state.authors,
    loading: state.apiCallsInProgress > 0,
  };
}
function mapActionsToProps(dispatch) {
  //debugger;
  return {
    actions: {
      loadAuthors: bindActionCreators(loadAuthors, dispatch),
    },
  };
}
AuthorPage.propTypes = {
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool,
};
export default connect(mapStateToProps, mapActionsToProps)(AuthorPage);
