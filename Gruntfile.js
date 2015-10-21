module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            build: {
                src: [ './public/lib/js', './public/lib/css', './public/lib/fonts' ]
            }
        },
        bower: {
            dev: {
                dest: './public/lib',
                css_dest: './public/lib/css',
                js_dest: './public/lib/js/',
                fonts_dest: './public/lib/fonts/',
                options: {
                    keepExpandedHierarchy: true,
                    ignorePackages: [
                        'jquery',
                        'font-awesome',
                        'bootstrap',
                        'bootstrap-sass',
                        'bootstrap-social',
                        'angular-ui-router',
                        'angular-bootstrap',
                        'moment',
                        'spinkit'
                    ]
                }
            }
        },
        copy: {
            js: {
                files: [
                    {
                        expand: true,
                        dest: './public/lib/js/',
                        src: [
                            './bower_components/angular-ui-router/release/angular-ui-router.js',
                            './bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
                            './bower_components/moment/min/moment-with-locales.min.js'
                        ],
                        flatten: true,
                        filter: 'isFile'
                    }
                ]
            },
            css: {
                files: [
                    {
                        expand: true,
                        dest: './public/lib/css/bootstrap/css/',
                        src: [
                            './bower_components/bootstrap/dist/css/bootstrap.min.css',
                            './bower_components/bootstrap/dist/css/bootstrap.css.map',
                        ],
                        flatten: true,
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        dest: './public/lib/css/font-awesome/css/',
                        src: [
                            './bower_components/font-awesome/css/font-awesome.min.css',
                            './bower_components/font-awesome/css/font-awesome.css.map',
                        ],
                        flatten: true,
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        dest: './public/sass/bootstrap/',
                        src: [
                            './bower_components/bootstrap-sass/assets/stylesheets/bootstrap/_mixins.scss'
                        ],
                        flatten: true,
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        dest: './public/sass/bootstrap/',
                        src: [
                            './bower_components/bootstrap-sass/assets/stylesheets/bootstrap/_variables.scss'
                        ],
                        flatten: true,
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        dest: './public/sass/bootstrap/mixins/',
                        cwd: './bower_components/bootstrap-sass/assets/stylesheets/bootstrap/mixins/',
                        src: [
                            '*.scss'
                        ],
                        flatten: true,
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        dest: './public/sass/bootstrap/social/',
                        cwd: './bower_components/bootstrap-social/',
                        src: [
                            '*.scss'
                        ],
                        flatten: true,
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        dest: './public/sass/spinkit/',
                        cwd: './bower_components/spinkit/scss/',
                        src: [
                            '**/*.scss'
                        ],
                        flatten: false,
                        filter: 'isFile'
                    }
                ]
            },
            fonts: {
                files: [
                    {
                        expand: true,
                        dest: './public/lib/css/bootstrap/fonts/',
                        cwd: './bower_components/bootstrap/fonts/',
                        src: [
                            '**/*'

                        ],
                        flatten: false,
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        dest: './public/lib/css/font-awesome/fonts/',
                        cwd: './bower_components/font-awesome/fonts/',
                        src: [
                            '**/*'

                        ],
                        flatten: false,
                        filter: 'isFile'
                    }
                ]
            }
        },
        sass:{
            dist: {
                options: {
                    style  : 'compact',
                    noCache: true
                },
                files  : {
                    './public/css/style.css':'./public/sass/appMain.scss'
                }

            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-bower');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('dev', ['clean', 'bower:dev', 'copy', 'sass']);
    
}
