# Workflow --

#0. Start With NPM
- create a `package.json` by command `npm init`
- package name : tabs-pro
- version      : 1.0.0
- description  : Tabs PRO is a WordPress tabs plugin for your WordPress website.
- entry point  : index.js
- rest of them are default.

#1. Install Bootstrap by NPM
- install bootstrap by command `npm install bootstrap --save-dev`
- make two folders by command `mkdir scss css`
- make HTML & SCSS file by command `touch index.html scss/style.scss`

#2. Install gulp in the project
- at first the computer have must installed gulp globally
- to install gulp globally `npm install -g gulp`
- after install gulp gobally then install in the project
- as develpment dependencies by command `npm install gulp --save-dev`
- install `gulp-sass` module by command `npm install gulp-sass --save-dev`
- install `gulp-minify-css` module by command `npm install gulp-minify-css --save-dev`

#3. Automating sass builds gulp
- create a file named `gulpfile.js` and paste below code
- looking for the code to checkout the `gulpfile.js`

#4. Including only the bootstrap grid in the SASS file
```CSS
// Grid work with the flexbox rules instead of floats.
$enable-flex:         true;
$enable-grid-classes: true;

/* Start import from bootstrap scss */

@import '../node_modules/bootstrap/scss/_functions.scss';
@import '../node_modules/bootstrap/scss/_variables.scss';
@import '../node_modules/bootstrap/scss/_mixins.scss';
@import '../node_modules/bootstrap/scss/_reboot.scss';
@import '../node_modules/bootstrap/scss/_grid.scss';
```

#5. Get all imported files as css
- converting all of SCSS to CSS by command `gulp watch`
- to stop watching press `Ctrl + C`

#6. Done!
- this project is done here. But if a person will download this project from gitHub..
- the `node_modules` folder will missing after this project
- no problem!! in this case we can use below command to reinstall all of missing things
- install all dependencies from the `package.json` by command `npm install`
