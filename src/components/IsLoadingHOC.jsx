import React, { useState } from "react";
import "../styles/IsLoading.css";

const IsLoadingHOC = (Component) => {
  function IsLoading() {
    const [isLoading, setLoading] = useState(true);

    const setLoadingState = (loadingState) => {
      setLoading(loadingState);
    };

    return (
      <>
        {isLoading && (
          <div className="loader-container">
            <div className="spinner"></div>
          </div>
        )}
        <Component setLoading={setLoadingState} />
      </>
    );
  }
  return IsLoading;
};

export default IsLoadingHOC;
