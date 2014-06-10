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
        command: 'jekyll build'
      },
      jekyllBuildProduction: {
        command: 'jekyll build --config _config.yml,_config_production.yml'
      },
      jekyllServe: {
        command: 'jekyll serve'
      },
      deploy: {
        command: 'rsync --compress --recursive --checksum --itemize-changes --delete _site/ login:public_html/'
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
  grunt.registerTask('server', [
    'shell:jekyllServe'
  ]);
  grunt.registerTask('deploy', [
    'clean',
    'less',
    'shell:jekyllBuildProduction',
    'shell:deploy'
  ])
};
