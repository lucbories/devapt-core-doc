## Design - Configuration for Nodes


### Description
Topology nodes description.


### Format
Provide a list of distributed nodes with:
 * node name
 * is_master: node is the topology master node ? (true/false)
 * servers: provided features servers for this node, a list of servers configurations with for each:
   * server name
   * type: kind of server (express/restify/logs for instance)
   * port: server communication port number
   * protocole: server server communication protocole (http/https)
   * middlewares: server used middlewares
   * use_socketio: server use socketio communication ? (true/false)
   * security: server security configuration


### Example
```js
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
		},
		
		"NodeB":{
			"host":"localhost",
			"is_master":false,
			"servers":{
				"NodeBLocal7080":{
					"type":"express",
					"port":7080,
					"protocole":"http",
					"middlewares":[],
					"use_socketio":true,
					
					"security": {
						"authentication": {
							"enabled":false,
							"plugins":[]
						}
					}
				}
			}
		},
		
		"NodeC":{
			"host":"localhost",
			"is_master":false,
			"servers":{
				"NodeCLocal6080":{
					"type":"express",
					"port":6080,
					"protocole":"http",
					"middlewares":[],
					"use_socketio":true,
					
					"security": {
						"authentication": {
							"enabled":false,
							"plugins":[]
						}
					}
				}
			}
		}
	}
}
```
