module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      chrome_app: {
        files: [
          {src: 'common/ui/icons/**', dest: 'chrome/app/'},
          {src: 'common/backend/client/**', dest: 'chrome/app/'},
          {src: 'common/backend/identity/**', dest: 'chrome/app/'},
          {src: 'common/backend/server/**', dest: 'chrome/app/'},
          {src: 'common/backend/storage/**', dest: 'chrome/app/'},
          {src: 'common/backend/transport/**', dest: 'chrome/app/'},
          {src: 'common/backend/*.js', dest: 'chrome/app/'},
          {src: 'common/backend/*.json', dest: 'chrome/app/'}
        ]
      },
      chrome_ext: {},
      firefox: {}
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['copy:chrome_app']);
 
};