import React from 'react';
import { connect } from 'react-redux';
import {setInputText, setTime} from './actions';

const InputBox = ({dataLoaded, inputText, onChange}) => (
  <React.Fragment>
    {!dataLoaded ? (
      <div>Waiting for data load</div>
    ) : (
      <textarea
        onChange={(onChange)}
        value={inputText}
        placeholder="Type..."
        style={{
          maxWidth: '800px',
          width: '800px',
          margin: 'auto',
          display: 'block',
          font: '16px/24px Noto Sans',
          height: '200px',
          backgroundColor: '#efefef',
          border: 0,
          outline: 0,
          padding: '30px',
          color: '#1f2f3f',
        }} />
    )}
  </React.Fragment>
);

const mapStateToProps = (state) => ({
  dataLoaded: state.dataLoaded,
  inputText: state.inputText,
  data: state.data,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (event) => {
    dispatch(setInputText(event.target.value));
    dispatch(setTime());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InputBox);
