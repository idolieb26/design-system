"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const T=require("react"),j=require("prop-types"),y=require("styled-components"),h=require("../Field/Field.cjs"),E=require("../Field/FieldLabel.cjs");require("../Field/FieldInput.cjs");const I=require("../Field/FieldHint.cjs"),_=require("../Field/FieldError.cjs");require("../Field/FieldContext.cjs");require("../Field/FieldAction.cjs");const s=require("../Flex/Flex.cjs"),k=require("../hooks/useId.cjs"),v=require("../TextButton/TextButton.cjs"),C=require("../themes/sizes.cjs"),z=require("../ToggleCheckbox/ToggleCheckbox.cjs"),r=t=>t&&typeof t=="object"&&"default"in t?t:{default:t},l=r(T),e=r(j),c=r(y),B=c.default(h.Field)`
  max-width: 320px;
`,L=c.default(v.TextButton)`
  align-self: flex-end;
  margin-left: auto;
`,d=({disabled:t,size:f,error:g,hint:F,label:i,name:p,labelAction:b,required:m,id:q,onClear:o,clearLabel:n,checked:a,...x})=>{const u=k.useId(q);return l.default.createElement(B,{name:p,hint:F,error:g,id:u,required:m},l.default.createElement(s.Flex,{direction:"column",alignItems:"stretch",gap:1},l.default.createElement(s.Flex,null,l.default.createElement(E.FieldLabel,{action:b},i),n&&o&&a!==null&&!t&&l.default.createElement(L,{onClick:o},n)),l.default.createElement(z.ToggleCheckbox,{id:u,size:f,checked:a,disabled:t,...x},i),l.default.createElement(I.FieldHint,null),l.default.createElement(_.FieldError,null)))};d.displayName="ToggleInput";d.defaultProps={checked:!1,clearLabel:void 0,disabled:!1,error:void 0,hint:void 0,id:void 0,label:"",labelAction:void 0,name:"",onClear:void 0,required:!1,size:"M"};d.propTypes={checked:e.default.bool,clearLabel:e.default.string,disabled:e.default.bool,error:e.default.string,hint:e.default.oneOfType([e.default.string,e.default.node,e.default.arrayOf(e.default.node)]),id:e.default.string,label:e.default.string,labelAction:e.default.node,name:e.default.string,onClear:e.default.func,required:e.default.bool,size:e.default.oneOf(Object.keys(C.sizes.input))};exports.ToggleInput=d;