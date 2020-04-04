import React, { useEffect } from "react";
import AuthorList from "./AuthorList";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadAuthors } from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
function AuthorPage({ authors, actions, loading }) {
  useEffect(() => {
    if (authors.length === 0) {
      actions.loadAuthors();
    }
  }, []);
  function handleDelete(id) {
    toast.success("Author Deleted");
    console.log("Author deleted:" + id);
  }

  return loading ? (
    <Spinner />
  ) : (
    <>
      <h2>Authors</h2>
      <Link style={{ marginBottom: 20 }} to="/author">
        Add Authors
      </Link>
      <AuthorList authors={authors} onDelete={handleDelete} />
    </>
  );
}
function mapStateToProps(state) {
  return {
    authors: state.authors,
    loading: state.apiCallsInProgress > 0,
  };
}
function mapActionsToProps(dispatch) {
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
