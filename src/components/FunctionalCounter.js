import React, { useState } from "react";

const FunctionalClock = () => {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(0);

  const handleClick = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(0);
      return;
    }

    const newIntervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    setIntervalId(newIntervalId);
    console.log(intervalId);
  };

  return (
    <div>
      <h1>The component has been rendered for {count} seconds</h1>
      <button onClick={handleClick}>Start counting</button>
    </div>
  );
};

export default FunctionalClock;
