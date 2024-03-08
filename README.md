This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000] with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Github OAuth Configuration with Dynamic:

1.Obtaining OAuth credentials for GitHub open [https://github.com/settings/developers] sign in to your account.
If you’re on your profile page, click `Developer Settings` at the bottom of the left-hand menu.
2.Click on the Oauth Apps menu and then `Register a new application`.
3.Enter a name for your application, the homepage URL, and the callback URL.
4.Enter whatever name and homepage URL you want.

## For the callback URL follow the steps below.

1.Go to [https://app.dynamic.xyz/dashboard/configurations#emailsocialsignin]
2.In the Dynamic dashboard, visit Social Signup page.
3.Open the Github section of the configuration.
4.Copy the Redirect URL and paste it in the Callback URL section in `GITHUB`.
5.Click `Register application` button.
Github will create an OAuth app for you and will redirect you to the details page.
6.Click `Generate a new client secret` button
7.Copy the `Client ID` and `Client secret` you’ve just created and paste it into `Set up Github Auth` Modal in the Dynamic Dashboard.

8.Click `Confirm` button.
