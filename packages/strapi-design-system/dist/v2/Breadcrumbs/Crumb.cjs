"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const n=require("react"),d=require("prop-types"),l=require("../../Box/Box.cjs"),i=require("../../Typography/Typography.cjs"),p=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},r=p(n),a=p(d),t=({children:e,isCurrent:o,...u})=>r.default.createElement(l.Box,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1},r.default.createElement(i.Typography,{variant:"pi",textColor:"neutral800",fontWeight:o?"bold":"normal","aria-current":o,...u},e));t.displayName="Crumb";t.defaultProps={isCurrent:!1};t.propTypes={children:a.default.node.isRequired,isCurrent:a.default.bool};exports.Crumb=t;
