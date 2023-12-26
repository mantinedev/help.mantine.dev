(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6614],{694:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/q/how-to-call-function-when-modal-closes",function(){return t(8710)}])},8710:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c},meta:function(){return a}});var s=t(5893),o=t(7128),r=t(5669);let a={title:"How to call a function when Modal/Drawer closes and animation completes?",description:"How to use transitionProps in Modal/Drawer components",slug:"how-to-call-function-when-modal-closes",category:"components",tags:["modal","drawer","close","transition","transitionProps"],created_at:"December 26, 2023",last_updated_at:"December 26, 2023"},i=(0,r.A)(a);function l(e){let n={a:"a",code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://mantine.dev/core/modal/",children:"Modal"})," and ",(0,s.jsx)(n.a,{href:"https://mantine.dev/core/drawer/",children:"Drawer"})," components\nuse ",(0,s.jsx)(n.a,{href:"https://mantine.dev/core/transition/",children:"Transition"})," component under the hood to animate\npresence. You can use ",(0,s.jsx)(n.code,{children:"transitionProps"})," property to pass props to ",(0,s.jsx)(n.code,{children:"Transition"})," component:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { Modal } from '@mantine/core';\nimport { useDisclosure } from '@mantine/hooks';\n\nfunction Demo() {\n  const [opened, handlers] = useDisclosure();\n\n  return (\n    <Modal\n      title=\"Modal title\"\n      opened={opened}\n      onClose={handlers.close}\n      transitionProps={{\n        onEntered: () => console.log('Modal opened, animation done'),\n        onExited: () => console.log('Modal closed, animation done'),\n      }}\n    >\n      Modal content\n    </Modal>\n  );\n}\n"})})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(i,{...e,children:(0,s.jsx)(l,{...e})})}},7128:function(e,n,t){"use strict";t.d(n,{a:function(){return g}});var s=t(5893),o=t(512),r=t(8008),a=t(967),Image=t(929),i=t(6536),l=t(8105),c=t(6283),d=t(359),u=t.n(d);function h(e){let{id:n,children:t,order:a=2,...i}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{id:n,"data-heading":t,"data-order":a,className:u().titleOffset}),(0,s.jsx)(r.D,{order:a,className:u().title,...i,children:(0,s.jsx)("a",{className:(0,o.Z)(u().titleLink,"mantine-focus-auto"),href:"#".concat(n),children:t})})]})}let m=e=>n=>(0,s.jsx)(h,{order:e,...n});function p(e){let{children:n}=e;return(0,s.jsx)(c.P,{className:u().code,code:n.props.children,language:function(e){let n=(e.props.className||"").match(RegExp("language-(?<lang>.*)"));return n&&n.groups&&n.groups.lang?n.groups.lang:"tsx"}(n)})}function x(e){return(0,s.jsx)("p",{className:u().paragraph,...e})}function _(e){return(0,s.jsx)("ul",{className:u().ul,...e})}function f(e){return(0,s.jsx)("li",{className:u().li,...e})}function j(e){let{href:n,...t}=e;return(0,s.jsx)(a.e,{className:u().link,href:n,...t})}function g(e){return{img:Image.E,ul:_,li:f,p:x,a:j,code:i.E,h1:m(1),h2:m(2),h3:m(3),h4:m(4),h5:m(5),h6:m(6),pre:p,Demo:l.B,...e}}},5669:function(e,n,t){"use strict";t.d(n,{A:function(){return N}});var s=t(5893),o=t(9008),r=t.n(o),a=t(1664),i=t.n(a),l=t(3507),c=t(471),d=t(6247),u=t(3078),h=t(967),m=t(991),p=t(8008),Text=t(4410);t(7294);var x=t(207),_=t.n(x);function f(e){let{icon:n,children:t,link:o}=e,r=o?(0,s.jsxs)("a",{href:o,target:"_blank",className:_().body,rel:"noreferrer",children:[(0,s.jsx)("div",{className:_().icon,children:n}),(0,s.jsx)("div",{className:_().content,children:t})]}):(0,s.jsxs)("div",{className:_().body,children:[(0,s.jsx)("div",{className:_().icon,children:n}),(0,s.jsx)("div",{className:_().content,children:t})]});return(0,s.jsx)("div",{className:_().root,children:r})}var j=t(5372),g=t.n(j);function k(e){let{meta:n,children:t}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r(),{children:(0,s.jsx)("title",{children:"".concat(n.title," | Mantine")})}),(0,s.jsxs)("article",{children:[(0,s.jsx)("header",{className:g().header,children:(0,s.jsxs)(u.W,{size:"md",children:[(0,s.jsx)(h.e,{component:i(),href:"/",underline:"hover",fz:"sm",children:(0,s.jsxs)(m.M,{inline:!0,component:"span",style:{gap:5},children:[(0,s.jsx)(l.Z,{size:18,stroke:1.5}),(0,s.jsx)("span",{children:"Back to all questions"})]})}),(0,s.jsx)(p.D,{className:g().title,children:n.title}),(0,s.jsxs)("nav",{className:g().links,children:[(0,s.jsx)(f,{icon:(0,s.jsx)(c.Z,{size:18,stroke:1.5}),link:"https://github.com/mantinedev/help.mantine.dev/blob/master/src/pages/q/".concat(n.slug,".mdx"),children:"Edit this page on GitHub"}),(0,s.jsx)(f,{icon:(0,s.jsx)(d.Z,{size:18,stroke:1.5}),link:"https://github.com/mantinedev/help.mantine.dev/issues/new?template=article_report.yml&title=".concat(encodeURIComponent("Issue with article ".concat(n.title))),children:"Report issue with the article"})]}),(0,s.jsxs)(Text.x,{c:"dimmed",fz:"xs",mt:"md",children:["Last updated"," ",(0,s.jsx)(Text.x,{component:"time",dateTime:new Date(n.last_updated_at).toLocaleDateString(),c:"var(--mantine-color-text)",inherit:!0,children:n.last_updated_at})]})]})}),(0,s.jsx)(u.W,{size:"md",children:t})]})]})}function N(e){return n=>{let{children:t}=n;return(0,s.jsx)(k,{meta:e,children:t})}}},359:function(e){e.exports={paragraph:"MdxElements_paragraph__4fXCh",link:"MdxElements_link__J7fnd",ul:"MdxElements_ul__OOTjk",li:"MdxElements_li__3_j76",title:"MdxElements_title__l4zV5",titleLink:"MdxElements_titleLink__UU75K",titleOffset:"MdxElements_titleOffset__kBHVU",code:"MdxElements_code__yvlvb"}},5372:function(e){e.exports={header:"MdxLayout_header__0tel7",title:"MdxLayout_title__KyoNs",links:"MdxLayout_links__ikk4L"}},207:function(e){e.exports={root:"PageHeaderLink_root__wMV7V",label:"PageHeaderLink_label__eYp4m",body:"PageHeaderLink_body__yrqn0",icon:"PageHeaderLink_icon__8FTyU"}}},function(e){e.O(0,[4156,9774,2888,179],function(){return e(e.s=694)}),_N_E=e.O()}]);