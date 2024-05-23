const core = require('@actions/core');
const github = require('@actions/github');
const axios = require('axios');

try {

const url = core.getInput('url');
const method = core.getInput('method');
let headers = {}
let jsonData = {};


if ((!! core.getInput('jsonData')) && (typeof jsonData === 'string')) {
  jsonData = JSON.parse(jsonData);
}
else {
  jsonData = {};
}


if (!! core.getInput('customHeaders')) {
  headers = JSON.parse(customHeaders);
} else {
  headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
}

if (!! core.getInput('accessToken')) {
  headers['Authorization'] = `Bearer ${accessToken}`;
} else {
  headers['Authorization'] = {};
}

console.log('URL:', url, 'Method:', method, 'Json Data:', jsonData);

if (method === 'GET') {
axios.get(url, {
  headers: headers,
  data: JSON.stringify(jsonData)
}).then(response => {
  console.log('data',response.data, 'status',response.status);
  core.setOutput('response', response.data);
  core.setOutput('status', response.status);
})
} else if (method === 'POST') {
axios.post(url, {
  headers: headers,
  data: JSON.stringify(jsonData)

}).then(response => {
  console.log('data',response.data, 'status',response.status);
  core.setOutput('response', response.data);
  core.setOutput('status', response.status);
})
} else if (method === 'PUT') {
axios.put(url, {
  headers: headers,
  data: JSON.stringify(jsonData)
}).then(response => {
  console.log('data',response.data, 'status',response.status);
  core.setOutput('response', response.data);
  core.setOutput('status', response.status);
})
}

core.startGroup('Logging API response');
console.log(JSON.stringify(github.context, null, 2));
core.endGroup();

}
catch (error) {
  core.setFailed(error.message);
}
