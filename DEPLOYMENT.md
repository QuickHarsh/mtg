# Deploying to Vercel

This guide explains how to deploy your React application to Vercel.

## Option 1: Vercel for GitHub (Recommended)

1.  Push your code to a GitHub repository.
2.  Go to [Vercel](https://vercel.com) and log in.
3.  Click **"Add New..."** -> **"Project"**.
4.  Import your GitHub repository.
5.  In the **"Configure Project"** screen:
    *   **Framework Preset**: It should auto-detect "Create React App". If not, select it.
    *   **Root Directory**: `./` (default)
    *   **Build Command**: `npm run build` (or `craco build`)
    *   **Output Directory**: `build`
    *   **Environment Variables**: Add any variables from your `.env` file here (e.g., `REACT_APP_BACKEND_URL`).
6.  Click **"Deploy"**.

## Option 2: Vercel CLI

1.  Install Vercel CLI globally:
    ```bash
    npm i -g vercel
    ```
2.  Run the deploy command from your project root:
    ```bash
    vercel
    ```
3.  Follow the prompts:
    *   Set up and deploy? **Y**
    *   Which scope? (Select your account)
    *   Link to existing project? **N**
    *   Project name? (Press Enter for default)
    *   In which directory is your code located? `./`
    *   Want to modify these settings? **N** (Auto-detection usually works)

4.  For production deployment:
    ```bash
    vercel --prod
    ```

## Post-Deployment
- If you encounter 404 errors on refresh, ensure `vercel.json` is present in the root directory.
- Verify that your API calls work. You might need to check CORS settings on your backend if the domain changes.
