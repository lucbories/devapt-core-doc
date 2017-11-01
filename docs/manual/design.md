# Design

Devapt is full stack solution. So it's usefull to provide an integrated framework to build your application with configuration files.
On the other hands it's difficult to have an overview of all parts and undestand how all this parts work together.

First, devapt is provided throught specialized core projects and addon features. If you write an application you don't need to know all details. But if you want to add features, you should understand on what starting to build your feature.
[Details of projects](https://lucbories.github.io/projects.md)


## Main devapt concepts are:
* Node: each application can be distributed on one or many nodes. Each node run on a NodeJS instance with some inter node communication channels. One or many nodes can run on one NodeJS instance. One or many NodeJS instance can run on one hostnames.
* Node settings: JSON file which describe one or many nodes with their names, security, debug trace and communication channels.
* Application settings or configuration or description: main JSON file which define application features, packages, resources (UI components...), debug traces and security.
* Bus: all nodes communicate together with messages throught a communication bus. An application can have one or more buses, one for metrics, one for logs and one between components.
* Tenant: a tenant is a set of applications and packages with its own security access. for example, we can have one tenant per company on a shared server (SaaS).
* Service: a service provide a feature which responds some datas on a request. For example, a ping pong service responds a 'pong' on each 'ping' request.
* Server: a server (not a hostname) is an engine which provides services and others features. For example, a logs server exists to process received logs.
* Metric: metrics are collected datas from a node, an application, a server, a service... which help to monitors system health.
* Rendering: it's the process of producing DOM content for the browser page.
* Virtual DOM: it's a technology which can produce DOM content outside of browser and to apply differential changes on a page. It enhance performance and decrease browser load.
* Security: security is an important need for all usages. Security is everywhere in devapt apps but all parts aren't finished yet. (TODO)


## How an application work
An application has one directory but two targets: server and browser. On server side, an application launches nodes and services. On browser side, the page receive its content from the server: it's a lightweight HTML page with two scripts: a credentials record and an initial application state. Each user action on the interface call some scripts and request server if needed.


## Features


<a href="./design_distributed.html">Distributed</a>

<a href="./design_messaging.html">Messaging</a>

<a href="./design_metrics.html">Metrics</a>

<a href="./design_rendering.html">Rendering</a>

<a href="./design_security.html">Security</a>

<a href="./design_servers.html">Servers</a>

<a href="./design_services.html">Services</a>

<a href="./design_starting_process.html">Starting process</a>
