(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[782],{2179:function(s,e,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/bridge/database/transaction",function(){return l(2172)}])},2172:function(s,e,l){"use strict";l.r(e),l.d(e,{__toc:function(){return o}});var n=l(5893),r=l(2673),i=l(2643),a=l(9013);let o=[];function t(s){let e=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code",span:"span",ul:"ul",li:"li"},(0,i.a)(),s.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{children:"Transaction"}),"\n",(0,n.jsx)(e.p,{children:"Transaction executes multiple queries and commits them only if all succeed"}),"\n",(0,n.jsx)(e.pre,{"data-language":"lua","data-theme":"default",children:(0,n.jsx)(e.code,{"data-language":"lua","data-theme":"default",children:(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"Database."}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"transaction"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(query, data, cb)"})]})})}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["query: ",(0,n.jsx)(e.code,{children:"table"})]}),"\n",(0,n.jsxs)(e.li,{children:["cb?: ",(0,n.jsx)(e.code,{children:"function(result)"})]}),"\n"]}),"\n",(0,n.jsxs)(e.p,{children:["returns: ",(0,n.jsx)(e.code,{children:"boolean"})]}),"\n",(0,n.jsxs)(a.mQ,{items:["Promise","Callback"],children:[(0,n.jsx)(a.OK,{children:(0,n.jsx)(e.pre,{"data-language":"lua","data-theme":"default",children:(0,n.jsxs)(e.code,{"data-language":"lua","data-theme":"default",children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" queries "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    { "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'INSERT INTO `table` (column1) VALUES (?)'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", { "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'value1' "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"} },"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    { "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'INSERT INTO `table` (column1, column2) VALUES (?, ?)'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", { "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'value1'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'value2' "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"} },"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" result "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" Database."}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"transaction"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(queries)"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(result)"})]})]})})}),(0,n.jsx)(a.OK,{children:(0,n.jsx)(e.pre,{"data-language":"lua","data-theme":"default",children:(0,n.jsxs)(e.code,{"data-language":"lua","data-theme":"default",children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" queries "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    { "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'INSERT INTO `table` (column1) VALUES (?)'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", { "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'value1' "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"} },"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    { "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'INSERT INTO `table` (column1, column2) VALUES (?, ?)'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", { "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'value1'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'value2' "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"} },"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"Database."}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"transaction"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(queries, "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-parameter)"},children:"result"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(result)"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})]})})})]})]})}e.default=(0,r.j)({MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,i.a)(),s.components);return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(t,{...s})}):t(s)},pageOpts:{filePath:"pages/bridge/database/transaction.mdx",route:"/bridge/database/transaction",title:"Transaction",headings:o},pageNextRoute:"/bridge/database/transaction"})}},function(s){s.O(0,[673,774,888,179],function(){return s(s.s=2179)}),_N_E=s.O()}]);