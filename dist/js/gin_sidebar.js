!function(e){function t(a){if(r[a])return r[a].exports;var n=r[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var r={};t.m=e,t.c=r,t.d=function(e,r,a){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)t.d(a,n,function(t){return e[t]}.bind(null,n));return a},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="../",t(t.s=72)}({72:function(e,t,r){r(73),e.exports=r(74)},73:function(){"use strict";var e;e=jQuery,Drupal.behaviors.ginSidebarToggle={attach:function(t){"true"===localStorage.getItem("GinMetaOpen")?(e("body").attr("data-meta-sidebar","open"),e(".meta-sidebar__trigger").addClass("is-active")):(e("body").attr("data-meta-sidebar","closed"),e(".meta-sidebar__trigger").removeClass("is-active")),e(".meta-sidebar__trigger",t).once("metaSidebarToggle").on("click",(function(t){t.preventDefault(),e(this).toggleClass("is-active"),e(".gin-meta-inline-styles").remove(),e(this).hasClass("is-active")?(e("body").attr("data-meta-sidebar","open"),localStorage.setItem("GinMetaOpen","true")):(e("body").attr("data-meta-sidebar","closed"),localStorage.setItem("GinMetaOpen","false"))}))}}},74:function(){}});