(this["webpackJsonpslot-machine"]=this["webpackJsonpslot-machine"]||[]).push([[0],{13:function(e,t,n){e.exports={message:"Message_message__3IEB1"}},19:function(e,t,n){},2:function(e,t,n){e.exports={"slot-machine":"SlotMachine_slot-machine__2kaUk","slot-machine__header":"SlotMachine_slot-machine__header__3Ge87","slot-machine__title":"SlotMachine_slot-machine__title__UK8d4","slot-machine__wheels-wrapper":"SlotMachine_slot-machine__wheels-wrapper__2NN99","slot-machine__btns-wrapper":"SlotMachine_slot-machine__btns-wrapper__ssVqD"}},20:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(10),i=n.n(c),o=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))},r=n(7),l=n(8),u=n(11),h=n(12),b=function(){function e(){Object(u.a)(this,e),this.logs=void 0,this.logs=[]}return Object(h.a)(e,[{key:"debug",value:function(){}},{key:"silly",value:function(){var e;for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];var s=[].concat(n),c=s[0],i=c;s[0]="%c"+i,s.splice(1,0,"color: #1c6ef7; font-weight: bold;"),this.logs.push({type:"DEBUG",date:new Date(Date.now()).toISOString(),log:s}),(e=console).log.apply(e,Object(l.a)(s))}},{key:"error",value:function(){for(var e,t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];var s=[].concat(n);s[0]="%c"+s[0],s.splice(1,0,"color: red; font-weight: bold;"),this.logs.push({type:"ERROR",date:new Date(Date.now()).toISOString(),log:s}),(e=console).error.apply(e,Object(l.a)(s))}}]),e}(),d=new b,p=function(){return Math.floor(4*Math.random())},m=function(){return[p(),p(),p()]},g=function(e){for(var t=new Map,n=e.length,a=0;a<n;a+=1)t.set(e[a],a);if(t.size===n)return"";if(1===t.size)return"full";for(var s=0;s<n;s+=1){var c=e[s];if(!t.has(c)||t.get(c)!==s)return t.has(c)&&t.get(c)===s+1?"consecutive":"inconsecutive"}return""},_=function(){var e=Object(a.useState)(m()),t=Object(r.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)(""),i=Object(r.a)(c,2),o=i[0],l=i[1],u=Object(a.useState)(""),h=Object(r.a)(u,2),b=h[0],p=h[1],_=Object(a.useRef)(),j=Object(a.useRef)(),f=Object(a.useCallback)((function(){d.debug("[useSlotMachine]","stopSpinningHandler"),d.debug("\ud83d\udc69 score is:",g(n)||"no match"),s(n),l("spun"),p(g(n)),j.current&&clearInterval(j.current),_.current&&clearTimeout(_.current)}),[n]),v=Object(a.useCallback)((function(){d.debug("[useSlotMachine]","startSpinningHandler"),p(""),l("spinning"),_.current&&clearTimeout(_.current),j.current=setInterval((function(){s(m())}),50),_.current=setTimeout((function(){f()}),1e4)}),[s,f,l]),O=Object(a.useCallback)((function(){d.debug("[useSlotMachine]","autoStartHandler"),_.current=setTimeout((function(){v()}),5e3)}),[v]);return Object(a.useEffect)((function(){""===o&&O()}),[o,O]),{wheels:{indexes:n,status:o,score:b},startSpinningHandler:v,stopSpinningHandler:f}},j=n(3),f=n.n(j),v=n.p+"static/media/strawberry.f0a9bcc8.svg",O=n.p+"static/media/orange.88099d7c.svg",w=n.p+"static/media/banana.9c06e5fb.svg",x=n.p+"static/media/monkey.ac9114bc.svg",S=n(0),y=function(e){var t=e.randomIndex;return Object(S.jsxs)("div",{className:f.a.wheel,children:[Object(S.jsx)("img",{src:v,className:0===t?f.a.active:"",alt:"Strawberry"}),Object(S.jsx)("img",{src:O,className:1===t?f.a.active:"",alt:"Orange"}),Object(S.jsx)("img",{src:w,className:2===t?f.a.active:"",alt:"Banana"}),Object(S.jsx)("img",{src:x,className:3===t?f.a.active:"",alt:"Monkey"})]})},M=n(13),N=n.n(M),k=["Not quite \ud83d\ude15","Stop gambling \ud83d\ude08","Hey, you lost! \ud83d\ude43","Ouch! I felt that \ud83e\udd2d","Don't beat yourself up \ud83d\udc4a","There goes the college fund \ud83d\udcb8","I have a cat. You have a loss \ud83d\ude02","You're awesome at losing \ud83e\udd2a","Coding is hard \ud83e\udd76","Don't hate the coder \ud83d\ude07"],I={full:"You won $100 \ud83c\udf89",consecutive:"You won $20 \ud83c\udf7b",inconsecutive:"You won $10 \ud83c\udf7a"},C=function(e){var t,n=e.score;return t="undefined"!==typeof I[n]?I[n]:k[Math.floor(Math.random()*k.length)]+" ",Object(S.jsx)("p",{className:N.a.message,children:t})},D=n(6),B=n.n(D),H=function(e){var t=e.title,n=e.severity,a=e.disabled,s=e.onClick;if(!t||!s)return null;a||(a=!1);var c=[B.a.button];return n?"none"===n&&c.push(B.a["button--none"]):c.push(B.a["button--primary"]),Object(S.jsx)("button",{className:c.join(" "),type:"button",disabled:a,onClick:s,children:t})},T=n(2),Y=n.n(T),E=function(){var e=_(),t=e.wheels,n=e.startSpinningHandler,a=e.stopSpinningHandler;return Object(S.jsxs)("div",{className:Y.a["slot-machine"],children:[Object(S.jsx)("header",{className:Y.a["slot-machine__header"],children:Object(S.jsx)("h1",{className:Y.a["slot-machine__title"],children:"Slot Machine"})}),Object(S.jsx)("div",{className:Y.a["slot-machine__wheels-wrapper"],children:t.indexes&&t.indexes.length&&t.indexes.map((function(e,t){return Object(S.jsx)(y,{randomIndex:e},t)}))}),Object(S.jsxs)("div",{className:Y.a["slot-machine__btns-wrapper"],children:[Object(S.jsx)(H,{title:"Start Spinning",disabled:"spinning"===t.status,onClick:n}),Object(S.jsx)(H,{title:"Stop It",disabled:"spinning"!==t.status,severity:"none",onClick:a})]}),"spun"===t.status&&Object(S.jsx)("div",{className:Y.a["slot-machine__message-wrapper"],children:Object(S.jsx)(C,{score:t.score})})]})};n(19);i.a.render(Object(S.jsx)(s.a.StrictMode,{children:Object(S.jsx)("main",{className:"container",children:Object(S.jsx)(E,{})})}),document.getElementById("root")),o()},3:function(e,t,n){e.exports={wheel:"Wheel_wheel__1TU0J",active:"Wheel_active__32_4z"}},6:function(e,t,n){e.exports={button:"Button_button__3hu2a","button--primary":"Button_button--primary__2qaY2","button--none":"Button_button--none__2srie"}}},[[20,1,2]]]);
//# sourceMappingURL=main.fdf78c5f.chunk.js.map