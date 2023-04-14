"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[966],{1966:function(e,t,r){var o=r(7294);function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function a(e,t){return e(t={exports:{}},t.exports),t.exports}/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s="function"==typeof Symbol&&Symbol.for,i=s?Symbol.for("react.element"):60103,c=s?Symbol.for("react.portal"):60106,l=s?Symbol.for("react.fragment"):60107,p=s?Symbol.for("react.strict_mode"):60108,u=s?Symbol.for("react.profiler"):60114,f=s?Symbol.for("react.provider"):60109,d=s?Symbol.for("react.context"):60110,y=s?Symbol.for("react.async_mode"):60111,h=s?Symbol.for("react.concurrent_mode"):60111,m=s?Symbol.for("react.forward_ref"):60112,b=s?Symbol.for("react.suspense"):60113,g=s?Symbol.for("react.suspense_list"):60120,v=s?Symbol.for("react.memo"):60115,S=s?Symbol.for("react.lazy"):60116,x=s?Symbol.for("react.block"):60121,E=s?Symbol.for("react.fundamental"):60117,O=s?Symbol.for("react.responder"):60118,T=s?Symbol.for("react.scope"):60119;function $(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case i:switch(e=e.type){case y:case h:case l:case u:case p:case b:return e;default:switch(e=e&&e.$$typeof){case d:case m:case S:case v:case f:return e;default:return t}}case c:return t}}}function C(e){return $(e)===h}var _={AsyncMode:y,ConcurrentMode:h,ContextConsumer:d,ContextProvider:f,Element:i,ForwardRef:m,Fragment:l,Lazy:S,Memo:v,Portal:c,Profiler:u,StrictMode:p,Suspense:b,isAsyncMode:function(e){return C(e)||$(e)===y},isConcurrentMode:C,isContextConsumer:function(e){return $(e)===d},isContextProvider:function(e){return $(e)===f},isElement:function(e){return"object"==typeof e&&null!==e&&e.$$typeof===i},isForwardRef:function(e){return $(e)===m},isFragment:function(e){return $(e)===l},isLazy:function(e){return $(e)===S},isMemo:function(e){return $(e)===v},isPortal:function(e){return $(e)===c},isProfiler:function(e){return $(e)===u},isStrictMode:function(e){return $(e)===p},isSuspense:function(e){return $(e)===b},isValidElementType:function(e){return"string"==typeof e||"function"==typeof e||e===l||e===h||e===u||e===p||e===b||e===g||"object"==typeof e&&null!==e&&(e.$$typeof===S||e.$$typeof===v||e.$$typeof===f||e.$$typeof===d||e.$$typeof===m||e.$$typeof===E||e.$$typeof===O||e.$$typeof===T||e.$$typeof===x)},typeOf:$};function M(){}function P(){}a(function(e,t){}),a(function(e){e.exports=_}),Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable,function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var o=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==o.join(""))return!1;var n={};"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}(),Function.call.bind(Object.prototype.hasOwnProperty),P.resetWarningCache=M;var w=function(){function e(e,t,r,o,n,a){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==a){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:P,resetWarningCache:M};return r.PropTypes=r,r},j=a(function(e){e.exports=w()}),R=function(e){var t;function r(){for(var t,r=arguments.length,a=Array(r),s=0;s<r;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))||this).state={rootElemWidth:0,rootElemHeight:0,isOnHover:!1,container:{},shine:{},layers:t.props.children?t.props.children.length?t.props.children:[t.props.children]:[o.createElement("div",{style:t.props.style},[])],layersTransform:[]},t.componentDidMount=function(){t.props.isStatic||t.setState({rootElemWidth:t.node.clientWidth||t.node.offsetWidth||t.node.scrollWidth,rootElemHeight:t.node.clientHeight||t.node.offsetHeight||t.node.scrollHeight})},t.handleMove=function(e){var r=e.pageX,o=e.pageY,n=t.state.layers?t.state.layers.length:1,a=t.state,s=a.rootElemWidth,i=a.rootElemHeight,c=document.body.scrollTop||document.getElementsByTagName("html")[0].scrollTop,l=document.body.scrollLeft,p=t.node.getBoundingClientRect(),u=320/s,f=.07*u,d=.52-(r-p.left-l)/s,y=.52-(o-p.top-c)/i,h=o-p.top-c-i/2,m=r-p.left-l-s/2,b=(h-y)*(Math.min(p.width/p.height,1)*f),g=180*Math.atan2(h,m)/Math.PI-90;t.setState({container:{transform:"rotateX("+b+"deg) rotateY("+(d-m)*f+"deg) "+(t.state.isOnHover?" scale3d(1.07,1.07,1.07)":"")},shine:{background:"linear-gradient("+(g<0?g+360:g)+"deg, rgba(255, 255, 255, "+(o-p.top-c)/i*t.props.shineStrength+") 0%, rgba(255, 255, 255, 0) 80%)",transform:"translateX("+(d*n-.1)+"px) translateY("+(y*n-.1)+"px)"},layersTransform:t.state.layers?t.state.layers.map(function(e,t){return{transform:"translateX("+d*n*(1*t/u)+"px) translateY("+y*n*(1*t/u)+"px)"}}):t.props.children})},t.handleTouchMove=function(e){e.preventDefault();var r=e.touches[0],o=r.pageX,n=r.pageY;t.handleMove({pageX:o,pageY:n})},t.handleEnter=function(){t.setState({isOnHover:!0})},t.handleLeave=function(){t.setState({isOnHover:!1,container:{},shine:{},layersTransform:[]})},t.renderLayers=function(){return o.createElement("div",{className:"parallax-card-layers",style:n({position:"relative",borderRadius:t.props.borderRadius,overflow:"hidden",transformStyle:"preserve-3d",backgroundColor:"white",zIndex:"2"},t.props.style)},t.state.layersTransform&&o.Children.map(t.state.layers,function(e,r){return o.cloneElement(e,{style:n({},e.props.style,{transition:"all 0.1s ease-out",zIndex:"4"},t.state.layersTransform[r]?t.state.layersTransform[r]:{})})}))},t}return(t=r).prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e,r.prototype.render=function(){var e=this;return o.createElement("div",{style:{display:"flex"}},o.createElement("div",{onClick:this.props.onClick,style:{borderRadius:this.props.borderRadius,transformStyle:"preserve-3d",WebkitTapHighlightColor:"rgba(#000, 0)",cursor:!!this.props.cursorPointer&&"pointer",transform:"perspective("+3*this.state.rootElemWidth+"px)",zIndex:this.state.isOnHover?"9":"unset"},onMouseMove:this.handleMove,onMouseEnter:this.handleEnter,onMouseLeave:this.handleLeave,onTouchMove:this.handleTouchMove,onTouchStart:this.handleEnter,onTouchEnd:this.handleLeave,className:"parallax-card",ref:function(t){e.node=t}},o.createElement("div",{className:"parallax-card-container",style:n({position:"relative",borderRadius:this.props.borderRadius,transition:"all 0.2s ease-out"},this.state.container)},o.createElement("div",{className:"parallax-card-shadow",style:{position:"absolute",top:"5%",left:"5%",right:"5%",bottom:"5%",transition:"all 0.2s ease-out",zIndex:"0",boxShadow:this.state.isOnHover?"0 45px 100px rgba(14, 21, 47, 0.4), 0 16px 40px rgba(14, 21, 47, 0.4)":"0 8px 30px rgba(14, 21, 47, 0.6)"}}),o.createElement("div",{className:"parallax-card-shine",style:n({position:"absolute",top:"0",left:"0",right:"0",bottom:"0",borderRadius:this.props.borderRadius,background:"linear-gradient(135deg,rgba(255, 255, 255, "+this.props.shineStrength/1.6+") 0%,rgba(255, 255, 255, 0) 60%)",zIndex:"8"},this.state.shine)}),this.renderLayers())))},r}(o.Component);R.propTypes={isStatic:j.bool,borderRadius:j.string,shineStrength:j.number,cursorPointer:j.bool},R.defaultProps={isStatic:!1,borderRadius:"20px",shineStrength:.4,cursorPointer:!0},t.Z=R}}]);