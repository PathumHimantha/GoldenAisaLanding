# GitHub Actions deployment

This repository includes a workflow that deploys the frontend files to the server when changes are pushed to the main branch.

## Required GitHub secret

- SSH_KEY: private SSH key for the server user `ubuntu`

## Target deployment path

- /var/www/company-site

The workflow uploads the current repository contents to the server and extracts them into the deployment directory.
