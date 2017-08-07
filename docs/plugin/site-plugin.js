const cheerio = require('cheerio');
const fs = require('fs-extra');
const path = require('path');

console.log('site-plugin:')
  
let config;
exports.onHandleConfig = function(ev) {
  console.log('site-plugin: onHandleConfig')
  config = ev.data.config;
};

// exports.onHandleContent = function(ev) {
exports.onHandleDocs = function(ev) {
  console.log('site-plugin: onHandleContent')

  if (path.extname(ev.data.fileName) !== '.html') return;

  const $ = cheerio.load(ev.data.content);

  // title
  $('head title').text('ESDoc - A Good Documentation Generator for JavaScript');

  // header
  const $header = $('body > header');
  $header.html(`
    <a href="./" class="logo"><img src="./docs/asset/image/logo.png"/></a>
    <a href="./" class="brand">Devapt</a>
    <ul>
      <li><a href="https://try.esdoc.org" target="_blank">Try it out</a></li>
      <li><a href="./manual/usage/usage.html" class="hair-line">Usage</a></li>
      <li><a href="./manual/usage/feature.html">Features</a></li>
      <li><a href="./manual/configuration/config.html">Config</a></li>
      <li><a href="./manual/usage/tags.html">Tags</a></li>
      <li><a href="./manual/advanced/api.html">API</a></li>
      <li><a href="./manual/changelog/CHANGELOG.html" class="hair-line">Releases</a></li>
      <li><a href="./manual/faq/faq.html">FAQ</a></li>
    </ul>
    <a href="https://github.com/esdoc/esdoc" class="github"><img src="./manual/asset/image/github.png"/></a>
  `);

  // remove unnecessary scripts
  const scripts = ['script/search_index.js', 'script/search.js', 'script/inherited-summary.js', 'script/test-summary.js', 'script/inner-link.js'];
  for (const script of scripts) {
    $(`script[src="${script}"]`).remove();
  }

  // footer
  $('body > footer').html(`� 2016 <a href="https://twitter.com/h13i32maru">Ryo Maruyama</a>. All rights reserved.`);

  // changelog
  $('#changelog').text('Releases');

  // og
  $('head').append(`
    <meta property="og:url" content="https://esdoc.org/">
    <meta property="og:site_name" content="ESDoc">
    <meta property="og:title" content="ESDoc">
    <meta property="og:description" content="ESDoc is a good documentation generator for JavaScript.">
    <meta property="og:type" content="website">
    <meta property="og:author" content="https://twitter.com/h13i32maru">
    <meta property="og:image" content="https://esdoc.org/manual/asset/image/logo.png">
    <meta property="og:image:width" content="300">
    <meta property="og:image:height" content="300">
    <meta property="twitter:card" content="summary">
    <meta property="twitter:site" content="@h13i32maru">
    <meta property="twitter:creator" content="@h13i32maru">
    <meta property="twitter:title" content="ESDoc">
    <meta property="twitter:description" content="ESDoc is a good documentation generator for JavaScript">
    <meta property="twitter:image:width" content="300">
    <meta property="twitter:image:height" content="300">
    <meta name="description" content="ESDoc is a good documentation generator for JavaScript">
`);

    // <meta property="twitter:image:src" content="https://esdoc.org/manual/asset/image/logo.png">
	
	
  // result
  ev.data.content = $.html();
};

// exports.onComplete = function() {
  // fs.copySync('./site/favicon.ico', `${config.destination}/favicon.ico`);
// };