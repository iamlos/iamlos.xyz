/*!
 * VERSION: 1.17.0
 * DATE: 2015-05-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(t,e){var r,i,s,n,a=function(){t.call(this,"css"),this._overwriteProps.length=0,this.setRatio=a.prototype.setRatio},o=_gsScope._gsDefine.globals,l={},f=a.prototype=new t("css");f.constructor=a,a.version="1.17.0",a.API=2,a.defaultTransformPerspective=0,a.defaultSkewType="compensated",a.defaultSmoothOrigin=!0,f="px",a.suffixMap={top:f,right:f,bottom:f,left:f,width:f,height:f,fontSize:f,padding:f,margin:f,perspective:f,lineHeight:""};var p,c,h,u,x,d,g=/(?:\d|\-\d|\.\d|\-\.\d)+/g,y=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,m=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,_=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,v=/(?:\d|\-|\+|=|#|\.)*/g,b=/opacity *= *([^)]*)/i,O=/opacity:([^;]*)/i,w=/alpha\(opacity *=.+?\)/i,P=/^(rgb|hsl)/,T=/([A-Z])/g,M=/-([a-z])/gi,X=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,k=function(t,e){return e.toUpperCase()},S=/(?:Left|Right|Width)/i,R=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,A=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,F=/,(?=[^\)]*(?:\(|$))/gi,Y=Math.PI/180,C=180/Math.PI,z={},N=document,V=function(t){return N.createElementNS?N.createElementNS("http://www.w3.org/1999/xhtml",t):N.createElement(t)},j=V("div"),B=V("img"),L=a._internals={_specialProps:l},D=navigator.userAgent,I=function(){var t=D.indexOf("Android"),e=V("a");return h=-1!==D.indexOf("Safari")&&-1===D.indexOf("Chrome")&&(-1===t||Number(D.substr(t+8,1))>3),x=h&&6>Number(D.substr(D.indexOf("Version/")+8,1)),u=-1!==D.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(D)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(D))&&(d=parseFloat(RegExp.$1)),e?(e.style.cssText="top:1px;opacity:.55;",/^0.55/.test(e.style.opacity)):!1}(),W=function(t){return b.test("string"==typeof t?t:(t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?parseFloat(RegExp.$1)/100:1},Z=function(t){window.console&&console.log(t)},E="",$="",q=function(t,e){e=e||j;var r,i,s=e.style;if(void 0!==s[t])return t;for(t=t.charAt(0).toUpperCase()+t.substr(1),r=["O","Moz","ms","Ms","Webkit"],i=5;--i>-1&&void 0===s[r[i]+t];);return i>=0?($=3===i?"ms":r[i],E="-"+$.toLowerCase()+"-",$+t):null},H=N.defaultView?N.defaultView.getComputedStyle:function(){},G=a.getStyle=function(t,e,r,i,s){var n;return I||"opacity"!==e?(!i&&t.style[e]?n=t.style[e]:(r=r||H(t))?n=r[e]||r.getPropertyValue(e)||r.getPropertyValue(e.replace(T,"-$1").toLowerCase()):t.currentStyle&&(n=t.currentStyle[e]),null==s||n&&"none"!==n&&"auto"!==n&&"auto auto"!==n?n:s):W(t)},U=L.convertToPixels=function(t,r,i,s,n){if("px"===s||!s)return i;if("auto"===s||!i)return 0;var o,l,f,p=S.test(r),c=t,h=j.style,u=0>i;if(u&&(i=-i),"%"===s&&-1!==r.indexOf("border"))o=i/100*(p?t.clientWidth:t.clientHeight);else{if(h.cssText="border:0 solid red;position:"+G(t,"position")+";line-height:0;","%"!==s&&c.appendChild)h[p?"borderLeftWidth":"borderTopWidth"]=i+s;else{if(c=t.parentNode||N.body,l=c._gsCache,f=e.ticker.frame,l&&p&&l.time===f)return l.width*i/100;h[p?"width":"height"]=i+s}c.appendChild(j),o=parseFloat(j[p?"offsetWidth":"offsetHeight"]),c.removeChild(j),p&&"%"===s&&a.cacheWidths!==!1&&(l=c._gsCache=c._gsCache||{},l.time=f,l.width=100*(o/i)),0!==o||n||(o=U(t,r,i,s,!0))}return u?-o:o},Q=L.calculateOffset=function(t,e,r){if("absolute"!==G(t,"position",r))return 0;var i="left"===e?"Left":"Top",s=G(t,"margin"+i,r);return t["offset"+i]-(U(t,e,parseFloat(s),s.replace(v,""))||0)},J=function(t,e){var r,i,s,n={};if(e=e||H(t,null))if(r=e.length)for(;--r>-1;)s=e[r],(-1===s.indexOf("-transform")||Pe===s)&&(n[s.replace(M,k)]=e.getPropertyValue(s));else for(r in e)(-1===r.indexOf("Transform")||we===r)&&(n[r]=e[r]);else if(e=t.currentStyle||t.style)for(r in e)"string"==typeof r&&void 0===n[r]&&(n[r.replace(M,k)]=e[r]);return I||(n.opacity=W(t)),i=Ne(t,e,!1),n.rotation=i.rotation,n.skewX=i.skewX,n.scaleX=i.scaleX,n.scaleY=i.scaleY,n.x=i.x,n.y=i.y,Me&&(n.z=i.z,n.rotationX=i.rotationX,n.rotationY=i.rotationY,n.scaleZ=i.scaleZ),n.filters&&delete n.filters,n},K=function(t,e,r,i,s){var n,a,o,l={},f=t.style;for(a in r)"cssText"!==a&&"length"!==a&&isNaN(a)&&(e[a]!==(n=r[a])||s&&s[a])&&-1===a.indexOf("Origin")&&("number"==typeof n||"string"==typeof n)&&(l[a]="auto"!==n||"left"!==a&&"top"!==a?""!==n&&"auto"!==n&&"none"!==n||"string"!=typeof e[a]||""===e[a].replace(_,"")?n:0:Q(t,a),void 0!==f[a]&&(o=new ue(f,a,f[a],o)));if(i)for(a in i)"className"!==a&&(l[a]=i[a]);return{difs:l,firstMPT:o}},te={width:["Left","Right"],height:["Top","Bottom"]},ee=["marginLeft","marginRight","marginTop","marginBottom"],re=function(t,e,r){var i=parseFloat("width"===e?t.offsetWidth:t.offsetHeight),s=te[e],n=s.length;for(r=r||H(t,null);--n>-1;)i-=parseFloat(G(t,"padding"+s[n],r,!0))||0,i-=parseFloat(G(t,"border"+s[n]+"Width",r,!0))||0;return i},ie=function(t,e){(null==t||""===t||"auto"===t||"auto auto"===t)&&(t="0 0");var r=t.split(" "),i=-1!==t.indexOf("left")?"0%":-1!==t.indexOf("right")?"100%":r[0],s=-1!==t.indexOf("top")?"0%":-1!==t.indexOf("bottom")?"100%":r[1];return null==s?s="center"===i?"50%":"0":"center"===s&&(s="50%"),("center"===i||isNaN(parseFloat(i))&&-1===(i+"").indexOf("="))&&(i="50%"),t=i+" "+s+(r.length>2?" "+r[2]:""),e&&(e.oxp=-1!==i.indexOf("%"),e.oyp=-1!==s.indexOf("%"),e.oxr="="===i.charAt(1),e.oyr="="===s.charAt(1),e.ox=parseFloat(i.replace(_,"")),e.oy=parseFloat(s.replace(_,"")),e.v=t),e||t},se=function(t,e){return"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2)):parseFloat(t)-parseFloat(e)},ne=function(t,e){return null==t?e:"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2))+e:parseFloat(t)},ae=function(t,e,r,i){var s,n,a,o,l,f=1e-6;return null==t?o=e:"number"==typeof t?o=t:(s=360,n=t.split("_"),l="="===t.charAt(1),a=(l?parseInt(t.charAt(0)+"1",10)*parseFloat(n[0].substr(2)):parseFloat(n[0]))*(-1===t.indexOf("rad")?1:C)-(l?0:e),n.length&&(i&&(i[r]=e+a),-1!==t.indexOf("short")&&(a%=s,a!==a%(s/2)&&(a=0>a?a+s:a-s)),-1!==t.indexOf("_cw")&&0>a?a=(a+9999999999*s)%s-(0|a/s)*s:-1!==t.indexOf("ccw")&&a>0&&(a=(a-9999999999*s)%s-(0|a/s)*s)),o=e+a),f>o&&o>-f&&(o=0),o},oe={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},le=function(t,e,r){return t=0>t?t+1:t>1?t-1:t,0|255*(1>6*t?e+6*(r-e)*t:.5>t?r:2>3*t?e+6*(r-e)*(2/3-t):e)+.5},fe=a.parseColor=function(t){var e,r,i,s,n,a;return t&&""!==t?"number"==typeof t?[t>>16,255&t>>8,255&t]:(","===t.charAt(t.length-1)&&(t=t.substr(0,t.length-1)),oe[t]?oe[t]:"#"===t.charAt(0)?(4===t.length&&(e=t.charAt(1),r=t.charAt(2),i=t.charAt(3),t="#"+e+e+r+r+i+i),t=parseInt(t.substr(1),16),[t>>16,255&t>>8,255&t]):"hsl"===t.substr(0,3)?(t=t.match(g),s=Number(t[0])%360/360,n=Number(t[1])/100,a=Number(t[2])/100,r=.5>=a?a*(n+1):a+n-a*n,e=2*a-r,t.length>3&&(t[3]=Number(t[3])),t[0]=le(s+1/3,e,r),t[1]=le(s,e,r),t[2]=le(s-1/3,e,r),t):(t=t.match(g)||oe.transparent,t[0]=Number(t[0]),t[1]=Number(t[1]),t[2]=Number(t[2]),t.length>3&&(t[3]=Number(t[3])),t)):oe.black},pe="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";for(f in oe)pe+="|"+f+"\\b";pe=RegExp(pe+")","gi");var ce=function(t,e,r,i){if(null==t)return function(t){return t};var s,n=e?(t.match(pe)||[""])[0]:"",a=t.split(n).join("").match(m)||[],o=t.substr(0,t.indexOf(a[0])),l=")"===t.charAt(t.length-1)?")":"",f=-1!==t.indexOf(" ")?" ":",",p=a.length,c=p>0?a[0].replace(g,""):"";return p?s=e?function(t){var e,h,u,x;if("number"==typeof t)t+=c;else if(i&&F.test(t)){for(x=t.replace(F,"|").split("|"),u=0;x.length>u;u++)x[u]=s(x[u]);return x.join(",")}if(e=(t.match(pe)||[n])[0],h=t.split(e).join("").match(m)||[],u=h.length,p>u--)for(;p>++u;)h[u]=r?h[0|(u-1)/2]:a[u];return o+h.join(f)+f+e+l+(-1!==t.indexOf("inset")?" inset":"")}:function(t){var e,n,h;if("number"==typeof t)t+=c;else if(i&&F.test(t)){for(n=t.replace(F,"|").split("|"),h=0;n.length>h;h++)n[h]=s(n[h]);return n.join(",")}if(e=t.match(m)||[],h=e.length,p>h--)for(;p>++h;)e[h]=r?e[0|(h-1)/2]:a[h];return o+e.join(f)+l}:function(t){return t}},he=function(t){return t=t.split(","),function(e,r,i,s,n,a,o){var l,f=(r+"").split(" ");for(o={},l=0;4>l;l++)o[t[l]]=f[l]=f[l]||f[(l-1)/2>>0];return s.parse(e,o,n,a)}},ue=(L._setPluginRatio=function(t){this.plugin.setRatio(t);for(var e,r,i,s,n=this.data,a=n.proxy,o=n.firstMPT,l=1e-6;o;)e=a[o.v],o.r?e=Math.round(e):l>e&&e>-l&&(e=0),o.t[o.p]=e,o=o._next;if(n.autoRotate&&(n.autoRotate.rotation=a.rotation),1===t)for(o=n.firstMPT;o;){if(r=o.t,r.type){if(1===r.type){for(s=r.xs0+r.s+r.xs1,i=1;r.l>i;i++)s+=r["xn"+i]+r["xs"+(i+1)];r.e=s}}else r.e=r.s+r.xs0;o=o._next}},function(t,e,r,i,s){this.t=t,this.p=e,this.v=r,this.r=s,i&&(i._prev=this,this._next=i)}),xe=(L._parseToProxy=function(t,e,r,i,s,n){var a,o,l,f,p,c=i,h={},u={},x=r._transform,d=z;for(r._transform=null,z=e,i=p=r.parse(t,e,i,s),z=d,n&&(r._transform=x,c&&(c._prev=null,c._prev&&(c._prev._next=null)));i&&i!==c;){if(1>=i.type&&(o=i.p,u[o]=i.s+i.c,h[o]=i.s,n||(f=new ue(i,"s",o,f,i.r),i.c=0),1===i.type))for(a=i.l;--a>0;)l="xn"+a,o=i.p+"_"+l,u[o]=i.data[l],h[o]=i[l],n||(f=new ue(i,l,o,f,i.rxp[l]));i=i._next}return{proxy:h,end:u,firstMPT:f,pt:p}},L.CSSPropTween=function(t,e,i,s,a,o,l,f,p,c,h){this.t=t,this.p=e,this.s=i,this.c=s,this.n=l||e,t instanceof xe||n.push(this.n),this.r=f,this.type=o||0,p&&(this.pr=p,r=!0),this.b=void 0===c?i:c,this.e=void 0===h?i+s:h,a&&(this._next=a,a._prev=this)}),de=function(t,e,r,i,s,n){var a=new xe(t,e,r,i-r,s,-1,n);return a.b=r,a.e=a.xs0=i,a},ge=a.parseComplex=function(t,e,r,i,s,n,a,o,l,f){r=r||n||"",a=new xe(t,e,0,0,a,f?2:1,null,!1,o,r,i),i+="";var c,h,u,x,d,m,_,v,b,O,w,T,M=r.split(", ").join(",").split(" "),X=i.split(", ").join(",").split(" "),k=M.length,S=p!==!1;for((-1!==i.indexOf(",")||-1!==r.indexOf(","))&&(M=M.join(" ").replace(F,", ").split(" "),X=X.join(" ").replace(F,", ").split(" "),k=M.length),k!==X.length&&(M=(n||"").split(" "),k=M.length),a.plugin=l,a.setRatio=f,c=0;k>c;c++)if(x=M[c],d=X[c],v=parseFloat(x),v||0===v)a.appendXtra("",v,se(d,v),d.replace(y,""),S&&-1!==d.indexOf("px"),!0);else if(s&&("#"===x.charAt(0)||oe[x]||P.test(x)))T=","===d.charAt(d.length-1)?"),":")",x=fe(x),d=fe(d),b=x.length+d.length>6,b&&!I&&0===d[3]?(a["xs"+a.l]+=a.l?" transparent":"transparent",a.e=a.e.split(X[c]).join("transparent")):(I||(b=!1),a.appendXtra(b?"rgba(":"rgb(",x[0],d[0]-x[0],",",!0,!0).appendXtra("",x[1],d[1]-x[1],",",!0).appendXtra("",x[2],d[2]-x[2],b?",":T,!0),b&&(x=4>x.length?1:x[3],a.appendXtra("",x,(4>d.length?1:d[3])-x,T,!1)));else if(m=x.match(g)){if(_=d.match(y),!_||_.length!==m.length)return a;for(u=0,h=0;m.length>h;h++)w=m[h],O=x.indexOf(w,u),a.appendXtra(x.substr(u,O-u),Number(w),se(_[h],w),"",S&&"px"===x.substr(O+w.length,2),0===h),u=O+w.length;a["xs"+a.l]+=x.substr(u)}else a["xs"+a.l]+=a.l?" "+x:x;if(-1!==i.indexOf("=")&&a.data){for(T=a.xs0+a.data.s,c=1;a.l>c;c++)T+=a["xs"+c]+a.data["xn"+c];a.e=T+a["xs"+c]}return a.l||(a.type=-1,a.xs0=a.e),a.xfirst||a},ye=9;for(f=xe.prototype,f.l=f.pr=0;--ye>0;)f["xn"+ye]=0,f["xs"+ye]="";f.xs0="",f._next=f._prev=f.xfirst=f.data=f.plugin=f.setRatio=f.rxp=null,f.appendXtra=function(t,e,r,i,s,n){var a=this,o=a.l;return a["xs"+o]+=n&&o?" "+t:t||"",r||0===o||a.plugin?(a.l++,a.type=a.setRatio?2:1,a["xs"+a.l]=i||"",o>0?(a.data["xn"+o]=e+r,a.rxp["xn"+o]=s,a["xn"+o]=e,a.plugin||(a.xfirst=new xe(a,"xn"+o,e,r,a.xfirst||a,0,a.n,s,a.pr),a.xfirst.xs0=0),a):(a.data={s:e+r},a.rxp={},a.s=e,a.c=r,a.r=s,a)):(a["xs"+o]+=e+(i||""),a)};var me=function(t,e){e=e||{},this.p=e.prefix?q(t)||t:t,l[t]=l[this.p]=this,this.format=e.formatter||ce(e.defaultValue,e.color,e.collapsible,e.multi),e.parser&&(this.parse=e.parser),this.clrs=e.color,this.multi=e.multi,this.keyword=e.keyword,this.dflt=e.defaultValue,this.pr=e.priority||0},_e=L._registerComplexSpecialProp=function(t,e,r){"object"!=typeof e&&(e={parser:r});var i,s,n=t.split(","),a=e.defaultValue;for(r=r||[a],i=0;n.length>i;i++)e.prefix=0===i&&e.prefix,e.defaultValue=r[i]||a,s=new me(n[i],e)},ve=function(t){if(!l[t]){var e=t.charAt(0).toUpperCase()+t.substr(1)+"Plugin";_e(t,{parser:function(t,r,i,s,n,a,f){var p=o.com.greensock.plugins[e];return p?(p._cssRegister(),l[i].parse(t,r,i,s,n,a,f)):(Z("Error: "+e+" js file not loaded."),n)}})}};f=me.prototype,f.parseComplex=function(t,e,r,i,s,n){var a,o,l,f,p,c,h=this.keyword;if(this.multi&&(F.test(r)||F.test(e)?(o=e.replace(F,"|").split("|"),l=r.replace(F,"|").split("|")):h&&(o=[e],l=[r])),l){for(f=l.length>o.length?l.length:o.length,a=0;f>a;a++)e=o[a]=o[a]||this.dflt,r=l[a]=l[a]||this.dflt,h&&(p=e.indexOf(h),c=r.indexOf(h),p!==c&&(-1===c?o[a]=o[a].split(h).join(""):-1===p&&(o[a]+=" "+h)));e=o.join(", "),r=l.join(", ")}return ge(t,this.p,e,r,this.clrs,this.dflt,i,this.pr,s,n)},f.parse=function(t,e,r,i,n,a){return this.parseComplex(t.style,this.format(G(t,this.p,s,!1,this.dflt)),this.format(e),n,a)},a.registerSpecialProp=function(t,e,r){_e(t,{parser:function(t,i,s,n,a,o){var l=new xe(t,s,0,0,a,2,s,!1,r);return l.plugin=o,l.setRatio=e(t,i,n._tween,s),l},priority:r})},a.useSVGTransformAttr=h||u;var be,Oe="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),we=q("transform"),Pe=E+"transform",Te=q("transformOrigin"),Me=null!==q("perspective"),Xe=L.Transform=function(){this.perspective=parseFloat(a.defaultTransformPerspective)||0,this.force3D=a.defaultForce3D!==!1&&Me?a.defaultForce3D||"auto":!1},ke=window.SVGElement,Se=function(t,e,r){var i,s=N.createElementNS("http://www.w3.org/2000/svg",t),n=/([a-z])([A-Z])/g;for(i in r)s.setAttributeNS(null,i.replace(n,"$1-$2").toLowerCase(),r[i]);return e.appendChild(s),s},Re=N.documentElement,Ae=function(){var t,e,r,i=d||/Android/i.test(D)&&!window.chrome;return N.createElementNS&&!i&&(t=Se("svg",Re),e=Se("rect",t,{width:100,height:50,x:100}),r=e.getBoundingClientRect().width,e.style[Te]="50% 50%",e.style[we]="scaleX(0.5)",i=r===e.getBoundingClientRect().width&&!(u&&Me),Re.removeChild(t)),i}(),Fe=function(t,e,r,i,s){var n,o,l,f,p,c,h,u,x,d,g,y,m,_,v=t._gsTransform,b=ze(t,!0);v&&(m=v.xOrigin,_=v.yOrigin),(!i||2>(n=i.split(" ")).length)&&(h=t.getBBox(),e=ie(e).split(" "),n=[(-1!==e[0].indexOf("%")?parseFloat(e[0])/100*h.width:parseFloat(e[0]))+h.x,(-1!==e[1].indexOf("%")?parseFloat(e[1])/100*h.height:parseFloat(e[1]))+h.y]),r.xOrigin=f=parseFloat(n[0]),r.yOrigin=p=parseFloat(n[1]),i&&b!==Ce&&(c=b[0],h=b[1],u=b[2],x=b[3],d=b[4],g=b[5],y=c*x-h*u,o=f*(x/y)+p*(-u/y)+(u*g-x*d)/y,l=f*(-h/y)+p*(c/y)-(c*g-h*d)/y,f=r.xOrigin=n[0]=o,p=r.yOrigin=n[1]=l),v&&(s||s!==!1&&a.defaultSmoothOrigin!==!1?(o=f-m,l=p-_,v.xOffset+=o*b[0]+l*b[2]-o,v.yOffset+=o*b[1]+l*b[3]-l):v.xOffset=v.yOffset=0),t.setAttribute("data-svg-origin",n.join(" "))},Ye=function(t){return!!(ke&&"function"==typeof t.getBBox&&t.getCTM&&(!t.parentNode||t.parentNode.getBBox&&t.parentNode.getCTM))},Ce=[1,0,0,1,0,0],ze=function(t,e){var r,i,s,n,a,o=t._gsTransform||new Xe,l=1e5;if(we?i=G(t,Pe,null,!0):t.currentStyle&&(i=t.currentStyle.filter.match(R),i=i&&4===i.length?[i[0].substr(4),Number(i[2].substr(4)),Number(i[1].substr(4)),i[3].substr(4),o.x||0,o.y||0].join(","):""),r=!i||"none"===i||"matrix(1, 0, 0, 1, 0, 0)"===i,(o.svg||t.getBBox&&Ye(t))&&(r&&-1!==(t.style[we]+"").indexOf("matrix")&&(i=t.style[we],r=0),s=t.getAttribute("transform"),r&&s&&(-1!==s.indexOf("matrix")?(i=s,r=0):-1!==s.indexOf("translate")&&(i="matrix(1,0,0,1,"+s.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",")+")",r=0))),r)return Ce;for(s=(i||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[],ye=s.length;--ye>-1;)n=Number(s[ye]),s[ye]=(a=n-(n|=0))?(0|a*l+(0>a?-.5:.5))/l+n:n;return e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s},Ne=L.getTransform=function(t,r,i,n){if(t._gsTransform&&i&&!n)return t._gsTransform;var o,l,f,p,c,h,u=i?t._gsTransform||new Xe:new Xe,x=0>u.scaleX,d=2e-5,g=1e5,y=Me?parseFloat(G(t,Te,r,!1,"0 0 0").split(" ")[2])||u.zOrigin||0:0,m=parseFloat(a.defaultTransformPerspective)||0;if(u.svg=!(!t.getBBox||!Ye(t)),u.svg&&(Fe(t,G(t,Te,s,!1,"50% 50%")+"",u,t.getAttribute("data-svg-origin")),be=a.useSVGTransformAttr||Ae),o=ze(t),o!==Ce){if(16===o.length){var _,v,b,O,w,P=o[0],T=o[1],M=o[2],X=o[3],k=o[4],S=o[5],R=o[6],A=o[7],F=o[8],Y=o[9],z=o[10],N=o[12],V=o[13],j=o[14],B=o[11],L=Math.atan2(R,z);u.zOrigin&&(j=-u.zOrigin,N=F*j-o[12],V=Y*j-o[13],j=z*j+u.zOrigin-o[14]),u.rotationX=L*C,L&&(O=Math.cos(-L),w=Math.sin(-L),_=k*O+F*w,v=S*O+Y*w,b=R*O+z*w,F=k*-w+F*O,Y=S*-w+Y*O,z=R*-w+z*O,B=A*-w+B*O,k=_,S=v,R=b),L=Math.atan2(F,z),u.rotationY=L*C,L&&(O=Math.cos(-L),w=Math.sin(-L),_=P*O-F*w,v=T*O-Y*w,b=M*O-z*w,Y=T*w+Y*O,z=M*w+z*O,B=X*w+B*O,P=_,T=v,M=b),L=Math.atan2(T,P),u.rotation=L*C,L&&(O=Math.cos(-L),w=Math.sin(-L),P=P*O+k*w,v=T*O+S*w,S=T*-w+S*O,R=M*-w+R*O,T=v),u.rotationX&&Math.abs(u.rotationX)+Math.abs(u.rotation)>359.9&&(u.rotationX=u.rotation=0,u.rotationY+=180),u.scaleX=(0|Math.sqrt(P*P+T*T)*g+.5)/g,u.scaleY=(0|Math.sqrt(S*S+Y*Y)*g+.5)/g,u.scaleZ=(0|Math.sqrt(R*R+z*z)*g+.5)/g,u.skewX=0,u.perspective=B?1/(0>B?-B:B):0,u.x=N,u.y=V,u.z=j,u.svg&&(u.x-=u.xOrigin-(u.xOrigin*P-u.yOrigin*k),u.y-=u.yOrigin-(u.yOrigin*T-u.xOrigin*S))}else if(!(Me&&!n&&o.length&&u.x===o[4]&&u.y===o[5]&&(u.rotationX||u.rotationY)||void 0!==u.x&&"none"===G(t,"display",r))){var D=o.length>=6,I=D?o[0]:1,W=o[1]||0,Z=o[2]||0,E=D?o[3]:1;u.x=o[4]||0,u.y=o[5]||0,f=Math.sqrt(I*I+W*W),p=Math.sqrt(E*E+Z*Z),c=I||W?Math.atan2(W,I)*C:u.rotation||0,h=Z||E?Math.atan2(Z,E)*C+c:u.skewX||0,Math.abs(h)>90&&270>Math.abs(h)&&(x?(f*=-1,h+=0>=c?180:-180,c+=0>=c?180:-180):(p*=-1,h+=0>=h?180:-180)),u.scaleX=f,u.scaleY=p,u.rotation=c,u.skewX=h,Me&&(u.rotationX=u.rotationY=u.z=0,u.perspective=m,u.scaleZ=1),u.svg&&(u.x-=u.xOrigin-(u.xOrigin*I+u.yOrigin*Z),u.y-=u.yOrigin-(u.xOrigin*W+u.yOrigin*E))}u.zOrigin=y;for(l in u)d>u[l]&&u[l]>-d&&(u[l]=0)}return i&&(t._gsTransform=u,u.svg&&(be&&t.style[we]?e.delayedCall(.001,function(){Le(t.style,we)}):!be&&t.getAttribute("transform")&&e.delayedCall(.001,function(){t.removeAttribute("transform")}))),u},Ve=function(t){var e,r,i=this.data,s=-i.rotation*Y,n=s+i.skewX*Y,a=1e5,o=(0|Math.cos(s)*i.scaleX*a)/a,l=(0|Math.sin(s)*i.scaleX*a)/a,f=(0|Math.sin(n)*-i.scaleY*a)/a,p=(0|Math.cos(n)*i.scaleY*a)/a,c=this.t.style,h=this.t.currentStyle;if(h){r=l,l=-f,f=-r,e=h.filter,c.filter="";var u,x,g=this.t.offsetWidth,y=this.t.offsetHeight,m="absolute"!==h.position,_="progid:DXImageTransform.Microsoft.Matrix(M11="+o+", M12="+l+", M21="+f+", M22="+p,O=i.x+g*i.xPercent/100,w=i.y+y*i.yPercent/100;if(null!=i.ox&&(u=(i.oxp?.01*g*i.ox:i.ox)-g/2,x=(i.oyp?.01*y*i.oy:i.oy)-y/2,O+=u-(u*o+x*l),w+=x-(u*f+x*p)),m?(u=g/2,x=y/2,_+=", Dx="+(u-(u*o+x*l)+O)+", Dy="+(x-(u*f+x*p)+w)+")"):_+=", sizingMethod='auto expand')",c.filter=-1!==e.indexOf("DXImageTransform.Microsoft.Matrix(")?e.replace(A,_):_+" "+e,(0===t||1===t)&&1===o&&0===l&&0===f&&1===p&&(m&&-1===_.indexOf("Dx=0, Dy=0")||b.test(e)&&100!==parseFloat(RegExp.$1)||-1===e.indexOf("gradient("&&e.indexOf("Alpha"))&&c.removeAttribute("filter")),!m){var P,T,M,X=8>d?1:-1;for(u=i.ieOffsetX||0,x=i.ieOffsetY||0,i.ieOffsetX=Math.round((g-((0>o?-o:o)*g+(0>l?-l:l)*y))/2+O),i.ieOffsetY=Math.round((y-((0>p?-p:p)*y+(0>f?-f:f)*g))/2+w),ye=0;4>ye;ye++)T=ee[ye],P=h[T],r=-1!==P.indexOf("px")?parseFloat(P):U(this.t,T,parseFloat(P),P.replace(v,""))||0,M=r!==i[T]?2>ye?-i.ieOffsetX:-i.ieOffsetY:2>ye?u-i.ieOffsetX:x-i.ieOffsetY,c[T]=(i[T]=Math.round(r-M*(0===ye||2===ye?1:X)))+"px"}}},je=L.set3DTransformRatio=L.setTransformRatio=function(t){var e,r,i,s,n,a,o,l,f,p,c,h,x,d,g,y,m,_,v,b,O,w,P,T=this.data,M=this.t.style,X=T.rotation,k=T.rotationX,S=T.rotationY,R=T.scaleX,A=T.scaleY,F=T.scaleZ,C=T.x,z=T.y,N=T.z,V=T.svg,j=T.perspective,B=T.force3D;if(!((1!==t&&0!==t||"auto"!==B||this.tween._totalTime!==this.tween._totalDuration&&this.tween._totalTime)&&B||N||j||S||k)||be&&V||!Me)return void(X||T.skewX||V?(X*=Y,w=T.skewX*Y,P=1e5,e=Math.cos(X)*R,s=Math.sin(X)*R,r=Math.sin(X-w)*-A,n=Math.cos(X-w)*A,w&&"simple"===T.skewType&&(m=Math.tan(w),m=Math.sqrt(1+m*m),r*=m,n*=m,T.skewY&&(e*=m,s*=m)),V&&(C+=T.xOrigin-(T.xOrigin*e+T.yOrigin*r)+T.xOffset,z+=T.yOrigin-(T.xOrigin*s+T.yOrigin*n)+T.yOffset,be&&(T.xPercent||T.yPercent)&&(d=this.t.getBBox(),C+=.01*T.xPercent*d.width,z+=.01*T.yPercent*d.height),d=1e-6,d>C&&C>-d&&(C=0),d>z&&z>-d&&(z=0)),v=(0|e*P)/P+","+(0|s*P)/P+","+(0|r*P)/P+","+(0|n*P)/P+","+C+","+z+")",V&&be?this.t.setAttribute("transform","matrix("+v):M[we]=(T.xPercent||T.yPercent?"translate("+T.xPercent+"%,"+T.yPercent+"%) matrix(":"matrix(")+v):M[we]=(T.xPercent||T.yPercent?"translate("+T.xPercent+"%,"+T.yPercent+"%) matrix(":"matrix(")+R+",0,0,"+A+","+C+","+z+")");if(u&&(d=1e-4,d>R&&R>-d&&(R=F=2e-5),d>A&&A>-d&&(A=F=2e-5),!j||T.z||T.rotationX||T.rotationY||(j=0)),X||T.skewX)X*=Y,g=e=Math.cos(X),y=s=Math.sin(X),T.skewX&&(X-=T.skewX*Y,g=Math.cos(X),y=Math.sin(X),"simple"===T.skewType&&(m=Math.tan(T.skewX*Y),m=Math.sqrt(1+m*m),g*=m,y*=m,T.skewY&&(e*=m,s*=m))),r=-y,n=g;else{if(!(S||k||1!==F||j||V))return void(M[we]=(T.xPercent||T.yPercent?"translate("+T.xPercent+"%,"+T.yPercent+"%) translate3d(":"translate3d(")+C+"px,"+z+"px,"+N+"px)"+(1!==R||1!==A?" scale("+R+","+A+")":""));e=n=1,r=s=0}f=1,i=a=o=l=p=c=0,h=j?-1/j:0,x=T.zOrigin,d=1e-6,b=",",O="0",X=S*Y,X&&(g=Math.cos(X),y=Math.sin(X),o=-y,p=h*-y,i=e*y,a=s*y,f=g,h*=g,e*=g,s*=g),X=k*Y,X&&(g=Math.cos(X),y=Math.sin(X),m=r*g+i*y,_=n*g+a*y,l=f*y,c=h*y,i=r*-y+i*g,a=n*-y+a*g,f*=g,h*=g,r=m,n=_),1!==F&&(i*=F,a*=F,f*=F,h*=F),1!==A&&(r*=A,n*=A,l*=A,c*=A),1!==R&&(e*=R,s*=R,o*=R,p*=R),(x||V)&&(x&&(C+=i*-x,z+=a*-x,N+=f*-x+x),V&&(C+=T.xOrigin-(T.xOrigin*e+T.yOrigin*r)+T.xOffset,z+=T.yOrigin-(T.xOrigin*s+T.yOrigin*n)+T.yOffset),d>C&&C>-d&&(C=O),d>z&&z>-d&&(z=O),d>N&&N>-d&&(N=0)),v=T.xPercent||T.yPercent?"translate("+T.xPercent+"%,"+T.yPercent+"%) matrix3d(":"matrix3d(",v+=(d>e&&e>-d?O:e)+b+(d>s&&s>-d?O:s)+b+(d>o&&o>-d?O:o),v+=b+(d>p&&p>-d?O:p)+b+(d>r&&r>-d?O:r)+b+(d>n&&n>-d?O:n),k||S?(v+=b+(d>l&&l>-d?O:l)+b+(d>c&&c>-d?O:c)+b+(d>i&&i>-d?O:i),v+=b+(d>a&&a>-d?O:a)+b+(d>f&&f>-d?O:f)+b+(d>h&&h>-d?O:h)+b):v+=",0,0,0,0,1,0,",v+=C+b+z+b+N+b+(j?1+-N/j:1)+")",M[we]=v};f=Xe.prototype,f.x=f.y=f.z=f.skewX=f.skewY=f.rotation=f.rotationX=f.rotationY=f.zOrigin=f.xPercent=f.yPercent=f.xOffset=f.yOffset=0,f.scaleX=f.scaleY=f.scaleZ=1,_e("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function(t,e,r,i,n,o,l){if(i._lastParsedTransform===l)return n;i._lastParsedTransform=l;var f,p,c,h,u,x,d,g,y,m=t._gsTransform,_=i._transform=Ne(t,s,!0,l.parseTransform),v=t.style,b=1e-6,O=Oe.length,w=l,P={},T="transformOrigin";if("string"==typeof w.transform&&we)c=j.style,c[we]=w.transform,c.display="block",c.position="absolute",N.body.appendChild(j),f=Ne(j,null,!1),N.body.removeChild(j),null!=w.xPercent&&(f.xPercent=ne(w.xPercent,_.xPercent)),null!=w.yPercent&&(f.yPercent=ne(w.yPercent,_.yPercent));else if("object"==typeof w){if(f={scaleX:ne(null!=w.scaleX?w.scaleX:w.scale,_.scaleX),scaleY:ne(null!=w.scaleY?w.scaleY:w.scale,_.scaleY),scaleZ:ne(w.scaleZ,_.scaleZ),x:ne(w.x,_.x),y:ne(w.y,_.y),z:ne(w.z,_.z),xPercent:ne(w.xPercent,_.xPercent),yPercent:ne(w.yPercent,_.yPercent),perspective:ne(w.transformPerspective,_.perspective)},d=w.directionalRotation,null!=d)if("object"==typeof d)for(c in d)w[c]=d[c];else w.rotation=d;"string"==typeof w.x&&-1!==w.x.indexOf("%")&&(f.x=0,f.xPercent=ne(w.x,_.xPercent)),"string"==typeof w.y&&-1!==w.y.indexOf("%")&&(f.y=0,f.yPercent=ne(w.y,_.yPercent)),f.rotation=ae("rotation"in w?w.rotation:"shortRotation"in w?w.shortRotation+"_short":"rotationZ"in w?w.rotationZ:_.rotation,_.rotation,"rotation",P),Me&&(f.rotationX=ae("rotationX"in w?w.rotationX:"shortRotationX"in w?w.shortRotationX+"_short":_.rotationX||0,_.rotationX,"rotationX",P),f.rotationY=ae("rotationY"in w?w.rotationY:"shortRotationY"in w?w.shortRotationY+"_short":_.rotationY||0,_.rotationY,"rotationY",P)),f.skewX=null==w.skewX?_.skewX:ae(w.skewX,_.skewX),f.skewY=null==w.skewY?_.skewY:ae(w.skewY,_.skewY),(p=f.skewY-_.skewY)&&(f.skewX+=p,f.rotation+=p)}for(Me&&null!=w.force3D&&(_.force3D=w.force3D,x=!0),_.skewType=w.skewType||_.skewType||a.defaultSkewType,u=_.force3D||_.z||_.rotationX||_.rotationY||f.z||f.rotationX||f.rotationY||f.perspective,u||null==w.scale||(f.scaleZ=1);--O>-1;)r=Oe[O],h=f[r]-_[r],(h>b||-b>h||null!=w[r]||null!=z[r])&&(x=!0,n=new xe(_,r,_[r],h,n),r in P&&(n.e=P[r]),n.xs0=0,n.plugin=o,i._overwriteProps.push(n.n));return h=w.transformOrigin,_.svg&&(h||w.svgOrigin)&&(g=_.xOffset,y=_.yOffset,Fe(t,ie(h),f,w.svgOrigin,w.smoothOrigin),n=de(_,"xOrigin",(m?_:f).xOrigin,f.xOrigin,n,T),n=de(_,"yOrigin",(m?_:f).yOrigin,f.yOrigin,n,T),(g!==_.xOffset||y!==_.yOffset)&&(n=de(_,"xOffset",m?g:_.xOffset,_.xOffset,n,T),n=de(_,"yOffset",m?y:_.yOffset,_.yOffset,n,T)),h=be?null:"0px 0px"),(h||Me&&u&&_.zOrigin)&&(we?(x=!0,r=Te,h=(h||G(t,r,s,!1,"50% 50%"))+"",n=new xe(v,r,0,0,n,-1,T),n.b=v[r],n.plugin=o,Me?(c=_.zOrigin,h=h.split(" "),_.zOrigin=(h.length>2&&(0===c||"0px"!==h[2])?parseFloat(h[2]):c)||0,n.xs0=n.e=h[0]+" "+(h[1]||"50%")+" 0px",n=new xe(_,"zOrigin",0,0,n,-1,n.n),n.b=c,n.xs0=n.e=_.zOrigin):n.xs0=n.e=h):ie(h+"",_)),x&&(i._transformType=_.svg&&be||!u&&3!==this._transformType?2:3),n},prefix:!0}),_e("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),_e("borderRadius",{defaultValue:"0px",parser:function(t,e,r,n,a){e=this.format(e);var o,l,f,p,c,h,u,x,d,g,y,m,_,v,b,O,w=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],P=t.style;for(d=parseFloat(t.offsetWidth),g=parseFloat(t.offsetHeight),o=e.split(" "),l=0;w.length>l;l++)this.p.indexOf("border")&&(w[l]=q(w[l])),c=p=G(t,w[l],s,!1,"0px"),-1!==c.indexOf(" ")&&(p=c.split(" "),c=p[0],p=p[1]),h=f=o[l],u=parseFloat(c),m=c.substr((u+"").length),_="="===h.charAt(1),_?(x=parseInt(h.charAt(0)+"1",10),h=h.substr(2),x*=parseFloat(h),y=h.substr((x+"").length-(0>x?1:0))||""):(x=parseFloat(h),y=h.substr((x+"").length)),""===y&&(y=i[r]||m),y!==m&&(v=U(t,"borderLeft",u,m),b=U(t,"borderTop",u,m),"%"===y?(c=100*(v/d)+"%",p=100*(b/g)+"%"):"em"===y?(O=U(t,"borderLeft",1,"em"),c=v/O+"em",p=b/O+"em"):(c=v+"px",p=b+"px"),_&&(h=parseFloat(c)+x+y,f=parseFloat(p)+x+y)),a=ge(P,w[l],c+" "+p,h+" "+f,!1,"0px",a);return a},prefix:!0,formatter:ce("0px 0px 0px 0px",!1,!0)}),_e("backgroundPosition",{defaultValue:"0 0",parser:function(t,e,r,i,n,a){var o,l,f,p,c,h,u="background-position",x=s||H(t,null),g=this.format((x?d?x.getPropertyValue(u+"-x")+" "+x.getPropertyValue(u+"-y"):x.getPropertyValue(u):t.currentStyle.backgroundPositionX+" "+t.currentStyle.backgroundPositionY)||"0 0"),y=this.format(e);if(-1!==g.indexOf("%")!=(-1!==y.indexOf("%"))&&(h=G(t,"backgroundImage").replace(X,""),h&&"none"!==h)){for(o=g.split(" "),l=y.split(" "),B.setAttribute("src",h),f=2;--f>-1;)g=o[f],p=-1!==g.indexOf("%"),p!==(-1!==l[f].indexOf("%"))&&(c=0===f?t.offsetWidth-B.width:t.offsetHeight-B.height,o[f]=p?parseFloat(g)/100*c+"px":100*(parseFloat(g)/c)+"%");g=o.join(" ")}return this.parseComplex(t.style,g,y,n,a)},formatter:ie}),_e("backgroundSize",{defaultValue:"0 0",formatter:ie}),_e("perspective",{defaultValue:"0px",prefix:!0}),_e("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),_e("transformStyle",{prefix:!0}),_e("backfaceVisibility",{prefix:!0}),_e("userSelect",{prefix:!0}),_e("margin",{parser:he("marginTop,marginRight,marginBottom,marginLeft")}),_e("padding",{parser:he("paddingTop,paddingRight,paddingBottom,paddingLeft")}),_e("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(t,e,r,i,n,a){var o,l,f;return 9>d?(l=t.currentStyle,f=8>d?" ":",",o="rect("+l.clipTop+f+l.clipRight+f+l.clipBottom+f+l.clipLeft+")",e=this.format(e).split(",").join(f)):(o=this.format(G(t,this.p,s,!1,this.dflt)),e=this.format(e)),this.parseComplex(t.style,o,e,n,a)}}),_e("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),_e("autoRound,strictUnits",{parser:function(t,e,r,i,s){return s}}),_e("border",{defaultValue:"0px solid #000",parser:function(t,e,r,i,n,a){return this.parseComplex(t.style,this.format(G(t,"borderTopWidth",s,!1,"0px")+" "+G(t,"borderTopStyle",s,!1,"solid")+" "+G(t,"borderTopColor",s,!1,"#000")),this.format(e),n,a)},color:!0,formatter:function(t){var e=t.split(" ");return e[0]+" "+(e[1]||"solid")+" "+(t.match(pe)||["#000"])[0]}}),_e("borderWidth",{parser:he("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),_e("float,cssFloat,styleFloat",{parser:function(t,e,r,i,s){var n=t.style,a="cssFloat"in n?"cssFloat":"styleFloat";return new xe(n,a,0,0,s,-1,r,!1,0,n[a],e)}});var Be=function(t){var e,r=this.t,i=r.filter||G(this.data,"filter")||"",s=0|this.s+this.c*t;100===s&&(-1===i.indexOf("atrix(")&&-1===i.indexOf("radient(")&&-1===i.indexOf("oader(")?(r.removeAttribute("filter"),e=!G(this.data,"filter")):(r.filter=i.replace(w,""),e=!0)),e||(this.xn1&&(r.filter=i=i||"alpha(opacity="+s+")"),-1===i.indexOf("pacity")?0===s&&this.xn1||(r.filter=i+" alpha(opacity="+s+")"):r.filter=i.replace(b,"opacity="+s))};_e("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(t,e,r,i,n,a){var o=parseFloat(G(t,"opacity",s,!1,"1")),l=t.style,f="autoAlpha"===r;return"string"==typeof e&&"="===e.charAt(1)&&(e=("-"===e.charAt(0)?-1:1)*parseFloat(e.substr(2))+o),f&&1===o&&"hidden"===G(t,"visibility",s)&&0!==e&&(o=0),I?n=new xe(l,"opacity",o,e-o,n):(n=new xe(l,"opacity",100*o,100*(e-o),n),n.xn1=f?1:0,l.zoom=1,n.type=2,n.b="alpha(opacity="+n.s+")",n.e="alpha(opacity="+(n.s+n.c)+")",n.data=t,n.plugin=a,n.setRatio=Be),f&&(n=new xe(l,"visibility",0,0,n,-1,null,!1,0,0!==o?"inherit":"hidden",0===e?"hidden":"inherit"),n.xs0="inherit",i._overwriteProps.push(n.n),i._overwriteProps.push(r)),n}});var Le=function(t,e){e&&(t.removeProperty?(("ms"===e.substr(0,2)||"webkit"===e.substr(0,6))&&(e="-"+e),t.removeProperty(e.replace(T,"-$1").toLowerCase())):t.removeAttribute(e))},De=function(t){if(this.t._gsClassPT=this,1===t||0===t){this.t.setAttribute("class",0===t?this.b:this.e);for(var e=this.data,r=this.t.style;e;)e.v?r[e.p]=e.v:Le(r,e.p),e=e._next;1===t&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};_e("className",{parser:function(t,e,i,n,a,o,l){var f,p,c,h,u,x=t.getAttribute("class")||"",d=t.style.cssText;if(a=n._classNamePT=new xe(t,i,0,0,a,2),a.setRatio=De,a.pr=-11,r=!0,a.b=x,p=J(t,s),c=t._gsClassPT){for(h={},u=c.data;u;)h[u.p]=1,u=u._next;c.setRatio(1)}return t._gsClassPT=a,a.e="="!==e.charAt(1)?e:x.replace(RegExp("\\s*\\b"+e.substr(2)+"\\b"),"")+("+"===e.charAt(0)?" "+e.substr(2):""),t.setAttribute("class",a.e),f=K(t,p,J(t),l,h),t.setAttribute("class",x),a.data=f.firstMPT,t.style.cssText=d,a=a.xfirst=n.parse(t,f.difs,a,o)}});var Ie=function(t){if((1===t||0===t)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var e,r,i,s,n,a=this.t.style,o=l.transform.parse;if("all"===this.e)a.cssText="",s=!0;else for(e=this.e.split(" ").join("").split(","),i=e.length;--i>-1;)r=e[i],l[r]&&(l[r].parse===o?s=!0:r="transformOrigin"===r?Te:l[r].p),Le(a,r);s&&(Le(a,we),n=this.t._gsTransform,n&&(n.svg&&this.t.removeAttribute("data-svg-origin"),delete this.t._gsTransform))}};for(_e("clearProps",{parser:function(t,e,i,s,n){return n=new xe(t,i,0,0,n,2),n.setRatio=Ie,n.e=e,n.pr=-10,n.data=s._tween,r=!0,n}}),f="bezier,throwProps,physicsProps,physics2D".split(","),ye=f.length;ye--;)ve(f[ye]);f=a.prototype,f._firstPT=f._lastParsedTransform=f._transform=null,f._onInitTween=function(t,e,o){if(!t.nodeType)return!1;this._target=t,this._tween=o,this._vars=e,p=e.autoRound,r=!1,i=e.suffixMap||a.suffixMap,s=H(t,""),n=this._overwriteProps;var f,u,d,g,y,m,_,v,b,w=t.style;if(c&&""===w.zIndex&&(f=G(t,"zIndex",s),("auto"===f||""===f)&&this._addLazySet(w,"zIndex",0)),"string"==typeof e&&(g=w.cssText,f=J(t,s),w.cssText=g+";"+e,f=K(t,f,J(t)).difs,!I&&O.test(e)&&(f.opacity=parseFloat(RegExp.$1)),e=f,w.cssText=g),this._firstPT=u=e.className?l.className.parse(t,e.className,"className",this,null,null,e):this.parse(t,e,null),this._transformType){for(b=3===this._transformType,we?h&&(c=!0,""===w.zIndex&&(_=G(t,"zIndex",s),("auto"===_||""===_)&&this._addLazySet(w,"zIndex",0)),x&&this._addLazySet(w,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(b?"visible":"hidden"))):w.zoom=1,d=u;d&&d._next;)d=d._next;v=new xe(t,"transform",0,0,null,2),this._linkCSSP(v,null,d),v.setRatio=we?je:Ve,v.data=this._transform||Ne(t,s,!0),v.tween=o,v.pr=-1,n.pop()
}if(r){for(;u;){for(m=u._next,d=g;d&&d.pr>u.pr;)d=d._next;(u._prev=d?d._prev:y)?u._prev._next=u:g=u,(u._next=d)?d._prev=u:y=u,u=m}this._firstPT=g}return!0},f.parse=function(t,e,r,n){var a,o,f,c,h,u,x,d,g,y,m=t.style;for(a in e)u=e[a],o=l[a],o?r=o.parse(t,u,a,this,r,n,e):(h=G(t,a,s)+"",g="string"==typeof u,"color"===a||"fill"===a||"stroke"===a||-1!==a.indexOf("Color")||g&&P.test(u)?(g||(u=fe(u),u=(u.length>3?"rgba(":"rgb(")+u.join(",")+")"),r=ge(m,a,h,u,!0,"transparent",r,0,n)):!g||-1===u.indexOf(" ")&&-1===u.indexOf(",")?(f=parseFloat(h),x=f||0===f?h.substr((f+"").length):"",(""===h||"auto"===h)&&("width"===a||"height"===a?(f=re(t,a,s),x="px"):"left"===a||"top"===a?(f=Q(t,a,s),x="px"):(f="opacity"!==a?0:1,x="")),y=g&&"="===u.charAt(1),y?(c=parseInt(u.charAt(0)+"1",10),u=u.substr(2),c*=parseFloat(u),d=u.replace(v,"")):(c=parseFloat(u),d=g?u.replace(v,""):""),""===d&&(d=a in i?i[a]:x),u=c||0===c?(y?c+f:c)+d:e[a],x!==d&&""!==d&&(c||0===c)&&f&&(f=U(t,a,f,x),"%"===d?(f/=U(t,a,100,"%")/100,e.strictUnits!==!0&&(h=f+"%")):"em"===d?f/=U(t,a,1,"em"):"px"!==d&&(c=U(t,a,c,d),d="px"),y&&(c||0===c)&&(u=c+f+d)),y&&(c+=f),!f&&0!==f||!c&&0!==c?void 0!==m[a]&&(u||"NaN"!=u+""&&null!=u)?(r=new xe(m,a,c||f||0,0,r,-1,a,!1,0,h,u),r.xs0="none"!==u||"display"!==a&&-1===a.indexOf("Style")?u:h):Z("invalid "+a+" tween value: "+e[a]):(r=new xe(m,a,f,c-f,r,0,a,p!==!1&&("px"===d||"zIndex"===a),0,h,u),r.xs0=d)):r=ge(m,a,h,u,!0,null,r,0,n)),n&&r&&!r.plugin&&(r.plugin=n);return r},f.setRatio=function(t){var e,r,i,s=this._firstPT,n=1e-6;if(1!==t||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(t||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;s;){if(e=s.c*t+s.s,s.r?e=Math.round(e):n>e&&e>-n&&(e=0),s.type)if(1===s.type)if(i=s.l,2===i)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2;else if(3===i)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2+s.xn2+s.xs3;else if(4===i)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2+s.xn2+s.xs3+s.xn3+s.xs4;else if(5===i)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2+s.xn2+s.xs3+s.xn3+s.xs4+s.xn4+s.xs5;else{for(r=s.xs0+e+s.xs1,i=1;s.l>i;i++)r+=s["xn"+i]+s["xs"+(i+1)];s.t[s.p]=r}else-1===s.type?s.t[s.p]=s.xs0:s.setRatio&&s.setRatio(t);else s.t[s.p]=e+s.xs0;s=s._next}else for(;s;)2!==s.type?s.t[s.p]=s.b:s.setRatio(t),s=s._next;else for(;s;){if(2!==s.type)if(s.r&&-1!==s.type)if(e=Math.round(s.s+s.c),s.type){if(1===s.type){for(i=s.l,r=s.xs0+e+s.xs1,i=1;s.l>i;i++)r+=s["xn"+i]+s["xs"+(i+1)];s.t[s.p]=r}}else s.t[s.p]=e+s.xs0;else s.t[s.p]=s.e;else s.setRatio(t);s=s._next}},f._enableTransforms=function(t){this._transform=this._transform||Ne(this._target,s,!0),this._transformType=this._transform.svg&&be||!t&&3!==this._transformType?2:3};var We=function(){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};f._addLazySet=function(t,e,r){var i=this._firstPT=new xe(t,e,0,0,this._firstPT,2);i.e=r,i.setRatio=We,i.data=this},f._linkCSSP=function(t,e,r,i){return t&&(e&&(e._prev=t),t._next&&(t._next._prev=t._prev),t._prev?t._prev._next=t._next:this._firstPT===t&&(this._firstPT=t._next,i=!0),r?r._next=t:i||null!==this._firstPT||(this._firstPT=t),t._next=e,t._prev=r),t},f._kill=function(e){var r,i,s,n=e;if(e.autoAlpha||e.alpha){n={};for(i in e)n[i]=e[i];n.opacity=1,n.autoAlpha&&(n.visibility=1)}return e.className&&(r=this._classNamePT)&&(s=r.xfirst,s&&s._prev?this._linkCSSP(s._prev,r._next,s._prev._prev):s===this._firstPT&&(this._firstPT=r._next),r._next&&this._linkCSSP(r._next,r._next._next,s._prev),this._classNamePT=null),t.prototype._kill.call(this,n)};var Ze=function(t,e,r){var i,s,n,a;if(t.slice)for(s=t.length;--s>-1;)Ze(t[s],e,r);else for(i=t.childNodes,s=i.length;--s>-1;)n=i[s],a=n.type,n.style&&(e.push(J(n)),r&&r.push(n)),1!==a&&9!==a&&11!==a||!n.childNodes.length||Ze(n,e,r)};return a.cascadeTo=function(t,r,i){var s,n,a,o,l=e.to(t,r,i),f=[l],p=[],c=[],h=[],u=e._internals.reservedProps;for(t=l._targets||l.target,Ze(t,p,h),l.render(r,!0,!0),Ze(t,c),l.render(0,!0,!0),l._enabled(!0),s=h.length;--s>-1;)if(n=K(h[s],p[s],c[s]),n.firstMPT){n=n.difs;for(a in i)u[a]&&(n[a]=i[a]);o={};for(a in n)o[a]=p[s][a];f.push(e.fromTo(h[s],r,o,n))}return f},t.activate([a]),a},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(t){"use strict";var e=function(){return(_gsScope.GreenSockGlobals||_gsScope)[t]};"function"==typeof define&&define.amd?define(["TweenLite"],e):"undefined"!=typeof module&&module.exports&&(require("../TweenLite.js"),module.exports=e())}("CSSPlugin");