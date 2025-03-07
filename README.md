# Single Page Reverse Proxy

Reverse proxies a single target page no matter what parameters or url's are requested.

# Setup
To run this project, simply run
```bash
docker run \
    --name "single_page_reverse_proxy" \
    -p <port number>:<port number> \
    -e PORT=<port number> \
    -e URL=<url to reverse proxy> \
    SophiaH67/single_page_reverse_proxy:latest
```
