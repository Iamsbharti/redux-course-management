import React, { Component } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../components/redux/actions/courseActions";
import PropTypes from "prop-types";

class CoursesPage extends Component {
  state = {
    course: {
      title: ""
    }
  };

  handleChange = event => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.createCourse(this.state.course);
  };
  render() {
    return (
      <div>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            value={this.state.course.title}
            onChange={this.handleChange}
          />
          <br />
          {this.props.courses.map(course => (
            <div key={course.title}>{course.title}</div>
          ))}
          <button>Add Course</button>
        </form>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    courses: state.courses
  };
}
//(Way -1) manually dispatching actions;
function mapDispatchToProps(dispatch) {
  return {
    createCourse: course => dispatch(courseActions.createCourse(course))
  };
}
CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  //dispatch: PropTypes.func.isRequired
  createCourse: PropTypes.func.isRequired
};
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
