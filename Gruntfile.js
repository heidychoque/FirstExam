module.exports = function (grunt) {

	grunt.loadNpmTasks('grunt-contrib-concat');
	var config = grunt.file.readJSON('config.json');

	grunt.initConfig({
	  concat: {
	    JS: {
	      src: [config.srcFolder + 'js/one.js', config.srcFolder + 'js/two.js'],
	      dest: config.srcFolder + 'scripts.js'
	    },
	    CSS: {
	      src: [config.srcFolder + 'css/first.css', config.srcFolder + 'css/second.css', 'src/css/third.css'],
	      dest: config.srcFolder + 'styles.css'
	    }
	  }
  	});
};