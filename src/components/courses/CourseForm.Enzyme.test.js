import React from "react";
import CourseForm from "./CourseForm";
import { shallow } from "enzyme";

function renderCourseForm(args) {
  const defaultProps = {
    authors: [],
    course: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };
  const props = { ...defaultProps, ...args };
  return shallow(<CourseForm {...props} />);
}

it("should render form and header", () => {
  const wrapper = renderCourseForm();
  //console.log(wrapper.debug());
  expect(wrapper.find("form").length).toBe(1);
  expect(wrapper.find("h2").text()).toEqual("Save Course");
});
it("labels save buttons as 'save' when not saving", () => {
  const wrapper = renderCourseForm();
  expect(wrapper.find("button").text()).toEqual("Save");
});
it("labels save button as 'saving...' while saving", () => {
  const wrapper = renderCourseForm({ saving: true });
  expect(wrapper.find("button").text()).toEqual("Saving...");
});
