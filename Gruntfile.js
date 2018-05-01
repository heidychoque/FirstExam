module.exports = function(grunt){

	grunt.loadNpmTasks('grunt-contrib-concat');

	var config = grunt.file.readJSON('config.json');

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

}