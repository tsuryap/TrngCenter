module.exports = function(grunt) {
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
            }
        }
    }); 
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', ['concat']);
};