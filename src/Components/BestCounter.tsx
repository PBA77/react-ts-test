import React, { Component } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

// Hook
function useExplode() {
  const [isExploding, setIsExploding] = useState(false);

  useEffect(() => {
    let timerID: NodeJS.Timeout;
    if (isExploding) {
      timerID = setTimeout(() => {
        setIsExploding(false);
      }, 2000);
    }
    return () => {
      timerID && clearTimeout(timerID);
    };
  });

  const boom = () => {
    setIsExploding(true)
  }
  
  return {isExploding, boom}
 }

export default () => {
  const {isExploding, boom} = useExplode()

  return (
    <>
      <div>
        <button type="button" onClick={boom} className="btn btn-danger">
          Detonuj!
        </button>
        <div className="alert alert-danger" role="alert">
          <h3>{isExploding ? "BUM!" : ""}</h3>
        </div>
      </div>
    </>
  );
};
