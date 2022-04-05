import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="pt-8 pb-8 center">
      <h1 className="heading mb-2">404</h1>
      <h3 className="heading mb-2">sorry, this page is not found</h3>
      <button className="btn btn-primary">
        <Link to="/">back to home</Link>
      </button>
    </div>
  );
};

export default ErrorPage;
