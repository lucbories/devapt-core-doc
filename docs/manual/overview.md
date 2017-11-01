
# Overview

With DEVAPT you can easily develop powerfull application.
Built-in features cover many important subjects as: authentication, restfull, http server, distributed services, logs, metrics...
Main characteristics of DEVAPT architecture is dynamic behaviors, reactive programming, object oriented ES6 javascript, gulp build chain
All of this on NodeJS.




## Projects structure
All devapt-* github repositories have the same structure: a master branch with the last tagged tree, a develop branch with latest comited updates and tags.

All devapt-* projects have a common folders tree:
project root\
 * bower_components (only for browser features)
 * build: building scripts
 * dist: build codes and resources
  * dist/js: build javascript codes
  * dist/resources: build resources configuration
 * node_modules: nodes packages
 * public: shared assets for browsers
  * public/app_name/css: CSS assets
  * public/app_name/html: HTML assets
  * public/app_name/img: images assets
  * public/app_name/js: javascript assets
 * public/favico.png: browser project icon
 * src: project sources
  * src/js: javascript sources
  * src/resources: resources configuration sources
 * tmp: temporary application files (logs)
 * bower.json: browser packages configuration
 * gulpfile.js: main build script
 * LICENSE: project license
 * package.json: nodes packages configuration
 * README.md: project description

Some differences appears between library and application folder.

Versionning use standard method: M.m.p with M is a major change, m a minor change, p a patch.



## Development

```
git clone git://github.com/lucbories/devapt-core-common.git
cd devapt-core-common
npm install
npm test
```
Same commands for devapt-core-browser, devapt-core-server, devapt-core-services



## Contribution

Feel free to contribute, you're welcome.

Check issues and solve it:
* [common file issues](https://github.com/lucbories/devapt-core-common/issues)
* [server file issues](https://github.com/lucbories/devapt-core-server/issues)
* [services file issues](https://github.com/lucbories/devapt-core-services/issues)
* [browser file issues](https://github.com/lucbories/devapt-core-browser/issues)

Submit your work:
* [common pull requests](https://github.com/lucbories/devapt-core-common/pulls)
* [server pull requests](https://github.com/lucbories/devapt-core-server/pulls)
* [services pull requests](https://github.com/lucbories/devapt-core-services/pulls)
* [browser pull requests](https://github.com/lucbories/devapt-core-browser/pulls)

If you submit a pull request, please be sure to add or update corresponding
test cases, and ensure that `npm test` continues to pass.


