import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadAuthors, saveAuthors } from "../../redux/actions/authorActions";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import AuthorForm from "./AuthorForm";

function ManageAuthorsPage({ authors, actions, history }) {
  const [author, setAuthor] = useState({
    name: "",
  });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (authors.length === 0) {
      actions.loadAuthors().catch((error) => {
        alert("Not able to fetch Authors:" + error);
      });
    }
  }, []);
  function isFormValid() {
    debugger;
    const _errors = {};
    if (!author.name) {
      _errors.name = "Name Is Required";
    }
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
    if (!isFormValid) return;
    debugger;
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
  return (
    <div>
      <h1>Manage Authors</h1>
      <AuthorForm
        author={author}
        errors={errors}
        saving={saving}
        onChange={handleChange}
        onSave={handleSubmit}
      />
    </div>
  );
}
function mapStateToProps(state, ownProps) {
  return {
    authors: state.authors,
    id: ownProps.match.params.id,
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
};
export default connect(mapStateToProps, mapActionsToProps)(ManageAuthorsPage);
