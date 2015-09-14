module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        express: {
            all: {
                options: {
                    bases: [''],
                    port: 8080,
                    hostname: "0.0.0.0",
                    livereload: true
                }
            }
        },
        sass: {
            dist: {
                files: {
                    'css/styles.css': 'css/styles.scss'
                }
            }
        },
        open: {
            all: {
                path: 'http://localhost:8080'
            }
        },
        watch: {
            css: {
                    files: 'css/*.scss',
                    tasks: ['sass'],
                    options: {
                        livereload: true
                }
            }
        },

    });

    grunt.loadNpmTasks('grunt-express'),
    grunt.loadNpmTasks('grunt-contrib-sass'),
    grunt.loadNpmTasks('grunt-open'),
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [
        'express',
        'sass',
        'open',
        'watch'
    ]);   
}     