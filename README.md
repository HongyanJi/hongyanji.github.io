# Hongyan Ji's Academic Website

This repository contains the source for [hongyanji.github.io](https://hongyanji.github.io), a personal academic website built with [Jekyll](https://jekyllrb.com/) and based on the al-folio theme.

## Local development

Install the Ruby dependencies and start the local server:

```sh
bundle install
bundle exec jekyll serve
```

The site is then available at `http://localhost:4000`.

## Deployment

The GitHub Actions workflow in `.github/workflows/deploy.yml` builds the site and publishes it to GitHub Pages when changes are pushed to `master` or `main`. Pull requests run the build without publishing it, and the workflow can also be started manually.
