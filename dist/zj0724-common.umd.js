(function(h,w){typeof exports=="object"&&typeof module<"u"?w(exports):typeof define=="function"&&define.amd?define(["exports"],w):(h=typeof globalThis<"u"?globalThis:h||self,w(h["zj0724-common"]={}))})(this,function(h){"use strict";var w=(()=>`.auto-break{word-break:break-all}.no-break{white-space:nowrap}.center{display:flex;justify-content:center;align-items:center}
`)();class O extends Error{constructor(e){super(e)}}class A{constructor(e){this.url=e.url,this.type=e.type,this.header=e.header?e.header:{},this.param=e.param?e.param:{},this.data=e.data?e.data:{},this.config=e.config}}var p=(t=>(t.POST="POST",t.GET="GET",t.PUT="PUT",t.DELETE="DELETE",t))(p||{}),f={isNull(t){return t==null},isEmpty(t){if(this.isNull(t))return!0;let e=this.getType(t);return e===String&&t===""||e===Array&&t.length===0?!0:e===Object&&Object.keys(t).length===0},getType(t){return this.isNull(t)?null:t.constructor},isObject(t){if(this.isNull(t))return!1;if(t instanceof Object){let e=this.getType(t);return e==null?!1:JSON.stringify(t)!==void 0||e.toString().indexOf("class")===0||e===Array?!0:e===Object}return!1},clone(t){if(this.isObject(t))if(this.getType(t)===Array){let e=[];for(let r of t)e.push(this.clone(r));return e}else{let e={};for(let r in t)e[r]=this.clone(t[r]);return e}else return this.isNull(t)?null:t},assignment(t,e,r){let i=this.getType(t),a=this.isEmpty(r)?!0:r===!0;if(!(!this.isObject(t)||!this.isObject(e)))if(i===Array){let s=!0;if(a&&this.getType(e)!==Array&&(s=!1),i!==this.getType(e)&&(s=!1),s){t.splice(0,t.length);for(let l of e)t.push(l)}}else if(a)for(let s in t){let l=t[s],o=e[s];if(l===void 0||o===void 0)continue;let u=!1;(l===null||o===null&&!this.isObject(l)||this.getType(l)===this.getType(o))&&(u=!0),u&&(t[s]=o)}else for(let s in e){let l=e[s];l!==void 0&&(t[s]=l)}},toStr(t){return this.isNull(t)?null:this.isObject(t)?JSON.stringify(t):t.toString()},clean(t){if(this.isObject(t)){for(let e in t)if(t.hasOwnProperty(e)){let r=t[e];this.getType(r)===Array?t[e]=[]:this.isObject(r)?this.clean(r):t[e]=null}}},addKey(t,e){if(!(!this.isObject(t)||!this.isObject(e)))for(let r in e){let i=e[r];this.isNull(t[r])&&(this.isObject(i)?this.getType(i)===Array?t[r]=[]:t[r]={}:t[r]=null),this.addKey(t[r],i)}},filterKey(t,e){for(let r in t)e.indexOf(r)===-1&&delete t[r]}};class T{constructor(e){e&&(f.filterKey(e,["page","size","filter","sort"]),f.assignment(this,e,!1))}}class g{constructor(e){this.flag=!1,this.result=null,f.assignment(this,e)}}class S{constructor(){this.count=0,this.data=[]}}class k{constructor(){this.id=null}}var v={send(t){return new Promise((e,r)=>{let i=this._getUrl(t),a=t.type,s=t.header?t.header:{},l=t.data,o=t.config,u=!1;if(f.isObject(l)){for(let n in l){let c=f.getType(l[n]);if(c===File||c===FileList){u=!0;break}if(c===Array){for(let d of l[n])if(f.getType(d)===File||f.getType(d)===FileList){u=!0;break}}}if(u){let n=new FormData;for(let c in l){let d=l[c];if(f.getType(d)===FileList)for(let m of d)n.append(c,m);else if(f.getType(d)===Array)for(let m of d)n.append(c,m);else n.append(c,d)}l=n}}if(f.isObject(l)&&f.getType(l)!==FormData){let n="BODY";switch(o&&(n=o.dataType),n){case"BODY":l=JSON.stringify(l);break;case"FORM_DATA":let c=new FormData;for(let d in l)c.append(d,l[d]);l=c;break}}a!==p.GET&&!u&&(s["content-type"]="application/json"),fetch(i,{cache:"no-cache",credentials:"same-origin",mode:"cors",redirect:"follow",referrer:"no-referrer",method:a,headers:s,body:l}).then(n=>{let c=n.text();n.ok?e(c):r(c)}).catch(n=>{r(n)})})},download(t){return new Promise((e,r)=>{try{window.open(this._getUrl(t)),e()}catch(i){r(i)}})},asyncDownload(t){return new Promise((e,r)=>{fetch(this._getUrl(t)).then(i=>{i.blob().then(a=>{try{let s=document.createElement("a"),l=window.URL.createObjectURL(a),o=i.headers.get("Content-Disposition");o=o||"";let n=/filename=(.*?)$/g.exec(o);n!==null&&(o=n[1]),s.href=l,s.download=o,s.click(),window.URL.revokeObjectURL(l),e()}catch(s){r(s)}})})})},_getUrl(t){let e=t.url,r=t.param?t.param:{};if(!f.isEmpty(r)){let i="?";for(let a in r){let s=r[a];f.isEmpty(s)||(i=i+a+"="+s+"&")}i!=="?"?i=i.substring(0,i.length-1):i="",e=e+i}return e}};class C{constructor(e){this.data={},this.url=e}$send(e,r){return new Promise((i,a)=>{let s=e.url,l=e.type,o=e.header,u=e.data,n=e.param;if(f.isEmpty(s))throw new O("\u65B9\u6CD5\u540D is null");if(f.isEmpty(l))throw new O("type is null");f.isEmpty(this.data[s])&&(this.data[s]={request:null,response:null}),u!=null&&(this.data[s].request=u),(f.isEmpty(r)||r===void 0)&&(r=()=>{});let c={url:this.url+"/"+s,type:l,header:o,data:this.data[s].request,param:n};r(c),this.$requestHandler(c),v.send(c).then(d=>{f.clean(this.data[s].response);let m;try{m=JSON.parse(d)}catch{m=d}f.isObject(this.data[s].response)?f.assignment(this.data[s].response,m,!1):this.data[s].response=m,i(this.data[s].response)}).catch(d=>{a(d)})})}$download(e,r){return new Promise((i,a)=>{let s=e.url,l=e.param;if(f.isEmpty(s))throw new O("\u65B9\u6CD5\u540D is null");f.isEmpty(this.data[s])&&(this.data[s]={request:null,response:null}),l!==void 0&&(this.data[s].request=l),(r===void 0||f.isEmpty(r))&&(r=()=>{});let o={url:this.url+"/"+s,type:p.GET,param:this.data[s].request};r(o),this.$requestHandler(o),v.download(o).then(()=>{i()}).catch(u=>{a(u)})})}$requestHandler(e){}}class E extends C{constructor(e){super(e),this.data={}}$send(e,r){return new Promise((i,a)=>{super.$send(e,r).then(s=>{s.flag?i(s):a(s)}).catch(s=>{a(s)})})}}class D extends E{constructor(e,r,i){super(e),this.data={query:{request:new T({filter:i}),response:new g({result:new S})},save:{request:f.clone(r),response:new g},saveList:{request:[],response:new g},delete:{request:f.clone(r),response:new g},deleteList:{request:[],response:new g}}}query(e){return this.$send({url:"query",type:p.POST,data:e})}save(e){return this.$send({url:"save",type:p.POST,data:e})}saveList(e){return this.$send({url:"saveList",type:p.POST,data:e})}doDelete(e){return this.$send({url:"delete",type:p.POST,data:e})}deleteList(e){return this.$send({url:"deleteList",type:p.POST,data:e})}}let y="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",P=function(t){let e="";t=t.replace(/\r\n/g,`
`);for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e+=String.fromCharCode(i):i>127&&i<2048?(e+=String.fromCharCode(i>>6|192),e+=String.fromCharCode(i&63|128)):(e+=String.fromCharCode(i>>12|224),e+=String.fromCharCode(i>>6&63|128),e+=String.fromCharCode(i&63|128))}return e},b=function(t){let e="",r=0,i,a,s=0;for(;r<t.length;)i=t.charCodeAt(r),i<128?(e+=String.fromCharCode(i),r++):i>191&&i<224?(a=t.charCodeAt(r+1),e+=String.fromCharCode((i&31)<<6|a&63),r+=2):(a=t.charCodeAt(r+1),s=t.charCodeAt(r+2),e+=String.fromCharCode((i&15)<<12|(a&63)<<6|s&63),r+=3);return e};var L={encode(t){let e="",r,i,a,s,l,o,u,n=0;for(t=P(t);n<t.length;)r=t.charCodeAt(n++),i=t.charCodeAt(n++),a=t.charCodeAt(n++),s=r>>2,l=(r&3)<<4|i>>4,o=(i&15)<<2|a>>6,u=a&63,isNaN(i)?o=u=64:isNaN(a)&&(u=64),e=e+y.charAt(s)+y.charAt(l)+y.charAt(o)+y.charAt(u);return e},decode(t){let e="",r,i,a,s,l,o,u,n=0;for(t=t.replace(/[^A-Za-z0-9\+\/\=]/g,"");n<t.length;)s=y.indexOf(t.charAt(n++)),l=y.indexOf(t.charAt(n++)),o=y.indexOf(t.charAt(n++)),u=y.indexOf(t.charAt(n++)),r=s<<2|l>>4,i=(l&15)<<4|o>>2,a=(o&3)<<6|u,e=e+String.fromCharCode(r),o!==64&&(e=e+String.fromCharCode(i)),u!==64&&(e=e+String.fromCharCode(a));return e=b(e),e}},N={select(){return new Promise(t=>{let e=document.createElement("input");e.type="file",e.addEventListener("change",function(){let r=e.files;r===null?t():t(r[0])}),e.click()})},selectMore(){return new Promise(t=>{let e=document.createElement("input");e.type="file",e.multiple=!0,e.addEventListener("change",function(){let r=e.files;t(r)}),e.click()})}},U={create(t){let e={loading:!1,display:!1,...t,async open(r){this.display=!0,this.loading=!0,t.openHandler&&await t.openHandler(r),this.loading=!1},close(){this.display=!1}};return t.close&&(e.close=t.close),e}},$={getScreenHeight(){return window.screen.height}};h.BasePO=k,h.BaseService=E,h.DatabaseService=D,h.HttpRequest=A,h.InfoException=O,h.Query=T,h.QueryResult=S,h.ResponseResult=g,h.Service=C,h.base64=L,h.file=N,h.http=v,h.httpType=p,h.popupUtil=U,h.variable=f,h.windowUtil=$,Object.defineProperties(h,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
