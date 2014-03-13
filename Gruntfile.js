module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    copy: {
      main: {
        files: [
          {expand: true, src: ['sarah-semark.pdf'], dest: 'dist/'},
          {expand: true, src: ['fonts/**'], dest: 'dist/'},
          {expand: true, src: ['images/**'], dest: 'dist/'},
          {expand: false, src: ['humans.txt'], dest: 'dist/humans.txt'},
          {expand: false, src: ['robots.txt'], dest: 'dist/robots.txt'},
          {expand: false, src: ['index.html'], dest: 'dist/index.html'},
        ]
      }
    },

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'dist/css/app.css': 'scss/app.scss'
        }
      }
    },

    uglify: {
      dist: {
        options: {
          mangle: {
            except: ['jQuery']
          },
          outputStyle: 'compressed'
        },
        files: {
          'dist/js/app.js': [
            'bower_components/modernizr/modernizr.js',
            'bower_components/jquery/dist/jquery.js',
            'bower_components/foundation/js/foundation.js',
            'bower_components/foundation/js/foundation/foundation.magellan.js',
            'js/app.js'
          ]
        }
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      copy: {
        files: ['fonts/**', 'images/**', 'index.html', 'humans.txt', 'robots.txt'],
        tasks: ['copy']
      },

      uglify: {
        files: 'js/*.js',
        tasks: ['uglify']
      },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['copy', 'sass', 'uglify']);
  grunt.registerTask('default', ['build','watch']);
};
