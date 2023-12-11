import React, { useState } from "react";

const LearnCode = ({ name, text }) => {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const toggleTextVisibility = () => {
    setIsTextVisible(!isTextVisible);
  };

  return (
    <>
      <div className="container shadow p-3 col-lg-6 m-auto ">
        <div className="d-flex justify-content-between align-items-center m-3">
          <div className="left">
            <h2>{name}</h2>
          </div>
          <div className="right">
            {isTextVisible ? (
              <button className="btn btn-danger" onClick={toggleTextVisibility}>
                -
              </button>
            ) : (
              <button
                className="btn btn-success"
                onClick={toggleTextVisibility}
              >
                +
              </button>
            )}
          </div>
        </div>
        {isTextVisible && <p>{text}</p>}
      </div>
    </>
  );
};

export default LearnCode;
