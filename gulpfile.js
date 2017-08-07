
'use strict'

var gulp = require('gulp')
var del = require('del')

var DST_DIR = 'dist/html'

var plugins = require('gulp-load-plugins')( { DEBUG:false } )

var clean_function = () => {
	return del(DST_DIR)
}

function getTask(arg_file_name, arg_task_name, arg_operands)
{
	console.log('loading task [%s] from file [%s]', arg_task_name, arg_file_name)
	return require('./build/' + arg_file_name)(gulp, plugins, arg_task_name, arg_operands)
}



// **************************************************************************************************
// DEVAPT APP TESTBUS
// **************************************************************************************************
getTask('gulp_doc_api_browser',  'api_browser')
getTask('gulp_doc_api_common',   'api_common')
getTask('gulp_doc_api_server',   'api_server')
getTask('gulp_doc_api_services', 'api_services')
getTask('gulp_doc_md', 'md')

gulp.task('default', gulp.series('api_browser', 'api_common', 'api_server', 'api_services', 'md') )
gulp.task('clean', clean_function)
gulp.task('rebuild', gulp.series('clean', 'default') )
