"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const r=require("react"),a=require("@radix-ui/react-use-callback-ref"),o=(t,n)=>{const e=r.useRef(null),u=r.useRef(null),c=a.useCallbackRef(n);return r.useEffect(()=>{if(!!e.current){if(u.current){const s=e.current.querySelector('[tabindex="0"]');s&&(s.focus(),c(t))}u.current||(u.current=!0)}},[t,c]),e};exports.useTabsFocus=o;
