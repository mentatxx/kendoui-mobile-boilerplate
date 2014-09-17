/*global module*/
'use strict';

var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
    app: function() {
        this.copy('.bowerrc', '.bowerrc');
        this.copy('gitignore', '.gitignore');
        this.copy('bower.json', 'bower.json');
        this.directory('www', 'www');

        this.bowerInstall('');
    }
});
