import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  constructor(props) {
    super(props)
    this.state = {sec: 0, mins: 0, startStatus: false}
  }

  componentDidMount() {
    this.timerId = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  tick = () => {
    const {sec, mins, startStatus} = this.state
    if (startStatus === true) {
      if (sec < 59) {
        this.setState(prevState => ({sec: prevState.sec + 1, min: 0}))
      } else {
        this.setState(prevState => ({sec: 0, mins: prevState.mins + 1}))
      }
    }
  }

  onClickStartButton = () => {
    const {sec, mins, startStatus} = this.state

    this.setState(prevState => ({
      sec: prevState.sec,
      mins: prevState.mins,
      startStatus: true,
    }))
  }

  onclickStopButton = () => {
    const {sec, mins, startStatus} = this.state
    this.setState(prevState => ({
      sec: prevState.sec,
      mins: prevState.mins,
      startStatus: false,
    }))
    console.log('stop')
  }

  onClickResetButton = () => {
    const {sec, mins, startStatus} = this.state
    this.setState({sec: 0, mins: 0, startStatus: false})
    console.log('reset')
  }

  render() {
    const {sec, mins, startStatus} = this.state
    console.log(mins)
    const mainMin = mins < 10 ? `0${mins}` : mins
    const mainSec = sec < 10 ? `0${sec}` : sec
    return (
      <div className="main-container">
        <div className="stopwatch-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="timer-container">
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png "
                alt="stopwatch"
              />
              <p>Timer</p>
            </div>

            <h1 className="stopwatch-timer">
              {mainMin}:{mainSec}
            </h1>
            <div className="button-container">
              <button
                className="startButton"
                type="button"
                onClick={this.onClickStartButton}
              >
                start
              </button>
              <button
                className="stopButton"
                type="button"
                onClick={this.onclickStopButton}
              >
                Stop
              </button>
              <button
                className="resetButton"
                type="button"
                onClick={this.onClickResetButton}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
