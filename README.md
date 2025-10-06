# CI/CD LSP

I track my main build status here:

![Build Status](https://github.com/shubham-k77/ci-cd-lsp/actions/workflows/build.yml/badge.svg)

To cut a release:
- I push a tag like `v1.0.0`.
- The `Release Pipeline` builds the Docker image, scans it with Trivy, pushes to GHCR, and publishes a GitHub Release.


