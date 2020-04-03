import React from "react";
import { render, cleanup } from "react-testing-library";
import CourseForm from "./CourseForm";

afterEach(cleanup);

function renderCourseForm(args) {
  const defaultProps = {
    course: {},
    authors: [],
    errors: {},
    onChange: () => {},
    onSave: () => {},
    saving: false
  };
  const props = { ...defaultProps, ...args };
  return render(<CourseForm {...props} />);
}
it("should render AddCourse Header", () => {
  const { getByText } = renderCourseForm();
  getByText("Save Course");
});
it("Should have 'Save' label on button", () => {
  const { getByText } = renderCourseForm();
  getByText("Save");
});
it("should have 'Saving...' label on button", () => {
  const { getByText } = renderCourseForm({ saving: true });
  getByText("Saving...");
});
