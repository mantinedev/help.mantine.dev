(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8267],{88706:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/q/next-load-fonts",function(){return t(87559)}])},87559:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c},meta:function(){return a}});var o=t(85893),r=t(25190),s=t(37141);let a={title:"How can I load fonts in Next.js?",description:"A guide to load custom fonts in Next.js with CSS and next/font package",slug:"next-load-fonts",category:"next.js",tags:["fonts","Google fonts","next.js"],created_at:"January 4, 2024",last_updated_at:"January 4, 2024"},i=(0,s.A)(a);function l(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"loading-fonts-with-nextfont-package",children:"Loading fonts with next/font package"}),"\n",(0,o.jsxs)(n.p,{children:["To load fonts with the ",(0,o.jsx)(n.a,{href:"https://nextjs.org/docs/pages/building-your-application/optimizing/fonts",children:"next/font"}),"\npackage, create the following folder structure (the example with GreycliffCF custom font):"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-plaintext",children:"GreycliffCF/\n├─ GreycliffCF-Bold.woff2\n├─ GreycliffCF-Heavy.woff2\n├─ GreycliffCF.ts\n"})}),"\n",(0,o.jsxs)(n.p,{children:["In ",(0,o.jsx)(n.code,{children:"GreycliffCF.ts"})," file, add the following code:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import localFont from 'next/font/local';\n\nexport const greycliffCF = localFont({\n  src: [\n    {\n      path: './GreycliffCF-Bold.woff2',\n      weight: '700',\n      style: 'normal',\n    },\n    {\n      path: './GreycliffCF-Heavy.woff2',\n      weight: '900',\n      style: 'normal',\n    },\n  ],\n});\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Then add the font to your ",(0,o.jsx)(n.a,{href:"https://mantine.dev/theming/theme-object/",children:"theme"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { DEFAULT_THEME, MantineProvider } from '@mantine/core';\nimport { greycliffCF } from './GreycliffCF';\n\nimport '@mantine/core/styles.css';\n\nfunction Demo() {\n  return (\n    <MantineProvider\n      theme={{\n        fontFamily: greycliffCF.style.fontFamily,\n        fontFamilyMonospace: 'Monaco, Courier, monospace',\n        headings: {\n          // Use default theme if you want to provide default Mantine fonts as a fallback\n          fontFamily: `${greycliffCF.style.fontFamily}, ${DEFAULT_THEME.fontFamily}`,\n        },\n      }}\n    >\n      Your app here\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"loading-fonts-without-nextfont-package",children:"Loading fonts without next/font package"}),"\n",(0,o.jsx)(n.p,{children:"Create the following folder structure (the example with GreycliffCF custom font):"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-plaintext",children:"GreycliffCF/\n├─ GreycliffCF-Bold.woff2\n├─ GreycliffCF-Heavy.woff2\n├─ GreycliffCF.css\n"})}),"\n",(0,o.jsxs)(n.p,{children:["In ",(0,o.jsx)(n.code,{children:"GreycliffCF.css"})," file, add the following code:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-css",children:"@font-face {\n  font-family: 'Greycliff CF';\n  src: url('./GreycliffCF-Bold.woff2') format('woff2');\n  font-weight: 700;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Greycliff CF';\n  src: url('./GreycliffCF-Heavy.woff2') format('woff2');\n  font-weight: 900;\n  font-style: normal;\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Then import ",(0,o.jsx)(n.code,{children:"GreycliffCF.css"})," file at the root of your application and\nadd the font to your ",(0,o.jsx)(n.a,{href:"https://mantine.dev/theming/theme-object/",children:"theme"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { DEFAULT_THEME, MantineProvider } from '@mantine/core';\n\nimport '@mantine/core/styles.css';\nimport './GreycliffCF/GreycliffCF.css';\n\nfunction Demo() {\n  return (\n    <MantineProvider\n      theme={{\n        fontFamily: 'Greycliff CF, sans-serif',\n        fontFamilyMonospace: 'Monaco, Courier, monospace',\n        headings: {\n          // Use default theme if you want to provide default Mantine fonts as a fallback\n          fontFamily: `Greycliff CF, ${DEFAULT_THEME.fontFamily}`,\n        },\n      }}\n    >\n      Your app here\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"load-fonts-from-google-fonts",children:"Load fonts from Google Fonts"}),"\n",(0,o.jsxs)(n.p,{children:["Selects fonts you want to use at ",(0,o.jsx)(n.a,{href:"https://fonts.google.com/",children:"Google Fonts"})," and copy\nHTML code snippet. For example, to load ",(0,o.jsx)(n.a,{href:"https://fonts.google.com/specimen/Roboto",children:"Roboto"}),"\nfont, the code you receive from Google Fonts will look something like this:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<link rel="preconnect" href="https://fonts.googleapis.com" />\n<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />\n<link\n  href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"\n  rel="stylesheet"\n/>\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Add the code to the ",(0,o.jsx)(n.a,{href:"https://nextjs.org/docs/pages/api-reference/components/head",children:"head"}),"\nof your application and add the font to your ",(0,o.jsx)(n.a,{href:"https://mantine.dev/theming/theme-object/",children:"theme"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { DEFAULT_THEME, MantineProvider } from '@mantine/core';\n\nimport '@mantine/core/styles.css';\n\nfunction Demo() {\n  return (\n    <MantineProvider\n      theme={{\n        fontFamily: 'Roboto, sans-serif',\n        fontFamilyMonospace: 'Monaco, Courier, monospace',\n        headings: {\n          // Use default theme if you want to provide default Mantine fonts as a fallback\n          fontFamily: `Roboto, ${DEFAULT_THEME.fontFamily}`,\n        },\n      }}\n    >\n      Your app here\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Alternatively, you can download fonts from Google Fonts and load them with\n",(0,o.jsx)(n.a,{href:"https://nextjs.org/docs/pages/building-your-application/optimizing/fonts",children:"next/font"}),"\npackage to have Next.js fonts optimization feature."]})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(i,{...e,children:(0,o.jsx)(l,{...e})})}},25190:function(e,n,t){"use strict";t.d(n,{a:function(){return A}});var o=t(85893),r=t(90512),s=t(28008),a=t(60967),Image=t(80929),i=t(26536),l=t(65046),c=t(42677),Text=t(54410),d=t(97631),f=t.n(d);function h(e){let{error:n}=e;return(0,o.jsxs)("div",{className:f().wrapper,children:[(0,o.jsx)(Text.x,{className:f().label,children:"Error message:"}),(0,o.jsx)(Text.x,{className:f().error,children:n})]})}t(67294);var m=t(17010),u=t(65984),p=t(93043),x=t(57187),g=t(14251),_=t.n(g);function j(e){let{className:n,...t}=e,s=(0,u.rZ)();return(0,o.jsx)(p.V,{className:(0,r.Z)(_().root,n),icon:(0,o.jsx)(m.Z,{className:_().icon}),radius:"md",__vars:{"--docs-bq-code-bg-light":(0,x.m)(s.colors.blue[6],.2),"--docs-bq-code-bg-dark":(0,x.m)(s.colors.blue[4],.2)},...t})}var y=t(3520),v=t(47529),N=t(20747),F=t(78543),w=t(19169),b=t.n(w);function M(e){let{yarnScript:n,npmScript:t}=e,[r,s]=(0,y._)({key:"script-tab",defaultValue:0});return(0,o.jsx)(F.Q,{classNames:{root:b().root},activeTab:r,onTabChange:s,code:[{fileName:"yarn",code:n,language:"bash",icon:(0,o.jsx)(v.z,{className:b().icon,size:16})},{fileName:"npm",code:t,language:"bash",icon:(0,o.jsx)(N._,{className:b().icon,size:16})}]})}function k(e){let{packages:n,dev:t}=e;return(0,o.jsx)(M,{yarnScript:"yarn add ".concat(t?"--dev ":"").concat(n),npmScript:"npm install ".concat(t?"--save-dev ":"").concat(n)})}var C=t(50359),E=t.n(C);function T(e){let{id:n,children:t,order:a=2,...i}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{id:n,"data-heading":t,"data-order":a,className:E().titleOffset}),(0,o.jsx)(s.D,{order:a,className:E().title,...i,children:(0,o.jsx)("a",{className:(0,r.Z)(E().titleLink,"mantine-focus-auto"),href:"#".concat(n),children:t})})]})}let G=e=>n=>(0,o.jsx)(T,{order:e,...n});function L(e){let{children:n}=e;return(0,o.jsx)(c.P,{className:E().code,code:n.props.children,language:function(e){let n=(e.props.className||"").match(RegExp("language-(?<lang>.*)"));return n&&n.groups&&n.groups.lang?n.groups.lang:"tsx"}(n)})}function H(e){return(0,o.jsx)("p",{className:E().paragraph,...e})}function P(e){return(0,o.jsx)("ul",{className:E().ul,...e})}function D(e){return(0,o.jsx)("li",{className:E().li,...e})}function z(e){let{href:n,...t}=e;return(0,o.jsx)(a.e,{className:E().link,href:n,...t})}function A(e){return{img:Image.E,ul:P,li:D,p:H,a:z,code:i.E,h1:G(1),h2:G(2),h3:G(3),h4:G(4),h5:G(5),h6:G(6),pre:L,Demo:l.B,InstallScript:k,ErrorMessage:h,blockquote:j,...e}}},37141:function(e,n,t){"use strict";t.d(n,{A:function(){return G}});var o=t(85893),r=t(9008),s=t.n(r),a=t(41664),i=t.n(a),l=t(33507),c=t(30471),d=t(36247),f=t(43078),h=t(60967),m=t(90991),u=t(28008),Text=t(54410),p=t(67294),x=t(80207),g=t.n(x);function _(e){let{icon:n,children:t,link:r}=e,s=r?(0,o.jsxs)("a",{href:r,target:"_blank",className:g().body,rel:"noreferrer",children:[(0,o.jsx)("div",{className:g().icon,children:n}),(0,o.jsx)("div",{className:g().content,children:t})]}):(0,o.jsxs)("div",{className:g().body,children:[(0,o.jsx)("div",{className:g().icon,children:n}),(0,o.jsx)("div",{className:g().content,children:t})]});return(0,o.jsx)("div",{className:g().root,children:s})}var j=t(11163),y=t(94342),v=t(15437),N=t(88565),F=t(96721),w=t(31379),b=t.n(w);function M(e){if(0===e.length)return -1;let n=e.reduce((e,n,t)=>Math.abs(e.position)<Math.abs(n.y)?e:{index:t,position:n.y},{index:0,position:e[0].y});return n.index}function k(){let[e,n]=(0,p.useState)(0),[t,r]=(0,p.useState)([]),s=(0,p.useRef)([]),a=(0,j.useRouter)(),i=t.filter(e=>e.depth>1),l=()=>{n(M(s.current.map(e=>e.getNode().getBoundingClientRect())))};if((0,p.useEffect)(()=>{let e=function(){let e=document.getElementById("mdx");return e?function(e){let n=[];for(let t=0;t<e.length;t+=1){let o=e[t];o.id&&n.push({depth:parseInt(o.getAttribute("data-order"),10),content:o.getAttribute("data-heading")||"",id:o.id,getNode:()=>document.getElementById(o.id)})}return n}(Array.from(e.querySelectorAll("[data-heading]"))):[]}();return s.current=e,r(e),n(M(e.map(e=>e.getNode().getBoundingClientRect()))),window.addEventListener("scroll",l),()=>window.removeEventListener("scroll",l)},[]),0===i.length)return null;let c=i.map((n,t)=>(0,o.jsx)(Text.x,{component:"a",fz:"sm",className:b().link,mod:{active:e===t},href:"#".concat(n.id),__vars:{"--toc-link-offset":"".concat(n.depth-1)},onClick:e=>{e.preventDefault(),a.replace("".concat(a.pathname,"#").concat(n.id))},children:n.content},n.id));return(0,o.jsx)(v.x,{component:"nav",className:b().wrapper,children:(0,o.jsx)("div",{className:b().inner,children:(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{className:b().header,children:[(0,o.jsx)(y.Z,{style:{width:(0,N.h)(20),height:(0,N.h)(20)},stroke:1.5}),(0,o.jsx)(Text.x,{className:b().title,children:"Table of contents"})]}),(0,o.jsx)(F.x.Autosize,{mah:"calc(100vh - ".concat((0,N.h)(140),")"),type:"never",offsetScrollbars:!0,children:(0,o.jsx)("div",{className:b().items,children:c})})]})})})}var C=t(95372),E=t.n(C);function T(e){let{meta:n,children:t}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s(),{children:(0,o.jsx)("title",{children:"".concat(n.title," | Mantine")})}),(0,o.jsxs)("article",{children:[(0,o.jsx)("header",{className:E().header,children:(0,o.jsxs)(f.W,{size:"md",children:[(0,o.jsx)(h.e,{component:i(),href:"/",underline:"hover",fz:"sm",children:(0,o.jsxs)(m.M,{inline:!0,component:"span",style:{gap:5},children:[(0,o.jsx)(l.Z,{size:18,stroke:1.5}),(0,o.jsx)("span",{children:"Back to all questions"})]})}),(0,o.jsx)(u.D,{className:E().title,children:n.title}),(0,o.jsxs)("nav",{className:E().links,children:[(0,o.jsx)(_,{icon:(0,o.jsx)(c.Z,{size:18,stroke:1.5}),link:"https://github.com/mantinedev/help.mantine.dev/blob/master/src/pages/q/".concat(n.slug,".mdx"),children:"Edit this page on GitHub"}),(0,o.jsx)(_,{icon:(0,o.jsx)(d.Z,{size:18,stroke:1.5}),link:"https://github.com/mantinedev/help.mantine.dev/issues/new?template=article_report.yml&title=".concat(encodeURIComponent("Issue with article ".concat(n.title))),children:"Report issue with the article"})]}),(0,o.jsxs)(Text.x,{c:"dimmed",fz:"xs",mt:"md",children:["Last updated"," ",(0,o.jsx)(Text.x,{component:"time",dateTime:new Date(n.last_updated_at).toLocaleDateString(),c:"var(--mantine-color-text)",inherit:!0,children:n.last_updated_at})]})]})}),(0,o.jsxs)(f.W,{size:"md",className:E().inner,children:[(0,o.jsx)("div",{className:E().content,id:"mdx",children:t}),(0,o.jsx)(k,{})]})]})]})}function G(e){return n=>{let{children:t}=n;return(0,o.jsx)(T,{meta:e,children:t})}}},50359:function(e){e.exports={paragraph:"MdxElements_paragraph__4fXCh",link:"MdxElements_link__J7fnd",ul:"MdxElements_ul__OOTjk",li:"MdxElements_li__3_j76",title:"MdxElements_title__l4zV5",titleLink:"MdxElements_titleLink__UU75K",titleOffset:"MdxElements_titleOffset__kBHVU",code:"MdxElements_code__yvlvb"}},97631:function(e){e.exports={wrapper:"MdxErrorMessage_wrapper__JlJDx",error:"MdxErrorMessage_error__XuiIB",label:"MdxErrorMessage_label__SsQTh"}},14251:function(e){e.exports={root:"MdxInfo_root___n6Nr",icon:"MdxInfo_icon__9t9jJ"}},19169:function(e){e.exports={root:"MdxNpmScript_root__yTuQb",icon:"MdxNpmScript_icon__OPgOf"}},95372:function(e){e.exports={header:"MdxLayout_header__0tel7",title:"MdxLayout_title__KyoNs",links:"MdxLayout_links__ikk4L",inner:"MdxLayout_inner__vHPN9",content:"MdxLayout_content__Pg8un"}},80207:function(e){e.exports={root:"PageHeaderLink_root__wMV7V",label:"PageHeaderLink_label__eYp4m",body:"PageHeaderLink_body__yrqn0",icon:"PageHeaderLink_icon__8FTyU"}},31379:function(e){e.exports={wrapper:"TableOfContents_wrapper__4dG89",inner:"TableOfContents_inner__po5SO",link:"TableOfContents_link__fUzKF",header:"TableOfContents_header__1sSDD",title:"TableOfContents_title__owxbN",items:"TableOfContents_items__IQuAZ"}}},function(e){e.O(0,[2005,9774,2888,179],function(){return e(e.s=88706)}),_N_E=e.O()}]);