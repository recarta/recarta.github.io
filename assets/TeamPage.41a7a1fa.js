import{h as z,S as U,Q as W,w as Q,y as k}from"./StartForm.7d3b9b48.js";import{c as g,r as f,v as K,o as X,h as c,R as Y,w as Z,g as ee,z as te,A as m,B as F,C as i,D as o,E as v,S as p,U as $,F as P,k as r,W as ae,G as le,a4 as oe,a5 as ie}from"./index.ecd8a84a.js";import{n as re,v as T,b as I}from"./QBtn.be5cf454.js";import{c as ne,h as se}from"./render.50964154.js";import{Q as ue}from"./QPage.dd114cbc.js";import{u as ce}from"./vue-i18n.744f5aa3.js";import{_ as de}from"./plugin-vue_export-helper.21dcd24c.js";const me={ratio:[String,Number]};function ge(e,l){return g(()=>{const n=Number(e.ratio||(l!==void 0?l.value:void 0));return isNaN(n)!==!0&&n>0?{paddingBottom:`${100/n}%`}:null})}const fe=1.7778;var he=ne({name:"QImg",props:{...me,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},loadingShowDelay:{type:[Number,String],default:0},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:fe},placeholderSrc:String,errorSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:l,emit:n}){const h=f(e.initialRatio),_=ge(e,h),S=ee(),{registerTimeout:q,removeTimeout:a}=z(),{registerTimeout:R,removeTimeout:B}=z(),C=g(()=>e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null),D=g(()=>e.errorSrc!==void 0?{src:e.errorSrc,__qerror:!0}:null),s=[f(null),f(C.value)],u=f(0),y=f(!1),w=f(!1),E=g(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),M=g(()=>({width:e.width,height:e.height})),V=g(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition q-img__image--`),j=g(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));function O(){if(B(),e.loadingShowDelay===0){y.value=!0;return}R(()=>{y.value=!0},e.loadingShowDelay)}function x(){B(),y.value=!1}function G({target:t}){T(S)===!1&&(a(),h.value=t.naturalHeight===0?.5:t.naturalWidth/t.naturalHeight,L(t,1))}function L(t,d){d===1e3||T(S)===!0||(t.complete===!0?H(t):q(()=>{L(t,d+1)},50))}function H(t){T(S)!==!0&&(u.value=u.value^1,s[u.value].value=null,x(),t.getAttribute("__qerror")!=="true"&&(w.value=!1),n("load",t.currentSrc||t.src))}function A(t){a(),x(),w.value=!0,s[u.value].value=D.value,s[u.value^1].value=C.value,n("error",t)}function N(t){const d=s[t].value,b={key:"img_"+t,class:V.value,style:j.value,alt:e.alt,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...d};return u.value===t?Object.assign(b,{class:b.class+"current",onLoad:G,onError:A}):b.class+="loaded",c("div",{class:"q-img__container absolute-full",key:"img"+t},c("img",b))}function J(){return y.value===!1?c("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},se(l[w.value===!0?"error":"default"])):c("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},l.loading!==void 0?l.loading():e.noSpinner===!0?void 0:[c(re,{color:e.spinnerColor,size:e.spinnerSize})])}{let t=function(){Z(()=>e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null,d=>{a(),w.value=!1,d===null?(x(),s[u.value^1].value=C.value):O(),s[u.value].value=d},{immediate:!0})};K.value===!0?X(t):t()}return()=>{const t=[];return _.value!==null&&t.push(c("div",{key:"filler",style:_.value})),s[0].value!==null&&t.push(N(0)),s[1].value!==null&&t.push(N(1)),t.push(c(Y,{name:"q-transition--fade"},J)),c("div",{key:"main",class:E.value,style:M.value,role:"img","aria-label":e.alt},t)}}});const ve={components:{StartForm:U},name:"TeamPage",setup(){const e=f(!1),{t:l}=ce();return{t:l,openStartForm:()=>{e.value=!0},showStartForm:e}},data(){return{teamMembers:[{id:1,name:"Etienne Friedli",position:"Co-Founder & CEO"},{id:2,name:"G\xE9raud de Laval",position:"Co-Founder & Chief Impact Officer"},{id:3,name:"Jacques Grivel",position:"Co-Founder & Chairman"},{id:4,name:"C\xE9dric Juillerat",position:"Co-Founder & Board Member"}],partners:[{id:1,name:"EPFL",logo:"partners/logo-epfl.png",url:"https://www.epfl.ch/"},{id:2,name:"Trust Valley",logo:"partners/logo-trust-valley.png",url:"https://trustvalley.swiss/"},{id:3,name:"Tayo",logo:"partners/logo-tayo.png",url:"https://tayo-software.com/"},{id:4,name:"Fresque de la Construction",logo:"partners/logo-fresque.png",url:"https://www.fresquedelaconstruction.org/"}]}}},_e=e=>(oe("data-v-ea8cd81a"),e=e(),ie(),e),Se={class:"text-h4 q-mb-xl"},ye={class:"row q-col-gutter-md"},we=_e(()=>o("div",{class:"background-icon"},null,-1)),be={class:"text-h6"},pe={class:"text-subtitle2"},qe={class:"q-py-xl"},Ce={class:"text-h4 q-mb-xl"},xe={class:"row q-col-gutter-md items-stretch"},ke={class:"q-my-xl q-py-xl"},Fe={class:"q-mx-sm"};function Te(e,l,n,h,_,S){const q=te("StartForm");return m(),F(ue,{class:"q-pa-xl bg-primary text-white"},{default:i(()=>[o("div",null,[o("div",Se,v(e.$t("Meet the team")),1),o("div",ye,[(m(!0),p(P,null,$(_.teamMembers,a=>(m(),p("div",{key:a.id,class:"col-12 col-sm-6 col-md-3"},[r(Q,{class:"my-card bg-accent relative-position overflow-hidden q-py-xl"},{default:i(()=>[we,r(k,null,{default:i(()=>[o("div",be,v(a.name),1),o("div",pe,v(a.position),1)]),_:2},1024)]),_:2},1024)]))),128))])]),o("div",qe,[o("div",Ce,v(e.$t("Partners")),1),o("div",xe,[(m(!0),p(P,null,$(_.partners,a=>(m(),p("div",{key:a.id,class:"col-6 col-sm-4 col-md-3"},[r(Q,{flat:"",class:"my-card bg-transparent full-height"},{default:i(()=>[a.logo?(m(),F(k,{key:0,class:"flex flex-center q-pa-none q-ma-none full-height"},{default:i(()=>[r(I,{flat:"","no-caps":"",href:a.url,type:"a",target:"_blank",class:"full-height full-width q-pa-none"},{default:i(()=>[r(he,{src:a.logo,alt:a.name,"spinner-color":"primary",style:{width:"100%","max-height":"150px","max-width":"300px"}},null,8,["src","alt"])]),_:2},1032,["href"])]),_:2},1024)):(m(),F(k,{key:1,class:"flex flex-center full-height bg-black"},{default:i(()=>[r(I,{flat:"","no-caps":"",href:a.url,type:"a",target:"_blank",class:"full-height full-width"},{default:i(()=>[le(v(e.$t(a.name)),1)]),_:2},1032,["href"])]),_:2},1024))]),_:2},1024)]))),128))]),o("div",ke,[r(I,{flat:"","no-caps":"",align:"left",class:ae(["bg-cta text-white text-weight-regular",{"full-width":e.$q.screen.lt.sm}]),onClick:l[0]||(l[0]=a=>h.showStartForm=!0)},{default:i(()=>[o("div",Fe,v(e.$t("Start")),1)]),_:1},8,["class"])])]),r(W,{modelValue:h.showStartForm,"onUpdate:modelValue":l[1]||(l[1]=a=>h.showStartForm=a)},{default:i(()=>[r(q)]),_:1},8,["modelValue"])]),_:1})}var Pe=de(ve,[["render",Te],["__scopeId","data-v-ea8cd81a"]]);export{Pe as default};