module.exports = function(grunt){
    
    grunt.loadNpmTasks('grunt-contrib-concat');
    
    grunt.initConfig({
        concat: {
            JS: {
                src: ['src/js/one.js', 'src/js/two.js'],
                dest: 'build/scripts.js'
            },

            CSS: {
                src: ['src/css/first.css', 'src/css/second.css', 'src/css/third.css'],
                dest: 'build/styles.csss'
            }
        }
    });

    grunt.registerTask('concatJS', 'concat:JS');

    grunt.registerTask('concatCSS', 'concat:CSS');


    grunt.registerTask('generateIndex', function(){
		//var config = grunt.file.readJSON('config.json');

        var config = {};
        
        config.pageTitle = grunt.option("pageTitle");
        config.pageContent = grunt.option("pageContent");
        config.buildFolder = grunt.option("buildFolder");
        config.srcFolder = grunt.option("srcFolder");


		grunt.file.copy(config.srcFolder + '/index.html', config.buildFolder + '/index.html', 
		{
			process: function(files){
				return grunt.template.process(files, 
					{
						data: {
							pageTitle: config.pageTitle,
							styles: config.buildFolder + "/styles.css",
                            content: config.pageContent,
                            scripts: config.buildFolder + "/scripts.js"
						}
					}
				);
			}
		});
		
    });
    
    grunt.registerTask('build',
        ['concatJS', 'concatCSS', 'generateIndex']);
}