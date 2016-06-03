module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        watch: {
            js: {
                files: [
                    'Gruntfile.js',
                    'demo/index.html',
                    'src/ajax/scripts/*.js',
                    'src/timeline/scripts/**/*.js',
                    'src/timeline/scripts/*.js',
                    'src/timeline/*.js',
                ],
                tasks: ['concat'],
            },
            css: {
                files: [
                    'src/timeline/styles/*.css',
                    'src/ajax/styles/*.css'
                ],
                tasks: ['cssmin'],
            },
            livereload: {
                options: {
                    livereload: true
                },
                files: [
                    'src/ajax/scripts/*.js',
                    'src/ajax/styles/*.css',
                    'src/timeline/styles/*.css',
                    'demo/index.html'
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
                    'src/ajax/simile-ajax-api.js',
                    'src/ajax/scripts/platform.js',
                    'src/ajax/scripts/debug.js',
                    'src/ajax/scripts/xmlhttp.js',
                    'src/ajax/scripts/json.js',
                    'src/ajax/scripts/dom.js',
                    'src/ajax/scripts/graphics.js',
                    'src/ajax/scripts/date-time.js',
                    'src/ajax/scripts/string.js',
                    'src/ajax/scripts/html.js',
                    'src/ajax/scripts/data-structure.js',
                    'src/ajax/scripts/units.js',
                    'src/ajax/scripts/ajax.js',
                    'src/ajax/scripts/history.js',
                    'src/ajax/scripts/window-manager.js',
                    // API
                    'src/timeline/timeline-api.js',
                    'src/timeline/scripts/timeline.js',
                    'src/timeline/scripts/band.js',
                    'src/timeline/scripts/themes.js',
                    'src/timeline/scripts/ethers.js',
                    'src/timeline/scripts/ether-painters.js',
                    'src/timeline/scripts/event-utils.js',
                    'src/timeline/scripts/labellers.js',
                    'src/timeline/scripts/sources.js',
                    'src/timeline/scripts/original-painter.js',
                    'src/timeline/scripts/detailed-painter.js',
                    'src/timeline/scripts/overview-painter.js',
                    'src/timeline/scripts/compact-painter.js',
                    'src/timeline/scripts/decorators.js',
                    'src/timeline/scripts/units.js'
                ],
                dest: 'dist/timeline.js',
            },
        },
        uglify: {
            dist: {
                files: {
                    'dist/timeline.min.js': ['dist/timeline.js']
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'dist/timeline.min.css': [
                        'src/ajax/styles/graphics.css',
                        'src/timeline/styles/timeline.css',
                        'src/timeline/styles/ethers.css',
                        'src/timeline/styles/events.css'
                    ]
                }
            }
        },
        copy: {
            dist: {
                files: [
                    // includes files within path
                    {
                        expand: true,
                        src: [
                            'src/ajax/images/*',
                            'src/timeline/images/*'
                        ],
                        dest: 'dist/'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: [
                            'src/timeline/images/*'
                        ],
                        dest: 'dist/images/'
                    }
                ],
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('build', [
        'concat',
        'uglify',
        'cssmin',
        'copy'
    ]);

    grunt.registerTask('default', [
        'connect:server',
        'watch'
    ]);
};
