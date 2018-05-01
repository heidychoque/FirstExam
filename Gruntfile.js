module.exports = function (grunt){
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.initConfig({
        config: grunt.file.readJSON('config.json'),
        concat: {
        concatJS: {
            src: ['/js/one.js','src/js/two.js'],
            dest: 'build/scripts.js'
        },
        concatCSS:{
            src: ['src/<%= config.srcFolder%>/first.css','src/<%= config.srcFolder%>/second.css','src/<%= config.srcFolder%>/third.css'],
            dest: 'build/styles.css'
        }
    }
    });
    grunt.registerTask('concatJS', 'concat:concatJS');
    grunt.registerTask('concatCSS', 'concat:concatCSS');


    grunt.registerTask('templateHTML', function() {
        var config = grunt.file.readJSON('config.json');
        grunt.file.copy(config.srcFolder+'/index.html', config.buildFolder+'/index.html', {
            process: function(files){
                return grunt.template.process(files,
                    {
                        data: {
                            pageTitle: config.pageTitle,
                            styles:"styles.css",
                            scripts:"scripts.js",
                            content: config.pageContent
                        }
                    }
                );
            }
        });
        
    });
    grunt.registerTask('doALL', ['concatJS' , 'concatCSS' , 'templateHTML'] );
}