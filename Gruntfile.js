module.exports = function (grunt) {

	var config = grunt.file.readJSON('config.json');

	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.initConfig({

		concat:{

			Js: {

				src: config.srcFolder + '/js/*.js',
				dest: config.buildFolder + '/script.js',

			},

			Css: {

				src: config.srcFolder + '/css/*.css',
				dest: config.buildFolder + '/styles.css',

			},

		},

	});

	grunt.registerTask('concatJS','concat:Js');

	grunt.registerTask('concatCSS','concat:Css');

	grunt.registerTask('formatHTML',function(){
	
		grunt.file.copy('src/index.html', 'build/index.html',{

			process: function funcion(fileContent) {

				return grunt.template.process(fileContent,{

					data: {

						pageTitle : config.pageTitle,
						pageContent : config.pageContent,
						scripts: 'script.js',
						styles: 'styles.css',

					},

				});

			}

		});

	});

	grunt.registerTask('build',['concatJS','concatCSS','formatHTML']);

};
