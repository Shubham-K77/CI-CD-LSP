# CI/CD LSP – my simple release notes

[![Build Status](https://github.com/Shubham-K77/ci-cd-lsp/actions/workflows/build.yml/badge.svg)](https://github.com/Shubham-K77/ci-cd-lsp/actions/workflows/build.yml)


## What I researched

- I learned about git tags like `v1.0.0`. A tag marks a version. Easy to remember.
- I looked at releases on GitHub. A release shows notes and a version.
- I picked `softprops/action-gh-release` to create the Release for me. It writes nice notes.
- I used Trivy to scan my Docker image. If it finds critical issues, I stop the release.

## How my release workflow works

1. I push a tag that starts with `v` (example `v1.0.1`).
2. The workflow builds the Docker image using my multi-stage Dockerfile (deps -> runner). Smaller image.
3. I scan the built image with Trivy. Critical = fail.
4. If ok, I push the image to GHCR with the same tag as the git tag.
5. I create a GitHub Release using the tag. Notes are auto generated.

## Links

- Releases page: https://github.com/Shubham-K77/ci-cd-lsp/releases
- One of the successful runs: https://github.com/Shubham-K77/ci-cd-lsp/actions/runs/18285158109
- Image on GHCR (example): `ghcr.io/shubham-k77/ci-cd-lsp:v1.0.1`

## How I cut a new release

```
git tag v1.0.2
git push origin v1.0.2
```

Then I wait a minute. The pipeline builds, scans, pushes, and makes the Release for me.

# CI/CD LSP

I track my main build status here:

![Build Status](https://github.com/shubham-k77/ci-cd-lsp/actions/workflows/build.yml/badge.svg)

To cut a release:

- I push a tag like `v1.0.0`.
- The `Release Pipeline` builds the Docker image, scans it with Trivy, pushes to GHCR, and publishes a GitHub Release.
