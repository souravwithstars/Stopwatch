import React from 'react';

const StopWatch = ({ timesElapsed }) => {
  const minutesCount = Math.floor(timesElapsed / 60);
  const secondsCount = timesElapsed % 60;

  const minutesElapsed = minutesCount > 9
    ? minutesCount : `0${minutesCount}`;
  const secondsElapsed = secondsCount > 9
    ? secondsCount : `0${secondsCount}`;

  return (<h1>{minutesElapsed} : {secondsElapsed}</h1>);
};

const StartButton = ({ onclick }) => {
  return (<button onClick={onclick}>START</button>);
};

const PauseButton = ({ onclick }) => {
  return (<button onClick={onclick}>PAUSE</button>);
};

const ResetButton = ({ onclick }) => {
  return (<button onClick={onclick}>RESET</button>);
};

const Buttons = ({ onStart, onReset, onPause }) => {
  return (
    <div id='buttons'>
      <StartButton onclick={onStart} />
      <PauseButton onclick={onPause} />
      <ResetButton onclick={onReset} />
    </div>
  );
};

const Clock = () => {
  let [timesElapsed, setTimesElapsed] = React.useState(0);
  let [intervalId, setIntervalId] = React.useState(0);

  const handleStart = () => {
    if (intervalId === 0) {
      intervalId = setInterval(() => {
        timesElapsed = timesElapsed + 1;
        setTimesElapsed(timesElapsed);
      }, 1000);
      setIntervalId(intervalId);
    }
  };

  const handlePause = () => {
    clearInterval(intervalId);
    intervalId = 0;
    setIntervalId(intervalId);
  };

  const handleReset = () => {
    clearInterval(intervalId);
    intervalId = 0;
    setIntervalId(intervalId);
    timesElapsed = 0;
    setTimesElapsed(timesElapsed);
  };

  return (
    <div id='stopwatch'>
      <StopWatch timesElapsed={timesElapsed} />
      <Buttons
        onStart={() => handleStart()}
        onPause={() => handlePause()}
        onReset={() => handleReset()}
      />
    </div>
  );
};

export default Clock;
