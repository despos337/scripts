// ==UserScript==
// @name         Village info - sum supports
// @description  Shows sum of incomings support to village. Works on village info page (when you open
//               village info from map). Press the button in the left menu to start summing.
// @version      1.0
// @include      https://*/game.php*screen=info_village*
// @downloadURL  https://despos337.github.io/scripts/villageInfoSumSupports.user.js
// @updateURL    https://despos337.github.io/scripts/villageInfoSumSupports.user.js
// ==/UserScript==
    
(()=>{"use strict";class e{constructor(t){this.spears=t.spears,this.swords=t.swords,this.heavy=t.heavy}add(t){this.spears+=t.spears,this.swords+=t.swords,this.heavy+=t.heavy}print(){return`${(this.spears/1e3).toFixed(1)} ${(this.swords/1e3).toFixed(1)} ${(this.heavy/1e3).toFixed(1)}`}}let t,i;i=0<$("#commands_incomings").length?(t="#commands_incomings",".quickedit"):(t="#commands_outgoings",".quickedit-out"),$("#content_value > table > tbody > tr:first-child > td:first-child > table:nth-child(2) > tbody").append(`
        <tr id="start-summing-button-row">
            <td>
                <input id="start-summing-button" class="btn" value="Start summing supports">
            </td>
        </tr>
    `),$("#start-summing-button").on("click",function(){$(`${t} table tbody tr:first-child th:first-child`).width("33%"),$(`${t} table tbody tr:first-child`).append("<th>Supports sum</th>");const n=$(`${t} .command-row`),o=n.length;let r=Array();setTimeout(()=>{for(let t=0;t<o;t++){var s;"support"===$(n[t]).find("td:first-child .command_hover_details").attr("data-command-type")&&(s=parseInt($(n[t]).find(`td:first-child ${i}`).attr("data-id")),r.push({commandId:s,supportUnits:new e({spears:0,swords:0,heavy:0})}),$(n[t]).append(`<td id="support-cumsum-${s}">Necum ${t}</td>`))}!function(o,i,r,e){let a=0,d=0;const c=500;!function s(){var t,n;a!=o.length?(n=(t=Date.now())-d)<c?(n=c-n,setTimeout(s,n)):(d=t,TribalWars.get("info_command",{ajax:"details",id:o[a]},function(t){try{i(a,t),++a,s()}catch(t){e(t)}})):r()}()}(r.map(t=>t.commandId),function(s,t){var n,o,i=new e({spears:parseInt(t.units.spear.count),swords:parseInt(t.units.sword.count),heavy:parseInt(t.units.heavy.count)});for(let t=s;t<r.length;++t)r[t].supportUnits.add(i),n=r[t].commandId,o=r[t].supportUnits,$(`#support-cumsum-${n}`).text(o.print()),console.log(`visualizing command ${n} with ${o.print()}`)},()=>{console.log("summing supports - all done"),$("#start-summing-button-row").remove()},t=>{console.log(`Received error ${t}`)})},200)})})();