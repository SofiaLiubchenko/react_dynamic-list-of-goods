(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{45:function(t,n,e){},65:function(t,n,e){"use strict";e.r(n);var o=e(46),r=e.n(o),c=e(16),i=e(0),a=e(88),u=e(87),s=(e(45),e(49)),d=e.n(s),l=e(89),f=e(85),j=e(90),b=e(3),h=function(t){var n=t.goods;return Object(b.jsx)(l.a,{children:n.map((function(t){return Object(b.jsx)(f.a,{"data-cy":"good",className:d()({redGood:"red"===t.color,greenGood:"green"===t.color,blueGood:"blue"===t.color}),children:Object(b.jsx)(j.a,{primary:t.name})},t.id)}))})};function g(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var m=function(){var t=Object(i.useState)([]),n=Object(c.a)(t,2),e=n[0],o=n[1],r=function(){g().then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)}))})).then((function(t){return t.slice(0,5)})).then((function(t){return o(t)}))},s=function(){g().then((function(t){return t.filter((function(t){return"red"===t.color}))})).then((function(t){return o(t)}))};return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(u.a,{variant:"h1",align:"center",style:{fontSize:"32px",marginBottom:"10px"},children:"Dynamic list of Goods"}),Object(b.jsx)(a.a,{type:"button","data-cy":"all-button",variant:"outlined",style:{marginRight:"10px"},onClick:function(){g().then((function(t){return o(t)}))},children:"Load all goods"}),Object(b.jsx)(a.a,{type:"button","data-cy":"first-five-button",variant:"outlined",style:{marginRight:"10px"},onClick:function(){return r()},children:"Load 5 first goods"}),Object(b.jsx)(a.a,{type:"button","data-cy":"red-button",variant:"outlined",onClick:function(){return s()},children:"Load red goods"}),Object(b.jsx)(h,{goods:e})]})};r.a.render(Object(b.jsx)(m,{}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.fe6cb0eb.chunk.js.map