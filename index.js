/*!
 * detect-mocha <https://github.com/AndreasPizsa/detect-mocha>
 *
 * Copyright (c) 2016, Andreas Pizsa.
 * Licensed under the MIT License.
 */

'use strict';

module.exports = function isMochaRunning(context) {
  context = context || require('global-var');
  return ['afterEach','after','beforeEach','before','describe','it'].every(function(functionName){
    return context[functionName] instanceof Function;
  })
};
