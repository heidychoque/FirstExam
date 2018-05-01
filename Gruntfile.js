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

};
