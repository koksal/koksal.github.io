module.exports = function(grunt) {
  grunt.initConfig({
    clean: {
      dist: [
        'assets/css/main.css'
      ]
    },
    less: {
      development: {
        options: {
          paths: ["_less"]
        },
        files: {
          "assets/css/main.css": "_less/main.less"
        }
      }
    },
    shell: {
      jekyllBuild: {
        command: 'jekyll build --config _config.yml,_config_dev.yml'
      },
      jekyllBuildProduction: {
        command: 'jekyll build --config _config.yml'
      },
      jekyllServe: {
        command: 'jekyll serve'
      }
    },
    watch: {
      less: {
        files: [
          "_less/*.less",
          "**/*.html",
          "**/*.md",
          "_data/*",
          "!**/node_modules/**",
          "!**/bower_components/**",
          "!**/_site/**"
        ],
        tasks: [
          'less',
          'shell:jekyllBuild'
        ],
        options: {
          interrupt: true,
          atBegin: true,
          livereload: true
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', [
    'clean',
    'less',
    'shell:jekyllBuildProduction'
  ]);
  grunt.registerTask('dev', [
    'watch'
  ]);
  grunt.registerTask('serve', [
    'shell:jekyllServe'
  ])
};
