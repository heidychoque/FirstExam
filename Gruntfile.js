module.exports = function (grunt) {

	grunt.loadNpmTasks('grunt-contrib-concat');
	var config = grunt.file.readJSON('config.json');


	grunt.initConfig({
	  concat: {
	    JS: {
	      src: [config.srcFolder+'/js/one.js', config.srcFolder+'/js/two.js'],
	      dest: config.buildFolder+'/scripts.js'
	    },

	    CSS: {
	      src: [config.srcFolder+'/css/first.css', config.srcFolder+'/css/second.css',config.srcFolder+'/css/third.css'],
	      dest: config.buildFolder+'/styles.css'
	    }

	    
	    
	  }

  	});



  	grunt.registerTask('generar',function(){ 
		var config = grunt.file.readJSON('config.json');
		var jsonVar={prop1:true};
grunt.file.copy(config.srcFolder+'/index.html',config.buildFolder+'/index.html',{process: function(files){
	//console.log(content);

return grunt.template.process(files,{data: {pageTitle: config.pageTitle,styles:[config.buildFolder+'/styles.css'],js:[config.buildFolder+'/scripts.js'],content: config.content}});
}});
	 });



  	grunt.registerTask('build', 
		['concat:CSS', 'concat:JS','generar']);




  	

};
