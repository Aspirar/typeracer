import React from 'react';
import { connect } from 'react-redux';
import { setTimeInterval } from './actions';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.timerId = setInterval(() => {
      this.props.setTimeInterval();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div style={{
        maxWidth: '800px',
        margin: '30px auto',
      }}>Time Elapsed: {this.props.timeInterval} second(s)</div>
    );
  }
}

const mapStateToProps = (state) => ({
  timeInterval: state.timeInterval
});

const mapDispatchToProps = (dispatch) => ({
  setTimeInterval: () => dispatch(setTimeInterval()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Timer);
