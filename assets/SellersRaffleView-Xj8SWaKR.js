import{_ as g,a as v}from"./SellersList.vue_vue_type_script_setup_true_lang-BwaxuvLV.js";import{d as h,_ as $,a as y,b as A,c as w}from"./AlertDialogTitle.vue_vue_type_script_setup_true_lang-SO7BW_pN.js";import{_ as x,a as C,b}from"./AlertDialogCancel.vue_vue_type_script_setup_true_lang-BG5OYuma.js";import{d as B,P as N,r as i,p as S,o as k,c as L,b as e,w as a,e as s,_ as f,s as t,a as n}from"./index-Bn70M3O8.js";import{g as R}from"./sellers-DWMIxjHC.js";import{S as u}from"./add-circle-line-duotone-dJ6CB9WC.js";import"./Input.vue_vue_type_script_setup_true_lang-CfENl_2E.js";import"./magnifer-outline-MAiYSgCd.js";const V={class:"w-full flex flex-col items-center"},T=n("span",{class:"hidden md:inline"},"Agregar",-1),E=n("div",{class:"grid gap-4 py-4"},"Agregar vendedores a esta rifa",-1),F=n("p",null,"No hay vendedores en esta rifa",-1),M=n("span",null,"Agregar venddor a esta rifa",-1),H=B({__name:"SellersRaffleView",setup(D){const m=N(),_=i([]),o=i(!1),r=i(!1),p=async()=>{o.value=!0;const d=m.currentRoute.value.params.id;R(Number(d)).then(l=>{_.value=l}).catch(l=>{console.error(l)}).finally(()=>{o.value=!1})};return S(async()=>{await p()}),(d,l)=>(k(),L("div",V,[e(v,{sellers:_.value,isLoading:o.value},{actionButton:a(()=>[e(s(h),{open:r.value,"onUpdate:open":l[0]||(l[0]=c=>r.value=c)},{default:a(()=>[e(s($),{"as-child":""},{default:a(()=>[e(s(f),{class:"gap-2"},{default:a(()=>[e(s(u),{class:"w-5 h-5"}),T]),_:1})]),_:1}),e(s(y),null,{default:a(()=>[e(s(A),null,{default:a(()=>[e(s(w),null,{default:a(()=>[t("Agregar vendedor")]),_:1}),e(s(x),null,{default:a(()=>[t(" Agrega un nuevo vendedor a esta rifa ")]),_:1})]),_:1}),E,e(s(C),null,{default:a(()=>[e(s(b),null,{default:a(()=>[t("Cancelar")]),_:1}),e(s(g),null,{default:a(()=>[t("Agregar")]),_:1})]),_:1})]),_:1})]),_:1},8,["open"])]),emptyText:a(()=>[F]),actionForEmpty:a(()=>[e(s(f),{class:"gap-2",onClick:l[1]||(l[1]=c=>r.value=!0)},{default:a(()=>[e(s(u),{class:"w-5 h-5"}),M]),_:1})]),_:1},8,["sellers","isLoading"])]))}});export{H as default};
