"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const c=()=>{const e=new Intl.DateTimeFormat(void 0,{weekday:"long"}).format,t=new Date(1970,0,1),n=new Date(1970,0,2),o=new Date(1970,0,3),a=new Date(1970,0,4),s=new Date(1970,0,5),u=new Date(1970,0,6),r=new Date(1970,0,7);return{sun:e(a),mon:e(s),tue:e(u),wed:e(r),thu:e(t),fri:e(n),sat:e(o)}};exports.getDayOfWeek=c;
