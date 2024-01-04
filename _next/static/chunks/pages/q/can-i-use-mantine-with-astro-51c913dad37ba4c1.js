(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9894],{20890:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/q/can-i-use-mantine-with-astro",function(){return n(26222)}])},26222:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l},meta:function(){return o}});var r=n(85893),s=n(25190),a=n(37141);let o={title:"Can I use Mantine with Astro?",description:"No, Astro does not support React context",slug:"can-i-use-mantine-with-astro",category:"tooling",tags:["astro"],created_at:"January 3, 2024",last_updated_at:"January 3, 2024"},i=(0,a.A)(o);function c(e){let t={a:"a",blockquote:"blockquote",h2:"h2",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"if-you-need-astro-you-do-not-need-a-component-library",children:"If you need Astro, you do not need a component library"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://astro.build/",children:"Astro"})," is designed to minimize\nthe amount of JavaScript required to build a website. All component\nlibraries require quite a bit of JavaScript to work, so if you are\nplanning to use Astro, the best option is to build your own components\nthat do not have large footprint."]}),"\n",(0,r.jsx)(t.h2,{id:"i-need-mantine-what-should-i-use-instead",children:"I need Mantine, what should I use instead?"}),"\n",(0,r.jsxs)(t.p,{children:["In case you need Mantine and SSG application, you can use ",(0,r.jsx)(t.a,{href:"https://nextjs.org/",children:"Next.js"}),"\nor ",(0,r.jsx)(t.a,{href:"https://www.gatsbyjs.com/",children:"Gatsby"}),". Both of them support all React features\nthat are required for Mantine to work."]}),"\n",(0,r.jsx)(t.h2,{id:"no-i-need-astro-and-mantine",children:"No! I need Astro and Mantine!"}),"\n",(0,r.jsxs)(t.p,{children:["Not a chance, according to ",(0,r.jsx)(t.a,{href:"https://docs.astro.build/en/core-concepts/sharing-state/",children:"Astro documentation"}),",\nAstro does not support React context, which is required for Mantine to work."]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"From Astro documentation:"})}),"\n",(0,r.jsx)(t.p,{children:"UI frameworks like React or Vue may encourage “context” providers for other components to consume.\nBut when partially hydrating components within Astro or Markdown, you can’t use these context wrappers."}),"\n"]})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(i,{...e,children:(0,r.jsx)(c,{...e})})}},25190:function(e,t,n){"use strict";n.d(t,{a:function(){return R}});var r=n(85893),s=n(90512),a=n(28008),o=n(60967),Image=n(80929),i=n(26536),c=n(65046),l=n(42677),Text=n(54410),d=n(97631),u=n.n(d);function h(e){let{error:t}=e;return(0,r.jsxs)("div",{className:u().wrapper,children:[(0,r.jsx)(Text.x,{className:u().label,children:"Error message:"}),(0,r.jsx)(Text.x,{className:u().error,children:t})]})}n(67294);var m=n(17010),p=n(65984),x=n(93043),_=n(57187),f=n(14251),g=n.n(f);function j(e){let{className:t,...n}=e,a=(0,p.rZ)();return(0,r.jsx)(x.V,{className:(0,s.Z)(g().root,t),icon:(0,r.jsx)(m.Z,{className:g().icon}),radius:"md",__vars:{"--docs-bq-code-bg-light":(0,_.m)(a.colors.blue[6],.2),"--docs-bq-code-bg-dark":(0,_.m)(a.colors.blue[4],.2)},...n})}var b=n(3520),N=n(47529),v=n(20747),y=n(78543),k=n(19169),w=n.n(k);function M(e){let{yarnScript:t,npmScript:n}=e,[s,a]=(0,b._)({key:"script-tab",defaultValue:0});return(0,r.jsx)(y.Q,{classNames:{root:w().root},activeTab:s,onTabChange:a,code:[{fileName:"yarn",code:t,language:"bash",icon:(0,r.jsx)(N.z,{className:w().icon,size:16})},{fileName:"npm",code:n,language:"bash",icon:(0,r.jsx)(v._,{className:w().icon,size:16})}]})}function E(e){let{packages:t,dev:n}=e;return(0,r.jsx)(M,{yarnScript:"yarn add ".concat(n?"--dev ":"").concat(t),npmScript:"npm install ".concat(n?"--save-dev ":"").concat(t)})}var A=n(50359),I=n.n(A);function L(e){let{id:t,children:n,order:o=2,...i}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{id:t,"data-heading":n,"data-order":o,className:I().titleOffset}),(0,r.jsx)(a.D,{order:o,className:I().title,...i,children:(0,r.jsx)("a",{className:(0,s.Z)(I().titleLink,"mantine-focus-auto"),href:"#".concat(t),children:n})})]})}let S=e=>t=>(0,r.jsx)(L,{order:e,...t});function q(e){let{children:t}=e;return(0,r.jsx)(l.P,{className:I().code,code:t.props.children,language:function(e){let t=(e.props.className||"").match(RegExp("language-(?<lang>.*)"));return t&&t.groups&&t.groups.lang?t.groups.lang:"tsx"}(t)})}function O(e){return(0,r.jsx)("p",{className:I().paragraph,...e})}function T(e){return(0,r.jsx)("ul",{className:I().ul,...e})}function z(e){return(0,r.jsx)("li",{className:I().li,...e})}function C(e){let{href:t,...n}=e;return(0,r.jsx)(o.e,{className:I().link,href:t,...n})}function R(e){return{img:Image.E,ul:T,li:z,p:O,a:C,code:i.E,h1:S(1),h2:S(2),h3:S(3),h4:S(4),h5:S(5),h6:S(6),pre:q,Demo:c.B,InstallScript:E,ErrorMessage:h,blockquote:j,...e}}},37141:function(e,t,n){"use strict";n.d(t,{A:function(){return S}});var r=n(85893),s=n(9008),a=n.n(s),o=n(41664),i=n.n(o),c=n(33507),l=n(30471),d=n(36247),u=n(43078),h=n(60967),m=n(90991),p=n(28008),Text=n(54410),x=n(67294),_=n(80207),f=n.n(_);function g(e){let{icon:t,children:n,link:s}=e,a=s?(0,r.jsxs)("a",{href:s,target:"_blank",className:f().body,rel:"noreferrer",children:[(0,r.jsx)("div",{className:f().icon,children:t}),(0,r.jsx)("div",{className:f().content,children:n})]}):(0,r.jsxs)("div",{className:f().body,children:[(0,r.jsx)("div",{className:f().icon,children:t}),(0,r.jsx)("div",{className:f().content,children:n})]});return(0,r.jsx)("div",{className:f().root,children:a})}var j=n(11163),b=n(94342),N=n(15437),v=n(88565),y=n(96721),k=n(31379),w=n.n(k);function M(e){if(0===e.length)return -1;let t=e.reduce((e,t,n)=>Math.abs(e.position)<Math.abs(t.y)?e:{index:n,position:t.y},{index:0,position:e[0].y});return t.index}function E(){let[e,t]=(0,x.useState)(0),[n,s]=(0,x.useState)([]),a=(0,x.useRef)([]),o=(0,j.useRouter)(),i=n.filter(e=>e.depth>1),c=()=>{t(M(a.current.map(e=>e.getNode().getBoundingClientRect())))};if((0,x.useEffect)(()=>{let e=function(){let e=document.getElementById("mdx");return e?function(e){let t=[];for(let n=0;n<e.length;n+=1){let r=e[n];r.id&&t.push({depth:parseInt(r.getAttribute("data-order"),10),content:r.getAttribute("data-heading")||"",id:r.id,getNode:()=>document.getElementById(r.id)})}return t}(Array.from(e.querySelectorAll("[data-heading]"))):[]}();return a.current=e,s(e),t(M(e.map(e=>e.getNode().getBoundingClientRect()))),window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]),0===i.length)return null;let l=i.map((t,n)=>(0,r.jsx)(Text.x,{component:"a",fz:"sm",className:w().link,mod:{active:e===n},href:"#".concat(t.id),__vars:{"--toc-link-offset":"".concat(t.depth-1)},onClick:e=>{e.preventDefault(),o.replace("".concat(o.pathname,"#").concat(t.id))},children:t.content},t.id));return(0,r.jsx)(N.x,{component:"nav",className:w().wrapper,children:(0,r.jsx)("div",{className:w().inner,children:(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:w().header,children:[(0,r.jsx)(b.Z,{style:{width:(0,v.h)(20),height:(0,v.h)(20)},stroke:1.5}),(0,r.jsx)(Text.x,{className:w().title,children:"Table of contents"})]}),(0,r.jsx)(y.x.Autosize,{mah:"calc(100vh - ".concat((0,v.h)(140),")"),type:"never",offsetScrollbars:!0,children:(0,r.jsx)("div",{className:w().items,children:l})})]})})})}var A=n(95372),I=n.n(A);function L(e){let{meta:t,children:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a(),{children:(0,r.jsx)("title",{children:"".concat(t.title," | Mantine")})}),(0,r.jsxs)("article",{children:[(0,r.jsx)("header",{className:I().header,children:(0,r.jsxs)(u.W,{size:"md",children:[(0,r.jsx)(h.e,{component:i(),href:"/",underline:"hover",fz:"sm",children:(0,r.jsxs)(m.M,{inline:!0,component:"span",style:{gap:5},children:[(0,r.jsx)(c.Z,{size:18,stroke:1.5}),(0,r.jsx)("span",{children:"Back to all questions"})]})}),(0,r.jsx)(p.D,{className:I().title,children:t.title}),(0,r.jsxs)("nav",{className:I().links,children:[(0,r.jsx)(g,{icon:(0,r.jsx)(l.Z,{size:18,stroke:1.5}),link:"https://github.com/mantinedev/help.mantine.dev/blob/master/src/pages/q/".concat(t.slug,".mdx"),children:"Edit this page on GitHub"}),(0,r.jsx)(g,{icon:(0,r.jsx)(d.Z,{size:18,stroke:1.5}),link:"https://github.com/mantinedev/help.mantine.dev/issues/new?template=article_report.yml&title=".concat(encodeURIComponent("Issue with article ".concat(t.title))),children:"Report issue with the article"})]}),(0,r.jsxs)(Text.x,{c:"dimmed",fz:"xs",mt:"md",children:["Last updated"," ",(0,r.jsx)(Text.x,{component:"time",dateTime:new Date(t.last_updated_at).toLocaleDateString(),c:"var(--mantine-color-text)",inherit:!0,children:t.last_updated_at})]})]})}),(0,r.jsxs)(u.W,{size:"md",className:I().inner,children:[(0,r.jsx)("div",{className:I().content,id:"mdx",children:n}),(0,r.jsx)(E,{})]})]})]})}function S(e){return t=>{let{children:n}=t;return(0,r.jsx)(L,{meta:e,children:n})}}},50359:function(e){e.exports={paragraph:"MdxElements_paragraph__4fXCh",link:"MdxElements_link__J7fnd",ul:"MdxElements_ul__OOTjk",li:"MdxElements_li__3_j76",title:"MdxElements_title__l4zV5",titleLink:"MdxElements_titleLink__UU75K",titleOffset:"MdxElements_titleOffset__kBHVU",code:"MdxElements_code__yvlvb"}},97631:function(e){e.exports={wrapper:"MdxErrorMessage_wrapper__JlJDx",error:"MdxErrorMessage_error__XuiIB",label:"MdxErrorMessage_label__SsQTh"}},14251:function(e){e.exports={root:"MdxInfo_root___n6Nr",icon:"MdxInfo_icon__9t9jJ"}},19169:function(e){e.exports={root:"MdxNpmScript_root__yTuQb",icon:"MdxNpmScript_icon__OPgOf"}},95372:function(e){e.exports={header:"MdxLayout_header__0tel7",title:"MdxLayout_title__KyoNs",links:"MdxLayout_links__ikk4L",inner:"MdxLayout_inner__vHPN9",content:"MdxLayout_content__Pg8un"}},80207:function(e){e.exports={root:"PageHeaderLink_root__wMV7V",label:"PageHeaderLink_label__eYp4m",body:"PageHeaderLink_body__yrqn0",icon:"PageHeaderLink_icon__8FTyU"}},31379:function(e){e.exports={wrapper:"TableOfContents_wrapper__4dG89",inner:"TableOfContents_inner__po5SO",link:"TableOfContents_link__fUzKF",header:"TableOfContents_header__1sSDD",title:"TableOfContents_title__owxbN",items:"TableOfContents_items__IQuAZ"}}},function(e){e.O(0,[2005,9774,2888,179],function(){return e(e.s=20890)}),_N_E=e.O()}]);