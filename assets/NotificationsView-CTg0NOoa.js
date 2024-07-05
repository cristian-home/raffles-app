import{d as u,o as c,c as i,y as p,n as d,e,E as m,ag as x,a as o,g as w,b as t,w as r,s as n}from"./index-BUMr62XV.js";const f=u({__name:"Alert",props:{class:{},variant:{}},setup(s){const a=s;return(l,_)=>(c(),i("div",{class:d(e(m)(e(b)({variant:l.variant}),a.class)),role:"alert"},[p(l.$slots,"default")],2))}}),h=u({__name:"AlertTitle",props:{class:{}},setup(s){const a=s;return(l,_)=>(c(),i("h5",{class:d(e(m)("mb-1 font-medium leading-none tracking-tight",a.class))},[p(l.$slots,"default")],2))}}),v=u({__name:"AlertDescription",props:{class:{}},setup(s){const a=s;return(l,_)=>(c(),i("div",{class:d(e(m)("text-sm [&_p]:leading-relaxed",a.class))},[p(l.$slots,"default")],2))}}),b=x("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),$=o("div",{class:"flex-grow border-t"},null,-1),k=o("div",{class:"flex-grow border-t"},null,-1),C=u({__name:"SeparatorLine",props:{variant:{default:"horizontal"}},setup(s){const a=s;return(l,_)=>(c(),i("div",{class:d(["relative flex py-5 items-center",a.variant==="horizontal"?"flex-row":"flex-col"])},[$,o("span",{class:d(["flex-shrink mx-4",{orientation:a.variant==="horizontal"}])},[p(l.$slots,"default")],2),k],2))}}),M={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},y=o("g",{fill:"none",stroke:"currentColor","stroke-width":"1.5"},[o("path",{"stroke-linecap":"round",d:"M5 15h1.394c.786 0 1.18 0 1.511.177c.332.178.55.505.986 1.159l.16.24c.422.633.633.95.92.933c.286-.017.459-.356.803-1.036l1.966-3.877c.359-.706.538-1.06.831-1.071c.293-.012.5.326.914 1.001l.637 1.04c.43.701.644 1.051.985 1.243c.342.19.752.19 1.573.19H19"}),o("path",{d:"M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z",opacity:".5"})],-1),V=[y];function z(s,a){return c(),i("svg",M,[...V])}const A={name:"solar-pulse-line-duotone",render:z},S={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},B=w('<g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 22v-6a8 8 0 1 0-16 0v6" opacity=".5"></path><path stroke-linecap="round" d="M14.29 11.5a4.014 4.014 0 0 1 2.21 2.21M2 22h20M12 2v3m9 1l-1.5 1.5M3 6l1.5 1.5"></path><path d="M13.5 17.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z"></path><path stroke-linecap="round" d="M12 19v3" opacity=".5"></path></g>',1),N=[B];function E(s,a){return c(),i("svg",S,[...N])}const g={name:"solar-siren-rounded-line-duotone",render:E},D={class:"w-full flex flex-col items-center gap-4"},L={class:"w-full max-w-3xl flex flex-col gap-4"},T=u({__name:"NotificationsView",setup(s){return(a,l)=>(c(),i("div",D,[o("div",L,[t(e(f),{class:"[&>svg~*]:pl-10"},{default:r(()=>[t(e(A),{class:"w-8 h-8"}),t(e(h),null,{default:r(()=>[n("Cambios pendientes!")]),_:1}),t(e(v),null,{default:r(()=>[n(" Hay cambios pendientes para aplicar en la base de datos. ")]),_:1})]),_:1}),t(e(f),{variant:"destructive",class:"[&>svg~*]:pl-10"},{default:r(()=>[t(e(g),{class:"w-8 h-8"}),t(e(h),null,{default:r(()=>[n("Error")]),_:1}),t(e(v),null,{default:r(()=>[n(" Algo salió mal mientras se sincronizaba la base de datos. ")]),_:1})]),_:1}),t(C,null,{default:r(()=>[n("Ayer")]),_:1}),t(e(f),{variant:"destructive",class:"[&>svg~*]:pl-10"},{default:r(()=>[t(e(g),{class:"w-8 h-8"}),t(e(h),null,{default:r(()=>[n("Error")]),_:1}),t(e(v),null,{default:r(()=>[n(" Algo salió mal mientras se sincronizaba la base de datos. ")]),_:1})]),_:1})])]))}});export{T as default};
