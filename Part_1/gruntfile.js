module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ''
            },
            dist: {
                src: ['app/js/*.js'],
                dest: 'dist/js/script.main.js'
            }
        },
        concat_css: {
            all: {
                src: ['app/css/*.scss'],
                dest: 'dist/css/style.scss'
            }
        },
        uglify: {
            dist: {
                src: ['dist/js/script.main.js'],
                dest: 'dist/js/script.main.min.js'
            }
        },

        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'dist/css',
                    src: ['style.scss'],
                    dest: 'dist/css',
                    ext: '.css'
                }]
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'app/img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dist/img/'
                }]
            }
        },
        lineending: {
            dist: {
                options: {
                    overwrite: true,
                    eol: 'lf'
                },
                files: {
                    '': ['dist/js/script.main.js']
                }
            }
        },

        watch: {
            sass: {
                files: ['app/css/*.scss'],
                tasks: ['sass', 'concat_css']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concat-css');
    grunt.loadNpmTasks('grunt-lineending');


    grunt.registerTask('default', ['concat', 'uglify', 'sass', 'imagemin', 'concat_css', 'lineending']);

};
