import{d as m,r as g,l as b,p as v,o as r,c as d,a as e,F as p,i as _,b as i,w as a,s as n,e as l,_ as o,t as h,j as w}from"./index-D3XNgema.js";const k={class:"p-4 rounded-md mx-auto"},y=e("div",{class:"flex justify-between items-center mb-4"},[e("div",null,[e("h1",{class:"text-2xl font-bold"},"Toyota Prado"),e("h2",{class:"text-xl"},"Juan Carlos Sánchez"),e("p",null,"3222885970")]),e("div",{class:"text-right"},[e("p",null,"13 de Jul"),e("p",null,"$500000")])],-1),B={class:"space-y-4"},C={class:"text-6xl mx-4"},F={class:"flex flex-wrap gap-2"},S=e("div",{class:"w-full h-16"},null,-1),V=e("h3",{class:"text-xl break-before-page"},"Pulles",-1),N={class:"flex items-center gap-4 border p-4 rounded-md"},j={class:"flex gap-2"},P=m({__name:"SellerRaffleView",setup(q){const c=g([]),f=b(()=>Array.from(new Set(c.value.map(t=>t.number[0]))).map(t=>({group:t,tickets:c.value.filter(s=>s.number[0]===t)})));return v(()=>{}),(x,t)=>(r(),d("div",k,[y,e("div",B,[(r(!0),d(p,null,_(f.value,s=>(r(),d("div",{key:s.group,class:"flex items-center gap-4 print:gap-1 border p-4 print:p-1 rounded-md break-before-auto"},[e("h3",C,h(s.group),1),e("div",F,[(r(!0),d(p,null,_(s.tickets,u=>(r(),w(l(o),{key:u.id,variant:"ghost",class:"text-lg w-14 h-14 print:w-8 print:h-8 border rounded-full print:text-xs"},{default:a(()=>[n(h(u.number),1)]),_:2},1024))),128)),i(l(o),{variant:"secondary",class:"print:hidden text-lg w-14 h-14 border rounded-full"},{default:a(()=>[n(" + ")]),_:1})])]))),128)),S,V,e("div",N,[e("div",j,[i(l(o),{variant:"ghost",class:"text-lg w-14 h-14 border bg-green-700 rounded-md"},{default:a(()=>[n(" 12 ")]),_:1}),i(l(o),{variant:"ghost",class:"text-lg w-14 h-14 border bg-green-700 rounded-md"},{default:a(()=>[n(" 14 ")]),_:1}),i(l(o),{variant:"ghost",class:"print:hidden text-lg w-14 h-14 border bg-gray-700 rounded-md"},{default:a(()=>[n(" + ")]),_:1})])])])]))}});export{P as default};
