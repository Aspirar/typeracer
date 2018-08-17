async function getDataFromApi() {
  const rawData = await fetch('http://www.randomtext.me/api/');
  const jsonData = await rawData.json();
  const arr = jsonData.text_out.split('<p>');
  return arr.map(val => val.replace('</p>', '').trim()).join(' ').trim();
}

export function requestData() {
  return {
    type: 'REQUEST_DATA',
  }
}

export function receiveData(data) {
  return {
    type: 'RECEIVE_DATA',
    data,
  };
}

export function fetchData() {
  return async function (dispatch) {
    dispatch(requestData());
    const data = await getDataFromApi();
    dispatch(receiveData(data));
  }
}

export function setInputText(text) {
  return {
    type: 'SET_INPUT_TEXT',
    text,
  };
}

export function setTime() {
  return {
    type: 'SET_TIME',
    time: Date.now(),
  };
}

export function setEndTime() {
  return {
    type: 'SET_END_TIME',
    time: Date.now(),
  };
}

export function setTimeInterval() {
  return {
    type: 'SET_TIME_INTERVAL',
    time: Date.now(),
  };
}
