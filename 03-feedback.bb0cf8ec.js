function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return l.Date.now()};function b(e,t,n){var o,i,r,a,u,f,c=0,l=!1,s=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,r=i;return o=i=void 0,c=t,a=e.apply(r,n)}function h(e){return c=e,u=setTimeout(S,t),l?y(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=r}function S(){var e=v();if(j(e))return w(e);u=setTimeout(S,function(e){var n=t-(e-f);return s?m(n,r-(e-c)):n}(e))}function w(e){return u=void 0,b&&o?y(e):(o=i=void 0,a)}function O(){var e=v(),n=j(e);if(o=arguments,i=this,f=e,n){if(void 0===u)return h(f);if(s)return u=setTimeout(S,t),y(f)}return void 0===u&&(u=setTimeout(S,t)),a}return t=g(t)||0,p(n)&&(l=!!n.leading,r=(s="maxWait"in n)?d(g(n.maxWait)||0,t):r,b="trailing"in n?!!n.trailing:b),O.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=f=i=u=void 0},O.flush=function(){return void 0===u?a:w(v())},O}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=r.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:o,maxWait:t,trailing:i})};const y=document.querySelector("form.feedback-form"),h=document.querySelector('label [name="email"]'),j=document.querySelector('label [name="message"]');!function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(h.value=e.email,j.value=e.message)}(),y.addEventListener("input",e(t)((function(){const e={email:h.value,message:j.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500)),y.addEventListener("submit",(function(e){e.preventDefault();const t=h.value,n=j.value;if(""==t||""==n)return alert("Both fields cannot be blank."),void y.reset();y.reset(),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.bb0cf8ec.js.map
