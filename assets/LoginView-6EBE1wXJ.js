import{d as C,f as q,r as F,b7 as N,q as T,o,c,a as t,b as a,w as s,e,s as l,_ as m,D as g,v,j as V,S as j,Q as B,Y as G,ap as L}from"./index-BUMr62XV.js";import{_ as D,a as I,b as M,c as P}from"./CardContent.vue_vue_type_script_setup_true_lang-NvPswe6O.js";import{_ as R,a as A}from"./CardFooter.vue_vue_type_script_setup_true_lang-62kDSbSW.js";import{_ as h}from"./Input.vue_vue_type_script_setup_true_lang-BXEm0tO_.js";import{C as z,a as O,_ as Q}from"./google-kWBK1JSG.js";import{t as U,o as Y,s as b,u as H,F as w,_ as x,a as $,b as y,c as S}from"./FormMessage.vue_vue_type_script_setup_true_lang-vwlUzeLb.js";const J=["aria-disabled"],K=["disabled"],W={class:"grid grid-cols-2 gap-6"},X=t("div",{class:"relative"},[t("div",{class:"absolute inset-0 flex items-center"},[t("span",{class:"w-full border-t"})]),t("div",{class:"relative flex justify-center text-xs uppercase"},[t("span",{class:"bg-background px-2 text-muted-foreground"}," O continuar con correo electrónico ")])],-1),Z=t("span",null,"Iniciar sesión",-1),ee={class:"text-left self-end text-sm text-muted-foreground"},ae=C({__name:"LoginForm",setup(E){const _=q(),r=F(!1),k=U(Y({email:b({required_error:"Email es requerido"}).min(5,{message:"Minimo 5 caracteres"}).email({message:"Email invalido"}),password:b({required_error:"Password es requerido"}).min(6,{message:"Minimo 6 caracteres"})})),u=H({validationSchema:k}),f=u.handleSubmit(async d=>{r.value=!0,u.setFieldError("email",""),await new Promise(i=>setTimeout(i,500)),_.login(d.email,d.password).then(()=>{}).catch(i=>{i instanceof N?u.setFieldError("email","Credenciales incorrectas"):console.log("Unknown Error",i)}).finally(()=>{r.value=!1})});return(d,i)=>{const p=T("auto-animate");return o(),c("form",{onSubmit:i[0]||(i[0]=L((...n)=>e(f)&&e(f)(...n),["prevent"])),class:"w-full","aria-disabled":r.value},[t("fieldset",{disabled:r.value},[a(e(P),{class:"w-full"},{default:s(()=>[a(e(D),{class:"space-y-1"},{default:s(()=>[a(e(I),{class:"text-2xl"},{default:s(()=>[l(" Iniciar Sesión ")]),_:1}),a(e(R),null,{default:s(()=>[l(" Inicia sesión para comenzar. ")]),_:1})]),_:1}),a(e(M),{class:"grid gap-4"},{default:s(()=>[t("div",W,[a(e(m),{type:"button",variant:"outline"},{default:s(()=>[a(e(z),{class:"mr-2 h-4 w-4"}),l(" Github ")]),_:1}),a(e(m),{type:"button",variant:"outline"},{default:s(()=>[a(e(O),{class:"mr-2 h-4 w-4"}),l(" Google ")]),_:1})]),X,a(e(w),{name:"email"},{default:s(({componentField:n})=>[a(e(x),null,{default:s(()=>[a(e($),null,{default:s(()=>[l("Email")]),_:1}),a(e(y),null,{default:s(()=>[a(e(h),g({type:"email",placeholder:"mail@example.com"},n,{required:""}),null,16)]),_:2},1024),v((o(),c("div",null,[a(e(S))])),[[p]])]),_:2},1024)]),_:1}),a(e(w),{name:"password"},{default:s(({componentField:n})=>[a(e(x),null,{default:s(()=>[a(e($),null,{default:s(()=>[l("Contraseña")]),_:1}),a(e(y),null,{default:s(()=>[a(e(h),g({type:"password"},n,{required:""}),null,16)]),_:2},1024),v((o(),c("div",null,[a(e(S))])),[[p]])]),_:2},1024)]),_:1})]),_:1}),a(e(A),{class:"flex-col gap-4"},{default:s(()=>[a(e(m),{type:"submit",class:"w-full"},{default:s(()=>[r.value?(o(),V(e(j),{key:0,class:"mr-2 h-4 w-4"})):B("",!0),Z]),_:1}),a(e(Q)),t("p",ee,[l(" No tienes una cuenta? "),a(e(G),{class:"underline underline-offset-4",to:{name:"register"}},{default:s(()=>[l("Registrarse")]),_:1})])]),_:1})]),_:1})],8,K)],40,J)}}}),se={class:"w-full max-w-md md:max-w-lg flex flex-col items-center justify-center gap-4"},ce=C({__name:"LoginView",setup(E){return(_,r)=>(o(),c("div",se,[a(ae)]))}});export{ce as default};
