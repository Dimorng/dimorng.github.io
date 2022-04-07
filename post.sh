#!/bin/sh
hugo && cd public/ && git init && git add . && git commit -m 'update' && git remote add origin git@github.com:Googoraa/googoraa.github.io.git && git push -f origin master && cd .. && rm -rf public/

# To Upload New Post Just Run Comman "./post.sh"
