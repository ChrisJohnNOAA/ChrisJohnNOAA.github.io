"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[221],{7932:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>d,metadata:()=>i,toc:()=>u});const i=JSON.parse('{"id":"contributing/contributing","title":"\u6350\u6b3eERDDAP\u2122","description":"\u62a5\u544a\u95ee\u9898","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/contributing/contributing.md","sourceDirName":"contributing","slug":"/contributing/","permalink":"/zh/docs/contributing/","draft":false,"unlisted":false,"editUrl":"https://github.com/erddap/erddap/tree/main/documentation/docs/contributing/contributing.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docSidebar","previous":{"title":"Contributing","permalink":"/zh/docs/category/contributing"},"next":{"title":"\u7a0b\u5e8f\u5458\u6307\u5357","permalink":"/zh/docs/contributing/programmer-guide"}}');var r=t(4848),s=t(8453);const d={sidebar_position:1},c="\u6350\u6b3eERDDAP\u2122",o={},u=[{value:"\u62a5\u544a\u95ee\u9898",id:"\u62a5\u544a\u95ee\u9898",level:2},{value:"\u89e3\u51b3\u4e00\u4e2a\u95ee\u9898",id:"\u89e3\u51b3\u4e00\u4e2a\u95ee\u9898",level:2},{value:"\u6dfb\u52a0\u65b0\u7279\u6027",id:"\u6dfb\u52a0\u65b0\u7279\u6027",level:2},{value:"\u6280\u672f\u95ee\u9898",id:"\u6280\u672f\u95ee\u9898",level:2},{value:"\u5bf9\u4e8eERDDAP\u2122\u670d\u52a1\u5668\u7ba1\u7406\u5458\u652f\u6301",id:"\u5bf9\u4e8eerddap\u670d\u52a1\u5668\u7ba1\u7406\u5458\u652f\u6301",level:2}];function h(e){const n={a:"a",h1:"h1",h2:"h2",header:"header",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u6350\u6b3eerddap",children:"\u6350\u6b3eERDDAP\u2122"})}),"\n",(0,r.jsx)(n.h2,{id:"\u62a5\u544a\u95ee\u9898",children:"\u62a5\u544a\u95ee\u9898"}),"\n",(0,r.jsxs)(n.p,{children:["** \u5982\u679c\u9519\u8bef\u662f\u5b89\u5168\u6f0f\u6d1e, \u4e0d\u8981\u6253\u5f00 GitHub \u95ee\u9898 ** ,\u4ee3\u4e4b\u4ee5\u6307\u6211\u4eec",(0,r.jsx)(n.a,{href:"https://github.com/erddap/erddap?tab=security-ov-file",children:"\u5b89\u5168\u653f\u7b56"}),"\u3002 \u3002 \u3002 \u4efb\u4f55\u654f\u611f\u95ee\u9898\u90fd\u5c06\u4ece\u516c\u5171\u8ddf\u8e2a\u5668\u4e2d\u5220\u9664\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u901a\u8fc7\u5728 GitHub \u4e0b\u641c\u7d22\u786e\u4fdd\u672a\u62a5\u544a\u9519\u8bef",(0,r.jsx)(n.a,{href:"https://github.com/ERDDAP/erddap/issues",children:"\u95ee\u9898"}),"\u3002 \u3002 \u3002 \u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u60a8\u6709\u7279\u6027\u8bf7\u6c42, \u8bf7\u8fdb\u884c Github \u8ba8\u8bba (\u66f4\u591a\u4fe1\u606f\u89c1\u4e0b\u6587\u3002) \u3002 \u3002 \u3002 \u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u627e\u4e0d\u5230\u89e3\u51b3\u8be5\u95ee\u9898\u7684\u672a\u51b3\u95ee\u9898",(0,r.jsx)(n.a,{href:"https://github.com/ERDDAP/erddap/issues/new",children:"\u6253\u5f00\u4e00\u4e2a\u65b0\u7684"}),"\u3002 \u3002 \u3002 \u786e\u4fdd\u5305\u62ec\u6807\u9898\u548c\u660e\u786e\u63cf\u8ff0,\u5c3d\u53ef\u80fd\u63d0\u4f9b\u76f8\u5173\u4fe1\u606f,\u4ee5\u53ca\u91cd\u73b0\u95ee\u9898\u7684\u65b9\u5411\u6216ERDDAP\u2122\u670d\u52a1\u5668\u663e\u793a\u672a\u53d1\u751f\u7684\u9884\u671f\u884c\u4e3a\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u89e3\u51b3\u4e00\u4e2a\u95ee\u9898",children:"\u89e3\u51b3\u4e00\u4e2a\u95ee\u9898"}),"\n",(0,r.jsx)(n.p,{children:"\u6253\u5f00\u65b0\u7684 GitHub \u62c9\u52a8\u8bf7\u6c42 (\u516c\u5173) \u4e0e\u8865\u4e01\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u786e\u4fddPR\u63cf\u8ff0\u6e05\u6670\u5730\u63cf\u8ff0\u95ee\u9898\u548c\u89e3\u51b3\u65b9\u6848. \u914c\u60c5\u5305\u62ec\u76f8\u5173\u95ee\u9898\u7f16\u53f7\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u63d0\u4ea4\u4e4b\u524d,\u8bf7\u9605\u8bfb",(0,r.jsx)(n.a,{href:"/docs/contributing/programmer-guide",children:"\u7a0b\u5e8f\u5458\u6307\u5357"}),"\u6307\u5357,\u4ee5\u4fbf\u66f4\u591a\u5730\u4e86\u89e3\u7f16\u7801\u516c\u7ea6\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u6dfb\u52a0\u65b0\u7279\u6027",children:"\u6dfb\u52a0\u65b0\u7279\u6027"}),"\n",(0,r.jsxs)(n.p,{children:["\u5efa\u8bae\u4f60\u6539\u53d8",(0,r.jsx)(n.a,{href:"https://github.com/ERDDAP/erddap/discussions",children:"ERDDAP\u2122GitHub \u8ba8\u8bba"}),"\u5f00\u59cb\u5199\u4ee3\u7801\u3002 \u5728\u521b\u5efa GitHub \u8ba8\u8bba\u4e4b\u524d, \u8bfb\u8bfb\u8fd9\u4e2a\u4e5f\u8bb8\u6709\u5e2e\u52a9 \u3002",(0,r.jsx)(n.a,{href:"https://github.com/ERDDAP/erddap/discussions/93#discussion-4920427",children:"\u6307\u5bfc"}),"\u3002 \u3002 \u3002 \u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u5728 GitHub \u4e0a\u4e0d\u8981\u6253\u5f00\u4e00\u4e2a\u95ee\u9898, \u76f4\u5230\u60a8\u6536\u96c6\u5230\u5173\u4e8e\u53d8\u5316\u7684\u6b63\u9762\u53cd\u9988 \u3002 GitHub\u95ee\u9898\u4e3b\u8981\u7528\u4e8e\u9519\u8bef\u62a5\u544a\u548c\u4fee\u6b63."}),"\n",(0,r.jsx)(n.h2,{id:"\u6280\u672f\u95ee\u9898",children:"\u6280\u672f\u95ee\u9898"}),"\n",(0,r.jsxs)(n.p,{children:["\u89c1",(0,r.jsx)(n.a,{href:"https://github.com/ERDDAP/erddap/discussions",children:"ERDDAP\u2122GitHub \u8ba8\u8bba"}),"\u3002 \u3002 \u3002 \u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5bf9\u4e8eerddap\u670d\u52a1\u5668\u7ba1\u7406\u5458\u652f\u6301",children:"\u5bf9\u4e8eERDDAP\u2122\u670d\u52a1\u5668\u7ba1\u7406\u5458\u652f\u6301"}),"\n",(0,r.jsxs)(n.p,{children:["\u89c1",(0,r.jsx)(n.a,{href:"https://groups.google.com/g/erddap",children:"ERDDAP\u2122\u7528\u6237 Google \u7ec4"}),"\u3002 \u3002 \u3002 \u3002"]})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>c});var i=t(6540);const r={},s=i.createContext(r);function d(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);