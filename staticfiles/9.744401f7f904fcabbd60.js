(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{109:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(2),c=a(1),u=a(96),o=a(98);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,l=void 0;try{for(var c,u=e[Symbol.iterator]();!(n=(c=u.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==u.return||u.return()}finally{if(r)throw l}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var s=function(e){var t=Object(l.b)(),a=e.defualtValue,u=e.id,o=e.datagroup,d=e.name,s=e.input_type,m=i(Object(n.useState)(a),2),f=m[0],b=m[1];return r.a.createElement("input",{type:s,className:"cell-edit-input",id:u,value:f,onChange:function(e){return b(e.target.value)},onBlur:function(){t(Object(c.vb)({key:u,field:"percown",name:d,datagroup:o,value:f}))},autoComplete:"off"})},m=function(e){var t=Object(l.b)(),a=e.defualtValue,n=e.id,u=e.datagroup,o=e.name,i=e.model,d=e.field,s=Object(l.c)((function(e){return e.dataEdit.dropdowns}))[i],m=function(){return r.a.createElement("select",{className:"cell-edit-input",value:a,onChange:function(e){var a=e.target.value;t(Object(c.vb)({key:n,field:d,name:o,datagroup:u,value:a}))}},s.map((function(e){return r.a.createElement("option",{key:e[0],value:e[0]},e[1])})))};return void 0===s?null:r.a.createElement(m,null)};function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,l=void 0;try{for(var c,u=e[Symbol.iterator]();!(n=(c=u.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==u.return||u.return()}finally{if(r)throw l}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var y=function(e){var t=Object(l.b)(),a=e.datagroup,r=e.name;return Object(n.useEffect)((function(){t(Object(c.c)({datagroup:a,name:r}))}),[]),null},v=function(e){var t=Object(l.b)(),a=e.data,i=e.values,d=e.dropdown_dict,f=e.header,p=e.datagroup,y=e.has_input,v=e.columns,g=e.is_large,h=b(Object(n.useState)(!1),2),j=h[0],O=h[1],E=d.name,w=d.unique_grp,_=Object(l.c)((function(e){return e})).dropdown,k=_.unique_multi_groups,S=k.error,N=k.names,A=Object(n.useRef)(!0);Object(n.useEffect)((function(){S.name===E&&(O(!1),t(Object(c.db)({message:"Values need to be unique across all ".concat(N[E]," groups "),type:"error",style:"error-fixed-edit"})))}),[S]),Object(n.useEffect)((function(){A.current?(A.current=!1,w&&t(Object(c.jb)({name:E,group:w}))):w&&t(Object(c.d)({group:w,values:Object.keys(a).map((function(e){return a[e].label}))}))}),[a]),Object(n.useEffect)((function(){if(void 0!==_[E]){var e=_[E].selected;if(void 0!==e&&""!==e.key){var n=e.key,r=e.label;if(n in a)a[n].remove?(t(Object(c.B)({name:E,datagroup:p,key:n})),O(!1)):a[n].remove?console.log("ItemsManyDropdownAddMulti component. uncaught"):O(!1);else{var l={name:E,datagroup:p,key:n,label:r};v.forEach((function(e,t){0!==t&&(l[e.label]=e.default)})),t(Object(c.b)(l)),O(!1)}}}}),[_]),Object(n.useEffect)((function(){var e={},a=d.key,n=d.label;i.forEach((function(t){var r={id:t[a],label:t[n],current:!0,remove:!1,add:!1};v.forEach((function(e,a){0!==a&&(r[e.label]=t[e.label])})),e[t[a]]=r})),t(Object(c.U)({data:e,name:E,datagroup:p}))}),[]),Object(n.useEffect)((function(){v.forEach((function(e){"select"===e.edit_type&&t(Object(c.m)({model:e.model,key:e.select_key,label:e.select_label}))}))}),[]);var C=function(e){var a=e.target.id;t(Object(c.B)({name:E,datagroup:p,key:a}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h5",null,f),r.a.createElement("div",{className:"edit-table-c1"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",{className:"row"},v.map((function(e){return r.a.createElement("th",{key:e.header,className:g?e.lg_style:e.sm_style},e.header)})),r.a.createElement("th",{className:g?"col-2":"col-1"}))),r.a.createElement("tbody",null,Object.keys(a).map((function(e){var t=a[e].id;return a[e].remove?null:r.a.createElement("tr",{key:t,className:"row"},v.map((function(n){var l=n.header,c=n.lg_style,u=n.sm_style,o=n.label,i=n.edit_type,d=n.model,f=n.input_type;n.default;return i?r.a.createElement("td",{key:l,className:g?c:u},"select"===i?r.a.createElement(m,{defualtValue:a[e][o],id:t,datagroup:p,name:E,model:d,field:o}):r.a.createElement(s,{defualtValue:a[e][o],id:t,datagroup:p,name:E,input_type:f})):r.a.createElement("td",{key:l,className:g?c:u},a[e][o])})),r.a.createElement("td",{className:g?"col-2":"col-1"},r.a.createElement("span",{id:t,onClick:C},g?"Remove":"x")))})))),r.a.createElement("div",{className:"edit-add",onClick:function(){return O((function(e){return!e}))}},r.a.createElement("span",null,"Add +")),j?r.a.createElement("div",{className:"add-select"},y?r.a.createElement(o.a,{dict:d}):r.a.createElement(u.a,{dict:d})):null))};t.a=function(e){var t=e.dropdown_dict,a=e.datagroup,n=t.name,c=Object(l.c)((function(e){return e})).dataEdit[a][n];return void 0===c?r.a.createElement(y,{datagroup:a,name:n}):r.a.createElement(v,f({},e,{data:c}))}},161:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(2),c=a(1),u=a(109),o=a(106),i=a(107),d=a(15),s=a(8),m=a(108);t.default=function(e){var t=e.match.params.id,a=Object(l.b)(),f=Object(s.g)().url,b=Object(s.f)(),p=Object(l.c)((function(e){return e.detailSelection})).holder,y=Object(l.c)((function(e){return e.dataEdit})),v=y.holders,g=y.holder_result,h=m.a.groups,j=m.a.columns,O=m.a.multis,E=h.parentSelect,w=h.subsidiarySelect,_=h.listedSelect,k=O.relatedMulti,S=O.listedMulti,N=Object(d.a)().viewportStyle,A=["tv","desktop","laptop"].includes(N);Object(n.useEffect)((function(){a(Object(c.o)(t))}),[t]);return Object(n.useEffect)((function(){var e=g.success,t=g.msg;e&&(b.push(f.replace("edit/","")),a(Object(c.C)("holder_result")),window.scrollTo(0,0),a(Object(c.db)({message:"Holder ".concat(t," updated successfully"),type:"success",style:"success-edit"})))}),[g]),null===p?null:r.a.createElement("div",{className:"edit-page"},r.a.createElement(i.a,{title:p.holder_name,index:t}),r.a.createElement("form",null,r.a.createElement(u.a,{is_large:A,header:"Parents",datagroup:"holders",values:p.parent_company,has_input:!1,columns:k,dropdown_dict:E}),r.a.createElement(u.a,{is_large:A,header:"Subsidiaries",datagroup:"holders",values:p.subsidiaries,has_input:!1,columns:k,dropdown_dict:w}),r.a.createElement(u.a,{is_large:A,header:"Listed",datagroup:"holders",values:p.listed_simple,has_input:!0,columns:S,dropdown_dict:_}),r.a.createElement("button",{type:"submit",className:"btn-c5 edit-submit-btn",onClick:function(e){e.preventDefault();var n=Object(o.a)(v,p,j,t);n.changes?a(Object(c.A)({id:t,dict:n,endpoint:"holder"})):(window.scrollTo(0,0),a(Object(c.db)({message:"No changes were made",type:"warning",style:"warning-edit"})))}},"Submit")))}}}]);