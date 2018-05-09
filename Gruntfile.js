module.exports = function (grunt) {
    
  var config = {
    pageContent: grunt.option('content'),
    pageTitle: grunt.option('title'),
    srcFolder: grunt.option('src'),
    buildFolder: grunt.option('build')
  };
  var configJSON = grunt.file.readJSON('config.json');
  !config.pageContent && (config.pageContent = configJSON.pageContent);
  !config.pageTitle && (config.pageTitle = configJSON.pageTitle);
  !config.srcFolder && (config.srcFolder = configJSON.srcFolder);
  !config.buildFolder && (config.buildFolder = configJSON.buildFolder);
  
  grunt.loadNpmTasks('grunt-contrib-concat');
  
  grunt.initConfig({   
      config: config,
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

  grunt.registerTask('build', ['generateIndex', 'concat'])
}; 