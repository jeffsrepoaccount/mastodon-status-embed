let t,e,n=!1;const l={},s=t=>"object"==(t=typeof t)||"function"===t,o=(t,e,...n)=>{let l=null,o=!1,c=!1;const i=[],u=e=>{for(let n=0;n<e.length;n++)l=e[n],Array.isArray(l)?u(l):null!=l&&"boolean"!=typeof l&&((o="function"!=typeof t&&!s(l))&&(l+=""),o&&c?i[i.length-1].t+=l:i.push(o?r(null,l):l),c=o)};if(u(n),e){const t=e.className||e.class;t&&(e.class="object"!=typeof t?t:Object.keys(t).filter((e=>t[e])).join(" "))}const a=r(t,null);return a.l=e,i.length>0&&(a.o=i),a},r=(t,e)=>({i:0,u:t,t:e,$:null,o:null,l:null}),c={},i=new WeakMap,u=t=>"sc-"+t.h,a=(t,e,n,l,o,r)=>{if(n!==l){let c=A(t,e);if(e.toLowerCase(),"class"===e){const e=t.classList,s=$(n),o=$(l);e.remove(...s.filter((t=>t&&!o.includes(t)))),e.add(...o.filter((t=>t&&!s.includes(t))))}else{const i=s(l);if((c||i&&null!==l)&&!o)try{if(t.tagName.includes("-"))t[e]=l;else{const s=null==l?"":l;"list"===e?c=!1:null!=n&&t[e]==s||(t[e]=s)}}catch(t){}null==l||!1===l?!1===l&&""!==t.getAttribute(e)||t.removeAttribute(e):(!c||4&r||o)&&!i&&t.setAttribute(e,l=!0===l?"":l)}}},f=/\s/,$=t=>t?t.split(f):[],h=(t,e,n,s)=>{const o=11===e.$.nodeType&&e.$.host?e.$.host:e.$,r=t&&t.l||l,c=e.l||l;for(s in r)s in c||a(o,s,r[s],void 0,n,e.i);for(s in c)a(o,s,r[s],c[s],n,e.i)},y=(e,n,l)=>{const s=n.o[l];let o,r,c=0;if(null!==s.t)o=s.$=V.createTextNode(s.t);else if(o=s.$=V.createElement(s.u),h(null,s,!1),null!=t&&o["s-si"]!==t&&o.classList.add(o["s-si"]=t),s.o)for(c=0;c<s.o.length;++c)r=y(e,s,c),r&&o.appendChild(r);return o},d=(t,n,l,s,o,r)=>{let c,i=t;for(i.shadowRoot&&i.tagName===e&&(i=i.shadowRoot);o<=r;++o)s[o]&&(c=y(null,l,o),c&&(s[o].$=c,i.insertBefore(c,n)))},m=(t,e,n,l)=>{for(;e<=n;++e)(l=t[e])&&l.$.remove()},p=(t,e)=>t.u===e.u,b=(t,e)=>{const n=e.$=t.$,l=t.o,s=e.o,o=e.t;null===o?(h(t,e,!1),null!==l&&null!==s?((t,e,n,l)=>{let s,o=0,r=0,c=e.length-1,i=e[0],u=e[c],a=l.length-1,f=l[0],$=l[a];for(;o<=c&&r<=a;)null==i?i=e[++o]:null==u?u=e[--c]:null==f?f=l[++r]:null==$?$=l[--a]:p(i,f)?(b(i,f),i=e[++o],f=l[++r]):p(u,$)?(b(u,$),u=e[--c],$=l[--a]):p(i,$)?(b(i,$),t.insertBefore(i.$,u.$.nextSibling),i=e[++o],$=l[--a]):p(u,f)?(b(u,f),t.insertBefore(u.$,i.$),u=e[--c],f=l[++r]):(s=y(e&&e[r],n,r),f=l[++r],s&&i.$.parentNode.insertBefore(s,i.$));o>c?d(t,null==l[a+1]?null:l[a+1].$,n,l,r,a):r>a&&m(e,o,c)})(n,l,e,s):null!==s?(null!==t.t&&(n.textContent=""),d(n,null,e,s,0,s.length-1)):null!==l&&m(l,0,l.length-1)):t.t!==o&&(n.data=o)},w=(t,e)=>{e&&!t.m&&e["s-p"]&&e["s-p"].push(new Promise((e=>t.m=e)))},S=(t,e)=>{if(t.i|=16,!(4&t.i))return w(t,t.p),X((()=>g(t,e)));t.i|=512},g=(t,e)=>{const n=t.S;let l;return l=O(l,(()=>C(n,"componentWillRender"))),O(l,(()=>j(t,n,e)))},j=async(t,e,n)=>{const l=t.g,s=l["s-rc"];n&&(t=>{const e=t.j,n=t.g,l=e.i,s=((t,e)=>{let n=u(e);const l=F.get(n);if(t=11===t.nodeType?t:V,l)if("string"==typeof l){let e,s=i.get(t=t.head||t);s||i.set(t,s=new Set),s.has(n)||(e=V.createElement("style"),e.innerHTML=l,t.insertBefore(e,t.querySelector("link")),s&&s.add(n))}else t.adoptedStyleSheets.includes(l)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),e);10&l&&(n["s-sc"]=s,n.classList.add(s+"-h"))})(t);M(t,e),s&&(s.map((t=>t())),l["s-rc"]=void 0);{const e=l["s-p"],n=()=>v(t);0===e.length?n():(Promise.all(e).then(n),t.i|=4,e.length=0)}},M=(n,l)=>{try{l=l.render(),n.i&=-17,n.i|=2,((n,l)=>{const s=n.g,i=n.M||r(null,null),u=(t=>t&&t.u===c)(l)?l:o(null,null,l);e=s.tagName,u.u=null,u.i|=4,n.M=u,u.$=i.$=s.shadowRoot||s,t=s["s-sc"],b(i,u)})(n,l)}catch(t){L(t,n.g)}return null},v=t=>{const e=t.g,n=t.p;64&t.i||(t.i|=64,P(e),t.v(e),n||k()),t.m&&(t.m(),t.m=void 0),512&t.i&&Q((()=>S(t,!1))),t.i&=-517},k=()=>{P(V.documentElement),Q((()=>(t=>{const e=_.ce("appload",{detail:{namespace:"mastodon-status"}});return t.dispatchEvent(e),e})(H)))},C=(t,e,n)=>{if(t&&t[e])try{return t[e](n)}catch(t){L(t)}},O=(t,e)=>t&&t.then?t.then(e):e(),P=t=>t.classList.add("hydrated"),x=(t,e,n)=>{if(e.k){const l=Object.entries(e.k),o=t.prototype;if(l.map((([t,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(o,t,{get(){return((t,e)=>R(this).C.get(e))(0,t)},set(n){((t,e,n,l)=>{const o=R(t),r=o.C.get(e),c=o.i,i=o.S;n=((t,e)=>null==t||s(t)?t:1&e?t+"":t)(n,l.k[e][0]),8&c&&void 0!==r||n===r||Number.isNaN(r)&&Number.isNaN(n)||(o.C.set(e,n),i&&2==(18&c)&&S(o,!1))})(this,t,n,e)},configurable:!0,enumerable:!0})})),1&n){const e=new Map;o.attributeChangedCallback=function(t,n,l){_.jmp((()=>{const n=e.get(t);if(this.hasOwnProperty(n))l=this[n],delete this[n];else if(o.hasOwnProperty(n)&&"number"==typeof this[n]&&this[n]==l)return;this[n]=(null!==l||"boolean"!=typeof this[n])&&l}))},t.observedAttributes=l.filter((([t,e])=>15&e[0])).map((([t,n])=>{const l=n[1]||t;return e.set(l,t),l}))}}return t},E=(t,e={})=>{const n=[],l=e.exclude||[],s=H.customElements,o=V.head,r=o.querySelector("meta[charset]"),c=V.createElement("style"),i=[];let a,f=!0;Object.assign(_,e),_.O=new URL(e.resourcesUrl||"./",V.baseURI).href,t.map((t=>{t[1].map((e=>{const o={i:e[0],h:e[1],k:e[2],P:e[3]};o.k=e[2];const r=o.h,c=class extends HTMLElement{constructor(t){super(t),W(t=this,o),1&o.i&&t.attachShadow({mode:"open"})}connectedCallback(){a&&(clearTimeout(a),a=null),f?i.push(this):_.jmp((()=>(t=>{if(0==(1&_.i)){const e=R(t),n=e.j,l=()=>{};if(!(1&e.i)){e.i|=1;{let n=t;for(;n=n.parentNode||n.host;)if(n["s-p"]){w(e,e.p=n);break}}n.k&&Object.entries(n.k).map((([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}})),(async(t,e,n,l,s)=>{if(0==(32&e.i)){{if(e.i|=32,(s=q(n)).then){const t=()=>{};s=await s,t()}s.isProxied||(x(s,n,2),s.isProxied=!0);const t=()=>{};e.i|=8;try{new s(e)}catch(t){L(t)}e.i&=-9,t()}if(s.style){let t=s.style;const e=u(n);if(!F.has(e)){const l=()=>{};((t,e,n)=>{let l=F.get(t);B&&n?(l=l||new CSSStyleSheet,"string"==typeof l?l=e:l.replaceSync(e)):l=e,F.set(t,l)})(e,t,!!(1&n.i)),l()}}}const o=e.p,r=()=>S(e,!0);o&&o["s-rc"]?o["s-rc"].push(r):r()})(0,e,n)}l()}})(this)))}disconnectedCallback(){_.jmp((()=>{}))}componentOnReady(){return R(this).N}};o.R=t[0],l.includes(r)||s.get(r)||(n.push(r),s.define(r,x(c,o,1)))}))})),c.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",c.setAttribute("data-styles",""),o.insertBefore(c,r?r.nextSibling:o.firstChild),f=!1,i.length?i.map((t=>t.connectedCallback())):_.jmp((()=>a=setTimeout(k,30)))},N=new WeakMap,R=t=>N.get(t),T=(t,e)=>N.set(e.S=t,e),W=(t,e)=>{const n={i:0,g:t,j:e,C:new Map};return n.N=new Promise((t=>n.v=t)),t["s-p"]=[],t["s-rc"]=[],N.set(t,n)},A=(t,e)=>e in t,L=(t,e)=>(0,console.error)(t,e),U=new Map,q=t=>{const e=t.h.replace(/-/g,"_"),n=t.R,l=U.get(n);return l?l[e]:import(`./${n}.entry.js`).then((t=>(U.set(n,t),t[e])),L)
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/},F=new Map,H="undefined"!=typeof window?window:{},V=H.document||{head:{}},_={i:0,O:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,l)=>t.addEventListener(e,n,l),rel:(t,e,n,l)=>t.removeEventListener(e,n,l),ce:(t,e)=>new CustomEvent(t,e)},z=t=>Promise.resolve(t),B=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replaceSync}catch(t){}return!1})(),D=[],G=[],I=(t,e)=>l=>{t.push(l),n||(n=!0,e&&4&_.i?Q(K):_.raf(K))},J=t=>{for(let e=0;e<t.length;e++)try{t[e](performance.now())}catch(t){L(t)}t.length=0},K=()=>{J(D),J(G),(n=D.length>0)&&_.raf(K)},Q=t=>z().then(t),X=I(G,!0);export{E as b,o as h,z as p,T as r}