import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadAuthors, saveAuthors } from "../../redux/actions/authorActions";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import AuthorForm from "./AuthorForm";
import { newAuthor } from "../../../tools/mockData";
import Spinner from "../common/Spinner";
import { Redirect } from "react-router-dom";
function ManageAuthorsPage({ authors, actions, history, ...props }) {
  const [author, setAuthor] = useState({ ...props.author });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (authors.length === 0) {
      actions.loadAuthors().catch((error) => {
        alert("Not able to fetch Authors:" + error);
      });
    } else {
      setAuthor({ ...props.author });
    }
  }, [props.author]);
  function isFormValid() {
    const _errors = {};
    if (!author.name) _errors.name = "Name Is Required";

    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setAuthor({
      ...author,
      [name]: value,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (!isFormValid()) return;
    setSaving(true);
    actions
      .saveAuthors(author)
      .then(() => {
        history.push("/authors");
        toast.success("Author Saved");
      })
      .catch((error) => {
        setSaving(false);
        setErrors({ onSave: error });
      });
  }
  return authors.length === 0 ? (
    <Spinner />
  ) : author.id !== null ? (
    <AuthorForm
      author={author}
      errors={errors}
      saving={saving}
      onChange={handleChange}
      onSave={handleSubmit}
    />
  ) : (
    <Redirect to="/404NotFoundAuthor" />
  );
}
function getAuthorById(authors, id) {
  return authors.find((author) => author.id === id) || newAuthor;
}
function mapStateToProps(state, ownProps) {
  const id = parseInt(ownProps.match.params.id, 10);
  console.log(id);
  const author =
    id && state.authors.length > 0
      ? getAuthorById(state.authors, id)
      : newAuthor;
  return {
    authors: state.authors,
    author,
  };
}
function mapActionsToProps(dispatch) {
  return {
    actions: {
      loadAuthors: bindActionCreators(loadAuthors, dispatch),
      saveAuthors: bindActionCreators(saveAuthors, dispatch),
    },
  };
}
ManageAuthorsPage.propTypes = {
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  history: PropTypes.object,
  author: PropTypes.object.isRequired,
};
export default connect(mapStateToProps, mapActionsToProps)(ManageAuthorsPage);
