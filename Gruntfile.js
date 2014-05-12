module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    /** Set project object **/
    project: {
      app: 'bootstrap-datetimepicker',
      assets: 'vendor/assets',
      css: [
        'src/css/bootstrap-datetimepicker.scss'
      ],
      js: [
        'src/js/*.js'
      ]
    },

    tag:{
      banner: '/*!\n' +
              ' * <%= pkg.name %>\n' +
              ' * <%= pkg.title %>\n' +
              ' * <%= pkg.url %>\n' +
              ' * @author <%= pkg.author %>\n' +
              ' * @version <%= pkg.version %>\n' +
              ' * Copyright <%= pkg.copyright %>. <%= pkg.license %> licensed.\n' +
              ' */\n'
    },

    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'build/css/<%= project.app%>.css' : '<%= project.css %>'
        }
      },
      minify: {
        options: {
          style: 'compressed'
        },
        files: {
          'build/css/<%= project.app%>.min.css' : '<%= project.css %>'
        }
      }
    },

    uglify: {
      my_target: {
        files: {
          'build/js/<%= project.app%>.min.js': ['<%= project.js %>']
        }
      }
    },

    watch: {
      sass: {
        files: ['**/*.scss'],
        tasks: ['dist'],
      },
      html: {
        files: ['index.html','**/*.css'],
        options: {
          livereload: 1337
        }
      }

    }

  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Docs distribution task
  grunt.registerTask('dist-build', ['sass:dist']);

  // Compress distribution task
  grunt.registerTask('dist-compress',['sass:minify', 'uglify']);

  // Full distribution task.
  grunt.registerTask('dist', ['dist-build','dist-compress']);

  // Default task
  grunt.registerTask('default', ['dist']);
};
