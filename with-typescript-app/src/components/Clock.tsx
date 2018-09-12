import React from 'react';

interface IClockState {
  counter: number;
}

export default class Clock extends React.Component<{}, IClockState> {

  private timerID = null

  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
    }
  }

  public componentDidMount() {
    this.timerID = window.setInterval(
      () => this.updateCounter(),
      1000,
      )
  }

private updateCounter = () => {
  this.setState({ counter: this.state.counter + 1 })
}

private componentWillUnmount() {
  window.clearInterval(this.timerID);
}

  public render() {

    let dateNow = new Date();

    return (
      <div>
        {`Tänään on ${dateNow.getHours()}.${dateNow.getMinutes()}.${dateNow.getSeconds()}.`}
        {typeof window !== 'undefined' && window.toString()}
      </div>
      )
  }

}
