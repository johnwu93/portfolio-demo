function configureGrunt(grunt) {

    // Project configuration.
    "use strict";
    // noinspection JSUnresolvedFunction
    grunt.initConfig({
        bootstrap: {
            dest: "out",
            css: [
                "modals.less",
                "grid.less",
                "responsive-utilities.less"
            ]
        }

    });

    grunt.loadNpmTasks("grunt-bootstrap");

    grunt.registerTask("default", ["bootstrap"]);
}

// noinspection JSLint
module.exports = configureGrunt; // jshint ignore:line