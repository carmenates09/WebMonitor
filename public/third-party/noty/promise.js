/*!
 * Noty Helpers Javascript From JQuery Javascript Library
 *
 * Ported by Maksim Pecherskiy.  Original Licensing:
 *
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Mon Nov 21 21:11:03 2011 -0500
 */
(function(){var b={};function a(d){var e=b[d]={},f,g;d=d.split(/\s+/);for(f=0,g=d.length;f<g;f++){e[d[f]]=true}return e}jQuery.extend({_mark:function(e,d){if(e){d=(d||"fx")+"mark";jQuery.data(e,d,(jQuery.data(e,d,undefined,true)||0)+1,true)}},_unmark:function(h,g,e){if(h!==true){e=g;g=h;h=false}if(g){e=e||"fx";var d=e+"mark",f=h?0:((jQuery.data(g,d,undefined,true)||1)-1);if(f){jQuery.data(g,d,f,true)}else{jQuery.removeData(g,d,true);c(g,e,"mark")}}},queue:function(e,d,g){if(e){d=(d||"fx")+"queue";var f=jQuery.data(e,d,undefined,true);if(g){if(!f||jQuery.isArray(g)){f=jQuery.data(e,d,jQuery.makeArray(g),true)}else{f.push(g)}}return f||[]}},dequeue:function(g,f){f=f||"fx";var d=jQuery.queue(g,f),e=d.shift(),h;if(e==="inprogress"){e=d.shift()}if(e){if(f==="fx"){d.unshift("inprogress")}e.call(g,function(){jQuery.dequeue(g,f)})}if(!d.length){jQuery.removeData(g,f+"queue",true);c(g,f,"queue")}}});jQuery.fn.extend({queue:function(d,e){if(typeof d!=="string"){e=d;d="fx"}if(e===undefined){return jQuery.queue(this[0],d)}return this.each(function(){var f=jQuery.queue(this,d,e);if(d==="fx"&&f[0]!=="inprogress"){jQuery.dequeue(this,d)}})},dequeue:function(d){return this.each(function(){jQuery.dequeue(this,d)})},delay:function(e,d){e=jQuery.fx?jQuery.fx.speeds[e]||e:e;d=d||"fx";return this.queue(d,function(){var f=this;setTimeout(function(){jQuery.dequeue(f,d)},e)})},clearQueue:function(d){return this.queue(d||"fx",[])},promise:function(n,f){if(typeof n!=="string"){f=n;n=undefined}n=n||"fx";var d=jQuery.Deferred(),e=this,h=e.length,l=1,j=n+"defer",k=n+"queue",m=n+"mark",g;function o(){if(!(--l)){d.resolveWith(e,[e])}}while(h--){if((g=jQuery.data(e[h],j,undefined,true)||(jQuery.data(e[h],k,undefined,true)||jQuery.data(e[h],m,undefined,true))&&jQuery.data(e[h],j,jQuery._Deferred(),true))){l++;g.done(o)}}o();return d.promise()}});function c(h,g,j){var f=g+"defer",e=g+"queue",d=g+"mark",i=jQuery._data(h,f);if(i&&(j==="queue"||!jQuery._data(h,e))&&(j==="mark"||!jQuery._data(h,d))){setTimeout(function(){if(!jQuery._data(h,e)&&!jQuery._data(h,d)){jQuery.removeData(h,f,true);i.fire()}},0)}}jQuery.Callbacks=function(f){f=f?(a(f)):{};var k=[],l=[],g,h,e,i,j,n=function(o){var p,s,r,q,t;for(p=0,s=o.length;p<s;p++){r=o[p];q=jQuery.type(r);if(q==="array"){n(r)}else{if(q==="function"){if(!f.unique||!m.has(r)){k.push(r)}}}}},d=function(p,o){o=o||[];g=!f.memory||[p,o];h=true;j=e||0;e=0;i=k.length;for(;k&&j<i;j++){if(k[j].apply(p,o)===false&&f.stopOnFalse){g=true;break}}h=false;if(k){if(!f.once){if(l&&l.length){g=l.shift();m.fireWith(g[0],g[1])}}else{if(g===true){m.disable()}else{k=[]}}}},m={add:function(){if(k){var o=k.length;n(arguments);if(h){i=k.length}else{if(g&&g!==true){e=o;d(g[0],g[1])}}}return this},remove:function(){if(k){var o=arguments,q=0,r=o.length;for(;q<r;q++){for(var p=0;p<k.length;p++){if(o[q]===k[p]){if(h){if(p<=i){i--;if(p<=j){j--}}}k.splice(p--,1);if(f.unique){break}}}}}return this},has:function(p){if(k){var o=0,q=k.length;for(;o<q;o++){if(p===k[o]){return true}}}return false},empty:function(){k=[];return this},disable:function(){k=l=g=undefined;return this},disabled:function(){return !k},lock:function(){l=undefined;if(!g||g===true){m.disable()}return this},locked:function(){return !l},fireWith:function(p,o){if(l){if(h){if(!f.once){l.push([p,o])}}else{if(!(f.once&&g)){d(p,o)}}}return this},fire:function(){m.fireWith(this,arguments);return this},fired:function(){return !!g}};return m};jQuery.fn.extend({promise:function(n,f){if(typeof n!=="string"){f=n;n=undefined}n=n||"fx";var d=jQuery.Deferred(),e=this,h=e.length,l=1,j=n+"defer",k=n+"queue",m=n+"mark",g;function o(){if(!(--l)){d.resolveWith(e,[e])}}while(h--){if((g=jQuery.data(e[h],j,undefined,true)||(jQuery.data(e[h],k,undefined,true)||jQuery.data(e[h],m,undefined,true))&&jQuery.data(e[h],j,jQuery.Callbacks("once memory"),true))){l++;g.add(o)}}o();return d.promise()}})})();
