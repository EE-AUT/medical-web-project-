(this["webpackJsonpmedical-project-react"]=this["webpackJsonpmedical-project-react"]||[]).push([[0],{22:function(e,a,t){e.exports=t(34)},27:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(20),s=t.n(r),i=(t(27),t(7)),c=t(8),m=t(10),o=t(9),d=t(5),u=t(1),h=t(14),p=t(11),F=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var l;return Object(i.a)(this,t),(l=a.call(this,e)).state={fullName:null,email:null,password:null,rePassword:null,isDocter:!1},l.handleChange=l.handleChange.bind(Object(p.a)(l)),l.handleSubmit=l.handleSubmit.bind(Object(p.a)(l)),l}return Object(c.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault(),console.log(this.state)}},{key:"handleChange",value:function(e){e.preventDefault();var a=e.target,t="checkbox"===a.type?a.checked:a.value,l=a.name;this.setState(Object(h.a)({},l,t))}},{key:"render",value:function(){return n.a.createElement("div",{className:"FormCenter"},n.a.createElement("div",{className:"PageSwitcher"},n.a.createElement(d.b,{to:"/sign-in",activeClassName:"PageSwitcher__Item--Active",className:"PageSwitcher__Item "},"Sign In"),n.a.createElement(d.b,{to:"/sign-up",activeClassName:"PageSwitcher__Item--Active",className:"PageSwitcher__Item "},"Sign Up")),n.a.createElement("div",{className:"FormTitle"},n.a.createElement(d.b,{to:"/sign-in",activeClassName:"FormTitle__Link--Active",className:"FormTitle__Link"},"Sign In")," or ",n.a.createElement(d.b,{exact:!0,to:"/sign-up",activeClassName:"FormTitle__Link--Active",className:"FormTitle__Link"},"Sign Up")),n.a.createElement("form",{className:"FormFields",onSubmit:this.handleSubmit},n.a.createElement("div",{className:"FormFields"},n.a.createElement("label",{className:"FormField__Label",htmlFor:"fullName"}," full Name "),n.a.createElement("input",{type:"text",id:"fullName",className:"FormField__Input",placeholder:"Enter your full name",name:"fullName",onChange:this.handleChange,value:this.state.fullName})),n.a.createElement("div",{className:"FormFields"},n.a.createElement("label",{className:"FormField__Label",htmlFor:"email"}," Email "),n.a.createElement("input",{type:"text",id:"email",className:"FormField__Input",placeholder:"Enter your Email address",name:"email",onChange:this.handleChange,value:this.state.email})),n.a.createElement("div",{className:"FormFields"},n.a.createElement("label",{className:"FormField__Label",htmlFor:"password"}," Password "),n.a.createElement("input",{type:"password",id:"password",className:"FormField__Input",placeholder:"Enter your password",name:"password",onChange:this.handleChange,value:this.state.password})),n.a.createElement("div",{className:"FormFields"},n.a.createElement("label",{className:"FormField__Label",htmlFor:"repeat password"}," Repeat Password "),n.a.createElement("input",{type:"password",id:"repeatPassword",className:"FormField__Input",placeholder:"Repeat your password",name:"repeatPassword",onChange:this.handleChange,value:this.state.rePassword})),n.a.createElement("label",{className:"FormField__CheckboxLabel"},n.a.createElement("input",{className:"FormField__Checkbox",type:"checkbox",name:"doctor"})," Are you a doctor ?"),n.a.createElement("div",{className:"FormFields"},n.a.createElement("input",{type:"text",id:"doctorID",className:"FormField__Input",placeholder:"Enter your doctorID",name:"doctorID",hidden:!0,onChange:this.handleChange,value:this.state.isDocter})),n.a.createElement("div",{className:"FromFields"},n.a.createElement("button",{className:"FormField__Button mr-20"}," Sign Up "))))}}]),t}(l.Component),_=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var l;return Object(i.a)(this,t),(l=a.call(this,e)).state={email:null,password:null},l.handleChange=l.handleChange.bind(Object(p.a)(l)),l.handleSubmit=l.handleSubmit.bind(Object(p.a)(l)),l}return Object(c.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault(),console.log(this.state)}},{key:"handleChange",value:function(e){e.preventDefault();var a=e.target,t="checkbox"===a.type?a.checked:a.value,l=a.name;this.setState(Object(h.a)({},l,t))}},{key:"render",value:function(){return n.a.createElement("div",{className:"FormCenter"},n.a.createElement("div",{className:"PageSwitcher"},n.a.createElement(d.b,{to:"/sign-in",activeClassName:"PageSwitcher__Item--Active",className:"PageSwitcher__Item "},"Sign In"),n.a.createElement(d.b,{to:"/sign-up",activeClassName:"PageSwitcher__Item--Active",className:"PageSwitcher__Item "},"Sign Up")),n.a.createElement("div",{className:"FormTitle"},n.a.createElement(d.b,{to:"/sign-in",activeClassName:"FormTitle__Link--Active",className:"FormTitle__Link"},"Sign In")," or ",n.a.createElement(d.b,{exact:!0,to:"/sign-up",activeClassName:"FormTitle__Link--Active",className:"FormTitle__Link"},"Sign Up")),n.a.createElement("form",{className:"FormFields",onSubmit:this.handleSubmit},n.a.createElement("div",{className:"FormFields"},n.a.createElement("label",{className:"FormField__Label",htmlFor:"email"},"Email"),n.a.createElement("input",{type:"text",id:"email",className:"FormField__Input",placeholder:"Enter your Email address",name:"email",value:this.email,onChange:this.handleChange})),n.a.createElement("div",{className:"FormFields"},n.a.createElement("label",{className:"FormField__Label",htmlFor:"password"},"Password"),n.a.createElement("input",{type:"password",id:"password",className:"FormField__Input",placeholder:"Enter your password",name:"password",value:this.password,onChange:this.handleChange})),n.a.createElement("div",{className:"FromFields"},n.a.createElement("button",{className:"FormField__Button mr-20"},"Sign In "))))}}]),t}(l.Component),b=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("h1",null,"hello")}}]),t}(l.Component),v=(t(33),function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement(d.a,null,n.a.createElement(u.a,null),n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"App__Form"},n.a.createElement(u.a,{exact:!0,path:"/",component:b}),n.a.createElement(u.a,{path:"/sign-up",component:F}),n.a.createElement(u.a,{path:"/sign-in",component:_}))))}}]),t}(l.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.4475f385.chunk.js.map