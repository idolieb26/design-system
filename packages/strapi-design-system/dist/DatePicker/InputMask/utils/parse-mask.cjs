"use strict";const u=require("../constants.cjs");function o({mask:n,maskPlaceholder:i}){const f=[];if(!n)return{maskPlaceholder:null,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};if(typeof n=="string"){let t=!1,e="";n.split("").forEach(r=>{!t&&r==="\\"?t=!0:((t||!u.defaultFormatChars[r])&&f.push(e.length),e+=r,t=!1)}),n=e.split("").map((r,l)=>f.indexOf(l)===-1?u.defaultFormatChars[r]:r)}else n.forEach((t,e)=>{typeof t=="string"&&f.push(e)});i&&(i.length===1?i=n.map((t,e)=>f.indexOf(e)!==-1?t:i):i=i.split(""),f.forEach(t=>{i[t]=n[t]}),i=i.join(""));const p=f.filter((t,e)=>t===e).map(t=>n[t]).join("");let s=n.length-1;for(;f.indexOf(s)!==-1;)s--;return{maskPlaceholder:i,prefix:p,mask:n,lastEditablePosition:s,permanents:f}}module.exports=o;