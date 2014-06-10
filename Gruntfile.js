module.exports = function(grunt) {
  grunt.initConfig({
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
    watch: {
      less: {
        files: [
          "_less/*.less"
        ],
        tasks: ['less']
      }
    },
    clean: {
      dist: [
        'assets/css/main.css'
      ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', [
    'clean',
    'less'
  ]);
  grunt.registerTask('dev', [
    'watch'
  ])
};
