(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(e,a,t){e.exports={profile:"Profile_profile__2W954",description:"Profile_description__3XmDx",avatar:"Profile_avatar__10Ccd",name:"Profile_name__2QIWQ",tag:"Profile_tag__OLJGV",location:"Profile_location__3A792",stats:"Profile_stats__ZulK0",statsItem:"Profile_statsItem__3tAqg",label:"Profile_label__25R6R",quantity:"Profile_quantity__c2gwe"}},function(e,a,t){e.exports={friendList:"FriendList_friendList__2V_LK",item:"FriendList_item__2vXtP",status:"FriendList_status__JsIS5",isOnline:"FriendList_isOnline__-cBFp FriendList_status__JsIS5",avatar:"FriendList_avatar__1nlwn"}},function(e,a,t){e.exports={statistics:"Statistics_statistics__21jsf",title:"Statistics_title__QhpSW",statList:"Statistics_statList__oROQY",item:"Statistics_item__1IIxC",label:"Statistics_label__jgTo6",percentage:"Statistics_percentage__2xOjt"}},function(e,a,t){e.exports={transactionHistory:"TransactionHistory_transactionHistory__ho1Xi",firstRow:"TransactionHistory_firstRow__2g3uq",row:"TransactionHistory_row__3JND3"}},function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","stats":{"followers":5603,"views":4827,"likes":1308}}')},,,function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(e){e.exports=JSON.parse('[{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/shojberg/128.jpg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/j04ntoh/128.jpg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/mugukamil/128.jpg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/sweetdelisa/128.jpg","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},function(e,a,t){e.exports=t(17)},,,,,function(e,a,t){e.exports={container:"App_container__2mqnF"}},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(7),i=t.n(c),s=t(5),l=t(8),o=t(9),m=t(10),u=t(1),d=t.n(u);var p=function(e){var a=e.stats,t=e.statsKey;return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:d.a.label},t),r.a.createElement("span",{className:d.a.quantity},a[t]))};var f=function(e){var a=e.avatar,t=e.name,n=e.tag,c=e.location,i=e.stats,s=Object.keys(i);return r.a.createElement("div",{className:d.a.profile},r.a.createElement("div",{className:d.a.description},r.a.createElement("img",{className:d.a.avatar,src:a,alt:t,width:"100",height:"100"}),r.a.createElement("p",{className:d.a.name},t),r.a.createElement("p",{className:d.a.tag},"@",n),r.a.createElement("p",{className:d.a.location},c)),r.a.createElement("ul",{className:d.a.stats},s.map((function(e){return r.a.createElement("li",{key:i[e],className:d.a.statsItem},r.a.createElement(p,{stats:i,statsKey:e}))}))))},_=t(3),b=t.n(_);var y=function(e){var a=e.title,t=e.stats;return r.a.createElement("div",{className:b.a.statistics},a&&r.a.createElement("h2",{className:b.a.title},a),r.a.createElement("ul",{className:b.a.statList},t.map((function(e){return r.a.createElement("li",{key:e.id,className:b.a.item},r.a.createElement("span",{className:b.a.label},e.label),r.a.createElement("span",{className:b.a.percentage},e.percentage,"%"))}))))},v=t(2),w=t.n(v);var E=function(e){var a=e.avatar,t=e.name,n=e.isOnline?w.a.isOnline:w.a.status;return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:n}),r.a.createElement("img",{className:w.a.avatar,src:a,alt:t,width:"48"}),r.a.createElement("p",{className:w.a.name},t))};var g=function(e){var a=e.friends;return r.a.createElement("ul",{className:w.a.friendList},a.map((function(e,a){var t=e.id,n=e.name,c=e.avatar,i=e.isOnline;return r.a.createElement("li",{key:t,className:w.a.item},r.a.createElement(E,{name:n,avatar:c,isOnline:i}))})))},N=t(4),h=t.n(N);var O=function(e){var a=e.items;return r.a.createElement("table",{className:h.a.transactionHistory},r.a.createElement("thead",null,r.a.createElement("tr",{className:h.a.firstRow},r.a.createElement("th",null,"Type"),r.a.createElement("th",null,"Amount"),r.a.createElement("th",null,"Currency"))),r.a.createElement("tbody",null,a.map((function(e){var a=e.id,t=e.type,n=e.amount,c=e.currency;return r.a.createElement("tr",{key:a,className:h.a.row},r.a.createElement("td",{className:h.a.row},t),r.a.createElement("td",{className:h.a.row},n),r.a.createElement("td",{className:h.a.row},c))}))))};t(16);function L(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{name:s.name,tag:s.tag,location:s.location,avatar:s.avatar,stats:s.stats}),r.a.createElement(y,{title:"UPLOAD STATS",stats:l}),r.a.createElement(g,{friends:o}),r.a.createElement(O,{items:m}))}i.a.render(r.a.createElement(L,null),document.querySelector("#root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.9ad2725f.chunk.js.map