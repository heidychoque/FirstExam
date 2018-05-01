module.exports = function(grunt){
  grunt.loadNpmTasks('grunt-contrib-concat');
  var config = grunt.file.readJSON('config.json');
  grunt.initConfig({
    concat: {
      JS: {
        src: [config.srcFolder+'/js/one.js', config.srcFolder+'/js/two.js'],
        dest: config.buildFolder+'/scripts.js' 
      },
      CSS: {
        src: [config.srcFolder+'/css/first.css', config.srcFolder+'/css/second.css'],
        dest: config.buildFolder+'/styles.css'
      }
    }
  });

  grunt.registerTask('concatJS', 
        ['concat:JS']);

  grunt.registerTask('concatCSS', 
        ['concat:CSS']);

  grunt.registerTask('generateIndex', function(){
        var config = grunt.file.readJSON('config.json');
        grunt.file.copy(config.srcFolder+'/index.html', config.buildFolder+'/index.html',{ 
            process: function(files){
                return grunt.template.process(files,
                {
                      data: {
                        pageTitle:config.pageTitle,
                        content:config.pageContent,
                        styles:"\""+'styles.css'+"\"",
                        scripts:"\""+'scripts.js'+"\""
                    }
                });
            }
        });      
  });                    

  grunt.registerTask('build',
        ['concatJS','concatCSS','generateIndex']);  
};

