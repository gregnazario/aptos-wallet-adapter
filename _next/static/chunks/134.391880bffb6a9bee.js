"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[134],{9134:function(e,l,a){a.r(l),a.d(l,{default:function(){return j}});var t=a(7458),n=a(2983),s=a(3796),c=a(3472),i=a(2686),r=a(8949),d=a(8410),m=e=>{if(e)return"".concat(e.slice(0,6),"...").concat(e.slice(-5))},{Text:o}=s.Z;function x(e){let{isModalOpen:l,setModalOpen:a}=e,[s,o]=(0,n.useState)(!1);(0,n.useEffect)(()=>{void 0!==l&&o(l)},[l]);let{connect:x,disconnect:w,account:j,wallets:u,connected:N}=(0,d.Os)(),p=()=>{N?w():o(!0)},v=e=>{x(e),o(!1),a&&a(!1)},b=()=>{o(!1),a&&a(!1)},f=(null==j?void 0:j.ansName)?null==j?void 0:j.ansName:m(null==j?void 0:j.address);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.ZP,{className:"wallet-button",onClick:()=>p(),children:N?f:"Connect Wallet"}),(0,t.jsx)(i.Z,{title:(0,t.jsx)("div",{className:"wallet-modal-title",children:"Connect Wallet"}),centered:!0,open:s,onCancel:b,footer:[],closable:!1,zIndex:9999,children:!N&&(0,t.jsx)(r.Z,{children:u.map(e=>h(e,v))})})]})}var h=(e,l)=>{let a=e.readyState===d.i1.Installed||e.readyState===d.i1.Loadable,n=e.deeplinkProvider;return!a&&(0,d.cX)()?n?(0,t.jsx)(r.Z.Item,{onClick:()=>l(e.name),children:(0,t.jsxs)("div",{className:"wallet-menu-wrapper",children:[(0,t.jsxs)("div",{className:"wallet-name-wrapper",children:[(0,t.jsx)("img",{src:e.icon,width:25,style:{marginRight:10}}),(0,t.jsx)(o,{className:"wallet-selector-text",children:e.name})]}),(0,t.jsx)(c.ZP,{className:"wallet-connect-button",children:(0,t.jsx)(o,{className:"wallet-connect-button-text",children:"Connect"})})]})},e.name):(0,t.jsx)(r.Z.Item,{disabled:!0,children:(0,t.jsx)("div",{className:"wallet-menu-wrapper",children:(0,t.jsxs)("div",{className:"wallet-name-wrapper",children:[(0,t.jsx)("img",{src:e.icon,width:25,style:{marginRight:10}}),(0,t.jsx)(o,{className:"wallet-selector-text",children:e.name})]})})},e.name):(0,t.jsx)(r.Z.Item,{onClick:e.readyState===d.i1.Installed||e.readyState===d.i1.Loadable?()=>l(e.name):()=>window.open(e.url),children:(0,t.jsxs)("div",{className:"wallet-menu-wrapper",children:[(0,t.jsxs)("div",{className:"wallet-name-wrapper",children:[(0,t.jsx)("img",{src:e.icon,width:25,style:{marginRight:10}}),(0,t.jsx)(o,{className:"wallet-selector-text",children:e.name})]}),e.readyState===d.i1.Installed||e.readyState===d.i1.Loadable?(0,t.jsx)(c.ZP,{className:"wallet-connect-button",children:(0,t.jsx)(o,{className:"wallet-connect-button-text",children:"Connect"})}):(0,t.jsx)(o,{className:"wallet-connect-install",children:"Install"})]})},e.name)};let w=()=>(0,t.jsx)(x,{});var j=w}}]);