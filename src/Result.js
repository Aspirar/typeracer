import React from 'react';
import { connect } from 'react-redux';

const Result = ({startTime, endTime, text}) => {
  const wpm = parseInt((text.length / ((endTime - startTime) * 5 / (1000 * 60))), 10);
  const displayStr = wpm ? wpm + ' wpm' : 'You cheated!';
  return (
    startTime && endTime && (
      <div style={{
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        backgroundColor: '#f0f0f0',
        display: 'flex'
      }}>
        <div style={{
          margin: 'auto',
          fontSize: '120px',
        }}>{displayStr}</div>
      </div>
    )
  );
};

const mapStateToProps = (state) => ({
  startTime: state.startTime,
  endTime: state.endTime,
  text: state.correctText,
});

export default connect(
  mapStateToProps,
)(Result);
