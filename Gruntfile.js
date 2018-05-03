module.exports = function (grunt) {
    
        grunt.loadNpmTasks('grunt-contrib-concat');
    
        grunt.initConfig({
          concat: {
            JS: {
              src: [config.srcfolder + '/js/one.js', config.srcfolder + '/js/two.js'],
              dest: config.buildFolder + '/scripts.js'
            }
          }
          });
    
}    