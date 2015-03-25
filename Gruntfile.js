module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        watch: {
            files: [
                'Gruntfile.js',
                'index.html',
                'scripts/*.js',
                'api/scripts/**/*.js',
                'api/scripts/*.js',
                'api/*.js',
                'styles/*.css'
            ],
            tasks: ['concat'],
            livereload: {
                options: {
                    livereload: true
                },
                files: [
                    'scripts/*.js',
                    'styles/*.css'
                ]
            }
        },
        connect: {
            server: {
                options: {
                    livereload: true,
                    base: './',
                    port: 9000
                }
            }
        },
        concat: {
            dist: {
                src: [
                    // SIMILE-AJAX-API
                    'simile-ajax-api.js',
                    'scripts/platform.js',
                    'scripts/debug.js',
                    'scripts/xmlhttp.js',
                    'scripts/json.js',
                    'scripts/dom.js',
                    'scripts/graphics.js',
                    'scripts/date-time.js',
                    'scripts/string.js',
                    'scripts/html.js',
                    'scripts/data-structure.js',
                    'scripts/units.js',
                    'scripts/ajax.js',
                    'scripts/history.js',
                    'scripts/window-manager.js',
                    // API
                    'api/timeline-api.js',
                    'api/scripts/timeline.js',
                    'api/scripts/band.js',
                    'api/scripts/themes.js',
                    'api/scripts/ethers.js',
                    'api/scripts/ether-painters.js',
                    'api/scripts/event-utils.js',
                    'api/scripts/labellers.js',
                    'api/scripts/sources.js',
                    'api/scripts/original-painter.js',
                    'api/scripts/detailed-painter.js',
                    'api/scripts/overview-painter.js',
                    'api/scripts/compact-painter.js',
                    'api/scripts/decorators.js',
                    'api/scripts/units.js'
                ],
                dest: 'dist/timeline.min.js',
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('build', ['concat']);

    grunt.registerTask('default', [
        'connect:server',
        'watch'
    ]);
};
