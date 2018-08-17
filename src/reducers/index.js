function setInputText(state, action) {
  const newState = {...state};
  const firstWord = state.data.split(' ')[0];
  const inputWord = action.text.split(' ')[0];
  if ((action.text.includes(' ') || !state.data.includes(' ')) && firstWord === inputWord) {
    newState.correctText = state.correctText + ' ' + firstWord;
    newState.data = state.data.split(' ').slice(1).join(' ');
    newState.inputText = '';
  } else {
    newState.inputText = action.text;
  }
  return newState;
}

export default (state = {
  loadingData: false,
  data: 'Fetching...',
  dataLoaded: false,
  inputText: '',
  startTime: null,
  endTime: null,
  correctText: '',
  timeInterval: 0,
}, action) => {
  switch (action.type) {
    case 'REQUEST_DATA':
      return {...state, loadingData: true};

    case 'RECEIVE_DATA':
      return {
        ...state,
        loadingData: false,
        data: action.data,
        dataLoaded: true,
      };

    case 'SET_INPUT_TEXT':
      return setInputText(state, action);

    case 'SET_TIME':
      if (state.startTime && state.endTime) return state;
      const newState = {...state};
      if (!state.startTime) newState.startTime = action.time;
      if (!state.endTime && state.inputText === state.data) {
        newState.endTime = action.time;
      }
      return newState;
    
    case 'SET_TIME_INTERVAL':
      if (!state.startTime) return state;
      return {
        ...state,
        timeInterval: parseInt((action.time - state.startTime) / 1000, 10),
      };

    default:
      return state;
  }
}
