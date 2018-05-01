module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-concat');
    
    grunt.initConfig({   
        config: grunt.file.readJSON('config.json'),
        concat: {
          JS: {
            src: ['<%= config.srcFolder %>/js/one.js', '<%= config.srcFolder %>/js/two.js'],
            dest: '<%= config.buildFolder %>/scripts.js'
          },
          CSS: {
            src: ['<%= config.srcFolder %>/css/first.css', '<%= config.srcFolder %>/css/second.css'],
            dest: '<%= config.buildFolder %>/styles.css'
          }
        }
    });

    grunt.registerTask('concatJS', 'concat:JS');
    grunt.registerTask('concatCSS', 'concat:CSS');
    
    grunt.registerTask('generateIndex', function(){
      var config = grunt.file.readJSON('config.json');
      grunt.file.copy(config.srcFolder+'/index.html', config.buildFolder+'/index.html', {
          process: function(files){
              return grunt.template.process(files, {
                  data: {
                    stylesFile: 'styles.css',
                    scriptsFile: 'scripts.js',
                    pageTitle: config.pageTitle,
                    pageContent: config.pageContent
                  }
              });
          }
      });
    });
}; 