module.exports = function(grunt) {
 
  grunt.initConfig({
    jshint: {
      all: ['gruntfile.js', 'index.js']
    },
    shell:{
  multiple:{
    command:[
      'jasmine'

    ].join('&&')
    }
  }

  });
 
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', ['jshint', 'shell']);
 
};