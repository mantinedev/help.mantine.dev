(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1960],{43036:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/q/dynamic-css-styles",function(){return t(26428)}])},26428:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c},meta:function(){return o}});var s=t(85893),r=t(25190),a=t(37141);let o={title:"How can I add dynamic CSS styles?",description:"Use data attributes, CSS variables or inline styles",slug:"dynamic-css-styles",category:"styles",tags:["dynamic","CSS","styles"],created_at:"January 4, 2024",last_updated_at:"January 4, 2024"},i=(0,a.A)(o);function l(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"data--attributes",children:"data- attributes"}),"\n",(0,s.jsxs)(n.p,{children:["If the value that controls dynamic styles is a boolean or a known small union of values,\nuse ",(0,s.jsx)(n.a,{href:"https://mantine.dev/styles/data-attributes/",children:"data- attributes"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"First, define data- attributes on the component. In the example below:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"data-disabled"})," represents boolean ",(0,s.jsx)(n.code,{children:"disabled"})," attribute. ",(0,s.jsx)(n.code,{children:"disabled || undefined"})," is required\nto not add ",(0,s.jsx)(n.code,{children:'data-disabled="false"'})," attribute when ",(0,s.jsx)(n.code,{children:"disabled"})," is ",(0,s.jsx)(n.code,{children:"false"})," and allow styling with ",(0,s.jsx)(n.code,{children:"&[data-disabled]"})," selector."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"data-orientation"})," represents ",(0,s.jsx)(n.code,{children:"orientation"})," prop which can be either ",(0,s.jsx)(n.code,{children:"horizontal"})," or ",(0,s.jsx)(n.code,{children:"vertical"}),".\nIn styles you can reference it with ",(0,s.jsx)(n.code,{children:'&[data-orientation="horizontal"]'})," selector."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { Box } from '@mantine/core';\nimport classes from './Demo.module.css';\n\ninterface DemoProps {\n  disabled: boolean;\n  orientation: 'horizontal' | 'vertical';\n}\n\nfunction Demo({ disabled, orientation }: DemoProps) {\n  return (\n    <Box\n      data-disabled={disabled || undefined}\n      data-orientation={orientation}\n      className={classes.root}\n    >\n      My demo\n    </Box>\n  );\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Then add styles in ",(0,s.jsx)(n.code,{children:".module.css"})," file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-scss",children:".root {\n  background: orange;\n  display: flex;\n\n  &[data-disabled] {\n    background: silver;\n  }\n\n  &[data-orientation='horizontal'] {\n    flex-direction: row;\n  }\n\n  &[data-orientation='vertical'] {\n    flex-direction: column;\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"inline-styles",children:"Inline styles"}),"\n",(0,s.jsxs)(n.p,{children:["If the value that controls dynamic styles is not represented by a known union\nof values (for example, value can be any valid CSS color), then you can use\ninline styles or ",(0,s.jsx)(n.a,{href:"https://mantine.dev/styles/style-props/",children:"style props"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { Box } from '@mantine/core';\n\ninterface DemoProps {\n  fontFamily: string;\n  color: string;\n}\n\nfunction Demo({ fontFamily, color }: DemoProps) {\n  return (\n    <Box style={{ backgroundColor: color }} ff={fontFamily}>\n      My demo\n    </Box>\n  );\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If you need to customize a deeply nested element, use ",(0,s.jsx)(n.a,{href:"https://mantine.dev/styles/styles-api/#styles-prop",children:"styles"}),"\nprop instead:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { Button } from '@mantine/core';\n\ninterface DemoProps {\n  color: string;\n}\n\nfunction Demo({ color }: DemoProps) {\n  return (\n    <Button styles={{ label: { backgroundColor: color } }}>\n      My demo\n    </Button>\n  );\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Note that, it is not possible use pseudo-classes (for example, ",(0,s.jsx)(n.code,{children:":hover"}),", ",(0,s.jsx)(n.code,{children:":first-of-type"}),")\nand media queries inside the ",(0,s.jsx)(n.code,{children:"styles"})," prop. For this purpose, use CSS variables\nwith ",(0,s.jsx)(n.a,{href:"https://mantine.dev/styles/styles-api/#classnames-prop",children:"classNames"})," prop."]}),"\n",(0,s.jsx)(n.h2,{id:"css-variables",children:"CSS variables"}),"\n",(0,s.jsxs)(n.p,{children:["If none of the methods above works for you (for example, you want to customize, ",(0,s.jsx)(n.code,{children:":hover"}),"\nstyles based on component prop), use CSS variables\nwith ",(0,s.jsx)(n.a,{href:"https://mantine.dev/styles/styles-api/#classnames-prop",children:"classNames"})," prop."]}),"\n",(0,s.jsxs)(n.p,{children:["First, define CSS variables in ",(0,s.jsx)(n.code,{children:"style"})," or ",(0,s.jsx)(n.code,{children:"styles"})," prop:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { Box } from '@mantine/core';\nimport classes from './Demo.module.css';\n\ninterface DemoProps {\n  color: string;\n}\n\nfunction Demo({ color }: DemoProps) {\n  return (\n    <Box style={{ '--demo-hover': color }} className={classes.root}>\n      My demo\n    </Box>\n  );\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Then reference them in ",(0,s.jsx)(n.code,{children:".module.css"})," file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-scss",children:".root {\n  background: orange;\n\n  &:hover {\n    background: var(--demo-hover);\n  }\n}\n"})})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(i,{...e,children:(0,s.jsx)(l,{...e})})}},25190:function(e,n,t){"use strict";t.d(n,{a:function(){return O}});var s=t(85893),r=t(90512),a=t(28008),o=t(60967),Image=t(80929),i=t(26536),l=t(65046),c=t(42677),Text=t(54410),d=t(97631),u=t.n(d);function h(e){let{error:n}=e;return(0,s.jsxs)("div",{className:u().wrapper,children:[(0,s.jsx)(Text.x,{className:u().label,children:"Error message:"}),(0,s.jsx)(Text.x,{className:u().error,children:n})]})}t(67294);var m=t(17010),x=t(65984),p=t(93043),f=t(57187),_=t(14251),j=t.n(_);function g(e){let{className:n,...t}=e,a=(0,x.rZ)();return(0,s.jsx)(p.V,{className:(0,r.Z)(j().root,n),icon:(0,s.jsx)(m.Z,{className:j().icon}),radius:"md",__vars:{"--docs-bq-code-bg-light":(0,f.m)(a.colors.blue[6],.2),"--docs-bq-code-bg-dark":(0,f.m)(a.colors.blue[4],.2)},...t})}var y=t(3520),b=t(47529),v=t(20747),N=t(78543),k=t(19169),w=t.n(k);function M(e){let{yarnScript:n,npmScript:t}=e,[r,a]=(0,y._)({key:"script-tab",defaultValue:0});return(0,s.jsx)(N.Q,{classNames:{root:w().root},activeTab:r,onTabChange:a,code:[{fileName:"yarn",code:n,language:"bash",icon:(0,s.jsx)(b.z,{className:w().icon,size:16})},{fileName:"npm",code:t,language:"bash",icon:(0,s.jsx)(v._,{className:w().icon,size:16})}]})}function S(e){let{packages:n,dev:t}=e;return(0,s.jsx)(M,{yarnScript:"yarn add ".concat(t?"--dev ":"").concat(n),npmScript:"npm install ".concat(t?"--save-dev ":"").concat(n)})}var E=t(50359),C=t.n(E);function D(e){let{id:n,children:t,order:o=2,...i}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{id:n,"data-heading":t,"data-order":o,className:C().titleOffset}),(0,s.jsx)(a.D,{order:o,className:C().title,...i,children:(0,s.jsx)("a",{className:(0,r.Z)(C().titleLink,"mantine-focus-auto"),href:"#".concat(n),children:t})})]})}let z=e=>n=>(0,s.jsx)(D,{order:e,...n});function B(e){let{children:n}=e;return(0,s.jsx)(c.P,{className:C().code,code:n.props.children,language:function(e){let n=(e.props.className||"").match(RegExp("language-(?<lang>.*)"));return n&&n.groups&&n.groups.lang?n.groups.lang:"tsx"}(n)})}function I(e){return(0,s.jsx)("p",{className:C().paragraph,...e})}function P(e){return(0,s.jsx)("ul",{className:C().ul,...e})}function T(e){return(0,s.jsx)("li",{className:C().li,...e})}function L(e){let{href:n,...t}=e;return(0,s.jsx)(o.e,{className:C().link,href:n,...t})}function O(e){return{img:Image.E,ul:P,li:T,p:I,a:L,code:i.E,h1:z(1),h2:z(2),h3:z(3),h4:z(4),h5:z(5),h6:z(6),pre:B,Demo:l.B,InstallScript:S,ErrorMessage:h,blockquote:g,...e}}},37141:function(e,n,t){"use strict";t.d(n,{A:function(){return z}});var s=t(85893),r=t(9008),a=t.n(r),o=t(41664),i=t.n(o),l=t(33507),c=t(30471),d=t(36247),u=t(43078),h=t(60967),m=t(90991),x=t(28008),Text=t(54410),p=t(67294),f=t(80207),_=t.n(f);function j(e){let{icon:n,children:t,link:r}=e,a=r?(0,s.jsxs)("a",{href:r,target:"_blank",className:_().body,rel:"noreferrer",children:[(0,s.jsx)("div",{className:_().icon,children:n}),(0,s.jsx)("div",{className:_().content,children:t})]}):(0,s.jsxs)("div",{className:_().body,children:[(0,s.jsx)("div",{className:_().icon,children:n}),(0,s.jsx)("div",{className:_().content,children:t})]});return(0,s.jsx)("div",{className:_().root,children:a})}var g=t(11163),y=t(94342),b=t(15437),v=t(88565),N=t(96721),k=t(31379),w=t.n(k);function M(e){if(0===e.length)return -1;let n=e.reduce((e,n,t)=>Math.abs(e.position)<Math.abs(n.y)?e:{index:t,position:n.y},{index:0,position:e[0].y});return n.index}function S(){let[e,n]=(0,p.useState)(0),[t,r]=(0,p.useState)([]),a=(0,p.useRef)([]),o=(0,g.useRouter)(),i=t.filter(e=>e.depth>1),l=()=>{n(M(a.current.map(e=>e.getNode().getBoundingClientRect())))};if((0,p.useEffect)(()=>{let e=function(){let e=document.getElementById("mdx");return e?function(e){let n=[];for(let t=0;t<e.length;t+=1){let s=e[t];s.id&&n.push({depth:parseInt(s.getAttribute("data-order"),10),content:s.getAttribute("data-heading")||"",id:s.id,getNode:()=>document.getElementById(s.id)})}return n}(Array.from(e.querySelectorAll("[data-heading]"))):[]}();return a.current=e,r(e),n(M(e.map(e=>e.getNode().getBoundingClientRect()))),window.addEventListener("scroll",l),()=>window.removeEventListener("scroll",l)},[]),0===i.length)return null;let c=i.map((n,t)=>(0,s.jsx)(Text.x,{component:"a",fz:"sm",className:w().link,mod:{active:e===t},href:"#".concat(n.id),__vars:{"--toc-link-offset":"".concat(n.depth-1)},onClick:e=>{e.preventDefault(),o.replace("".concat(o.pathname,"#").concat(n.id))},children:n.content},n.id));return(0,s.jsx)(b.x,{component:"nav",className:w().wrapper,children:(0,s.jsx)("div",{className:w().inner,children:(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:w().header,children:[(0,s.jsx)(y.Z,{style:{width:(0,v.h)(20),height:(0,v.h)(20)},stroke:1.5}),(0,s.jsx)(Text.x,{className:w().title,children:"Table of contents"})]}),(0,s.jsx)(N.x.Autosize,{mah:"calc(100vh - ".concat((0,v.h)(140),")"),type:"never",offsetScrollbars:!0,children:(0,s.jsx)("div",{className:w().items,children:c})})]})})})}var E=t(95372),C=t.n(E);function D(e){let{meta:n,children:t}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a(),{children:(0,s.jsx)("title",{children:"".concat(n.title," | Mantine")})}),(0,s.jsxs)("article",{children:[(0,s.jsx)("header",{className:C().header,children:(0,s.jsxs)(u.W,{size:"md",children:[(0,s.jsx)(h.e,{component:i(),href:"/",underline:"hover",fz:"sm",children:(0,s.jsxs)(m.M,{inline:!0,component:"span",style:{gap:5},children:[(0,s.jsx)(l.Z,{size:18,stroke:1.5}),(0,s.jsx)("span",{children:"Back to all questions"})]})}),(0,s.jsx)(x.D,{className:C().title,children:n.title}),(0,s.jsxs)("nav",{className:C().links,children:[(0,s.jsx)(j,{icon:(0,s.jsx)(c.Z,{size:18,stroke:1.5}),link:"https://github.com/mantinedev/help.mantine.dev/blob/master/src/pages/q/".concat(n.slug,".mdx"),children:"Edit this page on GitHub"}),(0,s.jsx)(j,{icon:(0,s.jsx)(d.Z,{size:18,stroke:1.5}),link:"https://github.com/mantinedev/help.mantine.dev/issues/new?template=article_report.yml&title=".concat(encodeURIComponent("Issue with article ".concat(n.title))),children:"Report issue with the article"})]}),(0,s.jsxs)(Text.x,{c:"dimmed",fz:"xs",mt:"md",children:["Last updated"," ",(0,s.jsx)(Text.x,{component:"time",dateTime:new Date(n.last_updated_at).toLocaleDateString(),c:"var(--mantine-color-text)",inherit:!0,children:n.last_updated_at})]})]})}),(0,s.jsxs)(u.W,{size:"md",className:C().inner,children:[(0,s.jsx)("div",{className:C().content,id:"mdx",children:t}),(0,s.jsx)(S,{})]})]})]})}function z(e){return n=>{let{children:t}=n;return(0,s.jsx)(D,{meta:e,children:t})}}},50359:function(e){e.exports={paragraph:"MdxElements_paragraph__4fXCh",link:"MdxElements_link__J7fnd",ul:"MdxElements_ul__OOTjk",li:"MdxElements_li__3_j76",title:"MdxElements_title__l4zV5",titleLink:"MdxElements_titleLink__UU75K",titleOffset:"MdxElements_titleOffset__kBHVU",code:"MdxElements_code__yvlvb"}},97631:function(e){e.exports={wrapper:"MdxErrorMessage_wrapper__JlJDx",error:"MdxErrorMessage_error__XuiIB",label:"MdxErrorMessage_label__SsQTh"}},14251:function(e){e.exports={root:"MdxInfo_root___n6Nr",icon:"MdxInfo_icon__9t9jJ"}},19169:function(e){e.exports={root:"MdxNpmScript_root__yTuQb",icon:"MdxNpmScript_icon__OPgOf"}},95372:function(e){e.exports={header:"MdxLayout_header__0tel7",title:"MdxLayout_title__KyoNs",links:"MdxLayout_links__ikk4L",inner:"MdxLayout_inner__vHPN9",content:"MdxLayout_content__Pg8un"}},80207:function(e){e.exports={root:"PageHeaderLink_root__wMV7V",label:"PageHeaderLink_label__eYp4m",body:"PageHeaderLink_body__yrqn0",icon:"PageHeaderLink_icon__8FTyU"}},31379:function(e){e.exports={wrapper:"TableOfContents_wrapper__4dG89",inner:"TableOfContents_inner__po5SO",link:"TableOfContents_link__fUzKF",header:"TableOfContents_header__1sSDD",title:"TableOfContents_title__owxbN",items:"TableOfContents_items__IQuAZ"}}},function(e){e.O(0,[2005,9774,2888,179],function(){return e(e.s=43036)}),_N_E=e.O()}]);