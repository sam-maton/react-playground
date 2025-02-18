import React from 'react';
import { useState, useEffect } from 'react';

function UseEffectEvents() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //This effect deomstrates the use of passing a function to 'setCount' so we can drop 'count' from the dependancy array. This means that event listeners are not added/removed multiple times.
    const handleVisibilityChange = () => {
      if (document.visibilityState !== 'visible') {
        setCount((c) => c + 1);
      }
    };
    console.log('adding listener');
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      console.log('removing listener');
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div>
      <h3>Change tab to update count</h3>
      <p>Current count: {count}</p>
    </div>
  );
}

export default UseEffectEvents;
