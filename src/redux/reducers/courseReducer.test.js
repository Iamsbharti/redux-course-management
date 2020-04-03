import courseReducer from "./courseReducer";
import * as actions from "../actions/courseActions";

describe("Create Course Reducer Test", () => {
  it("should add course when passed CREATE_COURSE_SUCCESS action", () => {
    //arrange
    const initialState = [
      { title: "WarOfWorlds" },
      {
        title: "Life42"
      }
    ];

    const newCourse = {
      title: "Nostalgia"
    };

    const action = actions.createCourseSuccess(newCourse);

    //act
    const newState = courseReducer(initialState, action);

    //assert
    expect(newState.length).toEqual(3);
    expect(newState[0].title).toEqual("WarOfWorlds");
    expect(newState[1].title).toEqual("Life42");
    expect(newState[2].title).toEqual("Nostalgia");
  });
});
describe("Update course reducer test", () => {
  it("should update course when UPDATE_COURSE_SUCCESS action is passed", () => {
    //arrange
    const initialState = [
      { id: 1, title: "WarOfWorlds" },
      { id: 2, title: "Life42" },
      { id: 3, title: "Nostalgia" }
    ];
    const course = { id: 1, title: "Me and My Moon" };
    const action = actions.updateCourseSuccess(course);

    //act
    const newState = courseReducer(initialState, action);
    const updatedCourse = newState.find(_course => _course.id === course.id);
    const unTouchedCourse = newState.filter(_course => _course.id != course.id);
    //assert
    expect(updatedCourse.title).toEqual("Me and My Moon");
    expect(unTouchedCourse.length).toEqual(2);
    expect(unTouchedCourse[0].title).toEqual("Life42");
    expect(unTouchedCourse[1].title).toEqual("Nostalgia");
    expect(newState.length).toEqual(3);
  });
});
