define(['jquery', 'jquery.alpha', 'jquery.beta', 'amdModule'], function ($) {
  //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
  $(function () {
    $('body').alpha().beta();
  });

  const otherModule = require('amdModule');
  otherModule.increase();
  otherModule.log();
});
