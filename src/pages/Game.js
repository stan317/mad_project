import React from 'react';
import TurnDisplay from '../containers/TurnDisplay';

export default function Game () { 
    // const [time, setTime] = useState(40);

    // const handleClick = () => {
    //     setTime(40);
    // }

    // useEffect(() => {
    //     let interval = null;
    //     interval = setInterval(() => {
    //     setTime(time => time - 1);
    //     }, 1000);
    //     if (time === 0) {
    //       clearInterval(interval);
    //       alert("Time's Up !")
    //     }
    //     return () => clearInterval(interval);
    //   }, [time]);

    return (
        <div>
            <TurnDisplay />
        </div>
    )
}