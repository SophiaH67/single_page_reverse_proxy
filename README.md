# single_page_reverse_proxy
Serves a single target page no matter what GET/POST/whatever parameters are specified

# Setup
To run this project, simply run
```bash
docker run \
    --name "single_page_reverse_proxy" \
    -p <port number>:<port number> \
    -e PORT=<port number> \
    -e URL=<url to reverse proxy> \
    marnixah/single_page_reverse_proxy:latest
```