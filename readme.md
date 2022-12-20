# Mastodon Status Embed

This package allows for easily embedding Mastodon statuses as a Web Component.

## Getting Started
### Installation
```bash
$ npm install mastodon-status-embed
```
### Dependencies
This package utilizes font-awesome version 6. Since it is a web component making use of the shadow dom, be sure to include font-awesome in the containing document as well:

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />
```

### Usage
```html
<mastodon-status-embed status-id="<the status id>" instance="<mastodon instance>"></mastodon-status-embed>
```

