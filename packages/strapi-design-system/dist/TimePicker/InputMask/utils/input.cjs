"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});function o(t,e,n){n===void 0&&(n=e),t.setSelectionRange(e,n)}function c(t){const e=t.selectionStart,n=t.selectionEnd;return{start:e,end:n,length:n-e}}function u(t){const e=t.ownerDocument;return e.hasFocus()&&e.activeElement===t}exports.getInputSelection=c;exports.isInputFocused=u;exports.setInputSelection=o;