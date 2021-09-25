// ==UserScript==
// @name        Theme Color: YouTube
// @description Set Theme Color for YouTube on Safari 15+
// @match       https://www.youtube.com/*
// @include     https://www.youtube.com/*
// ==/UserScript==

(function() {
    document.querySelector("meta[name='theme-color']")
        .setAttribute("content", '#FFFFFF');
    //Safari doesn't display bright red as theme color
})();
