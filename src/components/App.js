import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import CoursesPage from "./courses/CoursesPage";
import ManageCoursePage from "../components/courses/ManageCoursePage"; // eslint-disable-line import/no-named-as-default
import ManageAuthorsPage from "./authors/ManageAuthorsPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthorPage from "./authors/AuthorPage";
function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/course" component={ManageCoursePage} />
        <Route path="/authors" component={AuthorPage} />
        <Route path="/author/:id" component={ManageAuthorsPage} />
        <Route path="/author" component={ManageAuthorsPage} />
        <Route path="/404NotFoundAuthor" component={PageNotFound} />
        <Route path="/404NotFoundCourse" component={PageNotFound} />
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default App;
