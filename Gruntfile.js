module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.initConfig({
        concat: {
            JS : {
                src: ['src/js/one.js', 'src/js/two.js'],
                dest:'build/scripts.js'
            },
            CSS : {
                src: ['src/css/first.css', 'src/css/second.css', 'src/css/third.css'],
                dest:'build/styles.js'
            }
        }
    });

    grunt.registerTask('concatJS','concat:JS');

    grunt.registerTask('concatCSS','concat:CSS');

    grunt.registerTask('generateIndex', function() {
        var config = grunt.file.readJSON('config.json');
        grunt.file.copy(config.srcFolder + '/index.html', config.buildFolder + '/index.html' , {
            process: function (files) {
                return grunt.template.process(files,
                    {
                        data: {
                            pageTitle: config.pageTitle,
                            pageContent: config.pageContent,
                            styles: [config.srcFolder + "/css/first.css", config.srcFolder + "/css/second.css", config.srcFolder + "/css/third.css"],
                            scripts: [config.srcFolder + "/js/one.js", config.srcFolder + "/js/two.js"]
                        }
                    }
                );
            }
        });
    });

    grunt.registerTask('build',['concatJS','concatCSS','generateIndex']);

};