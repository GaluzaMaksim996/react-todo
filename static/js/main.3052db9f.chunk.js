(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{80:function(e,t,n){},81:function(e,t,n){},86:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n(11),i=n.n(o),c=n(23),d=n(10),s=n(17),l=n(15),r=n(52),j=n.n(r),u=n(57),h=n.n(u),O=(n(80),n(140)),b=n(133),x=n(141),f=n(131),m=n(132),p=n(135),v=(n(81),n(4)),T=function(e){var t=e.isOpen,n=e.handleOpenDialog,a=e.formData,o=e.handleSetFieldValue,i=e.handleSetTodoOnSubmit;return Object(v.jsxs)(O.a,{open:t,onClose:n,children:[Object(v.jsx)(x.a,{className:"dialog-title",children:a.isEdit?"Edit Todo":"Add new Todo"}),Object(v.jsx)(f.a,{children:Object(v.jsxs)("form",{onSubmit:i,children:[Object(v.jsx)(p.a,{label:"Todo",variant:"outlined",onChange:function(e){return o("todoName",e.target.value)},value:a.todoName}),Object(v.jsx)(p.a,{label:"Note",variant:"outlined",onChange:function(e){return o("todoNote",e.target.value)},value:a.todoNote,multiline:!0,minRows:4}),Object(v.jsxs)(m.a,{children:[Object(v.jsx)(b.a,{color:"primary",onClick:n,children:"Close"}),Object(v.jsx)(b.a,{disabled:!a.todoName,type:"submit",color:"primary",children:a.isEdit?"Edit":"Add"})]})]})})]})},N=(n(86),function(e){var t=e.isOpen,n=e.formData,a=e.handleCloseButton,o=e.handleEditTodo,i=e.handleRemoveTodo;return Object(v.jsxs)(O.a,{onClose:a,open:t,children:[Object(v.jsx)(x.a,{children:Object(v.jsx)("div",{className:"display-title",children:"Your Todo"})}),Object(v.jsx)(f.a,{children:Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{children:n.todoName}),Object(v.jsx)("div",{children:n.todoNote})]})}),Object(v.jsx)(m.a,{children:Object(v.jsxs)("div",{className:"display-buttons-wrapper",children:[Object(v.jsx)(b.a,{color:"secondary",variant:"outlined",onClick:i,children:"Remove"}),Object(v.jsxs)("div",{children:[Object(v.jsx)(b.a,{color:"primary",onClick:a,children:"Close"}),Object(v.jsx)(b.a,{color:"primary",onClick:o,children:"Edit"})]})]})})]})}),C=function(e){var t=e.isOpen,n=e.handleOpenDialog,a=e.formData,o=e.handleSetFieldValue,i=e.handleSetTodoOnSubmit,c=e.isOpenDisplayTodo,d=e.handleCloseButton,s=e.handleEditTodo,l=e.handleRemoveTodo,r=e.totalCount,u=j()().format("dddd"),O=j()().date();return Object(v.jsxs)("div",{className:"header",children:[Object(v.jsxs)("div",{className:"header__inner",children:[Object(v.jsxs)("div",{className:"header__count",children:[Object(v.jsx)("span",{className:"header__count-finished",children:r.finished}),Object(v.jsxs)("div",{className:"header__count-total",children:[Object(v.jsx)("span",{children:"Tasks"}),Object(v.jsx)("span",{children:"/ ".concat(r.total)})]})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{className:"header__week-day",children:u}),Object(v.jsx)("span",{className:"header__date",children:O})]})]}),Object(v.jsxs)("div",{className:"header__add-todo",onClick:n,children:[Object(v.jsx)(h.a,{color:"primary"}),Object(v.jsx)("span",{})]}),Object(v.jsx)(T,{isOpen:t,handleOpenDialog:n,formData:a,handleSetFieldValue:o,handleSetTodoOnSubmit:i}),Object(v.jsx)(N,{formData:a,isOpen:c,handleCloseButton:d,handleEditTodo:s,handleRemoveTodo:l})]})},_=n(58),S=n.n(_),k=n(46),y=n.n(k),g=n(59),E=n.n(g),D=n(136),F=n(134),w=(n(88),function(e){var t=e.tab,n=e.handleChangeTab;return Object(v.jsx)("div",{className:"actions",children:Object(v.jsxs)(D.a,{value:t,onChange:function(e,t){return n(t)},indicatorColor:"primary",textColor:"primary",children:[Object(v.jsx)(F.a,{label:Object(v.jsx)(S.a,{})}),Object(v.jsx)(F.a,{label:Object(v.jsx)(y.a,{})}),Object(v.jsx)(F.a,{label:Object(v.jsx)(E.a,{})})]})})}),R=n(139),B=n(61),M=n.n(B),V=n(60),A=n.n(V),I=n(137),J=(n(89),function(e){var t=e.todo,n=e.index,a=e.handleMarkTodo,o=e.handleOpenTodo,i=t.isFinished?"todo__item-finished":"";return Object(v.jsxs)("div",{className:"todo__item",children:[Object(v.jsx)("span",{children:Object(v.jsx)(I.a,{icon:Object(v.jsx)(y.a,{}),checkedIcon:Object(v.jsx)(A.a,{color:"primary"}),onClick:function(e){return a(e.target.checked,n)},checked:t.isFinished})}),Object(v.jsxs)("div",{className:"todo__item-title",onClick:function(){return o(Object(s.a)(Object(s.a)({},t),{},{index:n}))},children:[Object(v.jsx)("span",{className:i,children:t.todoName}),Object(v.jsx)(M.a,{fontSize:"small"})]})]})}),z=function(e){var t=e.todos,n=e.handleMarkTodo,a=e.handleOpenTodo;return Object(v.jsx)("div",{className:"todo__list",children:t.map((function(e,t){return Object(v.jsx)(J,{todo:e,index:t,handleMarkTodo:n,handleOpenTodo:a},e.id)}))})},Y=(n(90),{isEdit:!1,todoName:"",todoNote:"",isFinished:!1,id:"",index:null});var q=function(){var e=Object(a.useState)(0),t=Object(l.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)(!1),r=Object(l.a)(i,2),j=r[0],u=r[1],h=Object(a.useState)(!1),O=Object(l.a)(h,2),b=O[0],x=O[1],f=Object(a.useState)([]),m=Object(l.a)(f,2),p=m[0],T=m[1],N=Object(a.useState)(Y),_=Object(l.a)(N,2),S=_[0],k=_[1],y=function(e){return e.reduce((function(t,n){return t.total=e.length,n.isFinished&&(t.finished=t.finished+1),t}),{total:0,finished:0})}(p),g=function(e,t){return 0===e?t:1===e?t.filter((function(e){return!e.isFinished})):2===e?t.filter((function(e){return e.isFinished})):void 0}(n,p),E=function(){u(!1),x(!1),k(Y)},D=function(){return u((function(e){return!e}))};return Object(v.jsxs)("div",{className:"todo",children:[Object(v.jsx)(C,{isOpen:j,handleOpenDialog:D,formData:S,handleSetFieldValue:function(e,t){return k((function(n){return Object(s.a)(Object(s.a)({},n),{},Object(d.a)({},e,t))}))},handleSetTodoOnSubmit:function(e){if(e.preventDefault(),S.isEdit){var t=p;t.splice(S.index,1,Object(s.a)(Object(s.a)({},S),{},{isEdit:!1,index:null})),T(t)}else T((function(e){return[].concat(Object(c.a)(e),[Object(s.a)(Object(s.a)({},S),{},{id:Object(R.a)()})])}));E()},handleEditTodo:function(){k((function(e){return Object(s.a)(Object(s.a)({},e),{},{isEdit:!0})})),x(!1),D()},isOpenDisplayTodo:b,handleRemoveTodo:function(){T(p.filter((function(e){return e.id!==S.id}))),E()},handleCloseButton:E,totalCount:y}),Object(v.jsx)(w,{tab:n,handleChangeTab:function(e){return o(e)}}),Object(v.jsx)(z,{todos:g,handleMarkTodo:function(e,t){var n=p.slice();n.splice(t,1,Object(s.a)(Object(s.a)({},p[t]),{},{isFinished:e})),T(n)},handleOpenTodo:function(e){x(!0),k(e)}})]})};n(91);i.a.render(Object(v.jsx)(q,{}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.3052db9f.chunk.js.map