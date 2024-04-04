# databricks-api-action

[GitHub Marketplace](https://img.shields.io/badge/Marketplace-Databricks%20API%20Action-blue?logo=github)]()


This repository contains a custom action for GitHub Actions.

## Usage

To use this action in your workflow, you can add the following step:

```yaml
- name: Run Databricks API Action
  uses: lab/github/databricks-api-action@main
  with:
    token: ${{ secrets.DATABRICKS_TOKEN }}
    host: ${{ secrets.DATABRICKS_HOST }}
    method: GET
    path: /api/2.0/clusters/list
```

## Inputs

- `token`: The Databricks API token.
- `host`: The Databricks host.

## Outputs

- `response`: The response from the Databricks API.
- `status`: The status code of the response.
