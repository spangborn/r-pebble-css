module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ['css/pebble.css'],
        watch: {
            compass: {
                files: ['sass/*.{scss,sass}'],
                tasks: ['compass:dev']
            },
        },
        compass: {
            dev: {
                options: {
                    sassDir: ['sass'],
                    cssDir: ['css'],
                    environment: 'development',
                    specify: "sass/*.{scss,sass}",
                    banner: '/*\n\tPackage:<%= pkg.name %>\n\tVersion: <%=pkg.version%>\n\tBuild: <%= grunt.task.current.target %>\n\tBuilt: <%= grunt.template.today("yyyy-mm-dd h:MM:ss TT Z") %> \n*/\n',
                }
            },
            prod: {
                options: {
                    sassDir: ['sass'],
                    cssDir: ['css'],
                    debugInfo: false,
                    specify: "sass/*.{scss,sass}",
                    banner: '/*\n\tPackage:<%= pkg.name %>\n\tVersion: <%=pkg.version%>\n\tBuild: <%= grunt.task.current.target %>\n\tBuilt: <%= grunt.template.today("yyyy-mm-dd h:MM:ss TT Z") %> \n*/\n',
                },
            },
        },
    });

    // Load the plugin

    // Compass
    grunt.loadNpmTasks('grunt-contrib-compass');

    // Clean
    grunt.loadNpmTasks('grunt-contrib-clean');

    // Default task(s).
    grunt.registerTask('default', ['clean', 'compass:dev']);

    // Prod build
    grunt.registerTask('prod', ['clean', 'compass:prod']);

    // Dev Build
    grunt.registerTask('dev', ['clean', 'compass:dev']);
};