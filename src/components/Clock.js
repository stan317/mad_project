import React from 'react';
import { useState, useEffect } from 'react';

export default function Clock () {
    const [time, setTime] = useState(40);

    useEffect(() => {
        let interval = null;
        interval = setInterval(() => {
        setTime(time => time - 1);
        }, 1000);
        if (time === 0) {
          clearInterval(interval);
          alert("Time's Up !")
        }
        return () => clearInterval(interval);
      }, [time]);
        
    return (
        <div>
            {time} seconds left
            <button onClick={() => setTime(40)}>
            reset time at 40 seconds
            </button>
        </div>
    );
}