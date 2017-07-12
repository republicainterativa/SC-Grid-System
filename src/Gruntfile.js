// -------------------------------------------------------
// Gruntfile.js for Grid System Studies
// Version: 1.0.0
//
// Author:  Sergio Costa
// URL:     http://www.republicainterativa.com.br
// Contact: sergio.costa@outlook.com
// -------------------------------------------------------
"use strict";

module.exports = function(grunt) {

    // Para instalar matchdep na pasta src do projeto: $ npm install matchdep --save-dev
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    var projectConfig = {

        // Setting Directories
        dirs: {
            app:  "../",
            sass: "../sass",
            css:  "../css",
        },

        // Metadata
        pkg: grunt.file.readJSON("package.json"),

        // Watch 
        // Para instalar na pasta src do projeto: $ npm install grunt-contrib-watch --save-dev
        watch: {
            options: {
                livereload: true
            },
            compass: {
                files: [
                    "<%= dirs.css %>/{,*/}*.css",
                    "<%= dirs.sass %>/{,*/}*.{scss,sass}"
                ],
                tasks: ["compass"]
            }
        },

        // Compass
        // Para instalar na pasta src do projeto: $ npm install grunt-contrib-compass --save-dev
        compass: {
            dist: {
                options: {
                    sassDir: '../sass',
                    cssDir: '../css',
                    environment: "production",
                    outputStyle: "compressed",
                    force: true,
                    config: "config.rb"
                }
            }
        },

    };

    // Init Grunt
        grunt.initConfig(projectConfig);


    // Register Tasks
    // ----------------

    // Watch Project - $ grunt
    grunt.registerTask( "default", [ "watch" ]);


};