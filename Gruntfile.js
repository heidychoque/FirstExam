module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.initConfig({
        concat: {
            concatJS:{
                src: ['src/js/one.js','src/js/two.js'],
                dest: 'build/scripts.js'
            },
            concatCSS:{
                src:['src/css/first.css','src/css/second.css','src/css/third.css'],
                dest: 'build/styles.css'
            }
        }
    });
    grunt.registerTask('generateIndex', function(){
        var config = grunt.file.readJSON('config.json');
        grunt.file.copy('src/index.html', 'build/index.html', {
            process: function(files){
                return grunt.template.process(files,{
                    data: {
                        pageTitle: config.pageTitle,
                        styles: "styles.css",
                        scripts: "scripts.js",
                        content: config.pageContent
                    }
                });
            }
        });
    });

};