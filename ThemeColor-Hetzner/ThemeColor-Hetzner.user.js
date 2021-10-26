// ==UserScript==
// @name        Theme Color: Hetzner
// @description Set Theme Color for Hetzner and all related sites on Safari 15+
// @version     1.0.0
// @ updateURL   https://github.com/ZepDonald/UserScripts/raw/main/ThemeColor-Hetzner/ThemeColor-Hetzner.meta.js
// @ downloadURL https://github.com/ZepDonald/UserScripts/raw/main/ThemeColor-Hetzner/ThemeColor-Hetzner.user.js
// @match       https://www.hetzner.com/*
// @match       https://konsoleh.your-server.de/*
// @include     https://www.hetzner.com/*
// @include     https://konsoleh.your-server.de/*
// ==/UserScript==

(function() {
    var meta = document.createElement('meta');
    meta.name = "theme-color";
    meta.content = "#D50E2E";
    document.getElementsByTagName('head')[0].appendChild(meta);
})();

(function2() {
    document.querySelector("meta[name='theme-color']")
        .setAttribute("content", '#D50E2E');
})();
