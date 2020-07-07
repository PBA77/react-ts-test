import React, { Component } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export default () => {
  const [message, setMessage] = useState('');
  const [isClosing, setIsClosing] = useState(false);
  const boom = () => {
    setMessage('BUM');
    setIsClosing(true);
  };

  useEffect(() => {
    let timerID: NodeJS.Timeout;
    if (isClosing) {
      timerID = setTimeout(() => {
        setMessage('');
        setIsClosing(false);
      }, 2000);
    }
    return () => {
      timerID && clearTimeout(timerID);
    };
  });

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
