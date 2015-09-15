module.exports = function(grunt) {
 
  grunt.initConfig({
    jshint: {
      all: ['gruntfile.js', 'index.js']
    }
  });
 
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', ['jshint']);
 
};