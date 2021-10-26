// ==UserScript==
// @name        Theme Color: Startpage.com
// @description Set Theme Color for Startpage.com on Safari 15+
// @version     1.0.0
// @ updateURL   https://github.com/ZepDonald/UserScripts/raw/main/ThemeColor-StartpageCom/ThemeColor-StartpageCom.meta.js
// @ downloadURL https://github.com/ZepDonald/UserScripts/raw/main/ThemeColor-StartpageCom/ThemeColor-StartpageCom.user.js
// @match       https://www.startpage.com/*
// @include     https://www.startpage.com/*
// ==/UserScript==

(function() {
    var meta = document.createElement('meta');
    meta.name = "theme-color";
    meta.content = "#6572FF";
    document.getElementsByTagName('head')[0].appendChild(meta);
})();
