// ==UserScript==
// @name        Tribe overview screen enhancer
// @description Replaces the select dropdown with a full list.
// @version     1.1
// @match       https://*/game.php?*screen=ally*mode=members_defense*
// @match       https://*/game.php?*screen=ally*mode=members_troops*
// @match       https://*/game.php?*screen=ally*mode=members_buildings*
// @downloadURL https://despos337.github.io/scripts/tribeOverviewScreenEnhancer.user.js
// @updateURL   https://despos337.github.io/scripts/tribeOverviewScreenEnhancer.user.js
// ==/UserScript==
    
(()=>{var t=$("#ally_content > div > form > select > option").length-1;$("#ally_content > div > form > select")[0].style.height="auto",$("#ally_content > div > form > select")[0].style.overflow="auto",$("#ally_content > div > form > select")[0].setAttribute("size",t)})();
