import{a as n}from"./buyers-CXdNkuTv.js";import{d as u,M as l,r as c,m,o as i,c as p,a,t as r}from"./index-h72Lu1b6.js";const d=a("h2",null,"Customer View",-1),h=u({__name:"CustomerView",setup(_){const s=l(),e=c();return m(async()=>{e.value=await n(Number(s.currentRoute.value.params.id))}),(f,v)=>{var t,o;return i(),p("div",null,[d,a("div",null,[a("span",null,r((t=e.value)==null?void 0:t.name)+" - "+r((o=e.value)==null?void 0:o.email),1)])])}}});export{h as default};
