/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

function getProcessors() {
  return [
    require('postcss-import'),
    require('postcss-containerizer'),
    require('postcss-nested'),
    require('postcss-inherit'),
    require('postcss-logical')(),
    require('./plugins/postcss-transform-logical')(),
    require('postcss-dir-pseudo-class')(),
    require('./plugins/postcss-custom-properties-passthrough')(),
    require('postcss-calc'),
    require('postcss-svg'),
    require('postcss-functions')({
      functions: {
        noscale: function (value) {
          return value.toString().toUpperCase();
        },
        percent: function (value) {
          return parseInt(value, 10) / 100;
        }
      }
    }),
    require('./plugins/postcss-strip-comments')({ preserveTopdoc: false }),
    require('postcss-dropunusedvars'),
    require('postcss-dropdupedvars'),
    require('postcss-droproot'),
    require('postcss-focus-ring'),
    require('postcss-discard-empty'),
    require('autoprefixer')({
      'browsers': [
        'IE >= 10',
        'last 2 Chrome versions',
        'last 2 Firefox versions',
        'last 2 Safari versions',
        'last 2 iOS versions'
      ]
    })
  ];
}

exports.getProcessors = getProcessors;
exports.processors = getProcessors();
