import React, { Component } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";

class ManageCoursePage extends Component {
  componentDidMount() {
    const { courses, authors, loadAuthors, loadCourses } = this.props;
    if (courses.length === 0) {
      loadCourses().then(error => {
        alert("Error in loading Courses" + error);
      });
    }
    if (authors.length === 0) {
      loadAuthors().then(error => {
        alert("Error in loading authors" + error);
      });
    }
  }
  render() {
    return <h1>Manage Course</h1>;
  }
}
function mapStateToProps(state) {
  return {
    courses: state.courses,
    authors: state.authors
  };
}
const mapDispatchToProps = {
  loadCourses: courseActions.loadCourses,
  loadAuthors: authorActions.loadAuthors
};
ManageCoursePage.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired
};
export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
