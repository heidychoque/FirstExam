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

grunt.registerTask('deployProd', //Create a multitask to execute all described above
		['concat:JS', 'concat:CSS', 'generateIndex']);


  	grunt.registerTask('generateIndex', function() {//es para copiar un archivo de un lugar a otro
		var config = grunt.file.readJSON('config.json');
		grunt.file.copy('src/index.html','build/index.html',//copie 1.js a new...
		{
			process: function(files){//muestra lo que tiene
				//console.log(content);
				return grunt.template.process(files,
					{
						data: {
							pageTitle: config.pageTitle,
							styles: [config.buildFolder + "/styles.css"],
							content: config.content,
							scripts: [config.buildFolder + "/scripts.js"]
						}
					}
					);
			}

		});
	});
};