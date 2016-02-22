var gulp = require("gulp"),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    jade = require('gulp-jade'),
    plumber = require('gulp-plumber'),
    pngquant = require('imagemin-pngquant'),
    rigger = require('gulp-rigger'),
    rename = require("gulp-rename"),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    spritesmith = require('gulp.spritesmith'),
    uglify = require('gulp-uglify');

//Paths
var paths = {
	jade: {
        location: [
            'dev/jade/_pages/*.jade'
        ],
        destination: 'prod'
    },

    scss: {
        location: [
            'dev/scss/**/*.scss'
        ],
        destination: 'prod/css'
    },

    js: {
        location: [
              'dev/js/*.js'
        ],
        destination: 'prod/js'
    }
};


//Jade
gulp.task('jade-compile', function() {
  var YOUR_LOCALS = {};
  gulp.src(paths.jade.location)
        .pipe(plumber())
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest(paths.jade.destination))
});

//SASS
gulp.task('sass-compile', function() {
	gulp.src(paths.scss.location)
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(sass({outputStyle: 'expanded'}))
		.pipe(autoprefixer(['> 5%', 'last 5 versions', 'IE 9']))
		.pipe(concat("main.min.css"))
    .pipe(rigger())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(paths.scss.destination));
	});

// concat js
gulp.task('concat-js', function() {
  return gulp.src(paths.js.location)
    .pipe(plumber())
  	.pipe(sourcemaps.init())
  	.pipe(concat('main.min.js'))
    .pipe(rigger())
    // .pipe(uglify())
  	.pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.js.destination));
});

// auto sprites
gulp.task('sprite', function() {
    var spriteData = gulp.src('dev/img/icons/*.png')
        .pipe(spritesmith({
            imgName: 'sprite.png',
            cssName: 'sprite.scss',
            algorithm: 'top-down',
            padding:  5
        }));
    spriteData.img.pipe(gulp.dest('prod/img/'));
    spriteData.css.pipe(gulp.dest('dev/scss/'));
});

// images minification
gulp.task('img-min', function() {
    return gulp.src('dev/img/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('prod/img'));
});

// Сервер
gulp.task('server', function () {
  browserSync({
    port: 9000,
    server: {
      baseDir: 'prod'
    }
  });
});

// Слежка
gulp.task('watch', function () {
  gulp.watch('dev/jade/**/*', ['jade-compile']);
  gulp.watch(paths.scss.location, ['sass-compile']);
  gulp.watch('dev/img/**/*', ['img-min']);
  gulp.watch('dev/js/**/*', ['concat-js']);
  gulp.watch([
    paths.jade.destination,
    paths.js.destination,
    paths.scss.destination
  ]).on('change', browserSync.reload);
});

// Задача по-умолчанию
gulp.task('default', [
  'jade-compile',
  'sass-compile',
  'concat-js',
  'server',
  'watch'
]);