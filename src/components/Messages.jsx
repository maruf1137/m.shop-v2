import React from "react";

const ErrorMessage = ({ text }) => {
  return (
    <div className="error-message">
      <h2>{text}</h2>
    </div>
  );
};

export { ErrorMessage };
