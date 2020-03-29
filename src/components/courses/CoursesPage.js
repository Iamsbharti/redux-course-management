import React, { Component } from "react";

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
    alert(this.state.course.title);
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
          <button>Add Course</button>
        </form>
      </div>
    );
  }
}
export default CoursesPage;
