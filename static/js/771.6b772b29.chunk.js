"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[771],{3771:function(e,n,t){t.r(n),t.d(n,{default:function(){return F}});var a=t(2791),r=t(9434),s=t(4270),c=t(3634),i=function(e){return e.contacts.contacts},o=function(e){return e.contacts.isLoading},l=function(e){return e.filter.filter},u=t(9439),d="ContactForm_form__dhl+T",m="ContactForm_btn__wll+u",h=t(890),f=t(184),x=function(){var e=(0,a.useState)(""),n=(0,u.Z)(e,2),t=n[0],s=n[1],o=(0,a.useState)(""),l=(0,u.Z)(o,2),x=l[0],p=l[1],j=(0,r.I0)(),_=(0,r.v9)(i),v=function(){s(""),p("")};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(h.Z,{variant:"h4",component:"h4",sx:{textAlign:"center",color:"rgb(0, 128, 255)",fontWeight:"600",margin:"16px 0"},children:"Welcome in your Phonebook"}),(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=t.toLowerCase();if(_.find((function(e){return e.name.toLowerCase()===n})))return alert("".concat(t," is already in contacts"));j((0,c.uK)({name:t,number:x})),v()},className:d,children:[(0,f.jsxs)("label",{children:["Name",(0,f.jsx)("input",{value:t,onChange:function(e){s(e.currentTarget.value)},type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,f.jsxs)("label",{children:["Tel",(0,f.jsx)("input",{value:x,onChange:function(e){p(e.currentTarget.value)},type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,f.jsx)("button",{className:m,type:"submit",children:"add contact"})]})]})},p="ContactList_item__EZYHO",j="ContactList_btn__6Piat",_="ContactList_list__csErn",v=function(){var e=(0,r.v9)(i),n=(0,r.v9)(l),t=(0,r.I0)(),a=e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return(0,f.jsx)("ul",{className:_,children:a.map((function(e){var n=e.id,a=e.name,r=e.number;return(0,f.jsxs)("li",{className:p,children:[(0,f.jsx)("p",{children:a}),(0,f.jsx)("p",{children:r}),(0,f.jsx)("button",{className:j,type:"submit",onClick:function(){return t((0,c.GK)(n))},children:"Delete"})]},n)}))})},b=t(6390),C="Filter_filter__vxThR",g="Filter_find__S9I33",y=function(){var e=(0,r.v9)(l),n=(0,r.I0)();return(0,f.jsx)("div",{className:C,children:(0,f.jsxs)("label",{className:g,children:[(0,f.jsx)("p",{children:"Find contacts by name"}),(0,f.jsx)("input",{type:"name",value:e,onChange:function(e){n((0,b.eb)(e.target.value))}})]})})},w=t(5305);function F(){var e=(0,r.I0)(),n=(0,r.v9)(o);return(0,a.useEffect)((function(){e((0,c.yF)())}),[e]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(s.q,{children:(0,f.jsx)("title",{children:"Your contacts"})}),(0,f.jsx)("div",{children:n&&(0,f.jsx)(w.a,{})}),(0,f.jsx)(x,{}),(0,f.jsx)(y,{}),(0,f.jsx)(v,{})]})}}}]);
//# sourceMappingURL=771.6b772b29.chunk.js.map