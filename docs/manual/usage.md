# Usage

To install a devapt application, follow:
```
cd apps/
git clone git://github.com/lucbories/devapt-app-testbus.git
cd devapt-app-testbus

npm install --save-prod
```

To create an empty application from scratch (not recommended for devapt newbies):

```
cd my_app
npm init
npm install devapt-core-common --save
npm install devapt-core-browser --save
npm install devapt-core-services --save
npm install devapt-core-server --save
```

Create folders tree:
```
-build
-dist
-public
-public/assets
-public/assets/css
-public/assets/html
-public/assets/img
-public/assets/js
-src/js
-src/resources
-tmp
```



Create your first Devapt based HTML page in public/assets/html/mypage.html:
```html
<html>

<head>
	<meta charSet="utf8"/>
	<title>Devapt TestBus Home</title>
	
	<link rel="icon" type="image/png" href="/assets/img/favico.png"/>

	<link type='text/css'  rel="stylesheet" href="/assets/css/normalize.css" media="all" />

	<style type='text/css'>
		... your styles
	</style>
</head>


<body>

<header>
	<center>
		<h1>MY FIRST APP</h1>
		<h8><a href="/assets/html/mypage.html">Home</a></h8>
	</center>
</header>

<hr>

<script>window.__INITIAL_STATE__ = {
	"credentials":{
		"tenant":"tenantA",
		"env":"dev",
		"application":"testbus",

		"token":"",
		"user_name":"",
		"user_pass_digest":"",
		
		"ts_login":0,
		"ts_expiration":0,

		"errors_count":0,
		"renew_count":0,

		"hash":undefined
	},
	"commands":{}
}
</script>

<div id="content">
... your HTML code
</div>

<script type="text/javascript" src="/socket.io/socket.io.js"></script>
<script type="text/javascript" src="/assets/js/vendor/browser.min.js"></script>
<script type="text/javascript" src="/assets/js/devapt-core-browser.js"></script>
<script type="text/javascript" src="/assets/js/devapt-bootstrap.js"></script>
<script type="text/javascript" src="/assets/js/app.js"></script>

</body>

</html>
```


Now you can write your Javascript code in public/assets/js/app.js:
```js
window.devapt().on_runtime_created(
	function()
	{
		console.log('runtime ready for application script')

		write your code here: devapt init is finished and you can use Devapt function:
		
		window.devapt(): Devapt bootstrap root with some helpers
		window.devapt().runtime():main Devapt client runtime
		window.devapt().ui(): main Devapt user interface manager

		Example: get client session unique id
		var session_uid = window.devapt().runtime().get_session_uid()

		Example: ping master node
		var target_name = 'master' (target is a node or a node part, node is server host or remote host or remote browser session)
		var ping_svc_cfg = undefined (reserved for later)
		var ping_svc_promise = window.devapt().get_service('pingpong', ping_svc_cfg)
		var on_response_callback = function() {
			console.log('pong received')
		}
		window.devapt().request_service(ping_svc_promise, 'devapt-ping', target_name, on_response_callback)
	}
)
```

Devapt use configuration files to discover and build a runtime of dynamic resources.

First we declare our unique node called "nodeA", this node is the topology master and the application provider:
File: dist/resources/nodes/nodeA.json
```js
{
	"is_master":true,
	"name":"NodeA",
	
	"master":{
		"name":"NodeA",
		
		"msg_bus":{
			"package":"socketio",
			"protocole":"ws",
			"type":"Server",
			"host":"localhost",
			"port":5000
		},
		"logs_bus":{
			"package":"socketio",
			"protocole":"ws",
			"type":"Server",
			"host":"localhost",
			"port":5001
		},
		"metrics_bus":{
			"package":"socketio",
			"protocole":"ws",
			"type":"Server",
			"host":"localhost",
			"port":5002
		}
	},
	
	"settings_provider": {
		"source":"local_file",
		"relative_path":"world.json"
	}
}
```


Secondly we describe our application features topology:
File: dist/resources/world/world.json
```js
{
	"nodes":"nodes":{
		"NodeA":{
			"host":"localhost",
			"is_master":true,
			"servers":{
				"NodeALocal8080":{
					"type":"express",
					"port":8080,
					"protocole":"http",
					"middlewares":[],
					"use_socketio":true,
					
					"security": {
						"authentication": {
							"enabled":false,
							"plugins":[]
						}
					}
				},
				"NodeALocalLogs":{
					"type":"logs",
					"port":"N/A",
					"protocole":"bus",
					"middlewares":[],
					"use_socketio":false,
					
					"security": {
						"authentication": {
							"enabled":false,
							"plugins":[]
						}
					}
				}
			}
		}
	},
	
	"tenants":{
		"tenantA":{
			"applications":{
				"assets":{
					"title":"Assets provider",
					"url":"assets",
					"license":"APACHE-LICENSE-2.0",
					
					"provided_services":[],
					"used_services":[],
					
					"used_packages": ["my_app_pkg"],
					"used_plugins":["DefaultRendering"],
					
					"assets":{
						"css":[],
						"js":[],
						"img":[],
						"index":""
					}
				}
			},
			"packages":{
				"my_app_pkg":{
					"base_dir":null,
					"resources":[],
					"templates":[],
					"includes":[],
					"commands":[],
					"services":{
						"pingpong":{
							"type":"ping_svc"
						},
						"html_assets":{
							"type":"html_assets_svc",
							"routes":[
								{
									"route":"/",
									"directory":"../../public/assets/",
									"required_prefixes":[],
									"required_suffixes":[".js", ".js.map", ".css", ".html", ".png", ".jpg"]
								}
							],
							"security":{
								"enabled":false,
								"authentication":{
									"enabled":false,
									"engines":[]
								},
								"authorization":{
									"enabled":false,
									"engines":[],
									"permissions":{
										"*":["*"]
									}
								}
							}
						}
					}
				}
			},
			"security":{}
		}
	},

	"deployments":{
		"tenantA":{
			"assets":{
				"assets":{},
				"services":{
					"topology":{ "servers":["NodeALocal8080"], "filters":["*"] },
					"html_assets":{ "servers":["NodeALocal8080"], "filters":["*"] },
					"pingpong":{ "servers":["NodeALocal8080"], "filters":["*"] }
				}
			}
		}
	},

	"security":{
		"is_readonly":false,
		
		"datasources":[],
		
		"authentication": {
			"enabled":false,
			
			"plugins":{},
			
			"default_plugins": []
		},
		
		"authorization": {
			"enabled":false
		}
	},

	"plugins":{
		"DefaultRendering":{
			"type":"rendering",
			"file":"../../../node_modules/devapt-core-common/dist/js/default_plugins/rendering_default_plugin"
		},
		"DefaultServices":{
			"type":"services",
			"file":"../../../node_modules/devapt-core-services/dist/js/default_plugins/services_default_plugin"
		}
	},
	
	"loggers":{},
	
	"traces":{}
}
```


Launch your runtime nodes and servers:

```
cd my_app
node node_modules/devapt-core-server/dist/js/start_node.js -n NodeA -t dist/resources/world -b node_modules/devapt-core-server/dist/js -s NodeA:NodeALocal8081
```


Example with settings in many files:

```js
"resources//worldworld.json":

{
	"nodes":"nodes.json",
	
	"tenants":{
		"tenantA":{
			"applications":"applications.json",
			"packages":"tenantA_packages.json",
			"security":{}
		}
	},

	"deployments":"deployments.json",

	"security":"security.json",

	"plugins":"plugins.json",
	
	"loggers":"loggers.json",
	
	"traces":"traces.json"
}

"nodes.json":
{
	"nodes":{ same settings than above }
}

"services.json":
{
	"services":{ same settings than above }
}

Repeat on each files on the same manner.

```

