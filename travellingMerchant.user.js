// ==UserScript==
// @name         Traveling Merchant
// @description  Automatically attacks the enemies during the "Traveling Merchant" event
// @version      1.0
// @match        https://*/game.php?village=*&screen=event_trump_card
// @downloadURL  https://despos337.github.io/scripts/travellingMerchant.user.js
// @updateURL    https://despos337.github.io/scripts/travellingMerchant.user.js
// ==/UserScript==
    
(()=>{"use strict";function e(){30<parseFloat($(".segment-filler")[1].style.width)?("none"!==$("#battle_container > div > a").css("display")&&$("#battle_container > div > a").trigger("click"),n()):("none"!==$("#battle_container > div > a").css("display")&&$("#battle_container > div > a").trigger("click"),i())}function n(){try{let t=$("a.button-flee.btn.btn-default");"none"!==t.css("display")?(console.log("flee button detected"),t.trigger("click"),setTimeout(()=>{console.log("clicking confirm flee"),$(".btn.evt-confirm-btn.btn-confirm-yes").trigger("click"),setTimeout(()=>{console.log("clicking battle recap button"),$(".btn.btn-default.button-continue").trigger("click"),setTimeout(()=>{console.log("new start"),e()},800)},800)},800)):setTimeout(()=>o(n),900)}catch(t){console.log(t),setTimeout(function(){window.location.reload()},800)}}function i(){try{let t=$("#battle_container > div > div.enemy-unit-zone .trump-unit").filter((t,e)=>!e.classList.contains("dead")),e=t.last();e.trigger("click"),setTimeout(function(){o(i)},900)}catch(t){console.log(t),setTimeout(function(){window.location.reload()},800)}}function o(t){try{parseInt(document.querySelector("#battle_container > div > div.turn-order-container > div > div.turn.active > div.active-turn-frame").parentElement.getAttribute("data-unit_id"))<=5?setTimeout(function(){t()},200):window.location.reload()}catch(t){console.log(t),setTimeout(function(){window.location.reload()},800)}}setTimeout(()=>e(),300)})();