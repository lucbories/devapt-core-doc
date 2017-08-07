
'use strict'


// var SRC_FILES  = ['node_modules/devapt-core-common/src/js/**/*.js']
// var SRC_FILES  = ['node_modules/devapt-core-common/src/js/base/**/*.js']
var SRC_FILES  = ['../devapt-core-common/src/js/base/collection*.js']
var SRC_TUTORIALS  = 'docs/'

var DST_DOCS_API  = 'dist/html/api/'



const jsconfig = {
	"tags": {
		"allowUnknownTags": true
	},
	"source": {
		"excludePattern": "(^|\\/|\\\\)todo_.*$"
	},
	"opts": {
		"tutorials":SRC_TUTORIALS,
		"destination": DST_DOCS_API
	},
	"plugins": [
		"plugins/markdown"
	],
	"templates": {
		"cleverLinks": false,
		"monospaceLinks": false,
		"outputSourceFiles": true,
		"path": "ink-docstrap",
		"theme": "cerulean",
		"navType": "inline",
		"linenums": true,
		"dateFormat": "MMMM Do YYYY, h:mm:ss a"
	}
}


/*
	GENERATE DOCS API
*/
module.exports = function (gulp, plugins, arg_task_name)
{
	// console.log('defining task [%s]', arg_task_name)
	gulp.task(arg_task_name,
		function(done)
		{
			return gulp.src(SRC_FILES)
				.pipe( plugins.jsdoc3(jsconfig, done) )
		}
	)
}
