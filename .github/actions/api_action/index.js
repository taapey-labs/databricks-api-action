const core = require('@actions/core');
const github = require('@actions/github');
const axios = require('axios');

try {

const api_url = core.getInput('api_url');
const api_token = core.getInput('api_token');

console.log('api_url:', api_url);
// console.log('api_token:', api_token);

axios.get(api_url, {
  headers: {
    'Authorization': `Bearer ${api_token}`,
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
}).then(response => {
  console.log(response.data);
  core.setOutput('response', response.data);
})


core.startGroup('Logging Api response');
console.log(JSON.stringify(github.context, null, 2));
core.endGroup();

}
catch (error) {
  core.setFailed(error.message);
}
