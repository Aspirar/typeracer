import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from './actions';

class Text extends React.Component {
  constructor(props) {
    super(props);
    this.props.handleClick();
  }

  getColouredText(text, input, correctText) {
    let coloured = '';
    let error = false;
    for (let i = 0; i < text.length; i++) {
      if (i >= input.length) {
        coloured += text.substr(i);
        return `<span style="color: green">${correctText}</span> ` + coloured;
      }
      if (text[i] !== input[i] || error) {
        error = true;
        coloured += `<span style="color: red">${text[i]}</span>`;
      } else {
        coloured += `<span style="color: green">${text[i]}</span>`;
      }
    }
    return `<span style="color: green">${correctText}</span> ` + coloured;
  }

  render() {
    return (
      <React.Fragment>
        {this.props.loading ? (
          <div>Loading...</div>
        ) : (
          <div
            style={{
              maxWidth: '800px',
              margin: 'auto',
              padding: '50px 20px',
              fontSize: '21px',
              lineHeight: '34px',
              color: '#1f2f3f',
            }}
            dangerouslySetInnerHTML={{__html: this.getColouredText( this.props.text, this.props.inputText, this.props.correctText)}}
          ></div>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  text: state.data,
  loading: state.loadingData,
  inputText: state.inputText,
  correctText: state.correctText,
});

const mapDispatchToProps = (dispatch) => ({
  handleClick: () => dispatch(fetchData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Text);
