import{r as Ht,g as Kt}from"./react-vendor-C2eOXVtY.js";var xe=Ht();const N=Kt(xe);var _=function(){return _=Object.assign||function(t){for(var r,n=1,s=arguments.length;n<s;n++){r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},_.apply(this,arguments)};function oe(e,t,r){if(r||arguments.length===2)for(var n=0,s=t.length,o;n<s;n++)(o||!(n in t))&&(o||(o=Array.prototype.slice.call(t,0,n)),o[n]=t[n]);return e.concat(o||Array.prototype.slice.call(t))}var S="-ms-",se="-moz-",m="-webkit-",ht="comm",Ae="rule",Ke="decl",Ut="@import",lt="@keyframes",Zt="@layer",gt=Math.abs,Ue=String.fromCharCode,Fe=Object.assign;function Jt(e,t){return R(e,0)^45?(((t<<2^R(e,0))<<2^R(e,1))<<2^R(e,2))<<2^R(e,3):0}function mt(e){return e.trim()}function T(e,t){return(e=t.exec(e))?e[0]:e}function f(e,t,r){return e.replace(t,r)}function ge(e,t,r){return e.indexOf(t,r)}function R(e,t){return e.charCodeAt(t)|0}function Z(e,t,r){return e.slice(t,r)}function j(e){return e.length}function yt(e){return e.length}function ne(e,t){return t.push(e),e}function Qt(e,t){return e.map(t).join("")}function et(e,t){return e.filter(function(r){return!T(r,t)})}var Ee=1,J=1,St=0,k=0,A=0,X="";function Re(e,t,r,n,s,o,i,c){return{value:e,root:t,parent:r,type:n,props:s,children:o,line:Ee,column:J,length:i,return:"",siblings:c}}function G(e,t){return Fe(Re("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function K(e){for(;e.root;)e=G(e.root,{children:[e]});ne(e,e.siblings)}function Vt(){return A}function Xt(){return A=k>0?R(X,--k):0,J--,A===10&&(J=1,Ee--),A}function O(){return A=k<St?R(X,k++):0,J++,A===10&&(J=1,Ee++),A}function Y(){return R(X,k)}function me(){return k}function _e(e,t){return Z(X,e,t)}function Ge(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function er(e){return Ee=J=1,St=j(X=e),k=0,[]}function tr(e){return X="",e}function je(e){return mt(_e(k-1,Le(e===91?e+2:e===40?e+1:e)))}function rr(e){for(;(A=Y())&&A<33;)O();return Ge(e)>2||Ge(A)>3?"":" "}function nr(e,t){for(;--t&&O()&&!(A<48||A>102||A>57&&A<65||A>70&&A<97););return _e(e,me()+(t<6&&Y()==32&&O()==32))}function Le(e){for(;O();)switch(A){case e:return k;case 34:case 39:e!==34&&e!==39&&Le(A);break;case 40:e===41&&Le(e);break;case 92:O();break}return k}function sr(e,t){for(;O()&&e+A!==57;)if(e+A===84&&Y()===47)break;return"/*"+_e(t,k-1)+"*"+Ue(e===47?e:O())}function or(e){for(;!Ge(Y());)O();return _e(e,k)}function ir(e){return tr(ye("",null,null,null,[""],e=er(e),0,[0],e))}function ye(e,t,r,n,s,o,i,c,a){for(var u=0,p=0,h=i,g=0,l=0,w=0,I=1,P=1,x=1,v=0,b="",C=s,E=o,y=n,d=b;P;)switch(w=v,v=O()){case 40:if(w!=108&&R(d,h-1)==58){ge(d+=f(je(v),"&","&\f"),"&\f",gt(u?c[u-1]:0))!=-1&&(x=-1);break}case 34:case 39:case 91:d+=je(v);break;case 9:case 10:case 13:case 32:d+=rr(w);break;case 92:d+=nr(me()-1,7);continue;case 47:switch(Y()){case 42:case 47:ne(ar(sr(O(),me()),t,r,a),a);break;default:d+="/"}break;case 123*I:c[u++]=j(d)*x;case 125*I:case 59:case 0:switch(v){case 0:case 125:P=0;case 59+p:x==-1&&(d=f(d,/\f/g,"")),l>0&&j(d)-h&&ne(l>32?rt(d+";",n,r,h-1,a):rt(f(d," ","")+";",n,r,h-2,a),a);break;case 59:d+=";";default:if(ne(y=tt(d,t,r,u,p,s,c,b,C=[],E=[],h,o),o),v===123)if(p===0)ye(d,t,y,y,C,o,h,c,E);else switch(g===99&&R(d,3)===110?100:g){case 100:case 108:case 109:case 115:ye(e,y,y,n&&ne(tt(e,y,y,0,0,s,c,b,s,C=[],h,E),E),s,E,h,c,n?C:E);break;default:ye(d,y,y,y,[""],E,0,c,E)}}u=p=l=0,I=x=1,b=d="",h=i;break;case 58:h=1+j(d),l=w;default:if(I<1){if(v==123)--I;else if(v==125&&I++==0&&Xt()==125)continue}switch(d+=Ue(v),v*I){case 38:x=p>0?1:(d+="\f",-1);break;case 44:c[u++]=(j(d)-1)*x,x=1;break;case 64:Y()===45&&(d+=je(O())),g=Y(),p=h=j(b=d+=or(me())),v++;break;case 45:w===45&&j(d)==2&&(I=0)}}return o}function tt(e,t,r,n,s,o,i,c,a,u,p,h){for(var g=s-1,l=s===0?o:[""],w=yt(l),I=0,P=0,x=0;I<n;++I)for(var v=0,b=Z(e,g+1,g=gt(P=i[I])),C=e;v<w;++v)(C=mt(P>0?l[v]+" "+b:f(b,/&\f/g,l[v])))&&(a[x++]=C);return Re(e,t,r,s===0?Ae:c,a,u,p,h)}function ar(e,t,r,n){return Re(e,t,r,ht,Ue(Vt()),Z(e,2,-2),0,n)}function rt(e,t,r,n,s){return Re(e,t,r,Ke,Z(e,0,n),Z(e,n+1,-1),n,s)}function bt(e,t,r){switch(Jt(e,t)){case 5103:return m+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return m+e+e;case 4789:return se+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return m+e+se+e+S+e+e;case 5936:switch(R(e,t+11)){case 114:return m+e+S+f(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return m+e+S+f(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return m+e+S+f(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return m+e+S+e+e;case 6165:return m+e+S+"flex-"+e+e;case 5187:return m+e+f(e,/(\w+).+(:[^]+)/,m+"box-$1$2"+S+"flex-$1$2")+e;case 5443:return m+e+S+"flex-item-"+f(e,/flex-|-self/g,"")+(T(e,/flex-|baseline/)?"":S+"grid-row-"+f(e,/flex-|-self/g,""))+e;case 4675:return m+e+S+"flex-line-pack"+f(e,/align-content|flex-|-self/g,"")+e;case 5548:return m+e+S+f(e,"shrink","negative")+e;case 5292:return m+e+S+f(e,"basis","preferred-size")+e;case 6060:return m+"box-"+f(e,"-grow","")+m+e+S+f(e,"grow","positive")+e;case 4554:return m+f(e,/([^-])(transform)/g,"$1"+m+"$2")+e;case 6187:return f(f(f(e,/(zoom-|grab)/,m+"$1"),/(image-set)/,m+"$1"),e,"")+e;case 5495:case 3959:return f(e,/(image-set\([^]*)/,m+"$1$`$1");case 4968:return f(f(e,/(.+:)(flex-)?(.*)/,m+"box-pack:$3"+S+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+m+e+e;case 4200:if(!T(e,/flex-|baseline/))return S+"grid-column-align"+Z(e,t)+e;break;case 2592:case 3360:return S+f(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,s){return t=s,T(n.props,/grid-\w+-end/)})?~ge(e+(r=r[t].value),"span",0)?e:S+f(e,"-start","")+e+S+"grid-row-span:"+(~ge(r,"span",0)?T(r,/\d+/):+T(r,/\d+/)-+T(e,/\d+/))+";":S+f(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return T(n.props,/grid-\w+-start/)})?e:S+f(f(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return f(e,/(.+)-inline(.+)/,m+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(j(e)-1-t>6)switch(R(e,t+1)){case 109:if(R(e,t+4)!==45)break;case 102:return f(e,/(.+:)(.+)-([^]+)/,"$1"+m+"$2-$3$1"+se+(R(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ge(e,"stretch",0)?bt(f(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return f(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,s,o,i,c,a,u){return S+s+":"+o+u+(i?S+s+"-span:"+(c?a:+a-+o)+u:"")+e});case 4949:if(R(e,t+6)===121)return f(e,":",":"+m)+e;break;case 6444:switch(R(e,R(e,14)===45?18:11)){case 120:return f(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+m+(R(e,14)===45?"inline-":"")+"box$3$1"+m+"$2$3$1"+S+"$2box$3")+e;case 100:return f(e,":",":"+S)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return f(e,"scroll-","scroll-snap-")+e}return e}function we(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function cr(e,t,r,n){switch(e.type){case Zt:if(e.children.length)break;case Ut:case Ke:return e.return=e.return||e.value;case ht:return"";case lt:return e.return=e.value+"{"+we(e.children,n)+"}";case Ae:if(!j(e.value=e.props.join(",")))return""}return j(r=we(e.children,n))?e.return=e.value+"{"+r+"}":""}function ur(e){var t=yt(e);return function(r,n,s,o){for(var i="",c=0;c<t;c++)i+=e[c](r,n,s,o)||"";return i}}function fr(e){return function(t){t.root||(t=t.return)&&e(t)}}function pr(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case Ke:e.return=bt(e.value,e.length,r);return;case lt:return we([G(e,{value:f(e.value,"@","@"+m)})],n);case Ae:if(e.length)return Qt(r=e.props,function(s){switch(T(s,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":K(G(e,{props:[f(s,/:(read-\w+)/,":"+se+"$1")]})),K(G(e,{props:[s]})),Fe(e,{props:et(r,n)});break;case"::placeholder":K(G(e,{props:[f(s,/:(plac\w+)/,":"+m+"input-$1")]})),K(G(e,{props:[f(s,/:(plac\w+)/,":"+se+"$1")]})),K(G(e,{props:[f(s,/:(plac\w+)/,S+"input-$1")]})),K(G(e,{props:[s]})),Fe(e,{props:et(r,n)});break}return""})}}var dr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},$={},Q=typeof process<"u"&&$!==void 0&&($.REACT_APP_SC_ATTR||$.SC_ATTR)||"data-styled",wt="active",vt="data-styled-version",Pe="6.1.14",Ze=`/*!sc*/
`,ve=typeof window<"u"&&"HTMLElement"in window,hr=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&$!==void 0&&$.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&$.REACT_APP_SC_DISABLE_SPEEDY!==""?$.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&$.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&$!==void 0&&$.SC_DISABLE_SPEEDY!==void 0&&$.SC_DISABLE_SPEEDY!==""&&$.SC_DISABLE_SPEEDY!=="false"&&$.SC_DISABLE_SPEEDY),lr={},$e=Object.freeze([]),V=Object.freeze({});function Ct(e,t,r){return r===void 0&&(r=V),e.theme!==r.theme&&e.theme||t||r.theme}var It=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),gr=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,mr=/(^-|-$)/g;function nt(e){return e.replace(gr,"-").replace(mr,"")}var yr=/(a)(d)/gi,he=52,st=function(e){return String.fromCharCode(e+(e>25?39:97))};function Me(e){var t,r="";for(t=Math.abs(e);t>he;t=t/he|0)r=st(t%he)+r;return(st(t%he)+r).replace(yr,"$1-$2")}var De,xt=5381,U=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},At=function(e){return U(xt,e)};function Et(e){return Me(At(e)>>>0)}function Sr(e){return e.displayName||e.name||"Component"}function Te(e){return typeof e=="string"&&!0}var Rt=typeof Symbol=="function"&&Symbol.for,_t=Rt?Symbol.for("react.memo"):60115,br=Rt?Symbol.for("react.forward_ref"):60112,wr={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},vr={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Pt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Cr=((De={})[br]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},De[_t]=Pt,De);function ot(e){return("type"in(t=e)&&t.type.$$typeof)===_t?Pt:"$$typeof"in e?Cr[e.$$typeof]:wr;var t}var Ir=Object.defineProperty,xr=Object.getOwnPropertyNames,it=Object.getOwnPropertySymbols,Ar=Object.getOwnPropertyDescriptor,Er=Object.getPrototypeOf,at=Object.prototype;function $t(e,t,r){if(typeof t!="string"){if(at){var n=Er(t);n&&n!==at&&$t(e,n,r)}var s=xr(t);it&&(s=s.concat(it(t)));for(var o=ot(e),i=ot(t),c=0;c<s.length;++c){var a=s[c];if(!(a in vr||r&&r[a]||i&&a in i||o&&a in o)){var u=Ar(t,a);try{Ir(e,a,u)}catch{}}}}return e}function W(e){return typeof e=="function"}function Je(e){return typeof e=="object"&&"styledComponentId"in e}function B(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Be(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=e[n];return r}function ie(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ye(e,t,r){if(r===void 0&&(r=!1),!r&&!ie(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=Ye(e[n],t[n]);else if(ie(t))for(var n in t)e[n]=Ye(e[n],t[n]);return e}function Qe(e,t){Object.defineProperty(e,"toString",{value:t})}function q(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Rr=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,s=n.length,o=s;t>=o;)if((o<<=1)<0)throw q(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var i=s;i<o;i++)this.groupSizes[i]=0}for(var c=this.indexOfGroup(t+1),a=(i=0,r.length);i<a;i++)this.tag.insertRule(c,r[i])&&(this.groupSizes[t]++,c++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),s=n+r;this.groupSizes[t]=0;for(var o=n;o<s;o++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],s=this.indexOfGroup(t),o=s+n,i=s;i<o;i++)r+="".concat(this.tag.getRule(i)).concat(Ze);return r},e}(),Se=new Map,Ce=new Map,be=1,le=function(e){if(Se.has(e))return Se.get(e);for(;Ce.has(be);)be++;var t=be++;return Se.set(e,t),Ce.set(t,e),t},_r=function(e,t){be=t+1,Se.set(e,t),Ce.set(t,e)},Pr="style[".concat(Q,"][").concat(vt,'="').concat(Pe,'"]'),$r=new RegExp("^".concat(Q,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),kr=function(e,t,r){for(var n,s=r.split(","),o=0,i=s.length;o<i;o++)(n=s[o])&&e.registerName(t,n)},Nr=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(Ze),s=[],o=0,i=n.length;o<i;o++){var c=n[o].trim();if(c){var a=c.match($r);if(a){var u=0|parseInt(a[1],10),p=a[2];u!==0&&(_r(p,u),kr(e,p,a[3]),e.getTag().insertRules(u,s)),s.length=0}else s.push(c)}}},ct=function(e){for(var t=document.querySelectorAll(Pr),r=0,n=t.length;r<n;r++){var s=t[r];s&&s.getAttribute(Q)!==wt&&(Nr(e,s),s.parentNode&&s.parentNode.removeChild(s))}};function Or(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var kt=function(e){var t=document.head,r=e||t,n=document.createElement("style"),s=function(c){var a=Array.from(c.querySelectorAll("style[".concat(Q,"]")));return a[a.length-1]}(r),o=s!==void 0?s.nextSibling:null;n.setAttribute(Q,wt),n.setAttribute(vt,Pe);var i=Or();return i&&n.setAttribute("nonce",i),r.insertBefore(n,o),n},jr=function(){function e(t){this.element=kt(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,s=0,o=n.length;s<o;s++){var i=n[s];if(i.ownerNode===r)return i}throw q(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),Dr=function(){function e(t){this.element=kt(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Tr=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),ut=ve,zr={isServer:!ve,useCSSOMInjection:!hr},Ie=function(){function e(t,r,n){t===void 0&&(t=V),r===void 0&&(r={});var s=this;this.options=_(_({},zr),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&ve&&ut&&(ut=!1,ct(this)),Qe(this,function(){return function(o){for(var i=o.getTag(),c=i.length,a="",u=function(h){var g=function(x){return Ce.get(x)}(h);if(g===void 0)return"continue";var l=o.names.get(g),w=i.getGroup(h);if(l===void 0||!l.size||w.length===0)return"continue";var I="".concat(Q,".g").concat(h,'[id="').concat(g,'"]'),P="";l!==void 0&&l.forEach(function(x){x.length>0&&(P+="".concat(x,","))}),a+="".concat(w).concat(I,'{content:"').concat(P,'"}').concat(Ze)},p=0;p<c;p++)u(p);return a}(s)})}return e.registerId=function(t){return le(t)},e.prototype.rehydrate=function(){!this.server&&ve&&ct(this)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(_(_({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,s=r.target;return r.isServer?new Tr(s):n?new jr(s):new Dr(s)}(this.options),new Rr(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(le(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(le(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(le(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Fr=/&/g,Gr=/^\s*\/\/.*$/gm;function Nt(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=Nt(r.children,t)),r})}function Lr(e){var t,r,n,s=V,o=s.options,i=o===void 0?V:o,c=s.plugins,a=c===void 0?$e:c,u=function(g,l,w){return w.startsWith(r)&&w.endsWith(r)&&w.replaceAll(r,"").length>0?".".concat(t):g},p=a.slice();p.push(function(g){g.type===Ae&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(Fr,r).replace(n,u))}),i.prefix&&p.push(pr),p.push(cr);var h=function(g,l,w,I){l===void 0&&(l=""),w===void 0&&(w=""),I===void 0&&(I="&"),t=I,r=l,n=new RegExp("\\".concat(r,"\\b"),"g");var P=g.replace(Gr,""),x=ir(w||l?"".concat(w," ").concat(l," { ").concat(P," }"):P);i.namespace&&(x=Nt(x,i.namespace));var v=[];return we(x,ur(p.concat(fr(function(b){return v.push(b)})))),v};return h.hash=a.length?a.reduce(function(g,l){return l.name||q(15),U(g,l.name)},xt).toString():"",h}var Mr=new Ie,We=Lr(),Ot=N.createContext({shouldForwardProp:void 0,styleSheet:Mr,stylis:We});Ot.Consumer;N.createContext(void 0);function qe(){return xe.useContext(Ot)}var Br=function(){function e(t,r){var n=this;this.inject=function(s,o){o===void 0&&(o=We);var i=n.name+o.hash;s.hasNameForId(n.id,i)||s.insertRules(n.id,i,o(n.rules,i,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,Qe(this,function(){throw q(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=We),this.name+t.hash},e}(),Yr=function(e){return e>="A"&&e<="Z"};function ft(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;Yr(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var jt=function(e){return e==null||e===!1||e===""},Dt=function(e){var t,r,n=[];for(var s in e){var o=e[s];e.hasOwnProperty(s)&&!jt(o)&&(Array.isArray(o)&&o.isCss||W(o)?n.push("".concat(ft(s),":"),o,";"):ie(o)?n.push.apply(n,oe(oe(["".concat(s," {")],Dt(o),!1),["}"],!1)):n.push("".concat(ft(s),": ").concat((t=s,(r=o)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in dr||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function L(e,t,r,n){if(jt(e))return[];if(Je(e))return[".".concat(e.styledComponentId)];if(W(e)){if(!W(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var s=e(t);return L(s,t,r,n)}var o;return e instanceof Br?r?(e.inject(r,n),[e.getName(n)]):[e]:ie(e)?Dt(e):Array.isArray(e)?Array.prototype.concat.apply($e,e.map(function(i){return L(i,t,r,n)})):[e.toString()]}function Tt(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(W(r)&&!Je(r))return!1}return!0}var Wr=At(Pe),qr=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&Tt(t),this.componentId=r,this.baseHash=U(Wr,r),this.baseStyle=n,Ie.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var s=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))s=B(s,this.staticRulesId);else{var o=Be(L(this.rules,t,r,n)),i=Me(U(this.baseHash,o)>>>0);if(!r.hasNameForId(this.componentId,i)){var c=n(o,".".concat(i),void 0,this.componentId);r.insertRules(this.componentId,i,c)}s=B(s,i),this.staticRulesId=i}else{for(var a=U(this.baseHash,n.hash),u="",p=0;p<this.rules.length;p++){var h=this.rules[p];if(typeof h=="string")u+=h;else if(h){var g=Be(L(h,t,r,n));a=U(a,g+p),u+=g}}if(u){var l=Me(a>>>0);r.hasNameForId(this.componentId,l)||r.insertRules(this.componentId,l,n(u,".".concat(l),void 0,this.componentId)),s=B(s,l)}}return s},e}(),ae=N.createContext(void 0);ae.Consumer;function Jr(e){var t=N.useContext(ae),r=xe.useMemo(function(){return function(n,s){if(!n)throw q(14);if(W(n)){var o=n(s);return o}if(Array.isArray(n)||typeof n!="object")throw q(8);return s?_(_({},s),n):n}(e.theme,t)},[e.theme,t]);return e.children?N.createElement(ae.Provider,{value:r},e.children):null}var ze={};function Hr(e,t,r){var n=Je(e),s=e,o=!Te(e),i=t.attrs,c=i===void 0?$e:i,a=t.componentId,u=a===void 0?function(C,E){var y=typeof C!="string"?"sc":nt(C);ze[y]=(ze[y]||0)+1;var d="".concat(y,"-").concat(Et(Pe+y+ze[y]));return E?"".concat(E,"-").concat(d):d}(t.displayName,t.parentComponentId):a,p=t.displayName,h=p===void 0?function(C){return Te(C)?"styled.".concat(C):"Styled(".concat(Sr(C),")")}(e):p,g=t.displayName&&t.componentId?"".concat(nt(t.displayName),"-").concat(t.componentId):t.componentId||u,l=n&&s.attrs?s.attrs.concat(c).filter(Boolean):c,w=t.shouldForwardProp;if(n&&s.shouldForwardProp){var I=s.shouldForwardProp;if(t.shouldForwardProp){var P=t.shouldForwardProp;w=function(C,E){return I(C,E)&&P(C,E)}}else w=I}var x=new qr(r,g,n?s.componentStyle:void 0);function v(C,E){return function(y,d,H){var ce=y.attrs,Gt=y.componentStyle,Lt=y.defaultProps,Mt=y.foldedComponentIds,Bt=y.styledComponentId,Yt=y.target,Wt=N.useContext(ae),qt=qe(),ke=y.shouldForwardProp||qt.shouldForwardProp,Ve=Ct(d,Wt,Lt)||V,D=function(fe,te,pe){for(var re,M=_(_({},te),{className:void 0,theme:pe}),Oe=0;Oe<fe.length;Oe+=1){var de=W(re=fe[Oe])?re(M):re;for(var F in de)M[F]=F==="className"?B(M[F],de[F]):F==="style"?_(_({},M[F]),de[F]):de[F]}return te.className&&(M.className=B(M.className,te.className)),M}(ce,d,Ve),ue=D.as||Yt,ee={};for(var z in D)D[z]===void 0||z[0]==="$"||z==="as"||z==="theme"&&D.theme===Ve||(z==="forwardedAs"?ee.as=D.forwardedAs:ke&&!ke(z,ue)||(ee[z]=D[z]));var Xe=function(fe,te){var pe=qe(),re=fe.generateAndInjectStyles(te,pe.styleSheet,pe.stylis);return re}(Gt,D),Ne=B(Mt,Bt);return Xe&&(Ne+=" "+Xe),D.className&&(Ne+=" "+D.className),ee[Te(ue)&&!It.has(ue)?"class":"className"]=Ne,H&&(ee.ref=H),xe.createElement(ue,ee)}(b,C,E)}v.displayName=h;var b=N.forwardRef(v);return b.attrs=l,b.componentStyle=x,b.displayName=h,b.shouldForwardProp=w,b.foldedComponentIds=n?B(s.foldedComponentIds,s.styledComponentId):"",b.styledComponentId=g,b.target=n?s.target:e,Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(C){this._foldedDefaultProps=n?function(E){for(var y=[],d=1;d<arguments.length;d++)y[d-1]=arguments[d];for(var H=0,ce=y;H<ce.length;H++)Ye(E,ce[H],!0);return E}({},s.defaultProps,C):C}}),Qe(b,function(){return".".concat(b.styledComponentId)}),o&&$t(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function pt(e,t){for(var r=[e[0]],n=0,s=t.length;n<s;n+=1)r.push(t[n],e[n+1]);return r}var dt=function(e){return Object.assign(e,{isCss:!0})};function zt(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(W(e)||ie(e))return dt(L(pt($e,oe([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?L(n):dt(L(pt(n,t)))}function He(e,t,r){if(r===void 0&&(r=V),!t)throw q(1,t);var n=function(s){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return e(t,r,zt.apply(void 0,oe([s],o,!1)))};return n.attrs=function(s){return He(e,t,_(_({},r),{attrs:Array.prototype.concat(r.attrs,s).filter(Boolean)}))},n.withConfig=function(s){return He(e,t,_(_({},r),s))},n}var Ft=function(e){return He(Hr,e)},Kr=Ft;It.forEach(function(e){Kr[e]=Ft(e)});var Ur=function(){function e(t,r){this.rules=t,this.componentId=r,this.isStatic=Tt(t),Ie.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,r,n,s){var o=s(Be(L(this.rules,r,n,s)),""),i=this.componentId+t;n.insertRules(i,i,o)},e.prototype.removeStyles=function(t,r){r.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,r,n,s){t>2&&Ie.registerId(this.componentId+t),this.removeStyles(t,n),this.createStyles(t,r,n,s)},e}();function Qr(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=zt.apply(void 0,oe([e],t,!1)),s="sc-global-".concat(Et(JSON.stringify(n))),o=new Ur(n,s),i=function(a){var u=qe(),p=N.useContext(ae),h=N.useRef(u.styleSheet.allocateGSInstance(s)).current;return u.styleSheet.server&&c(h,a,u.styleSheet,p,u.stylis),N.useLayoutEffect(function(){if(!u.styleSheet.server)return c(h,a,u.styleSheet,p,u.stylis),function(){return o.removeStyles(h,u.styleSheet)}},[h,a,u.styleSheet,p,u.stylis]),null};function c(a,u,p,h,g){if(o.isStatic)o.renderStyles(a,lr,p,g);else{var l=_(_({},u),{theme:Ct(u,h,i.defaultProps)});o.renderStyles(a,l,p,g)}}return N.memo(i)}export{N as R,Kr as d,Qr as f,Jr as o,xe as r};
