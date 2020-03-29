import { createStore, applyMiddleware } from "redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import rootReducer from "./reducers";

export default function configureStore(initialState) {
  //add support for redux devtools.
  //const composeEnhancers =
  //window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE.__ || compose;

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(reduxImmutableStateInvariant())
  );
}
