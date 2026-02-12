# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio site built with Jekyll using the Indigo theme. Deployed to GitHub Pages at mohsinsr.github.io.

## Development Commands

```bash
# Install dependencies
bundle install

# Run local development server (http://localhost:4000)
bundle exec jekyll serve

# Build site for production
bundle exec jekyll build

# Validate HTML output (run after build)
rake
```

## Architecture

**Jekyll structure:**
- `_config.yml` - Site configuration (personal info, theme settings, plugins)
- `_layouts/` - Page templates (default, post, page, compress)
- `_includes/` - Reusable components (header, footer, nav, social-links, author)
- `_posts/` - Blog posts in markdown (YYYY-MM-DD-title.markdown format)
- `_sass/` - Stylesheets organized into base/, components/, pages/
- `assets/images/` - Static images including profile picture

**Theme features configured in `_config.yml`:**
- Dark theme (auto mode)
- Large width layout (810px)
- Read time, tags, related posts enabled
- Author block display enabled

**Key pages:**
- `index.html` - Homepage
- `about.md` - About page
- `blog.html` - Blog listing
- `projects.html` - Projects listing

## Styling

Styles use SCSS in `_includes/style.scss` and `_includes/style-dark.scss`, importing from `_sass/`. The site uses no JavaScript for performance.
