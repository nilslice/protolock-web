var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e,n){const r=e.subscribe(n);t.$$.on_destroy.push(r.unsubscribe?()=>r.unsubscribe():r)}function s(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function p(){return d(" ")}function f(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function h(t,e){e=""+e,t.data!==e&&(t.data=e)}function m(t,e,n){t.style.setProperty(e,n)}let $;function g(t){$=t}const b=[],k=Promise.resolve();let y=!1;const v=[],w=[],x=[];function C(t){w.push(t)}function _(){const t=new Set;do{for(;b.length;){const t=b.shift();g(t),S(t.$$)}for(;v.length;)v.shift()();for(;w.length;){const e=w.pop();t.has(e)||(e(),t.add(e))}}while(b.length);for(;x.length;)x.pop()();y=!1}function S(t){t.fragment&&(t.update(t.dirty),r(t.before_render),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_render.forEach(C))}function N(t,n,c){const{fragment:i,on_mount:s,on_destroy:a,after_render:l}=t.$$;i.m(n,c),C(()=>{const n=s.map(e).filter(o);a?a.push(...n):r(n),t.$$.on_mount=[]}),l.forEach(C)}function E(t,e){t.$$.dirty||(b.push(t),y||(y=!0,k.then(_)),t.$$.dirty=n()),t.$$.dirty[e]=!0}function H(e,o,c,i,s,a){const l=$;g(e);const u=o.props||{},d=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],before_render:[],after_render:[],context:new Map(l?l.$$.context:[]),callbacks:n(),dirty:null};let p=!1;var f;d.ctx=c?c(e,u,(t,n)=>{d.ctx&&s(d.ctx[t],d.ctx[t]=n)&&(d.bound[t]&&d.bound[t](n),p&&E(e,t))}):u,d.update(),p=!0,r(d.before_render),d.fragment=i(d.ctx),o.target&&(o.hydrate?d.fragment.l((f=o.target,Array.from(f.childNodes))):d.fragment.c(),o.intro&&e.$$.fragment.i&&e.$$.fragment.i(),N(e,o.target,o.anchor),_()),g(l)}class O{$destroy(){var e,n;n=!0,(e=this).$$&&(r(e.$$.on_destroy),e.$$.fragment.d(n),e.$$.on_destroy=e.$$.fragment=null,e.$$.ctx={}),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function T(e,n=t){let r;const o=[];function i(t){if(c(e,t)){if(e=t,!r)return;o.forEach(t=>t[1]()),o.forEach(t=>t[0](e))}}return{set:i,update:function(t){i(t(e))},subscribe:function(c,s=t){const a=[c,s];return o.push(a),1===o.length&&(r=n(i)||t),c(e),()=>{const t=o.indexOf(a);-1!==t&&o.splice(t,1),0===o.length&&r()}}}}const A=T(""),I=T(""),M=T({}),R=T(0);function L(e){var n,r,o,c,i;return{c(){n=u("div"),(r=u("label")).innerHTML="<code>demo.proto</code>",o=p(),c=u("textarea"),r.htmlFor="input",n.className="input",i=f(c,"input",e.textarea_input_handler)},m(t,i){a(t,n,i),s(n,r),s(n,o),s(n,c),c.value=e.$input},p(t,e){t.$input&&(c.value=e.$input)},i:t,o:t,d(t){t&&l(n),i()}}}function P(t,e,n){let r;return i(t,A,t=>{n("$input",r=t)}),{$input:r,textarea_input_handler:function(){A.set(this.value)}}}A.set('// Copyright 2015 The gRPC Authors\n// http://www.apache.org/licenses/LICENSE-2.0\n//\n// The canonical version of this proto can be found at\n// https://github.com/grpc/grpc-proto/blob/master/grpc/health/v1/health.proto\n\nsyntax = "proto3";\n\npackage grpc.health.v1;\n\nmessage HealthCheckRequest {\n  string service = 1;\n}\n\nmessage HealthCheckResponse {\n  enum ServingStatus {\n    UNKNOWN = 0;\n    SERVING = 1;\n    NOT_SERVING = 2;\n    SERVICE_UNKNOWN = 3; \n  }\n  ServingStatus status = 1;\n}\n\nservice Health {\n  rpc Check(HealthCheckRequest) returns (HealthCheckResponse);\n  rpc Watch(HealthCheckRequest) returns (stream HealthCheckResponse);\n}\n');class j extends O{constructor(t){super(),H(this,t,P,L,c,[])}}function D(e){var n,r,o,c;return{c(){n=u("button"),r=d("$ protolock init"),o=d("\n(click to lock your .proto definition)"),n.disabled=e.disabled,c=f(n,"click",e.init)},m(t,e){a(t,n,e),s(n,r),a(t,o,e)},p(t,e){t.disabled&&(n.disabled=e.disabled)},i:t,o:t,d(t){t&&(l(n),l(o)),c()}}}function W(t,e,n){let r;i(t,A,t=>{n("$input",r=t)});let o=!1;return{disabled:o,init:function(){const t=window.protolock.initialize(r);t||console.log("init: something went wrong"),I.update(e=>JSON.parse(t)),n("disabled",o=!0),setTimeout(()=>{document.body&&window.scrollTo(0,document.body.scrollHeight)},1)}}}class G extends O{constructor(t){super(),H(this,t,W,D,c,[])}}function J(e){var n,r,o,c;return{c(){n=u("button"),r=d("$ protolock status"),o=d("\n(click to check your .proto backward-compatibility)"),n.disabled=e.disabled,c=f(n,"click",e.status)},m(t,e){a(t,n,e),s(n,r),a(t,o,e)},p(t,e){t.disabled&&(n.disabled=e.disabled)},i:t,o:t,d(t){t&&(l(n),l(o)),c()}}}function q(t,e,n){let r,o,c;return i(t,I,t=>{n("$lock",r=t)}),i(t,A,t=>{n("$input",o=t)}),t.$$.update=((t={$lock:1})=>{t.$lock&&n("disabled",c=!r)}),{status:function(){M.set([]);const t=window.protolock.status(JSON.stringify(r),o);M.update(e=>JSON.parse(t)),R.update(t=>t+=1),setTimeout(()=>{document.body&&window.scrollTo(0,document.body.scrollHeight)},1)},disabled:c}}class B extends O{constructor(t){super(),H(this,t,q,J,c,[])}}function V(t,e,n){const r=Object.create(t);return r.error=e[n],r}function z(e){var n,r,o;return{c(){(n=u("h4")).textContent="Compatibility Status:",r=p(),(o=u("p")).textContent="API is backward-compatible!",m(o,"color","green")},m(t,e){a(t,n,e),a(t,r,e),a(t,o,e)},p:t,d(t){t&&(l(n),l(r),l(o))}}}function F(t){for(var e,n,r,o,c,i=t.$errors,s=[],d=0;d<i.length;d+=1)s[d]=K(V(t,i,d));return{c(){(e=u("h4")).textContent="Compatibility Status:",n=p(),(r=u("p")).textContent="API is not backward-compatible!",o=p(),c=u("ul");for(var t=0;t<s.length;t+=1)s[t].c();m(r,"color","red"),c.className="errors"},m(t,i){a(t,e,i),a(t,n,i),a(t,r,i),a(t,o,i),a(t,c,i);for(var l=0;l<s.length;l+=1)s[l].m(c,null)},p(t,e){if(t.$errors){i=e.$errors;for(var n=0;n<i.length;n+=1){const r=V(e,i,n);s[n]?s[n].p(t,r):(s[n]=K(r),s[n].c(),s[n].m(c,null))}for(;n<s.length;n+=1)s[n].d(1);s.length=i.length}},d(t){t&&(l(e),l(n),l(r),l(o),l(c)),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(s,t)}}}function K(t){var e,n,r,o,c,i,p=t.error.message,f=t.error.filepath;return{c(){e=u("li"),n=u("code"),r=d(p),o=d(" ["),c=d(f),i=d("]")},m(t,l){a(t,e,l),s(e,n),s(n,r),s(n,o),s(n,c),s(n,i)},p(t,e){t.$errors&&p!==(p=e.error.message)&&h(r,p),t.$errors&&f!==(f=e.error.filepath)&&h(c,f)},d(t){t&&l(e)}}}function U(e){var n;function r(t){return t.$errors&&t.$errors.length>0?F:t.noErrors?z:void 0}var o=r(e),c=o&&o(e);return{c(){n=u("div"),c&&c.c(),n.className="report"},m(t,e){a(t,n,e),c&&c.m(n,null)},p(t,e){o===(o=r(e))&&c?c.p(t,e):(c&&c.d(1),(c=o&&o(e))&&(c.c(),c.m(n,null)))},i:t,o:t,d(t){t&&l(n),c&&c.d()}}}function Y(t,e,n){let r,o,c,s;return i(t,I,t=>{n("$lock",r=t)}),i(t,R,t=>{n("$runCount",o=t)}),i(t,M,t=>{n("$errors",c=t)}),t.$$.update=((t={$lock:1,$runCount:1})=>{(t.$lock||t.$runCount)&&n("noErrors",s=r&&o>0)}),{noErrors:s,$errors:c}}class Q extends O{constructor(t){super(),H(this,t,Y,U,c,[])}}function X(t){var e,n,r,o;return{c(){(e=u("label")).innerHTML="<code>proto.lock</code>",n=p(),(r=u("textarea")).disabled=!0,r.value=o=JSON.stringify(t.$lock)},m(t,o){a(t,e,o),a(t,n,o),a(t,r,o)},p(t,e){t.$lock&&o!==(o=JSON.stringify(e.$lock))&&(r.value=o)},d(t){t&&(l(e),l(n),l(r))}}}function Z(t){var e,n,r,o,c,i,h,m,$,g,b,k,y,v,w,x,C,_,S,E,H,O,T,A,I,M,R,L,P,D,W,J,q,V,z,F,K,U,Y,Z,et,nt,rt,ot,ct,it,st,at=new j({}),lt=new G({}),ut=t.$lock&&X(t),dt=new B({}),pt=new Q({});return{c(){e=u("script"),n=u("script"),r=p(),o=u("div"),(c=u("h1")).textContent="Protolock",i=p(),(h=u("p")).innerHTML='<a href="https://circleci.com/gh/nilslice/protolock/tree/master" target="_blank" rel="noopener noreferrer"><img src="https://circleci.com/gh/nilslice/protolock/tree/master.svg?style=svg" alt="CircleCI"></a>\n\t\t\t        <a href="https://godoc.org/github.com/nilslice/protolock" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/godoc-reference-blue.svg?style=flat" alt="GoDoc"></a>\n\t\t\t        <a href="https://hub.docker.com/r/nilslice/protolock" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/docker/cloud/build/nilslice/protolock.svg" alt="Docker"></a>',m=p(),($=u("p")).textContent="Protocol Buffer companion tool. Track your .proto files and prevent changes to messages and services which impact API compatibility.",g=p(),(b=u("p")).innerHTML='\n\t\t\t        Source: <a href="https://github.com/nilslice/protolock" target="_blank" rel="noopener noreferrer">github.com/nilslice/protolock</a>',k=p(),(y=u("h2")).textContent="DEMO",v=p(),(w=u("h3")).textContent="Step 1: Define a .proto",x=p(),(C=u("p")).innerHTML="Either use the demo <code>demo.proto</code> or write your own here:",_=p(),at.$$.fragment.c(),S=p(),(E=u("h3")).innerHTML="Step 2: Initialize a <code>proto.lock</code> file:",H=p(),lt.$$.fragment.c(),O=p(),ut&&ut.c(),T=p(),(A=u("h3")).textContent="Step 3: Modify the .proto and check for API compatibility issues",I=p(),dt.$$.fragment.c(),M=p(),pt.$$.fragment.c(),R=p(),L=u("footer"),P=u("hr"),D=d("\n        Compiled with "),(W=u("a")).textContent="Go",J=d(" (wasm) "),(q=u("span")).textContent="·",V=d(" Demo built with "),(z=u("a")).textContent="Svelte",F=p(),(K=u("span")).textContent="·",U=d(" Demo "),(Y=u("a")).textContent="source code",Z=d(" (BSD-3)\n        "),et=u("br"),nt=d("\n        © "),rt=d(t.year),ot=p(),(ct=u("a")).textContent="Steve Manuel",e.src="https://cdn.jsdelivr.net/npm/text-encoding@0.7.0/lib/encoding.min.js",n.src="/wasm_exec.js",W.href="https://golang.org",W.target="_blank",W.rel="noopener noreferrer",q.className="dot",z.href="https://svelte.dev",z.target="_blank",z.rel="noopener noreferrer",K.className="dot",Y.href="https://github.com/nilslice/protolock-web",Y.target="_blank",Y.rel="noopener noreferrer",ct.href="https://twitter.com/nilslice",ct.target="_blank",L.className="svelte-5vt20c",o.id="page",st=f(n,"load",tt)},m(t,l){s(document.head,e),s(document.head,n),a(t,r,l),a(t,o,l),s(o,c),s(o,i),s(o,h),s(o,m),s(o,$),s(o,g),s(o,b),s(o,k),s(o,y),s(o,v),s(o,w),s(o,x),s(o,C),s(o,_),N(at,o,null),s(o,S),s(o,E),s(o,H),N(lt,o,null),s(o,O),ut&&ut.m(o,null),s(o,T),s(o,A),s(o,I),N(dt,o,null),s(o,M),N(pt,o,null),s(o,R),s(o,L),s(L,P),s(L,D),s(L,W),s(L,J),s(L,q),s(L,V),s(L,z),s(L,F),s(L,K),s(L,U),s(L,Y),s(L,Z),s(L,et),s(L,nt),s(L,rt),s(L,ot),s(L,ct),it=!0},p(t,e){e.$lock?ut?ut.p(t,e):((ut=X(e)).c(),ut.m(o,T)):ut&&(ut.d(1),ut=null)},i(t){it||(at.$$.fragment.i(t),lt.$$.fragment.i(t),dt.$$.fragment.i(t),pt.$$.fragment.i(t),it=!0)},o(t){at.$$.fragment.o(t),lt.$$.fragment.o(t),dt.$$.fragment.o(t),pt.$$.fragment.o(t),it=!1},d(t){l(e),l(n),t&&(l(r),l(o)),at.$destroy(),lt.$destroy(),ut&&ut.d(),dt.$destroy(),pt.$destroy(),st()}}}function tt(){WebAssembly.instantiateStreaming||(WebAssembly.instantiateStreaming=(async(t,e)=>{const n=await(await t).arrayBuffer();return await WebAssembly.instantiate(n,e)}));const t=new Go;let e,n;WebAssembly.instantiateStreaming(fetch("/bin/protolock.wasm"),t.importObject).then(r=>{e=r.module,n=r.instance,async function(){await t.run(n),n=await WebAssembly.instantiate(e,t.importObject)}()}).catch(t=>{console.error(t)})}function et(t,e,n){let r;return i(t,I,t=>{n("$lock",r=t)}),{year:(new Date).getFullYear(),$lock:r}}return new class extends O{constructor(t){super(),H(this,t,et,Z,c,[])}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map