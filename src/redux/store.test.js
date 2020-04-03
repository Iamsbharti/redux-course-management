import initialState from "./reducers/initialState";
import rootReducer from "./reducers";
import * as actions from "./actions/courseActions";
import { createStore } from "redux";

describe("Store test Create Course", () => {
  it("should ceate a course", () => {
    //arrange
    const store = createStore(rootReducer, initialState);
    const course = {
      title: "Warrior"
    };

    //act
    const action = actions.createCourseSuccess(course);
    store.dispatch(action);

    //assert
    const createdCourse = store.getState().courses[0];
    console.log(store.courses);
    expect(createdCourse).toEqual(course);
  });
});
