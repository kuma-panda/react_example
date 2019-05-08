module.exports = function(grunt){
     grunt.initConfig({
          browserify: {
               dist: {
                    options: {
                         transform: [['babelify', {presets: ['es2015', 'react']}]]
                    },
                    src: 'index.js',
                    dest: 'public/bundle.js'
               }
          },
          uglify: {
               dist: {
                    options: {
                         mangle: false,
                         compress: false,
                         sourceMap: true
                    },
                    files: {
                         "public/bundle.min.js": ["public/bundle.js"]
                    }
               }
          },
     });

     grunt.loadNpmTasks('grunt-browserify');
     grunt.loadNpmTasks('grunt-contrib-uglify-es');

     grunt.registerTask('default', ['browserify', 'uglify']);
};
