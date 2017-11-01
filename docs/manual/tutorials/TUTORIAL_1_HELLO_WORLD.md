# Tutorials - Hello World

Start a server which display "Hello Wolrd"


## Installation

Create a directories tree:

apps/
|----helloworld.json
|----start.js

Via npm on Node:

```
npm init
npm install devapt --save
```


## Write the server code (apps/start.js): Only two main lines of code and a node settings object

Import the package
```js
var runtime = require('devapt').runtime; // for ES5
import { runtime } from 'devapt' // for ES6 / ES2015
```

Define the node settings with a plain object.
The only main node is the master node (it is alone!) and its unique name is "NodeA".
The node is hosting on localhost and listen topology orders on 5000 port.
The application configuration is read from the apps_settings_file.
```js
var runtime_settings = {
	'is_master':true,
	'name':'NodeA',
	
	'master':{
		"name":"NodeA",
		
		"msg_bus":{
			"type":"simplebus_server",
			"host":"localhost",
			"port":5000
		},
		"logs_bus":{
			"type":"simplebus_server",
			"host":"localhost",
			"port":5001
		},
		"metrics_bus":{
			"type":"simplebus_server",
			"host":"localhost",
			"port":5002
		}
	},
	
	'apps_settings_file': 'apps/helloworld.json'
}
```

Load the node settings, create the node, create the servers and all services.
```js
runtime.load(runtime_settings)

```


## Write the application configuration file "apps/helloworld.json"

It is the core of the successfull dynamic runtime.
The file defines the servers per node, the services, the applications with its provided services per server.
The modules (application features), plugins (technicals addons) and security parts are empty.
```json
{
	"nodes":{
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
							"enabled":true,
							"plugins":["file_users"]
						}
					}
				}
			}
		}
	},
	
	"services":{
		"helloworld_assets":{
			"type":"html_assets",
			"routes":[
				{
					"route":"/helloworld",
					"directory":"./apps/helloworld",
					"default_file":"index.html"
				}
			]
		}
	}
	
	"applications":{
		"helloworld":{
			"url":"assets",
			
			"services":{
				"provides":{
					"helloworld_assets": { "servers":["server1"], "filters":["*"] }
				},
				"consumes":{
				}
			},
			
			"modules": [],
			"plugins":[],
			"resources":[],
			
			"assets":{
				"css":[],
				"js":[],
				"img":[],
				"index":""
			},
			
			"license":"APACHE-LICENSE-2.0"
		}
	}
	
	"modules":{},
	"plugins":{},
	
	"security":{
		"is_readonly":false,
		
		"connexions":[],
		
		"authentication": {
			"enabled":false
		},
		
		"authorization": {
			"enabled":false
		}
	}
```


## Run the application

```
node apps/start.js
```
