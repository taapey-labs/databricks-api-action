# databricks-api-action

![databricks-api-action](https://github.com/taapey-labs/databricks-api-action/blob/main/action.yaml/badge.svg?event=push&branch=main)


This repository contains a custom action for GitHub Actions.

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

- `token`: The Databricks API token.
- `host`: The Databricks host.

## Outputs

- `response`: The response from the Databricks API.
- `status`: The status code of the response.
