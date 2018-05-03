module.exports = function (grunt) {
    
        grunt.loadNpmTasks('grunt-contrib-concat');
    
        grunt.initConfig({
          concat: {
            JS: {
              src: [config.srcfolder + '/js/one.js', config.srcfolder + '/js/two.js'],
              dest: config.buildFolder + '/scripts.js'
            },
            CSS: {
              src: [config.srcfolder + '/css/first.css', config.srcfolder + '/css/second.css', config.srcfolder + '/css/third.css'],
              dest: config.buildFolder + '/styles.css'
            }
          }
          });
    
}    