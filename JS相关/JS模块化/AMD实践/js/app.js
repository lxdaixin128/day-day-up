// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
// except 'app' ones,
requirejs.config({
  baseUrl: 'js/lib',
  paths: {
    app: '../app',
    jquery: 'https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min',
  },
});

// Load the main app module to start the app
requirejs(['app/main']);
