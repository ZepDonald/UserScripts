// ==UserScript==
// @name        Theme Color: YouTube
// @description Set Theme Color for YouTube on Safari 15+
// @version     1.0.0
// @updateURL   https://github.com/ZepDonald/UserScripts/raw/main/ThemeColor-YouTube/ThemeColor-YouTube.meta.js
// @downloadURL https://github.com/ZepDonald/UserScripts/raw/main/ThemeColor-YouTube/ThemeColor-YouTube.user.js
// @match       https://www.youtube.com/*
// @include     https://www.youtube.com/*
// ==/UserScript==

(function() {
    document.querySelector("meta[name='theme-color']")
        .setAttribute("content", '#FFFFFF');
    //Safari doesn't display bright red as theme color
})();
