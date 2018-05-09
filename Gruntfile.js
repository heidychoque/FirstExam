module.exports = function(grunt){

	grunt.loadNpmTasks('grunt-contrib-concat');

	var config = {
		pageTitle: grunt.option('pageTitle'),
		pageContent: grunt.option('pageContent'),
		buildFolder: grunt.option('buildFolder'),
		sourceFolder: grunt.option('sourceFolder')
	}

	grunt.initConfig({
		concat:{
			concatJS: {
				src: [config.sourceFolder + '/js/one.js', config.sourceFolder + '/js/two.js'],
				dest: config.buildFolder + '/scripts.js'
			},
			concatCSS: {
				src: [config.sourceFolder + '/css/first.css', config.sourceFolder + '/css/second.css', config.sourceFolder + '/css/third.css'],
				dest: config.buildFolder + '/styles.css'
			}
		}
	});

	grunt.registerTask('generateIndex', function() {
		console.log(config.pageTitle);
		grunt.file.copy(config.sourceFolder + '/index.html', config.buildFolder + '/index.html', {
			process: function(files){
				return grunt.template.process(files, {
					data: {
						pageTitle: config.pageTitle,
						pageContent: config.pageContent,
						styles: [config.buildFolder + '/styles.css'],
						scripts: [config.buildFolder + '/scripts.js']
					}
				});
			}
		});
	});

	grunt.registerTask('multi', ['generateIndex', 'concat:concatJS', 'concat:concatCSS']);

}