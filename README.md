# Iceland API Proxy

This repository contains simple API route handlers for fetching data from
[apis.is](http://apis.is). These handlers can be deployed as serverless
functions (for example in a Next.js `pages/api` directory) or used in a
custom server setup.

## Available handlers

- **concerts.js** – Fetches concert information.

Each handler forwards the response from the external API and enables CORS by
setting `Access-Control-Allow-Origin` to `*`.

In addition to the API route, a small widget script is provided in
`concerts-widget.js` for easily embedding concert data on static sites.

## Embedding on Squarespace

Include the following in a Code block:

```html
<div id="concerts-widget"></div>
<script src="PATH_TO/concerts-widget.js"></script>
<script>
  renderConcerts(\"concerts-widget\", \"URL_TO_DEPLOYED_API/concerts\");
</script>
```

Replace `PATH_TO` with the raw URL of `concerts-widget.js` on GitHub or wherever you host it, and `URL_TO_DEPLOYED_API` with the publicly accessible URL of your deployed `concerts.js` API route.

