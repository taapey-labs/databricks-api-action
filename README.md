# Databricks API Actions

![databricksApiAction](https://github.com/taapey-labs/databricks-api-action/actions/workflows/test.yml/badge.svg?event=push&branch=main)

This repository contains a custom action for GitHub.

## Usage

To use this action in your workflow, you can add the following step:

```yaml
- name: Run Databricks API Action
  uses: actions/databricks-api-action@main
  with:
    url: '${{secrets.DATABRICKS_API_URL}}'
    accessToken: '${{secrets.DATABRICKS_ACCESS_TOKEN}}'
    method: 'GET'
```

## Inputs

- `accessToken`: The Databricks API token.
- `url`: The Databricks API endpoint.
- `method`: The HTTP method to use.
- `jsonData`: The JSON data to send with the request.
- `customHeaders`: Custom headers to send with the request.


## Outputs

- `response`: The response from the Databricks API.
- `status`: The status code of the response.
