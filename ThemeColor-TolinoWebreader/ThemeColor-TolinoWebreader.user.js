// ==UserScript==
// @name        Theme Color: tolino Webreader
// @description Set Theme Color for tolino Webreader on Safari 15+
// @version     1.0.0
// @ updateURL   https://github.com/ZepDonald/UserScripts/raw/main/ThemeColor-TolinoWebreader/ThemeColor-TolinoWebreader.meta.js
// @ downloadURL https://github.com/ZepDonald/UserScripts/raw/main/ThemeColor-TolinoWebreader/ThemeColor-TolinoWebreader.user.js
// @match       https://webreader.mytolino.com/*
// @include     https://webreader.mytolino.com/*
// ==/UserScript==

(function() {
    var meta = document.createElement('meta');
    meta.name = "theme-color";
    meta.content = "#5c96c6";
    document.getElementsByTagName('head')[0].appendChild(meta);
})();
