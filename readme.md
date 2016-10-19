# Browser Sandbox

### Why?
---
Every once in a while, I want to a quick way to spin up a page and try to make a template or component that I can incorporate into another project. This sandbox provides me a live reload environment that can compile [Sass](http://sass-lang.com/) powered by [Browsersync](https://www.browsersync.io/) and [Gulp](http://gulpjs.com/).

Basically, I used the example provided by Browser-Sync to help integrate it with Sass as a guide. In a way, I was looking for an offline version of codepen. Goes without saying that if you're looking to use this offline, CDN calls will need to give way to local copies of the libs needed.

That's all there is to this.

### How?
---

1. Install Gulp globally

```sh
npm install -g gulp
```

2. Clone the repo and change to the project directory

```sh
git clone git@github.com:silivizzle/browser-sandbox.git
```

3. Change into the new directory

```sh
cd browser-sandbox
```

4. Install the dependencies

```
npm install
```

5. Serve
```
gulp
```

5a. ...and to stop serving, press `Ctrl + C` in the same shell you used to start the server

### Reference
Find the template I used from Browsersync [here](https://www.browsersync.io/docs/gulp#gulp-sass-css).

-ts