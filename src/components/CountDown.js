import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import './CountDown.css'

const renderTime = ({ remainingTime }) => {
    return (
        <div className="value">{remainingTime}</div>
    );
  };

const CountDown = () => (
    <CountdownCircleTimer
      isPlaying
      duration={40}
      colors={[['#2EC4B6']]}
      size={80}
      strokeWidth={7}
    >
      {renderTime}
    </CountdownCircleTimer>
  )

export default CountDown;