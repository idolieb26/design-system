"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("react/jsx-runtime"),o=require("./CardContext.cjs"),r=require("../Typography/Typography.cjs"),i=t=>{const{id:a}=o.useCard();return e.jsx(r.Typography,{variant:"pi",id:`${a}-title`,textColor:"neutral800",fontWeight:"bold",as:"div",...t})},n=t=>e.jsx(r.Typography,{variant:"pi",...t,textColor:"neutral600",as:"div"});exports.CardSubtitle=n;exports.CardTitle=i;