(function(f,d){(function(){function a(a,c){c=c||{bubbles:!1,cancelable:!1,detail:void 0};var b=document.createEvent("CustomEvent");b.initCustomEvent(a,c.bubbles,c.cancelable,c.detail);return b}if("function"===typeof window.CustomEvent)return!1;a.prototype=window.Event.prototype;window.CustomEvent=a})();if(!d){document.head.insertAdjacentHTML("beforeend","<br><style>details{display:block}details:not(.\u25bc)>*:not(summary):not(.\u25bc\u25bc){display:none !important}details>summary,details>summary,details>.\u25bc\u25bc{display:block}details .details-marker:before{content:'\u25ba'}details.\u25bc .details-marker:before{content:'\u25bc'}</style>");
var h={get:function(){if("nodeName"in this&&"DETAILS"==this.nodeName.toUpperCase())return this.hasAttribute("open")},set:function(a){if("nodeName"in this&&"DETAILS"==this.nodeName.toUpperCase())return g(this),this.classList[a?"add":"remove"]("\u25bc"),this[a?"setAttribute":"removeAttribute"]("open","open"),a}};var e=function(a){if(13===a.keyCode||"click"===a.type)this.parentNode.open=!this.parentNode.open;this.parentNode.dispatchEvent(new CustomEvent("toggle"))};var g=function(a){if(!a._||!a._.__isShimmed){a._||
(a._={});for(var b,c,d=-1;c=a.childNodes[++d];)3===c.nodeType&&/[^\t\n\r ]/.test(c.data)?(a.insertBefore(document.createElement("x-i"),c).innerHTML=c.data,a.removeChild(c)):"SUMMARY"==c.nodeName.toUpperCase()&&(b=c);b||((b=document.createElement("x-s")).innerHTML="Details",b.className="\u25bc\u25bc");a.insertBefore(b,a.childNodes[0]);b.insertBefore(document.createElement("x-i"),b.childNodes[0]).className="details-marker";b.tabIndex=0;b.addEventListener("click",e,!1);b.addEventListener("keyup",e,!1);
a._.__isShimmed=1}};d=function(){Object.defineProperty(f.Element.prototype,"open",h);for(var a=document.getElementsByTagName("details"),b,c=-1;b=a[++c];)b.open=b.hasAttribute("open")};"complete"!=document.readyState?document.addEventListener("DOMContentLoaded",d,!1):d()}})(window,"open"in document.createElement("details"));
