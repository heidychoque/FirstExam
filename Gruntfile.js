module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.initConfig({
        concat: {
            js:{
                src: ['src/js/one.js','src/js/two.js'],
                dest: 'build/scripts.js'
            }
        }
    });
}