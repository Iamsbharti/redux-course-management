import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import CourseForm from "./CourseForm";
import { newCourse } from "../../../tools/mockData";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

export function ManageCoursePage({
  courses,
  authors,
  loadCourses,
  loadAuthors,
  saveCourse,
  history,
  ...props
}) {
  const [course, setCourse] = useState({ ...props.course });
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState({});
  //const [unSaveError, setUnSaveError] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (courses.length === 0) {
      loadCourses().catch((error) => {
        alert("Error in loading Courses:" + error);
      });
    } else {
      setCourse({ ...props.course });
    }
    if (authors.length === 0) {
      loadAuthors().catch((error) => {
        alert("Error in loading authors:" + error);
      });
    }
    if (courses.length === 0 && authors.length === 0) {
      setLoading(true);
    }
  }, [props.course]);
  function handleChange(event) {
    const { name, value } = event.target;
    setCourse((prevCourse) => ({
      ...prevCourse,
      [name]: name === "authorId" ? parseInt(value, 10) : value,
    }));
  }
  function isFormValid() {
    const { title, category, authorId } = course;
    const errors = {};
    if (!title) errors.title = "Title is required";
    if (!category) errors.category = "Category is required";
    if (!authorId) errors.author = "Author is required";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (!isFormValid()) return;
    setSaving(true);
    saveCourse(course)
      .then(() => {
        toast.success("Course Saved");
        history.push("/courses");
      })
      .catch((error) => {
        setSaving(false);
        setErrors({ onSave: error.message });
      });
  }
  return loading ? (
    <Spinner />
  ) : (
    <CourseForm
      course={course}
      authors={authors}
      onChange={handleChange}
      onSave={handleSubmit}
      errors={errors}
      saving={saving}
    />
  );
}
function getCourseBySlug(courses, slug) {
  return courses.find((course) => course.slug === slug) || newCourse;
}
function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;
  const own = { ...ownProps };
  console.log("own:" + own.history.action);
  const course =
    slug && state.courses.length > 0
      ? getCourseBySlug(state.courses, slug)
      : newCourse;
  return {
    course,
    courses: state.courses,
    authors: state.authors,
  };
}
const mapDispatchToProps = {
  loadCourses: courseActions.loadCourses,
  loadAuthors: authorActions.loadAuthors,
  saveCourse: courseActions.saveCourse,
};
ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  saveCourse: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
