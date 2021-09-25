// ==UserScript==
// @name        Theme Color: Caschys Blog
// @description Set Theme Color for Caschys Blog on Safari 15+
// @match       https://stadt-bremerhaven.de/*
// @include     https://stadt-bremerhaven.de/*
// ==/UserScript==

(function() {
    document.querySelector("meta[name='theme-color']")
        .setAttribute("content", '#3b8ec2');
})();
