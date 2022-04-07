# Googoraa Blog (Source Code)

A static blog powered by [Hugo static site generator](https://gohugo.io/), hosting on [GitHub Pages](https://gohugo.io/hosting-and-deployment/hosting-on-github/). 

## Repo

This blog is splitted into 2 repos:

1. [Blog Templete](https://github.com/Googoraa/googoraa-hugo-theme), and
2. [Blog](https://github.com/Googoraa/googoraa.github.io)

The template repo provides style, layout and functionality to the blog. The blog repo contains **all blog posts** and **the template (as [git submodule](https://github.blog/2016-02-01-working-with-submodules/))** and also other files in order to help Hugo working properly. 

## Building & Running Locally

This blog is a simple Hugo-powered site hosted by GitHub Pages. 

### Install Hugo

Download [Hugo](https://github.com/gohugoio/hugo/releases) and install it.

Googoraa blog's currently based on [Hugo 0.83.1](https://github.com/gohugoio/hugo/releases/tag/v0.83.1) extended version, Hence this version is recommended to installed on your machine (`hugo_extended_0.83.1_Linux-64bit.deb`) if possible.

### Clone this repository

Exactly, this repository is actually Hogo-powered Googoraa blog – it contains everything required to build & run Googoraa blog locally.

`git clone --recursive https://github.com/Googoraa/googoraa.github.io.git`

\* `--recursive` option is used to ensure that `submodule` – which is [@googoraa-hugo-theme](https://github.com/Googoraa/googoraa-hugo-theme.git) is also cloned to `theme/googoraa-hugo-theme/`. Learn more about [git submodule](https://github.blog/2016-02-01-working-with-submodules/).

### Run Blog Locally

At this point, you alread have everything required to build & run Googoraa blog locally. Hence, run:

```
hugo server
```
\* append `-D` option if you want to include `draft` posts also.

and the site is ready to access locally (in most case) via `http://localhost:1313/` address. So yeah, navigate your web browser of choice to this address and BOOM.

See [Hogo docs](https://gohugo.io/documentation/) for more info.

If you want to use [@googoraa-hugo-theme](https://github.com/Googoraa/googoraa-hugo-theme.git) only to build your own blog, README of [@googoraa-hugo-theme](https://github.com/Googoraa/googoraa-hugo-theme.git) will help you do that.

## Inspiration

This blog is inspired by:

- [@elmentaryos_blog](https://github.com/elementary/blog-template)
- [@omg!_ubuntu](https://www.omgubuntu.co.uk/)
- [@itsfoss](https://itsfoss.com/)
- [@linux_mint_blog](https://blog.linuxmint.com/)
- [@daseveny](https://www.daseveny.com/)