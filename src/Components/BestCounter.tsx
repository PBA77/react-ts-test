import React, { Component } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

// Hook
function useExplode() {
  const [isExploding, setIsExploding] = useState(false);
  const [message, setMessage] = useState("");
  

  useEffect(() => {
    let timerID: NodeJS.Timeout;
    if (isExploding) {
      timerID = setTimeout(() => {
        setMessage("")
        setIsExploding(false);
      }, 2000);
    }
    return () => {
      timerID && clearTimeout(timerID);
    };
  });

  const boom = () => {
    setIsExploding(true)
    setMessage("BUM!")
  }
  
  return {message, boom}
 }

export default () => {
  const {message, boom} = useExplode()

  return (
    <>
      <div>
        <button type="button" onClick={boom} className="btn btn-danger">
          Detonuj!
        </button>
        <div className="alert alert-danger" role="alert">
          <h3>{message}</h3>
        </div>
      </div>
    </>
  );
};
