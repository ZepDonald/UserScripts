// ==UserScript==
// @name        Theme Color: GitHub
// @description Set Theme Color for Github on Safari 15+
// @match       https://github.com/*
// @include     https://github.com/*
// ==/UserScript==

(function() {
    document.querySelector("meta[name='theme-color']")
        .setAttribute("content", '#24292F');
})();
