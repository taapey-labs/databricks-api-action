const core = require('@actions/core');
const github = require('@actions/github');
const axios = require('axios');

try {

const url = core.getInput('url');
const access_token = core.getInput('access_token');
const method = core.getInput('method');
const json_data = core.getInput('json_data');

console.log('URL:', url, 'Method:', method, 'Json Data:', json_data);

if (method === 'GET') {
axios.get(url, {
  headers: {
    'Authorization': `Bearer ${access_token}`,
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
}).then(response => {
  console.log(response.data);
  core.setOutput('response', response.data);
  core.setOutput('status', response.status);
})
} else if (method === 'POST') {
axios.post(url, {
  headers: {
    'Authorization': `Bearer ${access_token}`,
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  data: JSON.stringify(json_data)

}).then(response => {
  console.log(response.data);
  core.setOutput('response', response.data);
  core.setOutput('status', response.status);
})
} else if (method === 'PUT') {
axios.put(url, {
  headers: {
    'Authorization': `Bearer ${access_token}`,
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  data: JSON.stringify(json_data)
}).then(response => {
  console.log(response.data);
  core.setOutput('response', response.data);
  core.setOutput('status', response.status);
})
}

core.startGroup('Logging Api response');
console.log(JSON.stringify(github.context, null, 2));
core.endGroup();

}
catch (error) {
  core.setFailed(error.message);
}
