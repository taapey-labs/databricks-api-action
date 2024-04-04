# databricks-api-action

[![Build Status](badge)](https://github.com/taapey-labs/databricks-api-action/blob/main/.github/workflows/test.yaml?event=push&branch=main)


This repository contains a custom action for GitHub.

## Usage

To use this action in your workflow, you can add the following step:

```yaml
- name: Run Databricks API Action
  uses: actions/databricks-api-action@main
  with:
    url: '${{secrets.DATABRICKS_API_URL}}'
    access_token: '${{secrets.DATABRICKS_ACCESS_TOKEN}}'
    method: 'GET'
```

## Inputs

- `access_token`: The Databricks API token.
- `url`: The Databricks API endpoint.
- `method`: The HTTP method to use.

## Outputs

- `response`: The response from the Databricks API.
- `status`: The status code of the response.
