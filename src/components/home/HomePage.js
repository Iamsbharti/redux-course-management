import React from "react";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div className="jumbotron">
      <h1>Course Management App with Redux</h1>
      <p>This app uses React,redux and react-router for it responsiveness</p>
      <Link to="/about" className="btn btn-primary btn-lg">
        Learn More
      </Link>
    </div>
  );
}
export default HomePage;
