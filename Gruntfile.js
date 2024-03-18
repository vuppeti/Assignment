module.exports = function(grunt) {
    grunt.initConfig({
      sass: {
        dist: {
          files: {
            'dist/css/styles.css': 'src/scss/styles.scss'
          }
        }
      },
      copy: {
        html: {
          src: 'src/index.html',
          dest: 'dist/index.html'
        },
        images: { 
          expand: true, 
          cwd: 'src/images/',
          src: '**/*', 
          dest: 'dist/images/'
        }
      },
      watch: {
        css: {
          files: 'src/scss/**/*.scss',
          tasks: ['sass']
        },
        js: {
          files: 'src/js/**/*.js',
          tasks: ['uglify']
        },
        html: {
          files: 'src/index.html',
          tasks: ['copy:html']
        },
        images: { 
          files: 'src/images/**/*', 
          tasks: ['copy:images']
        }
      },
      uglify: {
        dist: {
          files: {
            'dist/js/scripts.min.js': 'src/js/scripts.js'
          }
        }
      }
    });
    
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
  
  grunt.registerTask('build', ['sass', 'uglify', 'copy:html', 'copy:images']);

  grunt.registerTask('default', ['build', 'watch']);
  };
  