# Iceland API Proxy

This repository contains simple API route handlers for fetching data from
[apis.is](http://apis.is). These handlers can be deployed as serverless
functions (for example in a Next.js `pages/api` directory) or used in a
custom server setup.

## Available handlers

- **concerts.js** – Fetches concert information.
- **weather.js** – Fetches the English weather forecast.

Each handler forwards the response from the external API and enables CORS by
setting `Access-Control-Allow-Origin` to `*`.
