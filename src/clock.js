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

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { timesElapsed: 0 };
    this.intervalId = 0;
  }

  handleStart() {
    this.intervalId = setInterval(() => {
      const timesElapsed = this.state.timesElapsed + 1;
      this.setState(_ => {
        return { timesElapsed };
      });
    }, 1000);
  }

  handlePause() {
    clearInterval(this.intervalId);
  }

  handleReset() {
    clearInterval(this.intervalId);
    this.setState(_ => {
      return { timesElapsed: 0 };
    });
  }

  render() {
    return <div id='stopwatch'>
      <StopWatch timesElapsed={this.state.timesElapsed} />
      <Buttons
        onStart={() => this.handleStart()}
        onReset={() => this.handleReset()}
        onPause={() => this.handlePause()}
      />
    </div>;
  }
}

export default Clock;
