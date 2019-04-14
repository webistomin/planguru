# Planguru

> Planguru was built as the concept of a simple app for scheduling and joining events. The design involve the following functionalities: creating connection with teammates, group chat, notifications about upcoming events, Gmail and Google Calendar sync for different teams and companies.

[![Build status][travis-image]][travis-url] [![dependencies Status](https://david-dm.org/webistomin/planguru/status.svg)](https://david-dm.org/webistomin/planguru) [![Dependency status][dependency-image]][dependency-url] 

## ⚙ Development setup

<table>
  <thead>
    <tr>
      <th>Command</th>
      <th>Result</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td width="30%"><code>npm install</code></td>
      <td>Install the dependencies in the local node_modules folder</td>
    </tr>
    <tr>
      <td><code>npm run serve</code></td>
      <td>Start a dev server with Hot-Module-Replacement</td>
    </tr>
     <tr>
      <td><code>npm run build</code></td>
      <td>Produces a production-ready bundle in the dist/ directory, with minification for JS/CSS/HTML and auto vendor chunk splitting for better caching. The chunk manifest is inlined into the HTML.</td>
    </tr>
    <tr>
      <td><code>test:e2e</code></td>
      <td>Run Cypress end-to-end tests</td>
    </tr>
    <tr>
      <td><code>test:unit</code></td>
      <td>Run Jest unit tests</td>
    </tr>
  </tbody>
</table>

## ⌨️ Tech Stack

<table>
  <thead>
    <tr>
      <th>Technology</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://vuejs.org/index.html">Vue.js</a></td>
      <td>Main framework for frontend development</td>
    </tr>
    <tr>
      <td><a href="https://vuex.vuejs.org/">Vuex</a></td>
      <td>Centralized State Management for Vue.js</td>
    </tr>
    <tr>
      <td><a href="http://router.vuejs.org/">Vue-router</a></td>
      <td>The official router for Vue.js</td>
    </tr>
    <tr>
      <td><a href="https://github.com/vuelidate/vuelidate">Vuelidate</a></td>
      <td>Model-based validation for Vue.js</td>
    </tr>
    <tr>
      <td><a href="https://github.com/VincentGarreau/particles.js/">particles.js</a></td>
      <td>JavaScript library for creating particles</td>
    </tr>
  </tbody>
</table>

## 🖥 Preview
<div style="text-align:center;">
    <img style="width: 100%" src="https://i.ibb.co/K9b8sxS/image.png" alt="Planguru">
</div>


## 🙏 Browser support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/yandex/yandex_48x48.png" alt="Yandex" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Yandex |
| --------- | --------- | --------- | --------- |--------- | --------- |
| IE11, Edge|last 2 versions|last 2 versions| 9+ |last 2 versions| last 2 versions |

[travis-image]: https://travis-ci.org/webistomin/planguru.svg?branch=master
[travis-url]: https://travis-ci.org/webistomin/planguru
[dependency-image]: https://david-dm.org/webistomin/planguru/dev-status.svg
[dependency-url]: https://david-dm.org/webistomin/planguru
