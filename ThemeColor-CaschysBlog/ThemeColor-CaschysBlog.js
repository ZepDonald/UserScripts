// ==UserScript==
// @name        Theme Color: Caschys Blog
// @description Set Theme Color for Caschys Blog on Safari 15+
// @match       https://www.youtube.com/*
// @include     https://www.youtube.com/*
// ==/UserScript==

(function() {
    document.querySelector("meta[name='theme-color']")
        .setAttribute("content", '#3b8ec2');
})();
