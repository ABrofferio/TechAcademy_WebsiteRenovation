module.exports = function(grunt){
    grunt.initConfig({
        sass: {
            options: {
                outputStyle: 'compressed'
                // determines the output css style
            },
            dist: {
                // Paths below depends on the project's file structure
                files: [{
                    expand: true,
                    cwd: 'sass/',
                    // working directory, where you edit your files
                    src: '**/*.scss',
                    // file types that the SASS compiler will look for
                    dest: 'css/',
                    // where the resulting css file will go
                    ext: '.css'
                    // the file type for the resulting file
                }]
            }
        },
        watch: {
            // whenever any scss file in sass is changed, grunt runs sass 
            files: 'sass/**/*.scss',
            tasks: 'sass'
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass', 'watch']);
    // when 'grunt watch' is executed from the command line, 
    // grunt will automatically run the tasks of executing sass 
    // and watch when the above specified files are changed.
};