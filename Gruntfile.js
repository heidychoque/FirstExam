module.exports = function (grunt) {

	grunt.loadNpmTasks('grunt-contrib-concat');

    //var config = grunt.file.readJSON('config.json');
    var config =
    {

	pageTitle : grunt.option('pageTitle') ,
    pageContent : grunt.option('pageContent') ,
    buildFolder : grunt.option('buildFolder') ,
    srcFolder : grunt.option('srcFolder'),
    Content : grunt.option('Content')
    };
   

	grunt.initConfig({
	  concat: {
	    concatJS: {
	      src: [config.srcFolder + '/js/one.js', config.srcFolder +'/js/two.js'],
	      dest: config.buildFolder + '/scripts.js'
	    },
	    concatCSS: {
	      src: [config.srcFolder + '/css/first.css', config.srcFolder + '/css/second.css' , config.srcFolder +'/css/third.css'],
	      dest: config.buildFolder +'/styles.css'
	    }

	  }
  	});

	grunt.registerTask('deployProdu', 
		['concat:concatJS','concat:concatCSS','generateInd']);

  	grunt.registerTask('generateInd',function(){
		grunt.file.copy(config.srcFolder + '/index.html', config.buildFolder + '/index.html',
		 {
		
			process: function(files) {
				return grunt.template.process(files,
					{
						data: {
							pageTitle: config.pageTitle,
							Content: config.Content,
							scriptName: 'scripts.js',
							styleName: 'styles.css'						}
					}
					);

	   	 }
		});


	});
};