(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{22:function(n,e,t){"use strict";t.r(e);var r,o=t(0),c=t.n(o),i=t(11),d=t.n(i),a=t(2),b=t(3),s=t(1),u=b.c.div(r||(r=Object(a.a)(["\n    width : 512px;\n    height : 768px;\n\n    position : relative;\n    background : white;\n    border-radius: 16px;\n    box-shadow : 0 0 8px rgba(0,0,0,0.04);\n\n    margin : 0 auto;\n\n    margin-top : 96px;\n    margin-bottom : 32px;\n\n    display: flex;\n    flex-direction: column;\n"])));var l=function(n){var e=n.children;return Object(s.jsx)(u,{children:e})},j=t(4),x=t(10),p=[];function f(n,e){switch(e.type){case"CREATE":return n.concat(e.todo);case"TOGGLE":return n.map((function(n){return n.id===e.id?Object(x.a)(Object(x.a)({},n),{},{done:!n.done}):n}));case"REMOVE":return n.filter((function(n){return n.id!==e.id}));default:throw new Error("Unhandled action type: ".concat(e.type))}}var O,h=Object(o.createContext)(),g=Object(o.createContext)(),v=Object(o.createContext)();function m(n){var e=n.children,t=Object(o.useReducer)(f,p),r=Object(j.a)(t,2),c=r[0],i=r[1],d=Object(o.useRef)(5);return Object(s.jsx)(h.Provider,{value:c,children:Object(s.jsx)(g.Provider,{value:i,children:Object(s.jsx)(v.Provider,{value:d,children:e})})})}function y(){var n=Object(o.useContext)(h);if(!n)throw new Error("Cannot find TodoProvider");return n}function w(){var n=Object(o.useContext)(g);if(!n)throw new Error("Cannot find TodoProvider");return n}var k=b.c.div(O||(O=Object(a.a)(["\n    padding-top : 48px;\n    padding-left : 32px;\n    padding-right : 32px;\n    padding-bottom : 24px;\n    border-bottom: 1px solid #e9ecef;\n\n    h1 {\n        margin: 0;\n        font-size: 36px;\n        color: #343a40;\n    }\n\n    .day {\n        margin-top: 4px;\n        color: #868e96;\n        font-size: 21px;\n    }\n\n    .tasks-left { \n        color: #ff8787;\n        font-size: 18px;\n        margin-top: 40px;\n        font-weight: bold;\n    }\n"])));var C,E,z,T,P,R,S=function(){var n=y().filter((function(n){return!n.done})),e=new Date,t=e.toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"}),r=e.toLocaleDateString("ko-KR",{weekday:"long"});return Object(s.jsxs)(k,{children:[Object(s.jsx)("h1",{children:t}),Object(s.jsx)("div",{className:"day",children:r}),Object(s.jsxs)("div",{className:"tasks-left",children:["\ud560\uc77c ",n.length,"\uac1c \ub0a8\uc74c"]})]})},F=t(5),L=b.c.div(C||(C=Object(a.a)(["\n    opacity: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #dee2e6;\n    font-size: 24px;\n    cursor: pointer;\n    &:hover {\n        color: #ff6b6b;\n    }\n"]))),D=b.c.div(E||(E=Object(a.a)(["\n    width: 32px;\n    height: 32px;\n    border-radius: 16px;\n    border: 1px solid #ced4da;\n    font-size: 24px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-right: 20px;\n    cursor: pointer;\n    ","\n"])),(function(n){return n.done&&Object(b.b)(z||(z=Object(a.a)(["\n        border: 1px solid #38d9a9;\n        color: #38d9a9;\n    "])))})),G=b.c.div(T||(T=Object(a.a)(["\n    flex: 1;\n    font-size: 20px;\n    color: #495057;\n    ","\n"])),(function(n){return n.done&&Object(b.b)(P||(P=Object(a.a)(["\n        color: #ced4da;\n    "])))})),M=b.c.div(R||(R=Object(a.a)(["\n    display: flex;\n    align-items: center;\n    padding-top: 12px;\n    padding-bottom: 12px;\n    &:hover{\n        "," {\n            opacity: 1;\n        }\n    }\n"])),L);function A(n){var e=n.id,t=n.done,r=n.text,o=w();return Object(s.jsxs)(M,{children:[Object(s.jsx)(D,{done:t,onClick:function(){return o({type:"TOGGLE",id:e})},children:t&&Object(s.jsx)(F.c,{})}),Object(s.jsx)(G,{done:t,children:r}),Object(s.jsx)(L,{onClick:function(){return o({type:"REMOVE",id:e})},children:Object(s.jsx)(F.b,{})})]})}var B,I=c.a.memo(A),J=b.c.div(B||(B=Object(a.a)(["\n    flex: 1;\n    padding: 20px 32px;\n    padding-bottom: 48px;\n    overflow-y: auto;\n"])));var K,N,V,U,q,H=function(){var n=y();return Object(s.jsx)(J,{children:n.map((function(n){return Object(s.jsx)(I,{id:n.id,text:n.text,done:n.done},n.id)}))})},Q=b.c.div(K||(K=Object(a.a)(["\n    background: #38d9a9;\n    &:hover{\n        background: #63e6be;\n    }\n    &:active{\n        background: #20c997;\n    }\n\n    z-index:5;\n    cursor: pointer;\n    width: 80px;\n    height: 80px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    position: absolute;\n    left: 50%;\n    bottom: 0px;\n    transform: translate(-50%, 50%);\n\n    font-size: 60px;\n    color: white;\n    border-radius: 40px;\n\n    border: none;\n    outline: none;\n\n    transition: 0.125s all ease-in;\n    ","\n"])),(function(n){return n.open&&Object(b.b)(N||(N=Object(a.a)(["\n        background: #ff6b6b;\n        &:hover{\n            background: #ff8787;\n        }\n        &:active{\n            background: #fa5252;\n        }\n        transform: translate(-50%, 50%) rotate(45deg);\n    "])))})),W=b.c.div(V||(V=Object(a.a)(["\n    width: 100%;\n    bottom: 0;\n    left: 0;\n    position: absolute;\n"]))),X=b.c.form(U||(U=Object(a.a)(["\n    background: #f8f9fa;\n    padding: 32px;\n    padding-bottom: 72px;\n    border-bottom-left-radius: 16px;\n    border-bottom-right-radius: 16px;\n    border-top: 1px solid #e9ecef;\n"]))),Y=b.c.input(q||(q=Object(a.a)(["\n    padding: 12px;\n    border-radius: 4px;\n    border: 1px solid #dee2e6;\n    width: 100%;\n    outline: none;\n    font-size: 18px;\n    box-sizing: border-box;\n"])));function Z(){var n=Object(o.useState)(!1),e=Object(j.a)(n,2),t=e[0],r=e[1],c=Object(o.useState)(""),i=Object(j.a)(c,2),d=i[0],a=i[1],b=w(),u=function(){var n=Object(o.useContext)(v);if(!n)throw new Error("Cannot find TodoProvider");return n}();return Object(s.jsxs)(s.Fragment,{children:[t&&Object(s.jsx)(W,{children:Object(s.jsx)(X,{onSubmit:function(n){n.preventDefault(),b({type:"CREATE",todo:{id:u.current,text:d,done:!1}}),a(""),r(!1),u.current+=1},children:Object(s.jsx)(Y,{placeholder:"\ud560 \uc77c\uc744 \uc785\ub825 \ud6c4, Enter \ub97c \ub204\ub974\uc138\uc694",autoFocus:!0,onChange:function(n){return a(n.target.value)},value:d})})}),Object(s.jsx)(Q,{onClick:function(){return r(!t)},open:t,children:Object(s.jsx)(F.a,{})})]})}var $,_=c.a.memo(Z),nn=Object(b.a)($||($=Object(a.a)(["\n  body {\n    background : #e9ecef;\n  }\n"])));var en=function(){return Object(s.jsxs)(m,{children:[Object(s.jsx)(nn,{}),Object(s.jsxs)(l,{children:[Object(s.jsx)(S,{}),Object(s.jsx)(H,{}),Object(s.jsx)(_,{})]})]})},tn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,23)).then((function(e){var t=e.getCLS,r=e.getFID,o=e.getFCP,c=e.getLCP,i=e.getTTFB;t(n),r(n),o(n),c(n),i(n)}))};d.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(en,{})}),document.getElementById("root")),tn()}},[[22,1,2]]]);
//# sourceMappingURL=main.fe93a129.chunk.js.map