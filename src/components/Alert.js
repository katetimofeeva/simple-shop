import React, { useEffect } from "react";
import "../App.css";

const Alert = ({ name, closeAlert }) => {
  useEffect(() => {
    const timerId = setTimeout(closeAlert, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [name, closeAlert]);
  return (
    <div className="deep-purple  accent-2 toast-container">
      <div>{name} was added in basket</div>
    </div>
  );
};

export default Alert;
