!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(t){return e[t]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=51)}({51:function(e,t,n){e.exports=n(52)},52:function(){"use strict";var e,t;e=jQuery,(t=Drupal).behaviors.ginSettings={attach:function(n){e('input[name="enable_darkmode"]',n).change((function(){var n=e(this).is(":checked"),o=e('select[name="preset_accent_color"]').val(),r=e('select[name="preset_focus_color"]').val();t.behaviors.ginAccent.darkmode(n),t.behaviors.ginAccent.setAccentColor(o),t.behaviors.ginAccent.setFocusColor(r)})),e('select[name="preset_accent_color"]',n).change((function(){var n=e(this).val();t.behaviors.ginAccent.setAccentColor(n)})),e('input[name="accent_color"]',n).change((function(){var n=e(this).val();t.behaviors.ginAccent.setCustomAccentColor("custom",n)})),e('select[name="preset_focus_color"]',n).change((function(){var n=e(this).val();t.behaviors.ginAccent.setFocusColor(n)})),e('input[name="focus_color"]',n).change((function(){var n=e('select[name="preset_focus_color"]').val(),o=e(this).val();t.behaviors.ginAccent.setFocusColor(n,o)}))}}}});