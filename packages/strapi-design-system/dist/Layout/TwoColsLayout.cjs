"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const l=require("react"),c=require("prop-types"),r=require("../Box/Box.cjs"),i=require("../Grid/Grid.cjs"),o=require("../Grid/GridItem.cjs"),d=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},t=d(l),a=d(c),u=({startCol:e,endCol:s})=>t.default.createElement(i.Grid,{gap:4},t.default.createElement(o.GridItem,{col:9,s:12},t.default.createElement(r.Box,{hasRadius:!0,background:"neutral0",shadow:"tableShadow"},e)),t.default.createElement(o.GridItem,{col:3,s:12},t.default.createElement(r.Box,{hasRadius:!0,background:"neutral0",shadow:"tableShadow"},s)));u.propTypes={endCol:a.default.node.isRequired,startCol:a.default.node.isRequired};exports.TwoColsLayout=u;
