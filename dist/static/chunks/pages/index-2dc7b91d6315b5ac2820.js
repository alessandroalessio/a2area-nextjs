_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"2W6z":function(e,t,n){"use strict";var r=function(){};e.exports=r},"8OQS":function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}},Aiso:function(e,t,n){e.exports=n("dQHF")},K9S6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];function r(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var i=null;return t.forEach((function(e){if(null==i){var t=e.apply(void 0,n);null!=t&&(i=t)}})),i}return(0,a.default)(r)};var r,i=n("pvIh"),a=(r=i)&&r.__esModule?r:{default:r};e.exports=t.default},QLaP:function(e,t,n){"use strict";e.exports=function(e,t,n,r,i,a,o,s){if(!e){var u;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,i,a,o,s],c=0;(u=new Error(t.replace(/%s/g,(function(){return l[c++]})))).name="Invariant Violation"}throw u.framesToPop=1,u}}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return le}));var r=n("nKUr"),i=n("MX0m"),a=n.n(i),o=n("g4pe"),s=n.n(o),u=n("YFqc"),l=n.n(u),c=n("Aiso"),d=n.n(c);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}var p=n("TSYQ"),m=n.n(p),b=n("q1tI"),h=n.n(b),g=h.a.createContext({});g.Consumer,g.Provider;function y(e,t){var n=Object(b.useContext)(g);return e||n[t]||t}var x=h.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.fluid,i=e.as,a=void 0===i?"div":i,o=e.className,s=v(e,["bsPrefix","fluid","as","className"]),u=y(n,"container"),l="string"===typeof r?"-"+r:"-fluid";return h.a.createElement(a,f({ref:t},s,{className:m()(o,r?""+u+l:u)}))}));x.displayName="Container",x.defaultProps={fluid:!1};var j=x,w=["xl","lg","md","sm","xs"],N=h.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,i=e.noGutters,a=e.as,o=void 0===a?"div":a,s=v(e,["bsPrefix","className","noGutters","as"]),u=y(n,"row"),l=u+"-cols",c=[];return w.forEach((function(e){var t,n=s[e];delete s[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=n&&"object"===typeof n?n.cols:n)&&c.push(""+l+r+"-"+t)})),h.a.createElement(o,f({ref:t},s,{className:m.a.apply(void 0,[r,u,i&&"no-gutters"].concat(c))}))}));N.displayName="Row",N.defaultProps={noGutters:!1};var O=N,S=["xl","lg","md","sm","xs"],A=h.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,i=e.as,a=void 0===i?"div":i,o=v(e,["bsPrefix","className","as"]),s=y(n,"col"),u=[],l=[];return S.forEach((function(e){var t,n,r,i=o[e];if(delete o[e],"object"===typeof i&&null!=i){var a=i.span;t=void 0===a||a,n=i.offset,r=i.order}else t=i;var c="xs"!==e?"-"+e:"";t&&u.push(!0===t?""+s+c:""+s+c+"-"+t),null!=r&&l.push("order"+c+"-"+r),null!=n&&l.push("offset"+c+"-"+n)})),u.length||u.push(s),h.a.createElement(a,f({},o,{ref:t,className:m.a.apply(void 0,[r].concat(u,l))}))}));A.displayName="Col";var q=A;n("K9S6"),n("QLaP");function P(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function k(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function E(e,t){return Object.keys(t).reduce((function(n,r){var i,a=n,o=a[P(r)],s=a[r],u=v(a,[P(r),r].map(k)),l=t[r],c=function(e,t,n){var r=Object(b.useRef)(void 0!==e),i=Object(b.useState)(t),a=i[0],o=i[1],s=void 0!==e,u=r.current;return r.current=s,!s&&u&&a!==t&&o(t),[s?e:a,Object(b.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];n&&n.apply(void 0,[e].concat(r)),o(e)}),[n])]}(s,o,e[l]),d=c[0],p=c[1];return f({},u,((i={})[r]=d,i[l]=p,i))}),e)}function _(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function C(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function z(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}_.__suppressDeprecationWarning=!0,C.__suppressDeprecationWarning=!0,z.__suppressDeprecationWarning=!0;var R=h.a.createContext(null);R.displayName="NavbarContext";var I=R,D=h.a.createContext(null);D.displayName="CardContext";var L=D,M=Function.prototype.bind.call(Function.prototype.call,[].slice);var K=function(e){return e&&"function"!==typeof e?function(t){e.current=t}:e};var U=function(e,t){return Object(b.useMemo)((function(){return function(e,t){var n=K(e),r=K(t);return function(e){n&&n(e),r&&r(e)}}(e,t)}),[e,t])},V=h.a.createContext(null);V.displayName="NavContext";var W=V,T=function(e,t){return void 0===t&&(t=null),null!=e?String(e):t||null},F=h.a.createContext(null),H=h.a.createContext(null),B=function(){},Q=h.a.forwardRef((function(e,t){var n,r,i=e.as,a=void 0===i?"ul":i,o=e.onSelect,s=e.activeKey,u=e.role,l=e.onKeyDown,c=v(e,["as","onSelect","activeKey","role","onKeyDown"]),d=Object(b.useReducer)((function(e){return!e}),!1)[1],p=Object(b.useRef)(!1),m=Object(b.useContext)(F),g=Object(b.useContext)(H);g&&(u=u||"tablist",s=g.activeKey,n=g.getControlledId,r=g.getControllerId);var y=Object(b.useRef)(null),x=function(e){var t=y.current;if(!t)return null;var n,r=(n="[data-rb-event-key]:not(.disabled)",M(t.querySelectorAll(n))),i=t.querySelector(".active");if(!i)return null;var a=r.indexOf(i);if(-1===a)return null;var o=a+e;return o>=r.length&&(o=0),o<0&&(o=r.length-1),r[o]},j=function(e,t){null!=e&&(o&&o(e,t),m&&m(e,t))};Object(b.useEffect)((function(){if(y.current&&p.current){var e=y.current.querySelector("[data-rb-event-key].active");e&&e.focus()}p.current=!1}));var w=U(t,y);return h.a.createElement(F.Provider,{value:j},h.a.createElement(W.Provider,{value:{role:u,activeKey:T(s),getControlledId:n||B,getControllerId:r||B}},h.a.createElement(a,f({},c,{onKeyDown:function(e){var t;switch(l&&l(e),e.key){case"ArrowLeft":case"ArrowUp":t=x(-1);break;case"ArrowRight":case"ArrowDown":t=x(1);break;default:return}t&&(e.preventDefault(),j(t.dataset.rbEventKey,e),p.current=!0,d())},ref:w,role:u}))))})),Y=h.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,i=e.children,a=e.as,o=void 0===a?"div":a,s=v(e,["bsPrefix","className","children","as"]);return n=y(n,"nav-item"),h.a.createElement(o,f({},s,{ref:t,className:m()(r,n)}),i)}));Y.displayName="NavItem";var J=Y;var G=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];e.apply(this,r),t.apply(this,r)}}),null)};function X(e){return!e||"#"===e.trim()}var Z=h.a.forwardRef((function(e,t){var n=e.as,r=void 0===n?"a":n,i=e.disabled,a=e.onKeyDown,o=v(e,["as","disabled","onKeyDown"]),s=function(e){var t=o.href,n=o.onClick;(i||X(t))&&e.preventDefault(),i?e.stopPropagation():n&&n(e)};return X(o.href)&&(o.role=o.role||"button",o.href=o.href||"#"),i&&(o.tabIndex=-1,o["aria-disabled"]=!0),h.a.createElement(r,f({ref:t},o,{onClick:s,onKeyDown:G((function(e){" "===e.key&&(e.preventDefault(),s(e))}),a)}))}));Z.displayName="SafeAnchor";var $=Z;var ee=function(e){var t=Object(b.useRef)(e);return Object(b.useEffect)((function(){t.current=e}),[e]),t};n("2W6z");var te=h.a.forwardRef((function(e,t){var n=e.active,r=e.className,i=e.eventKey,a=e.onSelect,o=e.onClick,s=e.as,u=v(e,["active","className","eventKey","onSelect","onClick","as"]),l=T(i,u.href),c=Object(b.useContext)(F),d=Object(b.useContext)(W),p=n;if(d){u.role||"tablist"!==d.role||(u.role="tab");var g=d.getControllerId(l),y=d.getControlledId(l);u["data-rb-event-key"]=l,u.id=g||u.id,u["aria-controls"]=y||u["aria-controls"],p=null==n&&null!=l?d.activeKey===l:n}"tab"===u.role&&(u.disabled&&(u.tabIndex=-1,u["aria-disabled"]=!0),u["aria-selected"]=p);var x=function(e){var t=ee(e);return Object(b.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}((function(e){o&&o(e),null!=l&&(a&&a(l,e),c&&c(l,e))}));return h.a.createElement(s,f({},u,{ref:t,onClick:x,className:m()(r,p&&"active")}))}));te.defaultProps={disabled:!1};var ne=te,re={disabled:!1,as:$},ie=h.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.disabled,i=e.className,a=e.href,o=e.eventKey,s=e.onSelect,u=e.as,l=v(e,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return n=y(n,"nav-link"),h.a.createElement(ne,f({},l,{href:a,ref:t,eventKey:o,as:u,disabled:r,onSelect:s,className:m()(i,n,r&&"disabled")}))}));ie.displayName="NavLink",ie.defaultProps=re;var ae=ie,oe=h.a.forwardRef((function(e,t){var n,r,i,a=E(e,{activeKey:"onSelect"}),o=a.as,s=void 0===o?"div":o,u=a.bsPrefix,l=a.variant,c=a.fill,d=a.justify,p=a.navbar,g=a.className,x=a.children,j=a.activeKey,w=v(a,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]),N=y(u,"nav"),O=!1,S=Object(b.useContext)(I),A=Object(b.useContext)(L);return S?(r=S.bsPrefix,O=null==p||p):A&&(i=A.cardHeaderBsPrefix),h.a.createElement(Q,f({as:s,ref:t,activeKey:j,className:m()(g,(n={},n[N]=!O,n[r+"-nav"]=O,n[i+"-"+l]=!!i,n[N+"-"+l]=!!l,n[N+"-fill"]=c,n[N+"-justified"]=d,n))},w),x)}));oe.displayName="Nav",oe.defaultProps={justify:!1,fill:!1},oe.Item=J,oe.Link=ae;var se=oe;function ue(){return Object(r.jsxs)(j,{class:"header-wrapper mt-5 mb-5",children:[Object(r.jsxs)(O,{className:"align-content-center",children:[Object(r.jsx)(q,{md:1,children:Object(r.jsx)(d.a,{src:"/assets/img/header/logo_50x50.webp",alt:"Realizzazione Siti Web",width:50,height:50})}),Object(r.jsx)(q,{md:8,className:"d-none d-md-inline-block",children:Object(r.jsxs)(se,{children:[Object(r.jsx)(se.Item,{children:Object(r.jsx)(se.Link,{href:"/servizi/",className:"text-dark ls-1 text-uppercase",children:"Servizi"})}),Object(r.jsx)(se.Item,{children:Object(r.jsx)(se.Link,{href:"/portfolio/",className:"text-dark ls-1 text-uppercase",children:"Portfolio"})}),Object(r.jsx)(se.Item,{children:Object(r.jsx)(se.Link,{href:"/blog/",className:"text-dark ls-1 text-uppercase",children:"Blog"})}),Object(r.jsx)(se.Item,{children:Object(r.jsx)(se.Link,{href:"/contatti/",className:"text-dark ls-1 text-uppercase",children:"Contatti"})})]})}),Object(r.jsx)(q,{md:3,children:Object(r.jsx)(l.a,{href:"/preventivo/",children:Object(r.jsx)("a",{className:"jsx-2533222860 btn btn-outline-dark border-3 rounded-pill text-uppercase pl-4 pr-4",children:"Preventivo gratuito"})})})]}),Object(r.jsx)(a.a,{id:"2533222860",children:[".header-wrapper.jsx-2533222860 .btn.jsx-2533222860{background:red;}"]})]})}function le(){return Object(r.jsxs)("div",{className:"jsx-4053663753 container",children:[Object(r.jsxs)(s.a,{children:[Object(r.jsx)("title",{className:"jsx-4053663753",children:"Realizzazione Siti Web Alessandria"}),Object(r.jsx)("link",{rel:"icon",href:"/favicon.ico",className:"jsx-4053663753"})]}),Object(r.jsx)(ue,{}),Object(r.jsx)("div",{className:"jsx-4053663753 main-wrapper",children:Object(r.jsx)("p",{className:"jsx-4053663753",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur orci orci, euismod eget ornare nec, lacinia et magna. Aliquam urna mauris, malesuada at porta a, viverra sed sem. Sed id diam ut augue iaculis tincidunt sit amet eget tortor. Pellentesque consequat dictum augue, quis scelerisque risus maximus sed. Nunc tempus sit amet odio quis tempor. Aliquam mi massa, dignissim et enim et, efficitur pulvinar velit. Nunc vitae venenatis magna, id faucibus arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent ut tortor felis. Sed ac faucibus ligula, sed auctor ligula. Nullam interdum interdum dolor, ac tincidunt nulla luctus in. Morbi quis odio eget nibh vulputate tempor. Suspendisse rutrum ex sed augue convallis consectetur. Ut efficitur, felis ut finibus vulputate, nibh lacus rutrum lectus, posuere dignissim tortor ante sed metus. Mauris vel eleifend nisl. Aenean convallis metus ut fermentum semper. Duis volutpat pretium metus, nec volutpat tortor vulputate non. Nulla sed est quis tortor aliquet pulvinar sit amet et est. Mauris non risus leo. Phasellus blandit congue volutpat. Aenean varius purus arcu, id fringilla dui congue quis. Maecenas fermentum sollicitudin justo. Aliquam euismod diam tellus. Nulla pellentesque luctus pulvinar. Mauris non velit egestas, malesuada neque in, faucibus mauris. Phasellus nec odio vitae mauris gravida fringilla. Suspendisse dignissim sem ac risus tincidunt laoreet. Nulla hendrerit quam non eros hendrerit, nec rhoncus purus ultricies. Cras et erat lectus. Praesent posuere odio venenatis nunc posuere placerat. In maximus diam sed urna vestibulum, eget condimentum arcu posuere. Sed ornare tincidunt ultricies. Cras a volutpat ante. Phasellus tempor lorem mauris, sed maximus mi volutpat et. Quisque nec lorem sit amet est vestibulum sodales. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec nec velit sit amet quam hendrerit interdum. Vestibulum rhoncus mi dignissim ligula convallis convallis. Vivamus sit amet rutrum nisi. Vestibulum varius ante sed ipsum tempus, vel eleifend nibh varius. Donec eu urna nec turpis scelerisque imperdiet et et quam. Nunc dictum eros a porttitor fringilla. Maecenas interdum luctus elit id maximus. Pellentesque placerat, ante nec tincidunt vestibulum, ipsum tortor pretium ante, et tincidunt ligula felis a libero. Nullam blandit id quam et tincidunt. Praesent vitae tortor sapien. Quisque ut commodo turpis. Donec justo dolor, posuere id lectus sit amet, hendrerit efficitur nunc. Cras aliquam molestie sagittis. Mauris eget massa eu augue lacinia ullamcorper vel vitae metus. Vivamus efficitur, urna at ornare pharetra, mi lectus hendrerit nulla, sit amet viverra ligula turpis nec ipsum. Phasellus ut mi consectetur, pellentesque tellus quis, sollicitudin erat. Suspendisse potenti. Aenean luctus lobortis augue, vel fringilla purus. Vestibulum a neque ut augue vehicula blandit. Ut eget posuere ex. Vestibulum pretium augue a magna condimentum, in convallis lorem accumsan. Sed vulputate ex in dictum gravida."})}),Object(r.jsx)(a.a,{id:"1486862249",children:[]}),Object(r.jsx)(a.a,{id:"1486862249",children:[]})]})}},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var o=i.apply(null,r);o&&e.push(o)}else if("object"===a)for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(t,[]))||(e.exports=r)}()},UWYU:function(e,t,n){"use strict";t.__esModule=!0,t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[]}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),i=n("284h");t.__esModule=!0,t.default=void 0;var a=i(n("q1tI")),o=n("elyg"),s=n("nOHt"),u=n("vNVm"),l={};function c(e,t,n,r){if(e&&(0,o.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(i?"%"+i:"")]=!0}}var d=function(e){var t=!1!==e.prefetch,n=(0,s.useRouter)(),i=n&&n.pathname||"/",d=a.default.useMemo((function(){var t=(0,o.resolveHref)(i,e.href,!0),n=r(t,2),a=n[0],s=n[1];return{href:a,as:e.as?(0,o.resolveHref)(i,e.as):s||a}}),[i,e.href,e.as]),f=d.href,v=d.as,p=e.children,m=e.replace,b=e.shallow,h=e.scroll,g=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var y=a.Children.only(p),x=y&&"object"===typeof y&&y.ref,j=(0,u.useIntersection)({rootMargin:"200px"}),w=r(j,2),N=w[0],O=w[1],S=a.default.useCallback((function(e){N(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,N]);(0,a.useEffect)((function(){var e=O&&t&&(0,o.isLocalURL)(f),r="undefined"!==typeof g?g:n&&n.locale,i=l[f+"%"+v+(r?"%"+r:"")];e&&!i&&c(n,f,v,{locale:r})}),[v,f,O,g,t,n]);var A={ref:S,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,a,s,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(n))&&(e.preventDefault(),null==s&&(s=r.indexOf("#")<0),t[i?"replace":"push"](n,r,{shallow:a,locale:u,scroll:s}).then((function(e){e&&s&&document.body.focus()})))}(e,n,f,v,m,b,h,g)},onMouseEnter:function(e){(0,o.isLocalURL)(f)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),c(n,f,v,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var q="undefined"!==typeof g?g:n&&n.locale,P=(0,o.getDomainLocale)(v,q,n&&n.locales,n&&n.domainLocales);A.href=P||(0,o.addBasePath)((0,o.addLocale)(v,q,n&&n.defaultLocale))}return a.default.cloneElement(y,A)};t.default=d},dEHY:function(e,t,n){"use strict";t.__esModule=!0,t.toBase64=function(e){return window.btoa(e)}},dQHF:function(e,t,n){"use strict";var r=n("J4zp"),i=n("RIqP"),a=n("TqRt");t.__esModule=!0,t.default=function(e){var t=e.src,n=e.sizes,a=e.unoptimized,s=void 0!==a&&a,d=e.priority,v=void 0!==d&&d,p=e.loading,b=e.className,h=e.quality,g=e.width,w=e.height,N=e.objectFit,O=e.objectPosition,S=e.loader,A=void 0===S?j:S,q=(0,o.default)(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","objectFit","objectPosition","loader"]),P=n?"responsive":"intrinsic",k=!1;"unsized"in q?(k=Boolean(q.unsized),delete q.unsized):"layout"in q&&(q.layout&&(P=q.layout),delete q.layout);0;var E=!v&&("lazy"===p||"undefined"===typeof p);t&&t.startsWith("data:")&&(s=!0,E=!1);var _,C,z,R=(0,f.useIntersection)({rootMargin:"200px",disabled:!E}),I=r(R,2),D=I[0],L=I[1],M=!E||L,K=x(g),U=x(w),V=x(h),W={visibility:M?"inherit":"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:N,objectPosition:O};if("undefined"!==typeof K&&"undefined"!==typeof U&&"fill"!==P){var T=U/K,F=isNaN(T)?"100%":"".concat(100*T,"%");"responsive"===P?(_={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},C={display:"block",boxSizing:"border-box",paddingTop:F}):"intrinsic"===P?(_={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},C={boxSizing:"border-box",display:"block",maxWidth:"100%"},z='<svg width="'.concat(K,'" height="').concat(U,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===P&&(_={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:K,height:U})}else"undefined"===typeof K&&"undefined"===typeof U&&"fill"===P&&(_={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0});var H={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};M&&(H=function(e){var t=e.src,n=e.unoptimized,r=e.layout,a=e.width,o=e.quality,s=e.sizes,u=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var l=function(e,t){if("number"!==typeof e||"fill"===t||"responsive"===t)return{widths:m,kind:"w"};return{widths:i(new Set([e,2*e].map((function(e){return y.find((function(t){return t>=e}))||y[y.length-1]})))),kind:"x"}}(a,r),c=l.widths,d=l.kind,f=c.length-1;return{src:u({src:t,quality:o,width:c[f]}),sizes:s||"w"!==d?s:"100vw",srcSet:c.map((function(e,n){return"".concat(u({src:t,quality:o,width:e})," ").concat("w"===d?e:n+1).concat(d)})).join(", ")}}({src:t,unoptimized:s,layout:P,width:K,quality:V,sizes:n,loader:A}));k&&(_=void 0,C=void 0,W=void 0);return u.default.createElement("div",{style:_},C?u.default.createElement("div",{style:C},z?u.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,role:"presentation",src:"data:image/svg+xml;base64,".concat((0,c.toBase64)(z))}):null):null,u.default.createElement("img",Object.assign({},q,H,{decoding:"async",className:b,ref:D,style:W})),v?u.default.createElement(l.default,null,u.default.createElement("link",{key:"__nimg-"+H.src+H.srcSet+H.sizes,rel:"preload",as:"image",href:H.srcSet?void 0:H.src,imagesrcset:H.srcSet,imagesizes:H.sizes})):null)};var o=a(n("8OQS")),s=a(n("pVnL")),u=a(n("q1tI")),l=a(n("8Kt/")),c=n("dEHY"),d=n("UWYU"),f=n("vNVm");var v=new Map([["imgix",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality,a=["auto=format","fit=max","w="+r],o="";i&&a.push("q="+i);a.length&&(o="?"+a.join("&"));return"".concat(t).concat(w(n)).concat(o)}],["cloudinary",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality,a=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(t).concat(a).concat(w(n))}],["akamai",function(e){var t=e.root,n=e.src,r=e.width;return"".concat(t).concat(w(n),"?imwidth=").concat(r)}],["default",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}]]),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"}||d.imageConfigDefault,m=p.deviceSizes,b=p.imageSizes,h=p.loader,g=p.path,y=(p.domains,[].concat(i(m),i(b)));function x(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function j(e){var t=v.get(h);if(t)return t((0,s.default)({root:g},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(d.VALID_LOADERS.join(", "),". Received: ").concat(h))}function w(e){return"/"===e[0]?e.slice(1):e}m.sort((function(e,t){return e-t})),y.sort((function(e,t){return e-t}))},pVnL:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},pvIh:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,r,i,a,o){var s=i||"<<anonymous>>",u=o||r;if(null==n[r])return t?new Error("Required "+a+" `"+u+"` was not specified in `"+s+"`."):null;for(var l=arguments.length,c=Array(l>6?l-6:0),d=6;d<l;d++)c[d-6]=arguments[d];return e.apply(void 0,[n,r,s,a,u].concat(c))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),i=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!s,i=(0,a.useRef)(),l=(0,a.useState)(!1),c=r(l,2),d=c[0],f=c[1],v=(0,a.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),n||d||e&&e.tagName&&(i.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=u.get(t);if(n)return n;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return u.set(t,n={id:t,observer:i,elements:r}),n}(n),i=r.id,a=r.observer,o=r.elements;return o.set(e,t),a.observe(e),function(){o.delete(e),a.unobserve(e),0===o.size&&(a.disconnect(),u.delete(i))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return(0,a.useEffect)((function(){s||d||(0,o.default)((function(){return f(!0)}))}),[d]),[v,d]};var a=n("q1tI"),o=i(n("0G5g")),s="undefined"!==typeof IntersectionObserver;var u=new Map},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1,2,3]]]);