const shell = require('shelljs');

shell.cp('-R', 'public/js', 'dist/public/');
shell.cp('-R', 'public/vendor', 'dist/public/');
shell.cp('-R', 'public/images', 'dist/public/');
shell.cp('-R', 'public/fonts', 'dist/public/');
shell.cp('-R', 'public/css/*.css', 'dist/public/css/');
