!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";var r=0,o=null,a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;r=e,o=setInterval(u,1e3)},u=function(){r-=1e3,self.postMessage({action:"TICK",time:r}),r<=0&&(c(),self.postMessage({action:"COMPLETE"}))},c=function(){clearInterval(o)};self.addEventListener("message",function(e){switch(e.data.action){case"START":a(e.data.time);break;case"STOP":c();break;default:return}})}]);