!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var s in r)("object"==typeof exports?exports:e)[s]=r[s]}}(self,(()=>(()=>{"use strict";var e={d:(t,r)=>{for(var s in r)e.o(r,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:r[s]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{BasePO:()=>u,DatabaseService:()=>p,HttpOption:()=>s,InfoException:()=>r,Query:()=>a,base64:()=>d,file:()=>f,http:()=>c,httpType:()=>i,responseResult:()=>o,variable:()=>l});class r extends Error{constructor(e){super(e)}}const s=class{_url;_type;_header;_urlData;_data;constructor(e){this._url=e._url,this._type=e._type,this._header=e._header,this._urlData=e._urlData,this._data=e._data}get url(){return this._url}get type(){return this._type}get header(){return this._header?this._header:{}}get urlData(){return this._urlData?this._urlData:{}}get data(){return this._data?this._data:null}};var n;!function(e){e.POST="POST",e.GET="GET",e.PUT="PUT",e.DELETE="DELETE"}(n||(n={}));const i=n;class a{page;size;filter={};sort={}}const l={isNull:e=>null==e,isEmpty(e){if(this.isNull(e))return!0;let t=this.getType(e);return t===String&&""===e||t===Array&&0===e.length||t===Object&&0===Object.keys(e).length},getType(e){return this.isNull(e)?null:e.constructor},isObject(e){if(this.isNull(e))return!1;if(e instanceof Object){let t=this.getType(e);return null!=t&&(0===t.toString().indexOf("class")||t===Array||t===Object)}return!1},clone(e){if(this.isObject(e)){if(this.getType(e)===Array){let t=[];for(let r of e)t.push(this.clone(r));return t}{let t={};for(let r in e)if(e.hasOwnProperty(r)){let s=e[r];this.isObject(s)?t[r]=this.clone(s):t[r]=null}return this.assignment(t,e),t}}return this.isNull(e)?null:e},assignment(e,t,r){let s=this.getType(e);if(this.isObject(e)&&this.isObject(t))if(s===Array){let n=!0;if(!0===r&&this.getType(t)!==Array&&(n=!1),s!==this.getType(t)&&(n=!1),n){e.splice(0,e.length);for(let r of t)e.push(this.clone(r))}}else for(let s in e)if(e.hasOwnProperty(s)){let n=e[s],i=t[s];if(void 0===i)continue;this.isObject(n)?this.getType(n)===this.getType(i)?this.assignment(n,i):!this.isNull(r)&&this.getType(r)===Boolean&&r||(e[s]=this.clone(i)):!this.isNull(r)&&this.getType(r)===Boolean&&r?(this.isNull(n)||this.getType(n)===this.getType(i))&&(e[s]=this.clone(i)):e[s]=this.clone(i)}},toStr(e){return this.isNull(e)?null:this.isObject(e)?JSON.stringify(e):e.toString()},clean(e){if(this.isObject(e))for(let t in e)if(e.hasOwnProperty(t)){let r=e[t];this.getType(r)===Array?e[t]=[]:this.isObject(r)?this.clean(r):e[t]=null}},getValue(e,t){return this.isNull(e)||this.isEmpty(t)?null:e[t]},setValue(e,t,r){this.isEmpty(e)||this.isEmpty(t)||(e[t]=r)}};class o{flag;code;message;result;constructor(e){this.setData(e)}setData(e){l.assignment(this,e)}}class u{id}let h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";const d={encode(e){let t,r,s,n,i,a,l,o="",u=0;for(e=function(e){let t="";e=e.replace(/\r\n/g,"\n");for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t+=String.fromCharCode(s):s>127&&s<2048?(t+=String.fromCharCode(s>>6|192),t+=String.fromCharCode(63&s|128)):(t+=String.fromCharCode(s>>12|224),t+=String.fromCharCode(s>>6&63|128),t+=String.fromCharCode(63&s|128))}return t}(e);u<e.length;)t=e.charCodeAt(u++),r=e.charCodeAt(u++),s=e.charCodeAt(u++),n=t>>2,i=(3&t)<<4|r>>4,a=(15&r)<<2|s>>6,l=63&s,isNaN(r)?a=l=64:isNaN(s)&&(l=64),o=o+h.charAt(n)+h.charAt(i)+h.charAt(a)+h.charAt(l);return o},decode(e){let t,r,s,n,i,a,l,o="",u=0;for(e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");u<e.length;)n=h.indexOf(e.charAt(u++)),i=h.indexOf(e.charAt(u++)),a=h.indexOf(e.charAt(u++)),l=h.indexOf(e.charAt(u++)),t=n<<2|i>>4,r=(15&i)<<4|a>>2,s=(3&a)<<6|l,o+=String.fromCharCode(t),64!==a&&(o+=String.fromCharCode(r)),64!==l&&(o+=String.fromCharCode(s));return o=function(e){let t,r,s="",n=0,i=0;for(;n<e.length;)t=e.charCodeAt(n),t<128?(s+=String.fromCharCode(t),n++):t>191&&t<224?(r=e.charCodeAt(n+1),s+=String.fromCharCode((31&t)<<6|63&r),n+=2):(r=e.charCodeAt(n+1),i=e.charCodeAt(n+2),s+=String.fromCharCode((15&t)<<12|(63&r)<<6|63&i),n+=3);return s}(o),o}},c={send(e){return new Promise(((t,r)=>{let s=new XMLHttpRequest,n=this._getUrl(e),a=e.header,o=e.data;if(!l.isEmpty(e.data)){let t=!1;for(let r in e.data)if(l.getType(l.getValue(e.data,r))===File){t=!0;break}if(t){let t=new FormData;for(let r in e.data)t.append(r,l.getValue(e.data,r));o=t}}e.type!==i.GET&&l.setValue(a,"content-type","application/json"),s.open(e.type,n);for(let e in a)s.setRequestHeader(e,l.getValue(a,e));l.isEmpty(o)?s.send():l.getType(o)===FormData?s.send(o):s.send(l.toStr(o)),s.onreadystatechange=function(){4===s.readyState&&(200===s.status?t(s.response):r(s.response))}}))},download(e){return new Promise(((t,r)=>{try{window.open(this._getUrl(e)),t(void 0)}catch(e){r(e)}}))},asynchronousDownload(e){return new Promise(((t,r)=>{let s=new XMLHttpRequest;if(s.open(e.type,this._getUrl(e)),s.responseType="blob",!l.isEmpty(e.header))for(let t in e.header)s.setRequestHeader(t,l.getValue(e.header,t));s.send(),s.onload=function(){if(200===s.status){let e=new FileReader;e.onload=function(e){let n=e.target.result;if("data:application/json;base64,"===n.substring(0,29)){let e=d.decode(n.substring(29,n.length));return void r(e)}let i=document.createElement("a");i.download=decodeURIComponent(s.getResponseHeader("Content-disposition")).substring(20),i.href=e.target.result,i.click(),t(void 0)},e.readAsDataURL(s.response)}else try{s.responseText}catch(e){r(e)}}}))},_getUrl(e){let t=e.url;if(e.type===i.GET&&!l.isEmpty(e.urlData)){let r="?";for(let t in e.urlData){let s=l.getValue(e.urlData,t);l.isEmpty(s)||(s=l.toStr(s),r=r+t+"="+s+"&")}r="?"!==r?r.substring(0,r.length-1):"",t+=r}return t}};class p{url;data;constructor(e,t){this.url=e,this.data={query:{request:new a,response:new o({result:{count:null,data:null}})},save:{request:t,response:new o},saveList:{request:null,response:new o},delete:{request:t,response:new o},deleteList:{request:null,response:new o}}}query(e){return this.$send("query","POST",e)}save(e){return this.$send("save","POST",e)}saveList(e){return this.$send("saveList","POST",e)}doDelete(e){return this.$send("delete","POST",e)}deleteList(e){return this.$send("deleteList","POST",e)}$send(e,t,s){return new Promise(((n,i)=>{if(l.isEmpty(e))throw new r("方法名 is null");if(l.isEmpty(t))throw new r("type is null");l.isEmpty(this.data[e])&&(this.data[e]={request:{},response:new o}),l.isEmpty(s)||(this.data[e].request=s);let a={url:this.url+"/"+e,type:t,data:this.data[e].request};a=this.$requestHandler(a),c.send(a).then((t=>{let r=JSON.parse(t);this.data[e].response.setData(r),this.data[e].response.flag?n(this.data[e].response):i(this.data[e].response)})).catch((e=>{i(e)}))}))}$requestHandler(e){return e}}const f={select:()=>new Promise((e=>{let t=document.createElement("input");t.type="file",t.addEventListener("change",(function(){let r=t.files;e(null===r?null:r[0])})),t.click()}))};return t})()));