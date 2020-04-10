import React, { Component } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CourseList from "./CourseList";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";
import SortCourse from "./SortCourse";

class CoursesPage extends Component {
  state = {
    redirectToAddCoursePage: false,
    sortingOption: "Sort By id",
    courseLength: 0,
  };

  componentDidMount() {
    const { authors, courses, actions } = this.props;
    if (courses.length === 0) {
      actions.loadCourses().catch((error) => {
        alert("Loading courses failed" + error);
      });
    } else {
      this.setState({ courseLength: this.props.courses.length });
    }
    if (authors.length === 0) {
      actions.loadAuthors().catch((error) => {
        alert("Loading Author failed" + error);
      });
    }
  }
  //Get Current Courses

  handleDelete = async (course) => {
    toast.success("Course Deleted");
    try {
      await this.props.actions.deleteCourse(course);
    } catch (error) {
      toast.error("Delete Failed", { autoClose: false });
    }
  };
  handleChange = (sortingOptions) => {
    this.setState({ sortingOption: sortingOptions });
  };
  handlePageChange = (pageNumber) => {
    this.setState({ activePage: pageNumber });
  };
  sortByOption = (courses, sortBy) => {
    switch (sortBy) {
      case "id":
        return courses.sort(function (c1, c2) {
          return c2.id - c1.id;
        });

      case "title":
        return courses.sort(function (c1, c2) {
          return c1.title > c2.title;
        });

      case "category":
        return courses.sort(function (c1, c2) {
          return c1.category > c2.category;
        });

      case "authorname":
        return courses.sort(function (c1, c2) {
          return c1.authorName.toLowerCase() > c2.authorName.toLowerCase();
        });
    }
    return courses;
  };
  render() {
    return (
      <>
        {this.state.redirectToAddCoursePage && <Redirect to="/course" />}
        <h2>Courses</h2>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <>
            <button
              style={{ marginBottom: 20 }}
              className="btn btn-primary add-course"
              onClick={() => this.setState({ redirectToAddCoursePage: true })}
            >
              Add Course
            </button>
            {this.state.courseLength > 0 ? (
              <>
                <SortCourse handleOptionChange={this.handleChange} />
                <CourseList
                  courses={this.sortByOption(
                    this.props.courses,
                    this.state.sortingOption
                  )}
                  onDelete={this.handleDelete}
                />
              </>
            ) : (
              <h2 style={{ color: "red" }}>Course List is Empty</h2>
            )}
          </>
        )}
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    courses:
      state.authors.length === 0
        ? []
        : state.courses.map((course) => {
            return {
              ...course,
              authorName: state.authors.find((a) => a.id === course.authorId)
                .name,
            };
          }),
    authors: state.authors,
    loading: state.apiCallsInProgress > 0,
  };
}
//(Way -1) manually dispatching actions;
/**function mapDispatchToProps(dispatch) {
  return {
    createCourse: course => dispatch(courseActions.createCourse(course))
  };
}*/
//(Way -2) using bindActionCreators
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
      deleteCourse: bindActionCreators(courseActions.deleteCourse, dispatch),
    },
  };
}
CoursesPage.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  //dispatch: PropTypes.func.isRequired
  //createCourse: PropTypes.func.isRequired
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
