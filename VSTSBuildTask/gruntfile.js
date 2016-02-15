﻿/// <binding ProjectOpened='exec:update' />
/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        exec: {
            update: {
                command: "npm up --save-dev",
                stdout: true,
                stderr: true
            },
            publish: {
                command: "tfx build tasks upload --token <<YOURTOKEN>> --auth-type pat --task-path ./tasks/ExampleTask --service-url https://your.visualstudio.com.account",
                stdout: true,
                stderr: true
            }
        },
        jasmine: {
            src: ["scripts/**/*.js", "sdk/scripts/*.js"],
            specs: "test/**/*[sS]pec.js",
            helpers: "test/helpers/*.js"
        }
    });

    grunt.loadNpmTasks("grunt-exec");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-jasmine");

};