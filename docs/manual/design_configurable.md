## Design - Configurable without code feature

Devapt has for first principle to build applications without coding common features.
Why writing code to offer REST api, metrics, role based security, database access...
Concentrate your coding forces to write uncommon business code.


### Description
Devapt first principle to build applications without coding common features.

Why write code for REST api, metrics, role based security, database access...

It is best to concentrate on the business code.



### Status


Configuration providers:
* JSON file: DONE
* JSON url: TO TEST
* Datas model: TO IMPLEMENT

Local configuration loading: DONE 1.0

Distributed configuration loading: DONE 2.0



### Format


#### Source
Settings are loaded from a Json object.
Json providers could be: files, sql db, nosql db...
For instance only file provider is available.


#### Fisrt level format:
First levels are the sub-tree at the Json tree root.
This level describes the runtime world.

First level keys should be:
 * nodes: collection of defined nodes and servers.
 * tenants
 * deployments
 * security: authentication and authorization configuration.
 * plugins: collection of defined plugins, a plugin is an addon for rendering, security, servers types, services types...
 * loggers: collection of defined loggers.
 * traces: configuration of enabled traces for modules, classes, instances of classes.

With sub settings files:
```js
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
```



 * services: collection of defined services, a service is a feature which could be applied on a set of servers for a set of applications.
 * applications: collection of defined applications, an application links servers and services.
 * modules: collection of defined modules, a module is a set of resources.

With inline settings:
```js
{
	"nodes":{ ... },
	
	"tenants":{ ... },
	
	"deployments":{ ... },
	
	"plugins":{ ... },
	
	"security":{ ... },
	
	"loggers":{ ... },
	
	"traces":{ ... }
}
```


With a mix of inline and files settings:
```js
{
	"nodes":{ ... },
	
	"tenants":{ ... },
	
	"deployments":{ ... },
	
	"plugins":{ ... },
	
	"security":"security.json",
	
	"loggers":"loggers.json",
	
	"traces":"traces.json"
}
```



#### Second level settings:

###### For nodes
<a href="./design_configuration_for_nodes.html">NODES CONFIGURATION</a>


###### For tenants
<a href="./design_configuration_for_tenants.html">TENANTS CONFIGURATION</a>


###### For deployments
<a href="./design_configuration_for_deployments.html">DEPLOYMENTS CONFIGURATION</a>


###### For plugins
<a href="./design_configuration_for_plugins.html">PLUGINS CONFIGURATION</a>


###### For security
<a href="./design_configuration_for_security.html">SECURITY CONFIGURATION</a>


###### For loggers
<a href="./design_configuration_for_loggers.html">LOGGERS CONFIGURATION</a>


###### For traces
<a href="./design_configuration_for_traces.html">TRACES CONFIGURATION</a>


###### For templates:
The second level "templates" collection stores all templates definition.
A template can be used everywhere.

Define a global template and a service template:
```{
	"templates":{
		"services":{
			"security_svc_template":{
				"type":"security",
				"tenant":"${svc_tenant}",
				"version":"1.2.0",
				"routes":[
					{
						"route":"/login",
						"action":"login"
					},
					{
						"route":"/signin",
						"action":"login"
					},
					{
						"route":"/logout",
						"action":"logout"
					},
					{
						"route":"/signup",
						"action":"signup"
					},
					{
						"route":"/renew",
						"action":"renew"
					}
				]
			}
		},
		"security_single_node_template":{
			"services":{
				"${svc_name}":{
					"template":"security_svc_template",
					"values":{
						"svc_tenant":${app_tenant}
					}
				}
			},
			"nodes":{
				"${node_name}":{
					"host":"${$host_name}",
					"tenant":"${app_tenant}",
					"is_master":false,
					"servers":{
						"${node_server_name}":{
							"type":"express",
							"tenant":"${app_tenant}",
							"port":"${node_server_port}",
							"protocole":"http",
							"middlewares":[],
							
							"security": {
								"authentication": {
									"enabled":true,
									"plugins":"${security_plugins}"
								}
							}
						}
					}
				}
			},
			"applications":{
				"${app_name}":{
					"tenant":"${app_tenant}",
					"version":"${app_version}",
					"env":"${app_env}",
					"group":"${app_group}",

					"description":"...",

					"url":"${app_url}",
					
					"services":{
						"provides":{
							"${svc_name}": { "servers":["${node_server_name}"], "filters":["*"] }
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
		}
	}
}```


Use a global template:

```{
	"nodes":...,
	"templated":[
		{
			"template":"security_single_node",
			"values":{
				"app_name":"my_app_1",
				"app_tenant":"Client 12",
				"app_version":"0.5.3",
				"app_env":"production",
				"app_group":"financial",
				"app_url":"my_apps/my_app_1",
				"svc_name":"my_app_1_svc",
				"node_name":"my_app_1_node",
				"host_name":"localhost",
				"node_server_name":"my_app_1_server",
				"node_server_port":8080,
				"security_plugins":["file_users", "oauth2"]
			}
		}
	]
}```