module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-concat');
    
    grunt.initConfig({
        
        config: grunt.file.readJSON('config.json'),
        concat: {
          JS: {
            src: ['<%= config.srcFolder %>/js/one.js', '<%= config.srcFolder %>/js/two.js'],
            dest: '<%= config.buildFolder %>/scripts.js'
          }
        }
    });
    
};