import * as courseActions from "./courseActions";
import * as types from "./actionTypes";
import { courses } from "../../../tools/mockData";

describe("CreateCourseSuccess", () => {
  it("Should create a CREATE_COURSE_SUCCESS action", () => {
    //arrange
    const course = courses[0];
    const expextedAction = {
      type: types.CREATE_COURSE_SUCCESS,
      course
    };
    //act
    const action = courseActions.createCourseSuccess(course);

    //assert
    expect(action).toEqual(expextedAction);
  });
});

describe("SaveCourseActions", () => {
  it("should create action with UPDATE_COURSE_SUCCESS", () => {
    //arrange
    const course = courses[0];
    const expectedAction = {
      type: types.UPDATE_COURSE_SUCCESS,
      course
    };

    //act
    const action = courseActions.updateCourseSuccess(course);

    //assert
    expect(action).toEqual(expectedAction);
  });
});
describe("CreateCourseSucces", () => {
  it("should create an action with CREATE_COURSE_SUCCESS", () => {
    //act
    const course = courses[0];
    const expectedAction = {
      type: types.CREATE_COURSE_SUCCESS,
      course
    };
    //arrange
    const action = courseActions.createCourseSuccess(course);

    //assert
    expect(action).toEqual(expectedAction);
  });
});
describe("LoadCourseSuccess", () => {
  it("Should create action of type LOAD_COURSE_SUCCESS", () => {
    //arrange
    const expectedAction = {
      type: types.LOAD_COURSES_SUCCESS
    };

    //act
    const action = courseActions.loadCourseSuccess();

    //assert
    expect(action).toEqual(expectedAction);
  });
});
