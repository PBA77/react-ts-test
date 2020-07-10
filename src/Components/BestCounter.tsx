import React, { Component } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

// Hook
function useExplode() {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    let timerID: NodeJS.Timeout;
    if (isClosing) {
      timerID = setTimeout(() => {
        setIsClosing(false);
      }, 2000);
    }
    return () => {
      timerID && clearTimeout(timerID);
    };
  });

  const boom = () => {
    setIsClosing(true)
  }
  
  return {isClosing, boom}
 }

export default () => {
  const {isClosing, boom} = useExplode()

  return (
    <>
      <div>
        <button type="button" onClick={boom} className="btn btn-danger">
          Detonuj!
        </button>
        <div className="alert alert-danger" role="alert">
          <h3>{isClosing ? "BUM!" : ""}</h3>
        </div>
      </div>
    </>
  );
};
