
'use strict'

var fs = require('fs')


var SRC_README  = 'README.md'
var SRC_PROJECT  = 'docs/*.md'
var SRC_TUTORIALS  = 'docs/tutorials/*.md'
var SRC_FEATURES  = 'docs/features/*.md'

var DST_PROJECT_PART = 'docs/html_part/'
var DST_TUTORIALS_PART = 'docs/html_part/tutorials/'
var DST_FEATURES_PART = 'docs/html_part/features/'

var DST_PROJECT = 'dist/html/'

var FILE_HTML_HEADER = 'docs/html_layout/header.html'
var FILE_HTML_FOOTER = 'docs/html_layout/footer.html'


var header = fs.readFileSync(FILE_HTML_HEADER)
var footer = fs.readFileSync(FILE_HTML_FOOTER)


/*
	GENERATE HTML DOCS FROM MARKDOWN FILES
*/
module.exports = function (gulp, plugins, arg_task_name)
{
	gulp.task(arg_task_name,
		function(done)
		{
			gulp.src(SRC_README)
				.pipe(plugins.gulpShowdown())
				.pipe(gulp.dest(DST_PROJECT_PART))
				
			gulp.src(SRC_PROJECT)
				.pipe(plugins.gulpShowdown())
				.pipe(gulp.dest(DST_PROJECT_PART))
				
			gulp.src(SRC_TUTORIALS)
				.pipe(plugins.gulpShowdown())
				.pipe(gulp.dest(DST_TUTORIALS_PART))

			gulp.src(SRC_FEATURES)
				.pipe(plugins.gulpShowdown())
				.pipe(gulp.dest(DST_FEATURES_PART))

			gulp.src(DST_PROJECT_PART + '/*.html')
				.pipe(plugins.headerfooter.header(header))
				.pipe(plugins.headerfooter.footer(footer))
				.pipe(gulp.dest(DST_PROJECT))
			
			return done()
		}
	)
}
