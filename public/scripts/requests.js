async function postRequest (url, data) {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return await response.json();
}

function makeRequest () {
  const op1 = document.getElementById('op1').value;
  const op2 = document.getElementById('op2').value;
  const operator = document.getElementById('operator').value;

  const data = {op1: op1, op2: op2, operator: operator};

  if (operator === 'add') {
    const promise = postRequest('/w10/add', data);
    promise.then((response) => {
      console.log(response.answer);
      document.getElementById('answer').innerHTML = response.answer;
    });
  }
  else if (operator === 'sub') {
    const promise = postRequest('/w10/sub', data);
    promise.then((response) => {
      console.log(response.answer);
      document.getElementById('answer').innerHTML = response.answer;
    });
  }
}
