import{V as g,d as v,r as u,$ as w,o as f,c as m,a as d,b as p,e as h,w as y,s as U,_ as x,aO as D,P as b,t as F}from"./index-CxjTxojl.js";import{v as S,_ as T,b as V}from"./v4-CV9etKCf.js";import{_ as k}from"./Input.vue_vue_type_script_setup_true_lang-BylAQ-03.js";const C=async(c,e)=>{e=S().slice(-10)+"-"+e;const{data:o,error:i}=await g.storage.from("raffles").upload(e,c,{cacheControl:"3600",upsert:!1});return i&&console.log(i),o},N=async c=>{const{data:e,error:s}=await g.storage.from("raffles").createSignedUrl(c,31536e4);return s&&console.log(s),e},$={class:"w-full"},B={class:"flex flex-col gap-4"},H=["src"],z=["src"],O=v({__name:"UploadFileForm",setup(c){const e=u(),s=u(null),o=u(),i=t=>{t.preventDefault();const l=new FormData(t.target);console.log(l);const r=(()=>{let a=[];for(const n of l.entries())n[1]instanceof File&&a.push(n[1]);return a})();console.log(r),console.log(r.filter(a=>a.size>0)),r.filter(a=>a.size>0).forEach(async a=>{var _;const n=await C(a,a.name);console.log(n),o.value=(_=await N(n.path))==null?void 0:_.signedUrl})};return w(s,t=>{console.log(t),t&&(e.value=V(t))}),(t,l)=>(f(),m("div",$,[d("form",{action:"",onSubmit:D(i,["prevent"])},[d("div",B,[p(h(k),{type:"text",name:"name"}),p(T,{name:"image","base64-thumb-hash":s.value,"onUpdate:base64ThumbHash":l[0]||(l[0]=r=>s.value=r)},null,8,["base64-thumb-hash"]),p(h(x),{type:"submit"},{default:y(()=>[U("Submit")]),_:1})])],32),e.value?(f(),m("img",{key:0,class:"w-60",src:e.value},null,8,H)):b("",!0),d("pre",null,F(s.value),1),o.value?(f(),m("img",{key:1,class:"w-60",src:o.value},null,8,z)):b("",!0)]))}});export{O as default};
