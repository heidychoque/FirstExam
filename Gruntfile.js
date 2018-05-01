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
}