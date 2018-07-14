module.exports = function(grunt) {

  grunt.initConfig({
    copy: {
      dist: {
        files: [
          {
            expand: true,
            src: [
              './robots.txt',
              './sitemap.xml',
              './index.html',
              './schedule.html',
              './js/*',
              './css/styles.css',
              './css/schedule-page.css',
              './assets/**'
            ],
            dest: './dist'
          }
        ]
      }
    },
    clean: {
      dist: {
        src: ['./dist/']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  
  grunt.registerTask('default', 'Cleans and creates dist folder for deployment', ['clean:dist', 'copy:dist']);



};