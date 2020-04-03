import * as courseActions from "./courseActions";
import * as types from "./actionTypes";
import { courses } from "../../../tools/mockData";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import fetchMock from "fetch-mock";

//Test an async function
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Async Action", () => {
  afterEach(() => {
    fetchMock.restore();
  });
});

describe("Load course thunk", () => {
  it("should create BEGIN_API_CALL and LOAD_COURSE_SUCCESS actions when loading course", () => {
    //mock api call
    fetchMock.mock("*", {
      body: courses,
      headers: { "content-type": "application/json" }
    });

    //arrange
    const expectedActions = [
      { type: types.BEGIN_API_CALL },
      { type: types.LOAD_COURSES_SUCCESS, courses }
    ];

    //mock store
    const store = mockStore({ courses: [] });

    //assert
    return store.dispatch(courseActions.loadCourses()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe("Update Course Thunk", () => {
  it("Should Create a BEGIN_API_CALL and UPDATE_COURSE_SUCCESS actions when saving a course", () => {
    //mock api call
    fetchMock.mock("*", {
      body: courses[0],
      headers: { "content-type": "applciation/json" },
      overwriteRoutes: true
    });

    //arrange
    const course = courses[0];
    const expectedActions = [
      { type: types.BEGIN_API_CALL },
      { type: types.UPDATE_COURSE_SUCCESS, course }
    ];
    //mock store
    const store = mockStore({ course: [] });

    //assert
    return store
      .dispatch(courseActions.saveCourse(course))
      .then(savedCourse => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
