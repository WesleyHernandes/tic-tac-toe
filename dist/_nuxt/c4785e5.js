(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{267:function(t,n,o){var content=o(283);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(106).default)("10068a6c",content,!0,{sourceMap:!1})},282:function(t,n,o){"use strict";o(267)},283:function(t,n,o){var e=o(105)((function(i){return i[1]}));e.push([t.i,"/*purgecss start ignore*/\n.modal[data-v-fce152fa]{\n  pointer-events:none;\n  position:fixed;\n  top:0px;\n  left:0px;\n  display:flex;\n  height:100%;\n  width:100%;\n  align-items:flex-end;\n  justify-content:center;\n  opacity:0;\n  transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration:150ms;\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)\n}\n.modal .overlay[data-v-fce152fa]{\n  position:absolute;\n  top:0px;\n  left:0px;\n  z-index:0;\n  display:flex;\n  height:100%;\n  width:100%;\n  --tw-bg-opacity:1;\n  background-color:rgba(0, 0, 0, var(--tw-bg-opacity));\n  --tw-bg-opacity:0.6\n}\n.modal .content[data-v-fce152fa]{\n  position:relative;\n  z-index:10;\n  display:flex;\n  width:100%;\n  flex-direction:column;\n  align-items:center;\n  --tw-bg-opacity:1;\n  background-color:rgba(10, 34, 57, var(--tw-bg-opacity));\n  padding-left:1rem;\n  padding-right:1rem;\n  padding-top:2.5rem;\n  padding-bottom:2.5rem\n}\n.modal .content .title[data-v-fce152fa]{\n  margin-bottom:1.25rem;\n  font-family:Quicksand, sans-serif;\n  font-size:1.875rem;\n  line-height:2.25rem;\n  font-weight:600;\n  letter-spacing:0.05em;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity))\n}\n.modal .content .actions[data-v-fce152fa]{\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  gap:1rem\n}\n.modal .content .actions .action[data-v-fce152fa]{\n  border-radius:0.375rem;\n  padding:1rem;\n  font-weight:600;\n  letter-spacing:0.025em;\n  --tw-text-opacity:1;\n  color:rgba(10, 34, 57, var(--tw-text-opacity))\n}\n.modal.active[data-v-fce152fa]{\n  pointer-events:auto;\n  opacity:1\n}\n\n/*purgecss end ignore*/",""]),e.locals={},t.exports=e},295:function(t,n,o){"use strict";o.r(n);var e={name:"ModalRestart",props:{active:{type:Boolean,default:!1}}},r=(o(282),o(43)),component=Object(r.a)(e,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"modal",class:[{active:t.active}]},[o("div",{staticClass:"overlay"}),t._v(" "),o("div",{staticClass:"content"},[o("h2",{staticClass:"title"},[t._v("REINICIAR JOGO")]),t._v(" "),o("div",{staticClass:"actions"},[o("button",{staticClass:"action bg-iconX",on:{click:function(n){return t.$emit("toggleModalReset")}}},[t._v("NÃO, CANCELAR")]),t._v(" "),o("button",{staticClass:"action bg-iconO",on:{click:function(n){return t.$store.dispatch("data/endGame")}}},[t._v("SIM, REINICIAR")])])])])}),[],!1,null,"fce152fa",null);n.default=component.exports}}]);