import React from 'react';
import { useState, useEffect } from 'react';

export default function Clock () {
    const [time, setTime] = useState(10);

    useEffect(() => {
        let interval = null;
        interval = setInterval(() => {
        setTime(time => time - 0.1);
        }, 100);
        if (time <= 0) {
          clearInterval(interval);}
        return () => clearInterval(interval);
      }, [time]);
        
    return (
        <div>
            {Math.floor(time)} seconds left
        </div>
    );
}