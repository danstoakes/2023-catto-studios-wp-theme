const sass = require('node-sass');

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        implementation: sass,
        sourceMap: true,
        outputStyle: 'compressed'
      },
      dist: {
        files: {
          'assets/css/style.min.css': 'assets/sass/main.scss',
          'assets/css/editor.min.css': 'assets/sass/editor.scss',
        }
      }
    },
    
    autoprefixer: {
      dist: {
        files: {
          'assets/css/style.min.css':'assets/css/style.min.css',
          'assets/css/editor.min.css':'assets/css/editor.min.css',
        },
        options: {
          map: true
        }
      }
    },

    uglify: {
      dist: {
        files: {
          'assets/js/dist/script.min.js': ['assets/js/script.js'],
          'assets/js/dist/bootstrap.min.js': ['node_modules/bootstrap/js/dist/util.js', 'node_modules/bootstrap/js/dist/collapse.js']
        }
      }
    },

    imagemin: {
      dist: {
        files: [
          {
            expand: true,
            cwd: 'assets/img/',
            src: ['assets/**/*.{png,jpg,gif}'],
            dest: 'assets/img/'
          }
        ]

      }
    },

    watch: {
      sass: {
        files: 'assets/sass/**',
        tasks: ['sass', 'autoprefixer'],
      },

      uglify: {
        files: 'assets/js/**',
        tasks: ['newer:uglify'],
      },

      imagemin: {
        files: 'assets/img/**',
        tasks: ['newer:imagemin'],
      }
    }
  });

  grunt.event.on('watch', function(action, filepath, target) {
    grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('default', ['sass', 'autoprefixer', 'newer:imagemin', 'newer:uglify']);
};
