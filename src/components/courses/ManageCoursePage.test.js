import React from "react";
import { mount } from "enzyme";
import { courses, authors, newCourse } from "../../../tools/mockData";
import { ManageCoursePage } from "./ManageCoursePage";

function renderManageCoursePage(args) {
  const defaultProps = {
    authors,
    courses,
    course: newCourse,
    loadCourses: jest.fn(),
    saveCourse: jest.fn(),
    loadAuthors: jest.fn(),
    history: {},
    match: {}
  };

  const props = { ...defaultProps, ...args };
  return mount(<ManageCoursePage {...props} />);
}
it("sets error when attenpting to sumbmit without title", () => {
  const wrapper = renderManageCoursePage();
  wrapper.find("form").simulate("submit");
  const error = wrapper.find(".alert").first();
  expect(error.text()).toBe("Title is required");
});
