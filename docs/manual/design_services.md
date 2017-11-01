## Design - Services feature

Devapt enables features for applications with services.

A service is enabled on a server on a node.

A service is provided and consumed.

Builin services:
* static assets router
* resources definitions router
* CRUD operations router
* middleware router for functions as f(request,response,next)


### Description
A service is a feature linked on a server and added to an application.

Builtin services are:
 * assets: serves static files (css, js, html, images).
 * crud: provides Create/Read/Update/Delete features to use databases, provides CRUD models restfull API.
 * logs: provides all registered logs from all topology servers.
 * messages: provides all exchanged bus messages for metrics/default/logs buses.
 * metrics_bus: provides metrics about topology buses.
 * metrics_host: provides metrics about topology hosts.
 * metrics_http: provides metrics about http traffic.
 * metrics_nodejs: provides metrics about nodejs activity.
 * middleware: provides feature to serve page from middleware like code.
 * resource: provides topology resources settings.
 * security: provides security features for signin, signup, logout, renew (coming soon).
 * topology: provides hierarchical logical or physical topology trees.



# Examples

Define two routes to serve static files:
 * http://myserver/ with files read from an absolute path /.../devapt-app-devtools/dist/assets
 * http://myserver/myapp/css/*.css with files read from a project relative path ./public/.

```js
	"html_assets_1":{
		"type":"html_assets",
		"routes":[
			{
				"is_global":true,
				"route":"/",
				"directory":"/.../devapt-app-devtools/dist/assets",
				"default":"index.html"
			},

			{
				"route":"/css/.*.css",
				"directory":"./public"
			}
		]
	}
```

