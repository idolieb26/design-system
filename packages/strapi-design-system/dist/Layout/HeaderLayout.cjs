"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const c=require("react"),E=require("prop-types"),v=require("styled-components"),d=require("../Box/Box.cjs"),i=require("../Flex/Flex.cjs"),B=require("../hooks/useElementOnScreen.cjs"),b=require("../hooks/useResizeObserver.cjs"),s=require("../Typography/Typography.cjs"),p=t=>t&&typeof t=="object"&&"default"in t?t:{default:t},e=p(c),a=p(E),R=p(v),T=()=>{const t=c.useRef(null),[l,r]=c.useState(null),[n,o]=B.useElementOnScreen({root:null,rootMargin:"0px",threshold:0});return b.useResizeObserver(n,()=>{n.current&&r(n.current.getBoundingClientRect())}),c.useEffect(()=>{t.current&&r(t.current.getBoundingClientRect())},[t]),{containerRef:n,isVisible:o,baseHeaderLayoutRef:t,headerSize:l}},f=t=>{const{containerRef:l,isVisible:r,baseHeaderLayoutRef:n,headerSize:o}=T();return e.default.createElement(e.default.Fragment,null,e.default.createElement("div",{style:{height:o?.height},ref:l},r&&e.default.createElement(u,{ref:n,...t})),!r&&e.default.createElement(u,{...t,sticky:!0,width:o?.width}))};f.displayName="HeaderLayout";const L=R.default(d.Box)`
  width: ${t=>t.width}px;
`,u=e.default.forwardRef(({navigationAction:t,primaryAction:l,secondaryAction:r,subtitle:n,title:o,sticky:m,width:h,...y},x)=>{const g=typeof n=="string";return m?e.default.createElement(L,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:h,zIndex:4,"data-strapi-header-sticky":!0},e.default.createElement(i.Flex,{justifyContent:"space-between"},e.default.createElement(i.Flex,null,t&&e.default.createElement(d.Box,{paddingRight:3},t),e.default.createElement(d.Box,null,e.default.createElement(s.Typography,{variant:"beta",as:"h1",...y},o),g?e.default.createElement(s.Typography,{variant:"pi",textColor:"neutral600"},n):n),r?e.default.createElement(d.Box,{paddingLeft:4},r):null),e.default.createElement(i.Flex,null,l?e.default.createElement(d.Box,{paddingLeft:2},l):void 0))):e.default.createElement(d.Box,{ref:x,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:t?6:8,background:"neutral100","data-strapi-header":!0},t?e.default.createElement(d.Box,{paddingBottom:2},t):null,e.default.createElement(i.Flex,{justifyContent:"space-between"},e.default.createElement(i.Flex,{minWidth:0},e.default.createElement(s.Typography,{as:"h1",variant:"alpha",...y},o),r?e.default.createElement(d.Box,{paddingLeft:4},r):null),l),g?e.default.createElement(s.Typography,{variant:"epsilon",textColor:"neutral600",as:"p"},n):n)});u.displayName="BaseHeaderLayout";u.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0};u.propTypes={navigationAction:a.default.node,primaryAction:a.default.node,secondaryAction:a.default.node,sticky:a.default.bool,subtitle:a.default.oneOfType([a.default.string,a.default.node]),title:a.default.string.isRequired,width:a.default.number};f.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0};f.propTypes={navigationAction:a.default.node,primaryAction:a.default.node,secondaryAction:a.default.node,subtitle:a.default.oneOfType([a.default.string,a.default.node]),title:a.default.string.isRequired};exports.BaseHeaderLayout=u;exports.HeaderLayout=f;