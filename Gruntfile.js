module.exports = function(grunt) {
    var production = false;
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: '\n',
            },
            jsFiles: {
                src: [
                    "bower_components/angular/angular.js",
                    "bower_components/angular-ui-router/release/angular-ui-router.js",
                    "app/app.js",
                    "app/**/*.js"
                ],
                dest: 'build/<%= pkg.name %>.js',
            },
            cssFiles: {
                src: [
                    "styles/bootstrap.css",
                    'styles/app.css',
                    'styles/components/*.css'
                ],
                dest: 'build/<%= pkg.name %>.css',
            }
        },
        ngtemplates: {
            common: {
                src: ['app/**/*.html'],
                dest: 'build/all-templates.js',
                options: {
                    htmlmin: {
                        collapseBooleanAttributes: true,
                        collapseWhitespace: true,
                        removeAttributeQuotes: true,
                        removeComments: true, // Only if you don't use comment directives!
                        removeEmptyAttributes: true,
                        removeRedundantAttributes: true,
                        removeScriptTypeAttributes: true,
                        removeStyleLinkTypeAttributes: true
                    }
                }
            }
        },
        copy:{
            build:{
                files: [{
                    expand: true,
                    src: ["index.html", "assests/images/**"],
                    dest: 'build/'
                },{ // fonts folder should be at css file level(bootstrap looks for fonts folder )
                    expand: true,
                    flatten: true,
                    src: ["assests/fonts/**"],
                    dest: 'build/fonts/',
                    filter: 'isFile'
                }]
            }
        },
        watch: {
            css: {
                files: ['styles/**/*.css', 'app/**/*.html', "index.html"],
                tasks: ['concat','ngtemplates','copy']
            },
            js: {
                files: ['app/**/*.js'],
                tasks: ['concat','ngtemplates','copy']
            }
        },
        uglify: {
            dist: {
                files: {
                    'build/all-templates.js': 'build/all-templates.js',
                    'build/trngcenter.js': 'build/trngcenter.js'
                }
            }
        }
    });
    var taskList = ['concat','ngtemplates','copy'];
    if(production) {
        taskList.push('uglify');
    }
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', taskList);
};