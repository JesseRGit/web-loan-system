import React from 'react';

export default class ClockOLD extends React.Component<{}, {}>{

  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString('en-GB')
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      time: new Date().toLocaleTimeString('en-GB')
    });
  }

  render() {
    return (
      <p>
        Kello on {this.state.time}.
      </p>
    );
  }

}
