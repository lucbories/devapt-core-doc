# Devapt - Projects map

Devapt projects refcard.


## Development Map

# Projects core dependencies (package.json)

|Project|devapt-core-common|devapt-core-browser|devapt-core-services|devapt-core-server|
|------|------|------|------|------|
|devapt-app-testbus|x|x|x|x|
|devapt-app-testui|x|x|x|x|
|devapt-app-devtools|x|x|x|x|
|devapt-core-doc|x|x|x|x|
|devapt-core-common|||||
|devapt-core-browser|x||||
|devapt-core-services|x||||
|devapt-core-server|x||x||
|devapt-features-foundation6||x|||
|devapt-features-cytoscape||x|||
|devapt-features-sparklines||x|||
|devapt-features-labs|x|x|||
|devtools|x||x||

# Projects features dependencies (package.json)

|Project|devapt-features-foundation6|devapt-features-cytoscape|devapt-features-sparklines|devapt-features-labs|devtools|
|------|------|------|------|------|------|
|devapt-app-testbus||||||
|devapt-app-testui||||||
|devapt-app-devtools|||||x|
|devapt-core-common||||||
|devapt-core-browser||||||
|devapt-core-services||||||
|devapt-core-server||||||
|devapt-features-labs||||||
|devapt-app-labs|x|||x||
|devtools|x|x|x|||



## devapt-core-doc
[DEVAPT CORE DOC project](https://github.com/lucbories/devapt-core-doc/)

Purpose: generate core projects documentation (API, manuals, tutorials)

Devapt projects dependencies:
 * devapt-core-browser
 * devapt-core-common
 * devapt-core-server
 * devapt-core-services


## devapt-core-common
[DEVAPT CORE COMMON project](https://github.com/lucbories/devapt-core-common/)

Purpose: common features for all others projects.

Devapt projects dependencies:
 * none


## devapt-core-services
[DEVAPT CORE SERVICES project](https://github.com/lucbories/devapt-core-services/)

Purpose: services implementation for browser/server projects.

Devapt projects dependencies:
 * devapt-core-common

Provided services:
 * assets routes
 * logs stream provider
 * messages/logs/metrics stream provider and dispatching
 * filtered metrics stream provider
 * middleware based routes provider
 * ping/pong provider
 * resources configuration provider
 * security login/signup/logout/... provider (coming soon)
 * topology description provider


## devapt-core-server
[DEVAPT CORE SERVER project](https://github.com/lucbories/devapt-core-server/)

Purpose: server features. Provides assets, resources, services, security, plugins, server runtime and metrics.

Devapt projects dependencies:
 * devapt-core-common
 * devapt-core-services


## devapt-core-browser
[DEVAPT CORE BROWSER project](https://github.com/lucbories/devapt-core-browser/)

Purpose: browser features. Provides commands, client runtime and components.

Devapt projects dependencies:
 * devapt-core-common


## devapt-app-testbus
[TESTBUS app project](https://github.com/lucbories/devapt-app-testbus/)

Purpose: messages bus testing application.

Devapt projects dependencies:
 * devapt-core-common
 * devapt-core-browser
 * devapt-core-server
 * devapt-core-services


## devapt-app-testui
[TESTUI app project](https://github.com/lucbories/devapt-app-testui/)

Purpose: user interface testing application.

Devapt projects dependencies:
 * devapt-core-common
 * devapt-core-browser
 * devapt-core-server
 * devapt-core-services


## devapt-features-foundation6
[DEVAPT FOUNDATION 6 features project](https://github.com/lucbories/devapt-features-foundation6/)

Purpose: Foundation 6 rendering features.

Devapt projects dependencies:
 * devapt-core-common


## devapt-features-cytoscape
[DEVAPT CYTOSCAPE features project](https://github.com/lucbories/devapt-features-cytoscape/)

Purpose: Cytoscape rendering features.

Devapt projects dependencies:
 * devapt-core-common
 * devapt-core-browser


## devapt-features-sparklines
[DEVAPT SPARKLINES features project](https://github.com/lucbories/devapt-features-sparklines/)

Purpose: Sparklines rendering features.

Devapt projects dependencies:
 * devapt-core-common
 * devapt-core-browser


## devapt-features-labs
[DEVAPT LABS features project](https://github.com/lucbories/devapt-features-labs/)

Purpose: labs features. Provides calculus and plots.

Devapt projects dependencies:
 * devapt-core-common
 * devapt-core-browser


## devapt-app-labs
[DEVAPT LABS app project](https://github.com/lucbories/devapt-app-labs/)

Purpose: Amazing labs application.

Devapt projects dependencies:
 * devapt-core-common
 * devapt-core-server
 * devapt-core-services
 * devapt-features-foundation6
 * devapt-features-labs


## devapt-devtools
[DEVTOOLS project](https://github.com/lucbories/devapt-devtools/)

Purpose: development tools features.

Devapt projects dependencies:
 * devapt-core-common
 * devapt-features-cytoscape
 * devapt-features-foundation6
 * devapt-features-sparklines


## devapt-app-devtools
[DEVTOOLS app project](https://github.com/lucbories/devapt-app-devtools/)

Purpose: development tools application.

Devapt projects dependencies:
 * devapt-core-common
 * devapt-core-server
 * devapt-core-services
 * devapt-devtools
 * devapt-features-cytoscape
 * devapt-features-foundation6
 * devapt-features-sparklines
