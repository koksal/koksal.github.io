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
      }
      jekyllServe: {
        command: 'jekyll serve --watch'
      }
    },
    watch: {
      less: {
        files: [
          "_less/*.less"
        ],
        tasks: [
          'less'
        ],
        options: {
          interrupt: true,
          atBegin: true
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
    'shell:jekyllBuild'
  ]);
  grunt.registerTask('dev', [
    'watch'
  ]);
  grunt.registerTask('server', [
    'shell:jekyllServe'
  ]);
};
