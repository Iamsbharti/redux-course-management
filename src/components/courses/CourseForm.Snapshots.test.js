import React from "react";
import CourseForm from "./CourseForm";
import renderer from "react-test-renderer";
import { courses, authors } from "../../../tools/mockData";

it("Sets submit button to 'saving...' when saving is true", () => {
  const tree = renderer.create(
    <CourseForm
      authors={authors}
      course={courses[0]}
      onChange={jest.fn()}
      onSave={jest.fn()}
      saving
    />
  );
  expect(tree).toMatchSnapshot();
});
it("sets submit button to 'saved' when savinng is false", () => {
  const tree = renderer.create(
    <CourseForm
      authors={authors}
      course={courses[0]}
      onChange={jest.fn()}
      onSave={jest.fn()}
      saving={false}
    />
  );
  expect(tree).toMatchSnapshot();
});
