# Table of Contents

- [Environment Variables](#environment-variables)
- [Getting Started](#getting-started)


# Environment Variables

| Name     | Description                 | VALUE |
|----------|-----------------------------|-------|
| NODE_ENV | Environment for application |       |
| PORT     | Port to start web app       | 8080  |
| CI       | For CI                      | false |

## NextAuth Environment Variables

| Name                       | Description                                                                          | VALUE                  |
|----------------------------|--------------------------------------------------------------------------------------|------------------------|
| IRON_SESSION_SECRET        | (REQUIRED) some 32 character length string                                           |                        |
| IRON_SESSION_COOKIE_NAME   | (OPTIONAL) cookie name                                                               | _web_app               |
| IRON_SESSION_COOKIE_DOMAIN | (OPTIONAL) cookie domain                                                             | localhost              |
| IRON_SESSION_COOKIE_SECURE | (OPTIONAL) use secure https for cookie                                               | false                  |
| SERVICES_BACKEND_URL       | (REQUIRED) in docker, https://backend:3000, or production, use the real services url | http://localhost:3000  |


## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) with your browser to see the result.

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
