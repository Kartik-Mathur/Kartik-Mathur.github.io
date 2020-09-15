var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    rename = require('gulp-rename'), //For renaming file
    plumber = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer');
    w3cValidation = require('gulp-w3c-html-validation'),
    w3cjs = require('gulp-w3cjs'),
   //  cssbeautify = require('gulp-cssbeautify');

//SASS Compile
gulp.task('sass', function () {
    sass(['style.scss','responsive.scss'], {
            style: 'expanded'
        }) //Source Path with expanded Style
        .pipe(plumber()).pipe(autoprefixer({
            browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Firefox > 20', 'iOS 7', 'last 2 iOS major versions', 'ie 6-8'],
            cascade: false
        })).pipe(gulp.dest('../../css/')); //Destination Path
});


//Minifying CSS
// gulp.task('cssMini', function () {
//     sass('./sass/style.scss','./sass/responsive.scss', {
//         style: 'compressed'
//     }).pipe(rename('style.min.css')).pipe(autoprefixer({
//         browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Firefox > 20', 'iOS 7', 'last 2 iOS major versions', 'ie 6-8'],
//         cascade: false
//     })).pipe(gulp.dest('../css/'));
// });

//Prettify CSS
// gulp.task('cssPrettify', function() {
//    return gulp.src('./css/style.css')
//        .pipe(cssbeautify({
//            indent: '   ',
//            autosemicolon: true
//        }))
//        .pipe(gulp.dest('../css/'));
// });

//W3c Html Validation
gulp.task('w3c', function () {
    return gulp.src('')
        .pipe(w3cValidation({
            generateCheckstyleReport: 'w3cErrors/validation.xml',
            remotePath: "http://localhost/seo", // use regex validation for domain check 
            remoteFiles: [
                "../**/*.html"
            ],
            relaxerror: ['Bad value X-UA-Compatible for attribute http-equiv on element meta.',
                'Element title must not be empty.'
            ]
        }))
});

//W3c js Validation
gulp.task('w3cjs', function () {
    gulp.src('../**/*.html')
        .pipe(w3cjs())
        .pipe(w3cjs.reporter());
});

//Gulp Watch
gulp.task('watch', function () {
    gulp.watch('**/*.scss', ['sass']);
   //  gulp.watch('../**/*.html', ['w3c']);
   //  gulp.watch('../**/*.html', ['w3cjs']);
});


//Gulp Task
gulp.task('default', ['watch']);
gulp.task('valid', ['w3c', 'w3cjs']);