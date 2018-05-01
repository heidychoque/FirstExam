module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-contrib-concat');
	var config = grunt.file.readJSON('config.json');
	grunt.initConfig({
		concat: {
			concatJS: {
				src: [config.srcFolder + '/js/one.js', config.srcFolder + '/js/two.js'],
				dest: config.buildFolder + '/scripts.js'
			},
			concatCSS: {
				src: [config.srcFolder + '/css/first.css', config.srcFolder + '/css/second.css',  config.srcFolder + '/css/third.css'],
				dest: config.buildFolder + '/styles.css'
			}
		}
	});
	grunt.registerTask('generateIndex', function(){
		grunt.file.copy('index.html', config.buildFolder + '/index.html', {
			process: function(files){
				return grunt.template.process(files,
				{
					data: { 
						pageTitle: config.pageTitle,
						pageContent: config.pageContent
					}
				});
			}
		});
	});
};