# Vercel Deployment Guide

## Prerequisites

1. A Vercel account connected to GitHub.
2. Access to the `platypus1989/linghang-goat` GitHub repository.

## Project Settings

This site is plain static HTML, CSS, and JavaScript. It does not need an install step or build step.

The repo includes `vercel.json` with the deployment settings:

- Framework Preset: Other
- Build Command: empty
- Install Command: empty
- Output Directory: `.`

## Deploy from the Vercel Dashboard

1. Go to the Vercel dashboard.
2. Create a new project.
3. Import `platypus1989/linghang-goat`.
4. Keep the root directory as the repository root.
5. Confirm the settings from `vercel.json`.
6. Deploy.

After the project is connected, every push to `main` creates a production deployment. Pull requests and non-production branches create preview deployments.

## Deploy from the Vercel CLI

```bash
npm install -g vercel
vercel
vercel --prod
```

The first `vercel` command links the local repo to a Vercel project and creates a preview deployment. The `--prod` command promotes a production deployment.

## Environment Variables

No environment variables are required for this static site.

## Verification

After deployment:

1. Open the deployed URL.
2. Confirm the landing page loads.
3. Confirm navigation links scroll to the correct sections.
4. Confirm the member spotlight controls and Ask section interactions work.
