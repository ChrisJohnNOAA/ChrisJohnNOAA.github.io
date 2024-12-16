"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[94],{4185:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"server-admin/deploy-update","title":"\u30cb\u30e5\u30fc\u30b9","description":"\u65e2\u5b58\u306e\u66f4\u65b0\u3092\u884c\u3046\u65b9\u6cd5ERDDAP\u2122\u30b5\u30fc\u30d0\u30fc","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/server-admin/deploy-update.md","sourceDirName":"server-admin","slug":"/server-admin/deploy-update","permalink":"/ja/docs/server-admin/deploy-update","draft":false,"unlisted":false,"editUrl":"https://github.com/erddap/erddap/tree/main/documentation/docs/server-admin/deploy-update.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docSidebar","previous":{"title":"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb","permalink":"/ja/docs/server-admin/deploy-install"},"next":{"title":"Contributing","permalink":"/ja/docs/category/contributing"}}');var d=s(4848),t=s(8453);const i={sidebar_position:2},a="\u30cb\u30e5\u30fc\u30b9",l={},c=[];function o(e){const n={a:"a",em:"em",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"\u30cb\u30e5\u30fc\u30b9",children:"\u30cb\u30e5\u30fc\u30b9"})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"#update",children:"\u65e2\u5b58\u306e\u66f4\u65b0\u3092\u884c\u3046\u65b9\u6cd5ERDDAP\u2122\u30b5\u30fc\u30d0\u30fc"})}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u30ea\u30b9\u30c8\u3055\u308c\u305f\u5909\u66f4\u3092\u4f5c\u308b",(0,d.jsx)(n.a,{href:"https://erddap.github.io/changes.html",children:"\u5909\u66f4\u70b9"}),'"Things" \u3068\u3044\u3046\u30bb\u30af\u30b7\u30e7\u30f3\u3067ERDDAP\u2122\u7ba1\u7406\u8005\u306f\u77e5\u3063\u3066\u304a\u304f\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002ERDDAP\u2122\u4f7f\u7528\u3059\u308b\u30d0\u30fc\u30b8\u30e7\u30f3\u304b\u3089\u30d0\u30fc\u30b8\u30e7\u30f3\u3002']}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u304b\u3089\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3059\u308b\u5834\u5408ERDDAP\u2122\u30d0\u30fc\u30b8\u30e7\u30f3 2.18 \u4ee5\u4e0b, \u5207\u308a\u66ff\u3048\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002Java21\u65e5 (\u307e\u305f\u306f\u65b0\u3057\u3044) \u95a2\u9023\u3059\u308bTomcat 10. \u5b9a\u756a\u3092\u898b\u308bERDDAP\u2122\u53d6\u4ed8\u3051\u306e\u6307\u793a\u306e\u305f\u3081\u306e",(0,d.jsx)(n.a,{href:"#java",children:"Java"}),"\u305d\u3057\u3066\u3001",(0,d.jsx)(n.a,{href:"#tomcat",children:"\u30c8\u30e0\u30ad\u30e3\u30c3\u30c8"}),"\u304a\u554f\u3044\u5408\u308f\u305b \u30b3\u30d4\u30fc\u3059\u308b\u5fc5\u8981\u3082\u3042\u308a\u307e\u3059_tomcat_/content/erddap\u53e4\u3044Tomcat\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u304b\u3089\u65b0\u3057\u3044Tomcat\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u307e\u3067\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9",(0,d.jsx)(n.a,{href:"https://github.com/ERDDAP/erddap/releases/download/v2.25.1/erddap.war",children:"erddap.war\u306e"}),(0,d.jsx)(n.em,{children:"tomcat"}),"/webapps \u306b\u3002\r\n(\u30d0\u30fc\u30b8\u30e7\u30f3 2.25_1\u3001592,292,039 \u30d0\u30a4\u30c8\u3001MD5=652AFC9D1421F00B5F789DA2C4732D4C\u3001\u65e5\u4ed8 2024-11-07)"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"#messages.xml",children:"\u30e1\u30c3\u30bb\u30fc\u30b8.xml"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u5171\u901a: \u304b\u3089\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3059\u308b\u5834\u5408ERDDAP\u2122\u30d0\u30fc\u30b8\u30e7\u30f3 1.46 (\u4ee5\u4e0a) \u305d\u3057\u3066\u3001\u6a19\u6e96\u7684\u306a\u30e1\u30c3\u30bb\u30fc\u30b8\u3060\u3051\u3092\u4f7f\u7528\u3057\u3066\u4e0b\u3055\u3044\u3001\u65b0\u3057\u3044\u6a19\u6e96\u30e1\u30c3\u30bb\u30fc\u30b8.xml\u306f\u81ea\u52d5\u7684\u306b\u53d6\u4ed8\u3051\u3089\u308c\u307e\u3059 (.class \u30d5\u30a1\u30a4\u30eb\u3092 erddap \u7d4c\u7531\u3067\u4fdd\u5b58\u3057\u307e\u3059\u3002 \u6226\u4e89) \u304a\u554f\u3044\u5408\u308f\u305b"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u30ec\u30a2: \u304b\u3089\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3059\u308b\u5834\u5408ERDDAP\u2122\u30d0\u30fc\u30b8\u30e7\u30f3 1.44 (\u4ee5\u4e0b) ,\r\n\u53e4\u3044 message.xml \u30d5\u30a1\u30a4\u30eb\u3092\u524a\u9664\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\r\n",(0,d.jsx)(n.em,{children:"tomcat"}),"/content/erddap/messages.xml .\r\n\u65b0\u3057\u3044\u6a19\u6e96\u30e1\u30c3\u30bb\u30fc\u30b8.xml \u306f\u81ea\u52d5\u7684\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u307e\u3059\u3002 (.class \u30d5\u30a1\u30a4\u30eb\u3092 erddap \u7d4c\u7531\u3067\u4fdd\u5b58\u3057\u307e\u3059\u3002 \u6226\u4e89) \u304a\u554f\u3044\u5408\u308f\u305b"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u30ec\u30a2: \u3044\u3064\u3082\u6a19\u6e96\u306emessions.xml\u30d5\u30a1\u30a4\u30eb\u306b\u5909\u66f4\u3092\u52a0\u3048\u308b\u5834\u5408 (\u8a2d\u7f6e\u5834\u6240) ,\r\n\u3053\u308c\u3089\u306e\u5909\u66f4\u3092\u65b0\u3057\u3044 message.xml \u30d5\u30a1\u30a4\u30eb\u306b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059(\u3053\u308c\u306f\r\nWEB-INF/classes/gov/noa/pfel/erddap/util/messages.xml \u4ee5\u964d\u3001erddap.war \u306f Tomcat \u306b\u3088\u3063\u3066\u975e\u5727\u7e2e\u3055\u308c\u307e\u3059\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u30ec\u30a2: \u30ab\u30b9\u30bf\u30e0\u30e1\u30c3\u30bb\u30fc\u30b8.xml \u30d5\u30a1\u30a4\u30eb\u3092\u4fdd\u5b58\u3059\u308b\u5834\u5408_tomcat_/content/erddap/,\r\n\u3042\u306a\u305f\u304c\u628a\u63e1\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059 (\u5dee\u5206\u306b\u3088\u308b) \u30c7\u30d5\u30a9\u30eb\u30c8\u30e1\u30c3\u30bb\u30fc\u30b8.xml \u306b\u5909\u66f4\u3055\u308c\u305f\u3082\u306e(\u65b0\u3057\u3044 erddap \u306b\u3042\u308b)\u3002 \u6226\u4e89\u3068\u3057\u3066\r\nWEB-INF/classes/gov/noa/pfel/erddap/util/messages.xml \u306f\u3001\u30ab\u30b9\u30bf\u30e0 \u30e1\u30c3\u30bb\u30fc\u30b8.xml \u30d5\u30a1\u30a4\u30eb\u3092\u305d\u308c\u306b\u5fdc\u3058\u3066\u5909\u66f4\u3057\u307e\u3059\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u65b0\u898f\u30a4\u30f3\u30b9\u30c8\u30fc\u30ebERDDAP\u2122Tomcat\u3067:\r\n\u304a\u554f\u3044\u5408\u308f\u305b Tomcat \u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u306f\u4f7f\u7528\u3057\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002 PermGen \u30e1\u30e2\u30ea\u306e\u554f\u984c\u306f\u3001\u3082\u3046\u3057\u3070\u3089\u304f\u304a\u5f85\u3061\u304f\u3060\u3055\u3044\u3002 \u5b9f\u969b\u306b\u30b7\u30e3\u30c3\u30c8\u30c0\u30a6\u30f3\u3068\u30b9\u30bf\u30fc\u30c8\u30a2\u30c3\u30d7\u306eTomcat\u304c\u3088\u308a\u826f\u304f\u306a\u308b\u3002\r\n\\* \u30b3\u30f3\u30d4\u30e5\u30fc\u30bf\u30fc\u306e\u5b9f\u969b\u306eTomcat\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3067\u3001_tomcat_\u306b\u53c2\u7167\u3092\u7f6e\u63db\u3057\u307e\u3059\u3002"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"Linux\u3068Mac\u306e\u5834\u5408:"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\u30c8\u30e0\u30ad\u30e3\u30c3\u30c8\u3092\u30b7\u30e3\u30c3\u30c8\u30c0\u30a6\u30f3: \u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u304b\u3089\u3001",(0,d.jsx)(n.em,{children:"tomcat"}),"/bin/shutdown.sh \u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\r\nps-ef | grep tomcat \u3092\u4f7f\u7528\u3057\u3066\u3001\u30d7\u30ed\u30bb\u30b9\u304c\u505c\u6b62\u3055\u308c\u305f\u304b\u3069\u3046\u304b\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002 (1\u5206\u304b2\u5206\u304b\u304b\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002)"]}),"\n",(0,d.jsxs)(n.li,{children:["decompressed \u3092\u524a\u9664ERDDAP\u2122\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb: ",(0,d.jsx)(n.em,{children:"tomcat"}),"/webapps \u3067\u306f\u3001\r\nrm -rf \u30a8\u30eb\u30c0\u30c3\u30d7"]}),"\n",(0,d.jsxs)(n.li,{children:["\u53e4\u3044 erddap \u3092\u524a\u9664\u3057\u307e\u3059\u3002 war file: ",(0,d.jsx)(n.em,{children:"tomcat"}),"/webapps \u3067\u306f\u3001rm erddap \u3092\u4f7f\u7528\u3057\u307e\u3059\u3002 \u6226\u4e89"]}),"\n",(0,d.jsxs)(n.li,{children:["\u65b0\u3057\u3044 erddap \u3092\u30b3\u30d4\u30fc\u3057\u307e\u3059\u3002 \u4e00\u6642\u7684\u306a\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u304b\u3089 ",(0,d.jsx)(n.em,{children:"tomcat"}),"/webapps \u3078\u306e\u8b66\u544a\u30d5\u30a1\u30a4\u30eb"]}),"\n",(0,d.jsxs)(n.li,{children:["Tomcat\u3092\u518d\u8d77\u52d5\u3057\u3001ERDDAP: ",(0,d.jsx)(n.em,{children:"tomcat"}),"/bin/startup.sh \u3092\u4f7f\u3046"]}),"\n",(0,d.jsx)(n.li,{children:"\u30cb\u30e5\u30fc\u30b9ERDDAP\u2122\u30d6\u30e9\u30a6\u30b6\u3067\u306f\u3001\u518d\u8d77\u52d5\u304c\u6210\u529f\u3057\u305f\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002\r\n(\u6570\u56de\u8a66\u3057\u3066\u307f\u308b\u3068\u3001\u76ee\u306e\u524d\u30671\u5206\u5f85\u3061\u307e\u3059ERDDAP\u2122\u304a\u554f\u3044\u5408\u308f\u305b)"}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"Windows\u306e\u5834\u5408:"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\u30c8\u30e0\u30ad\u30e3\u30c3\u30c8\u3092\u30b7\u30e3\u30c3\u30c8\u30c0\u30a6\u30f3: \u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u304b\u3089: ",(0,d.jsx)(n.em,{children:"tomcat"}),"\\bin\\\\shutdown.bat"]}),"\n",(0,d.jsxs)(n.li,{children:["decompressed \u3092\u524a\u9664ERDDAP\u2122\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb: ",(0,d.jsx)(n.em,{children:"tomcat"}),"/webapps \u3067\u306f\u3001\r\n\u30c7\u30eb /S / Q erddap"]}),"\n",(0,d.jsxs)(n.li,{children:["\u53e4\u3044 erddap \u3092\u524a\u9664\u3057\u307e\u3059\u3002 \u6226\u4e89\u30d5\u30a1\u30a4\u30eb: ",(0,d.jsx)(n.em,{children:"tomcat"}),"\\webapps \u3067\u306f\u3001del erddap \u3092\u4f7f\u7528\u3057\u307e\u3059\u3002 \u6226\u4e89"]}),"\n",(0,d.jsxs)(n.li,{children:["\u65b0\u3057\u3044 erddap \u3092\u30b3\u30d4\u30fc\u3057\u307e\u3059\u3002 \u4e00\u6642\u7684\u306a\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u304b\u3089 ",(0,d.jsx)(n.em,{children:"tomcat"}),"\\webapps \u3078\u306e\u8b66\u544a\u30d5\u30a1\u30a4\u30eb"]}),"\n",(0,d.jsxs)(n.li,{children:["Tomcat\u3092\u518d\u8d77\u52d5\u3057\u3001ERDDAP: ",(0,d.jsx)(n.em,{children:"tomcat"}),"\\bin\\startup.bat \u3092\u4f7f\u3046"]}),"\n",(0,d.jsx)(n.li,{children:"\u30cb\u30e5\u30fc\u30b9ERDDAP\u2122\u30d6\u30e9\u30a6\u30b6\u3067\u306f\u3001\u518d\u8d77\u52d5\u304c\u6210\u529f\u3057\u305f\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002\r\n(\u6570\u56de\u8a66\u3057\u3066\u307f\u308b\u3068\u3001\u76ee\u306e\u524d\u30671\u5206\u5f85\u3061\u307e\u3059ERDDAP\u2122\u304a\u554f\u3044\u5408\u308f\u305b)"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["\u30c8\u30e9\u30d6\u30eb\u66f4\u65b0ERDDAP\u304a\u554f\u3044\u5408\u308f\u305b\r\n\u30e1\u30fc\u30eb\u3067\u306e\u304a\u554f\u3044\u5408\u308f\u305berd dot data at noaa dot gov\u304a\u554f\u3044\u5408\u308f\u305b \u304a\u554f\u3044\u5408\u308f\u305b\r\n\u307e\u305f\u306f\u3001\u3042\u306a\u305f\u304c\u53c2\u52a0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059",(0,d.jsx)(n.a,{href:"#ERDDAPMailingList",children:"ERDDAP\u2122Google\u30b0\u30eb\u30fc\u30d7/\u30e1\u30fc\u30ea\u30f3\u30b0\u30ea\u30b9\u30c8"}),"\u304a\u554f\u3044\u5408\u308f\u305b"]})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>a});var r=s(6540);const d={},t=r.createContext(d);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);