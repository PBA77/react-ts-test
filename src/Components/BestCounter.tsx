import React, { Component, useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { UserContext } from "../App";

// Hook
function useExplode() {
  const [isExploding, setIsExploding] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    let timerID: NodeJS.Timeout;
    if (isExploding) {
      timerID = setTimeout(() => {
        setMessage("");
        setIsExploding(false);
      }, 2000);
    }
    return () => {
      timerID && clearTimeout(timerID);
    };
  });

  const boom = () => {
    setIsExploding(true);
    setMessage("BUM!");
  };

  return { message, boom };
}

export default () => {
  const { message, boom } = useExplode();
  const User = useContext(UserContext);

  return (
    <>
      <div>
        <button
          type="button"
          onClick={boom}
          className="btn btn-secondary"
          data-container="body"
          data-toggle="popover"
          data-placement="bottom"
          data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
        >
          Detonuj {User.name}!
        </button>
        <div className="alert alert-danger" role="alert">
          <h3>{message}</h3>
        </div>
      </div>
    </>
  );
};
