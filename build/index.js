module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=require("react")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=new class{constructor(){this.addListener=(e=>this.listeners.push(e)),this.addEvent=(e=>{this.events.push(e),this.listeners.forEach(t=>{t.onAddEvent(e)})}),this.getEvents=(()=>this.events),this.toObject=(()=>this.events.reduce((e,t)=>Object.assign({},e,{[t.getIdentifier()]:t.get()}),{})),this.fromObject=(e=>Object.keys(e).forEach(t=>{this.events.forEach(n=>{n.getIdentifier()===t&&n.set(e[t])})})),this.listeners=[],this.events=[]}};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3);t.Spit=r.default;var i=n(1);t.Store=i.default;var s=n(4);t.SpitEvent=s.default;var o=n(5);t.useSpit=o.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),o=(r=s)&&r.__esModule?r:{default:r};t.default=function(e){return function(t){function n(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return r.set=function(e){return r.setState({data:e})},e.addListener(r),r.state={data:e.get()},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,o.default.Component),i(n,[{key:"render",value:function(){return(0,this.props.children)({data:this.state.data,set:e.set})}},{key:"componentWillUnmount",value:function(){e.removeListener(this)}}]),n}()}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(1);t.default=class{constructor(e,t){this.addListener=(e=>{this.listeners.push(e)}),this.set=(e=>(this.listeners.forEach(t=>{t.set(e,this,t.debug&&new Error("Debug"))}),this.data=e,e)),this.setInitial=(e=>this.set(e)),this.get=(()=>this.data),this.getIdentifier=(()=>this.identifier),this.removeListener=(e=>this.listeners.filter(t=>t!==e)),this.data=e,this.listeners=[],this.identifier=t,r.default.addEvent(this)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0);t.default=(e=>{const[t,n]=r.useState(e.get());return r.useEffect(()=>{const t={set:n};e.addListener(t)},[]),[t,e.set]})}]);