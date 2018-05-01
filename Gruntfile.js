module.exports = function (grunt) {

	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.initConfig({
	  concat: {
	    JS: {
	      src: ['src/js/one.js', 'src/js/two.js'],
	      dest: 'build/scripts.js'
	    },
	    CSS: {
	      src: ['src/css/first.css', 'src/css/second.css', 'src/css/third.css'],
	      dest: 'build/styles.js'
	    }
	  }
  	});
};