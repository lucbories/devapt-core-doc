# Welcome on Devapt project documentation (v2 or more)

With Devapt you can easily develop powerfull application.

Devapt libraries are usefull to quickly develop applications with more JSON configuration and less code.


## What is Devapt ?

The Developpers Application Toolkit (Devapt) is a usefull package for developers:
create quickly and securely a complex distributed set of applications or a simple alone application into one or more nodejs.

This project is based on Javascript (ECMAscript 6 transpiled in ES5) and nodejs.
Devapt contains a server runtime and a set of client features.
Devapt help you to write less code and to use easily more features.

The principle is simple: you write some configuration files for distributed nodes, models, views and menus and the you start the application.
The framework will automatically generates the server and manages common features (logges, traces, metrics, restful, security...).
Simply launch index.html and your application is up a rich user interface and many features.

Built-in features cover many important subjects as: authentication, restfull, http server, distributed services, logs, metrics...
Main characteristics of DEVAPT architecture is dynamic behaviors, reactive programming, object oriented ES6 javascript, gulp build chain
All of this on NodeJS.

My main initial purpose was to provide me a simple way to play with new scientifical or computer concepts by writing some labs applications.



## Where to find Devapt ?

Devapt is a set of core libraries to help producing applications:

|Project|GitHub|API Manual|NPM|Demo|Issues|
|------|------|------|------|------|------|
|devapt-core-common|[Repo](https://github.com/lucbories/devapt-core-common)|[Manual](http://lucbories.github.io/api_common/index.html)|[NPM](https://www.npmjs.com/package/devapt-core-common)|[Demo](http://demo.devapt.org)|[Issues](https://github.com/lucbories/devapt-core-common/issues)|
|devapt-core-browser|[Repo](https://github.com/lucbories/devapt-core-browser)|[Manual](http://lucbories.github.io/api_browser/index.html)|[NPM](https://www.npmjs.com/package/devapt-core-browser)|[Demo](http://demo.devapt.org)|[Issues](https://github.com/lucbories/devapt-core-browser/issues)|
|devapt-core-server|[Repo](https://github.com/lucbories/devapt-core-server)|[Manual](http://lucbories.github.io/api_server/index.html)|[NPM](https://www.npmjs.com/package/devapt-core-server)|[Demo](http://demo.devapt.org)|[Issues](https://github.com/lucbories/devapt-core-server/issues)|
|devapt-core-services|[Repo](https://github.com/lucbories/devapt-core-services)|[Manual](http://lucbories.github.io/api_services/index.html)|[NPM](https://www.npmjs.com/package/devapt-core-services)|[Demo](http://demo.devapt.org)|[Issues](https://github.com/lucbories/devapt-core-services/issues)|


Others libraries provide usefull features.

|Project|GitHub|API Manual|NPM|Demo|Issues|
|------|------|------|------|------|------|
|devapt-features-foundation6|[Repo](https://github.com/lucbories/devapt-features-foundation6)|Todo|[NPM](https://www.npmjs.com/package/devapt-features-foundation6)|[Demo](http://demo.devapt.org)|[Issues](https://github.com/lucbories/devapt-features-foundation6/issues)|


Applications are good examples:

|Project|GitHub|API Manual|NPM|Demo|Issues|
|------|------|------|------|------|------|
|devapt-app-testbus|[Repo](https://github.com/lucbories/devapt-app-testbus)|Todo|[NPM](https://www.npmjs.com/package/devapt-app-testbus)|[Demo](http://demo.devapt.org)|[Issues](https://github.com/lucbories/devapt-app-testbus/issues)|




## What does Devapt offer for developpers ?

Devapt library offers a "runtime" instance which delivers this features:

 * browser or server rendering (Render instance)
 * rendering base class for custom widgets or views (Component class)
 * Redux store on client side
 * distributed servers
 * master configuration settings (distributed on each nodes)
 * loggers engines and traces configuration (for instances, classes, modules)
 * datas abstraction
 * reactive programming (thanks BaconJS)
 * documentation (wotrk in progress)


## How does Devapt work ?

With Devapt you define:

 * A topology, simple (one application, one server, one service) or complex (many services distributed for many applications on many distributed servers).
 * Some resources (models, views, menubars, menus)
 * Security rules

A topology contains:

 * nodes: A node is a nodejs process with an unique name. You can have many nodes on the same machine.
Each node communicates with other node through messaging buses (messages, metrics, logs).

<img src="./manual/asset/Buses.png" width="80%" alt="Messaging picture" />


A node can have one or many servers.

 * servers: A server provides one or more services and listen client connections through a couple (host, port).

A server has a unique name and can be one of types: restify, express, socket.io (coming soon)...

 * services: A service offers one feature to clients. A service can be one of: static assets providers, generic middleware provider, RESTfull provider, resources provider...
 * applications: An application contains some services and is provided through nodes and servers.

An application can have one service on one server on one node.
Or many services on many servers on many nodes.

An application contains:

 * modules: functional features for applications (a set of preconfigured UI for example).
 * plugins: technical fearures for applications (a rendering provider for example).
 * security: defines authentication and authorization rules.

<img src="./manual/asset/Host.png" width="80%" alt="Distributed picture" />


The rendering engines are plugins and rendering classes are stateless: state is stored in a Redux store.
See [Getting Started with Redux](https://egghead.io/series/getting-started-with-redux) for flow concepts.



## Devapt is a smart glue between many powerfull projects
Thanks for all projects leaders and contributers.

The given list is an extract of all used or inspired projects.


Main dependancies:

[NodeJS: https://nodejs.org](https://nodejs.org)


Servers and datas access:

 * [Express: http://expressjs.com/](http://expressjs.com/)
 * [Restify: http://restify.com/](http://restify.com/)
 * [Epilogue: https://github.com/dchester/epilogue](https://github.com/dchester/epilogue)
 * [Sequelize: http://sequelizejs.com](http://sequelizejs.com)
 * [Socket.io: http://socket.io/](http://socket.io/)


Security:

 * [Passport: http://passportjs.org](http://passportjs.org)
 * [Node ACL: https://github.com/OptimalBits/node_acl](https://github.com/OptimalBits/node_acl)


Foundations:

 * [BaconJS: https://baconjs.github.io/](https://baconjs.github.io/)
 * [SimpleBus: https://github.com/ajlopez/SimpleBus](https://github.com/ajlopez/SimpleBus)
 * [jQuery: https://jquery.com](https://jquery.com)
 * [Immutable: https://facebook.gith)ub.io/immutable-js/docs/#/](https://facebook.github.io/immutable-js/docs/#/)
 * [Redux: http://redux.js.org/docs/introduction/Motivation.html](http://redux.js.org/docs/introduction/Motivation.html)
 * [Moment: http://momentjs.com/](http://momentjs.com/)
 * [Vantage: https://github.com/dthree/vantage](https://github.com/dthree/vantage)
 * [Bunyan: https://github.com/trentm/node-bunyan](https://github.com/trentm/node-bunyan)
 * [Winston: https://github.com/winstonjs/winston](https://github.com/winstonjs/winston)
 * [Circuit breaker: https://www.npmjs.com/package/circuit-breaker](https://www.npmjs.com/package/circuit-breaker) [or https://github.com/yammer/circuit-breaker-js](https://github.com/yammer/circuit-breaker-js)
 * [LowDb: https://github.com/typicode/lowdb](https://github.com/typicode/lowdb)


Rendering:

 * [Foundation by ZURB: http://foundation.zurb.com/sites.html](http://foundation.zurb.com/sites.html)
 * [Mustache: https://github.com/janl/mustache.js](https://github.com/janl/mustache.js)
 * [React (coming soon): http://facebook.github.io/react/docs/tutorial.html](http://facebook.github.io/react/docs/tutorial.html)



Dev and build dependancies: (coming soon.)

 * [Babel: https://babeljs.io](https://babeljs.io)
 * [Chai: http://chaijs.com/](http://chaijs.com/)
 * [Gulp: http://gulpjs.com/](http://gulpjs.com/)
 * [Mocha: https://mochajs.org/](https://mochajs.org/)
 * [JSDoc: http://usejsdoc.org/](http://usejsdoc.org/)




## Version

Current active version is 2.x.x

Versionning use standard method: M.m.p with M is a major change, m a minor change, p a patch.



## License

Copyright Luc BORIES 2015-2016

Apache Version 2 license.

See [LICENSE on GitHub](https://github.com/lucbories/devapt-core-common/blob/master/LICENSE)



Please enjoy using devapt projects and let me know if they are usefull for you.

[Next](https://lucbories.github.io)