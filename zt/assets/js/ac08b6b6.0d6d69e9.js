"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[28],{632:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>t,contentTitle:()=>c,default:()=>D,frontMatter:()=>d,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"contributing/programmer-guide","title":"\u7a0b\u5f0f\u6307\u5357","description":"\u9019\u4e9b\u53ea\u662f\u4e00\u500b\u7a0b\u5e8f\u54e1\u6253\u7b97\u5408\u4f5c\u7684ERDDAP\u662fJava\u8ab2\u7a0b\u9700\u8981\u77e5\u9053\u3002","source":"@site/i18n/zt/docusaurus-plugin-content-docs/current/contributing/programmer-guide.md","sourceDirName":"contributing","slug":"/contributing/programmer-guide","permalink":"/zt/docs/contributing/programmer-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/erddap/erddap/tree/main/documentation/docs/contributing/programmer-guide.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docSidebar","previous":{"title":"\u6350\u6b3eERDDAP\u2122","permalink":"/zt/docs/contributing/"}}');var r=i(4848),l=i(8453);const d={sidebar_position:2},c="\u7a0b\u5f0f\u6307\u5357",t={},h=[{value:"** \u53d6\u5f97\u6e90\u78bc **",id:"-\u53d6\u5f97\u6e90\u78bc-",level:3},{value:"** ERDDAP\u2122\u4f9d\u8d56\u6027 **",id:"-erddap\u4f9d\u8d56\u6027-",level:3},{value:"** \u534a\u9014 **",id:"-\u534a\u9014-",level:4},{value:"** \u767c\u5c55\u74b0\u5883 **",id:"-\u767c\u5c55\u74b0\u5883-",level:3},{value:"** \u91cd\u8981\u985e\u5225 **",id:"-\u91cd\u8981\u985e\u5225-",level:3},{value:"** \u5bc6\u78bc\u8d21\u732e **",id:"-\u5bc6\u78bc\u8d21\u732e-",level:3},{value:"** \u5224\u65b7\u60a8\u7684\u7de8\u78bc\u8d21\u732e **",id:"-\u5224\u65b7\u60a8\u7684\u7de8\u78bc\u8d21\u732e-",level:3}];function a(n){const e={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",ul:"ul",...(0,l.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"\u7a0b\u5f0f\u6307\u5357",children:"\u7a0b\u5f0f\u6307\u5357"})}),"\n",(0,r.jsx)(e.p,{children:"\u9019\u4e9b\u53ea\u662f\u4e00\u500b\u7a0b\u5e8f\u54e1\u6253\u7b97\u5408\u4f5c\u7684ERDDAP\u662fJava\u8ab2\u7a0b\u9700\u8981\u77e5\u9053\u3002"}),"\n",(0,r.jsx)(e.h3,{id:"-\u53d6\u5f97\u6e90\u78bc-",children:"** \u53d6\u5f97\u6e90\u78bc **"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["GitHub \u4e0a\u7684 Via \u6e90\u78bc\r\n\u6700\u8fd1\u516c\u958b\u7248\u548c\u958b\u767c\u7248\u7684\u6e90\u78bc\u4e5f\u53ef\u901a\u8fc7",(0,r.jsx)(e.a,{href:"https://github.com/ERDDAP",children:"GitHub \u5716\u7247"}),". \u8acb\u8b80\u4e00\u4e0b",(0,r.jsx)(e.a,{href:"https://github.com/ERDDAP/erddap/wiki",children:"\u7dad\u57fa"}),"\u70ba\u4e86\u90a3\u500b\u8a08\u5283 \u5982\u679c\u4f60\u60f3\u4fee\u6539\u6e90\u78bc (\u5e76\u53ef\u80fd\u628a\u4fee\u6539\u7eb3\u5165\u6807\u51c6ERDDAP\u2122\u5206\u914d) ,"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"-erddap\u4f9d\u8d56\u6027-",children:"** ERDDAP\u2122\u4f9d\u8d56\u6027 **"}),"\n",(0,r.jsx)(e.p,{children:"ERDDAP\u2122\u4f7f\u7528 Maven \u4f86\u8f09\u5165\u7de8\u78bc\u4f9d\u8d56\u6027\u4ee5\u53ca\u4e00\u4e9b\u975c\u614b\u53c3\u8003\u6a94 (WEB-INF/ ref) . \u9019\u662f\u70ba\u4e86\u907f\u514d\u5728\u5bc4\u5b58\u5668\u4e2d\u5132\u5b58\u5f88\u591a\u5927\u6a94\u6848 \u3002\r\n\u60a8\u53ef\u4ee5\u4f7f\u7528\u201c mvn \u7de8\u8b6f \u201d , \u9019\u53ef\u4ee5\u53d6\u56de\u4f9d\u8cf4\u6a94\u548c\u53c3\u8003\u6a94 \u3002 \u60a8\u4e5f\u53ef\u4ee5\u4f7f\u7528\u300c mvn \u5957\u4ef6\u300d \u4f86\u7522\u751f\u6230\u722d\u6a94\u6848 \u3002\r\n\u60a8\u53ef\u4ee5\u624b\u52d5\u4e0b\u8f09\u53c3\u8003\u6a94 :"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"https://github.com/ERDDAP/ERDDAPRefFiles/releases/download/1.0.0/etopo1_ice_g_i2.zip",children:"etopo1\\_ice\\_g\\_i2.zip"}),"\u5e76\u89e3\u6790\u5230 /WEB-INF/ref/ \u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"https://github.com/ERDDAP/ERDDAPRefFiles/releases/download/1.0.0/ref_files.zip",children:"\u7ffb\u8b6f\u6a94\u6848.zip"}),"\u5e76\u89e3\u6790\u5230 /WEB-INF/ref/ \u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"https://github.com/ERDDAP/erddapContent/releases/download/content1.0.0/erddapContent.zip",children:"erddap \u5167\u5bb9.zip"})," (\u7248\u672c 1.0.0, 20333\u5b57\u7bc0, MD5=2B8D2A5AE5ED73E3A42B529C168C60B5,\u65e5\u671f2024-10-14) \u5c07\u5b83\u89e3\u6790\u6210 ",(0,r.jsx)(e.em,{children:"tomcat"}),", \u5efa\u7acb_tomcat_/content/erddap."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["\u6ce8\u610f : \u9810\u8a2d Maven \u6703\u7f13\u5b58\u975c\u6001\u53c3\u8003\u548c\u6e2c\u8a66\u8cc7\u6599\u6a94\u6848\u7684\u4e0b\u8f09, \u53ea\u6709\u5728\u65b0\u7248\u672c\u4e0b\u8f09\u6642\u624d\u63d0\u53d6 \u3002 \u8981\u5b8c\u5168\u8df3\u904e\u4e0b\u8f09, \u60a8\u53ef\u4ee5\u8a2d\u5b9a\u300c skipResourceDownload \u300d \u548c/ \u6216\u300c skip TestResourceDownload \u300d \u7684\u5c6c\u6027\u5230 Maven (\u4f8b\u5982,",(0,r.jsx)(e.code,{children:"mvn - Dskip \u8d44\u6e90\u4e0b\u8f09\u5957\u4ef6 "}),") . \u8981\u5f37\u5236\u63d0\u53d6, \u8a2d\u7f6e ",(0,r.jsx)(e.code,{children:"- Ddownload. unpack= true' \u548c"}),"- Ddownload. unpack when Changed=false' \u3002"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["ERDDAP\u2122\u53ca\u5176\u5b50\u5143\u4ef6\u6709\u975e\u5e38\u81ea\u7531\u7684\u958b\u6e90",(0,r.jsx)(e.a,{href:"https://erddap.github.io/setup.html#license",children:"\u6388\u6b0a"}),",\u6240\u4ee5\u60a8\u53ef\u4ee5\u70ba\u4efb\u4f55\u76ee\u7684\u4f7f\u7528\u548c\u4fee\u6539\u6e90\u78bc,\u4ee5\u8425\u5229\u6216\u975e\u725f\u5229. \u6ce8\u610f",":ERDDAP","\u2122\u800c\u5f88\u591a\u5b50\u5143\u4ef6\u90fd\u6709\u8a31\u53ef\u8b49 \u8981\u6c42\u60a8\u627f\u8a8d\u60a8\u4f7f\u7528\u7684\u5bc6\u78bc\u4f86\u6e90 \u3002 \u770b",(0,r.jsx)(e.a,{href:"https://erddap.github.io/setup.html#credits",children:"\u4fe1\u7528"}),". \u4e0d\u7ba1\u662f\u5426\u6709\u5fc5\u8981,"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"** \u5176\u4ed6\u5de5\u7a0b\u4f7f\u7528\u7a0b\u5f0f\u78bc **"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u6b61\u8fce\u60a8\u4f7f\u7528\u90e8\u5206ERDDAP\u2122\u5176\u5b83\u5c08\u6848\u7684\u7a0b\u5f0f\u78bc, \u8b66\u544a\u6b64\u7a0b\u5f0f\u78bc\u53ef\u4ee5\u800c\u4e14\u6703\u8b8a\u66f4 \u3002 \u6211\u5011\u4e0d\u4fdd\u8b49\u6703\u652f\u6301\u6211\u5011\u5bc6\u78bc\u7684\u5176\u4ed6\u7528\u9014 Git \u548c GitHub \u662f\u60a8\u8655\u7406\u9019\u500b\u554f\u984c\u7684\u4e3b\u8981\u89e3\u6c7a\u65b9\u6848 -- Git \u5141\u8a31\u60a8\u5c07\u6211\u5011\u7684\u8b8a\u66f4\u6574\u5408\u5230\u60a8\u7684\u8b8a\u66f4\u4e2d \u3002\r\n** \u5728\u5f88\u591a\u60c5\u6cc1\u4e0b \u4f60\u53ef\u80fd\u6703\u60f3\u7528\u90e8\u5206ERDDAP\u2122\u5728\u4f60\u7684\u8a08\u756b\u4e2d,\u6211\u5011\u8a8d\u70ba\u4f60\u6703\u767c\u73fe\u66f4\u5bb9\u6613\u5b89\u88dd\u548c\u4f7f\u7528ERDDAP\u2122\u4e5f\u662f ** \u7136\u540e\u5beb\u5165\u5176\u4ed6\u4f7f\u7528ERDDAP\u670d\u52d9 \u4f60\u53ef\u4ee5\u81ea\u5df1\u5b89\u6392ERDDAP\u2122\u4e00\u5169\u5c0f\u6642\u5167\u5c31\u5b89\u88dd\u597d \u4f60\u53ef\u4ee5\u81ea\u5df1\u5b89\u6392ERDDAP\u2122\u518d\u904e\u5e7e\u5929\u5c31\u7528\u78e8\u5149\u7684\u65b9\u6cd5\u5b89\u88dd (\u4f9d\u6578\u64da\u96c6\u7684\u6578\u91cf\u8207\u8907\u96dc\u5ea6\u800c\u5b9a) . \u4f46\u9ed1\u6389\u90e8\u5206ERDDAP\u2122\u53ef\u80fd\u8981\u82b1\u4e0a\u5e7e\u5468 (\u548c\u6293\u4f4f\u5fae\u5999\u7684\u6708\u4efd) \u800c\u60a8\u5c07\u5931\u53bb\u52a0\u5165\u8b8a\u66f4\u548c\u932f\u8aa4\u4fee\u6b63\u7684\u80fd\u529bERDDAP\u2122\u91cb\u653e \u6211\u5011 (\u986f\u7136) \u4f7f\u7528\u6709\u8a31\u591a\u5229\u76caERDDAP\u2122\u4ee5\u53ca\u4f60ERDDAP\u2122\u516c\u958b\u5b58\u53d6\u5b89\u88dd\u3002 \u7136\u800c,\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b,\u4f60\u53ef\u80fd\u4e0d\u60f3\u505a\u4f60\u7684ERDDAP\u2122\u516c\u958b\u5b58\u53d6\u5b89\u88dd\u3002 \u90a3\u9ebc,\u4f60\u7684\u670d\u52d9 \u53ef\u4ee5\u5b58\u53d6\u548c\u4f7f\u7528\u4f60\u7684\u79c1\u4ebaERDDAP\u2122\u4f60\u7684\u5ba2\u6236\u4e0d\u9700\u8981\u77e5\u9053ERDDAP\u2122."}),"\n",(0,r.jsx)(e.h4,{id:"-\u534a\u9014-",children:"** \u534a\u9014 **"}),"\n",(0,r.jsx)(e.p,{children:"\u6216\u8005,\u9084\u6709\u4e00\u7a2e\u65b9\u6cd5,\u4f60\u53ef\u80fd\u89ba\u5f97\u6709\u7528 \u5728\u63a2\u7d22\u7684\u4e2d\u9593ERDDAP\u4ee3\u78bc\u8207\u4f7f\u7528ERDDAP\u2122\u4f5c\u70ba\u7368\u7acb\u7684\u7db2\u8def\u670d\u52d9: \u5728 EDD \u985e\u5225\u4e2d, \u6709\u4e00\u7a2e\u975c\u614b\u65b9\u6cd5\u8b93\u60a8\u505a\u500b\u6578\u64da\u96c6\u7684\u4f8b (\u6839\u64dadatasets.xml) :\r\n\u8cc7\u6599\u96c6\u4e2d\u7684\u4e00\u500b Xml \u547d\u4ee4 (\u5b57\u7b26\u4e32 tDatasetID)\r\n\u8fd4\u56de EDD\u8868\u6216EDDGrid\u6578\u64da\u96c6\u3002 \u65e2\u7136\u5982\u6b64,\u4f60\u53ef\u4ee5\u6253\u96fb\u8a71\r\n\u505a\u65b0\u6a94\u6848ForDapQuery (\u5b57\u7b26\u4e32\u4f7f\u7528\u8005 DapQuery, \u5b57\u4e32 dir, \u5b57\u4e32\u6a94\u6848Name, \u5b57\u4e32\u6a94\u6848 \u578b\u614bName)\r\n\u7531\u4f7f\u7528\u8005\u67e5\u8a62\u7d50\u679c\u3002 \u56e0\u6b64,\u9019\u662f\u4e00\u500b\u7c21\u55ae\u7684\u7528\u6cd5ERDDAP\u8981\u6c42\u8cc7\u6599\u548c\u53d6\u5f97\u6a94\u6848\u56de\u61c9\u7684\u65b9\u6cd5, \u5c31\u50cf\u5ba2\u6236\u7aef\u6703\u4f7f\u7528ERDDAP\u2122\u7db2\u9801\u61c9\u7528\u7a0b\u5f0f\u3002 \u4f46\u9019\u65b9\u6cd5\u5728\u4f60\u7684\u5167\u5fc3Java\u7a0b\u5f0f\u4e26\u7ed5\u904e Tomcat \u7b49\u61c9\u7528\u7a0b\u5f0f\u4f3a\u670d\u5668\u7684\u9700\u8981 \u3002 \u6211\u5011\u7528\u9019\u500b\u65b9\u6cd5\u4f86\u505a EDD Table \u7684\u5f88\u591a\u55ae\u4f4d\u6e2c\u8a66EDDGrid\u5b50\u985e, \u60a8\u53ef\u4ee5\u5728\u6e90\u78bc\u4e2d\u770b\u5230\u9019\u4e9b\u985e\u5225\u7684\u793a\u4f8b \u3002"}),"\n",(0,r.jsx)(e.h3,{id:"-\u767c\u5c55\u74b0\u5883-",children:"** \u767c\u5c55\u74b0\u5883 **"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u6709\u914d\u7f6e",(0,r.jsx)(e.a,{href:"https://github.com/ERDDAP/erddap/blob/main/development/jetty",children:"\u6770\u8482"}),"\u548c",(0,r.jsx)(e.a,{href:"https://github.com/ERDDAP/erddap/blob/main/development/docker",children:"\u5d4c\u5165\u5668"}),"\u5728GitHub\u4e2d,"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["** \u53ef\u9078\u64c7 ** : \u8a2d\u5b9aERDDAP\u2122\u5728 Tomcat \u4e2d\r\n\u81eaERDDAP\u2122\u6211\u5011\u5f37\u70c8\u5efa\u8b70\u4f60\u5011\u9075\u5b88\u6a19\u6e96",(0,r.jsx)(e.a,{href:"/docs/server-admin/deploy-install",children:"\u5b89\u88dd\u6307\u4ee4"}),"\u4ee5\u5b89\u88ddTomcat,\u7136\u540e\u5b89\u88ddERDDAP\u2122\u5728Tomcat\u7684 Webapps \u76ee\u9304\u4e2d\u3002 \u9664\u5176\u4ed6\u5916,ERDDAP\u2122\u88ab\u8a2d\u8a08\u70ba\u5b89\u88dd\u5728 Tomcat \u7684\u76ee\u9304\u7d50\u69cb\u4e2d, \u4e26\u671f\u671b Tomcat \u6703\u63d0\u4f9b\u4e00\u4e9b .jar \u6a94\u6848 \u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"ERDDAP\u2122\u4e0d\u9700\u8981\u7279\u5b9a\u7684IDE (Chris\u4e3b\u8981\u4f7f\u7528Visual Studio\u78bc, Bob \u4f7f\u7528 EditPlus) . \u6211\u5011\u4e0d\u4f7f\u7528Eclipse\u3001Ant\u7b49\u3002ERDDAP- \u652f\u6301\u4ed6\u5011 \u9019\u9805\u5de5\u7a0b\u662f\u7528\u99ac\u6587\u7684"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u6211\u5011\u4f7f\u7528\u4e00\u500b\u6279\u6b21\u6a94\u6848\u4f86\u522a\u9664\u4f86\u6e90\u6a39\u4e0a\u7684 . class \u6a94\u6848,\u4ee5\u786e\u4fdd\u6211\u5011\u6709\u6e05\u6f54\u7684\u7de8\u8b6f (\u4f7f\u7528 Javac) ."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u6211\u5011\u76ee\u524d\u4f7f\u7528\u9818\u990a\u7684javac jdk-21.0.3+9\u4f86\u7de8\u8b6f gov.noaa.pfeg.coastwatch\u3002 (\u5b83\u6709\u5e7e\u500b\u8ab2\u7a0b\u7684\u9023\u7d50 \u5426\u5247\u4e0d\u6703\u7de8\u8b6f) \u505a\u6e2c\u8a66 \u51fa\u4e8e\u5b89\u5168\u539f\u56e0,\u4f7f\u7528\u6700\u65b0\u7248\u672c\u7684Java21\u548cTomcat 10."}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u76ee\u524d\u7684\u76ee\u9304\u70ba_tomcat_/webapps/erddap/WEB-INF\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u6211\u5011\u7684Javac\u548cJava\u7684\u6d41\u6d3e\u662f\r\n",(0,r.jsx)(e.code,{children:"\u7c7b;./././lib/servlet-api.jar;lib/*"}),"'"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u6240\u4ee5\u4f60\u7684Javac\u547d\u4ee4\u6703\u50cf\u9019\u6a23\r\n`javac-\u7de8\u78bc UTF-8-cp \u73ed;././lib/servlet-api.jar;lib/* \u73ed/gov/noaa/pfel/coastwatch/TestAll.java'"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u4f60\u7684Java\u547d\u4ee4\u6703\u50cf\u9019\u6a23\r\n",(0,r.jsx)(e.code,{children:"java - cp \u8ab2\u7a0b;./././lib/servlet-api.jar;lib/ * - Xmx4000M - Xms4000M /\u653f\u5e9c/noaa/pfel/\u6d77\u5cb8\u8868/ "}),"\u53ef\u9078\u64c7\u6027:\u4f60\u53ef\u4ee5\u52a0\u4e0a`-\u52d5\u8a5e",":gc","',\u5b83\u8868\u660eJava\u4ee5\u5217\u5370\u5783\u573e\u6536\u96c6\u6578\u64da\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5982\u679c\u6e2c\u8a66 \u6240\u6709\u7de8\u8b6f,\u4e00\u5207ERDDAP\u2122\u9700\u6c42\u5df2\u6c47\u7f16\u3002 \u5e7e\u5802\u8ab2\u662f\u4e0d\u9700\u8981\u7684ERDDAP\u2122. \u5982\u679c\u7de8\u8b6f TestAll \u6210\u529f\u4f46\u6c92\u6709\u7de8\u8b6f\u4e00\u4e9b\u8ab2\u7a0b,\u90a3\u5c31\u4e0d\u9700\u8981\u4e86. (\u6709\u4e00\u4e9b\u672a\u5b8c\u6210/\u672a\u4f7f\u7528\u7684\u8ab2\u7a0b\u3002)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5728\u5c11\u6578\u60c5\u6cc1\u4e0b,\u6211\u5011\u4f7f\u7528\u7b2c\u4e09\u9ee8\u6e90\u78bc\u800c\u4e0d\u662f.jar\u6a94\u6848 (\u7279\u522b\u662fDODS) \u4e26\u7a0d\u4f5c\u4fee\u6539,\u4ee5\u907f\u514d\u7de8\u8b6f\u6709\u554f\u984cJava21. \u6211\u5011\u5e38\u505a\u5176\u4ed6\u5fae\u5c0f\u7684\u4fee\u6539 (\u7279\u522b\u662fDODS) \u5176\u4ed6\u539f\u56e0\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u5927\u591a\u6578\u8ab2\u7a0b\u5728\u76f8\u95dc\u7684src/test\u6587\u4ef6\u4e2d\u90fd\u6709\u6e2c\u8a66\u65b9\u6cd5. \u60a8\u53ef\u4ee5\u4f7f\u7528 ' mvn \u6e2c\u8a66 ' \u6307\u4ee4\u57f7\u884c JUnit \u6e2c\u8a66 \u3002 \u9019\u6703\u4e0b\u8f09\u6578\u500b\u6e2c\u8a66\u6240\u4f9d\u8d56\u7684 zip \u6a94\u6848",(0,r.jsx)(e.a,{href:"https://github.com/ERDDAP/erddapTest/releases/",children:"ERDDAP/ erddap \u4e2d \u6e2c\u8a66"}),".\\"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["\u6ce8: Maven \u7f13\u5b58\u4e0b\u8f09, \u4f46\u6703\u89e3\u958b\u6bcf\u6b21\u57f7\u884c\u4e2d\u5df2\u4e0b\u8f09\u7684\u6a94\u6848, \u9019\u9700\u8981\u6642\u9593 \u3002 \u8981\u8df3\u904e\u4e0b\u8f09\r\n\u60a8\u53ef\u4ee5\u6307\u5b9a Maven \u7684 skip TestReferenceDown \u5c6c\u6027 (\u5982 ",(0,r.jsx)(e.code,{children:"mvn - Dskip TestResource' \u5957\u4ef6 "}),") ."]}),"\n",(0,r.jsx)(e.h3,{id:"-\u91cd\u8981\u985e\u5225-",children:"** \u91cd\u8981\u985e\u5225 **"}),"\n",(0,r.jsx)(e.p,{children:"\u5982\u679c\u4f60\u60f3\u770b\u770b\u6e90\u78bc,\u8a66\u8457\u60f3\u60f3\u8fa6\u6cd5ERDDAP\u2122\u5de5\u4f5c,\u8acb\u505a\u3002"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5bc6\u78bc\u662fJava\u91ab\u751f\u8a55\u8ad6,\u4f46Java\u91ab\u751f\u9084\u6c92\u7522\u751f \u96a8\u4f60\u4fbf \u767c\u80b2\u5b83\u5011\u5427"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u6700\u91cd\u8981\u7684\u73ed (\u5305\u62ec\u4e0b\u6587\u63d0\u5230\u7684) \u5728gov/noaa/pfel/erddap\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5176ERDDAP\u2122\u8ab2\u7a0b\u6709\u6700\u9ad8\u6c34\u5e73\u7684\u65b9\u6cd5\u3002 \u5b83\u5ef6\u4f38\u4e86HttpServlet\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"ERDDAP\u2122\u50b3\u9001\u8acb\u6c42\u81f3EDDGrid\u6216 EDD Table,\u4ee3\u8868\u5404\u500b\u6578\u64da\u96c6\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"EDStatic \u62e5\u6709\u5927\u90e8\u5206\u975c\u614b\u8cc7\u8a0a\u8207\u8a2d\u5b9a (\u4f8b\u5982, \u5f9e\u8a2d\u5b9a\u7684. xml \u8207\u4fe1\u4ef6. xml \u6a94\u6848\u4e2d) \u63d0\u4f9b\u975c\u614b\u670d\u52d9 (\u4f8b\u5982,\u767c\u9001\u96fb\u5b50\u90f5\u4ef6) ."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"EDDGrid\u548c EDDTable \u5b50\u985e\u5206\u89e3\u8981\u6c42, \u5f9e\u5b50\u985e\u7279\u5b9a\u65b9\u6cd5\u53d6\u5f97\u8cc7\u6599, \u7136\u540e\u683c\u5f0f\u5316 \u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"EDDGrid\u5b50\u7c7b\u5c07\u8cc7\u6599\u63a8\u9032 GridData \u5b58\u53d6\u5668 (\u7f51\u683c\u5316\u8cc7\u6599\u7684\u5185\u90e8\u8cc7\u6599\u5bb9\u5668) ."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"EDDTable \u5b50\u985e\u5225\u5c07\u8cc7\u6599\u63a8\u9032 TableWriter \u5b50\u985e\u5225, \u5c07\u8cc7\u6599\u5beb\u5165\u98db\u884c\u4e2d\u7684\u7279\u5b9a\u6a94\u6848\u985e\u578b \u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5176\u4ed6\u73ed (\u4f8b\u5982\u4f4e\u7d1a\u73ed) \u4e5f\u5f88\u91cd\u8981,\u4f46\u4f60\u66f4\u4e0d\u53ef\u80fd \u52aa\u529b\u6539\u8b8a\u5b83\u5011\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"-\u5bc6\u78bc\u8d21\u732e-",children:"** \u5bc6\u78bc\u8d21\u732e **"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["GitHub \u554f\u984c\r\n\u5982\u679c\u4f60\u60f3\u6295\u8cc7\u4f46\u6c92\u6709\u9805\u76ee,\u8acb\u53c3\u8003",(0,r.jsx)(e.a,{href:"https://github.com/ERDDAP/erddap/issues",children:"GitHub \u554f\u984c"}),"\u5176\u4e2d\u5f88\u591a\u90fd\u662f\u4f60\u80fd\u5b8c\u6210\u7684\u9805\u76ee \u5982\u679c\u4f60\u60f3\u7814\u7a76\u4e00\u500b\u554f\u984c \u8acb\u81ea\u5df1\u53bb\u544a\u8a34\u5225\u4eba\u4f60\u6b63\u5728\u7814\u7a76 GitHub\u554f\u984c\u662f\u8a0e\u8ad6\u4efb\u4f55\u554f\u984c\u7684\u6700\u4f73\u5730\u65b9,"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u82e5\u60a8\u60f3\u8981\u6539\u8b8a\u7684\u60c5\u6cc1\u662f\u4ee5\u4e0b\u5e38\u89c1\u7684,",(0,r.jsx)(e.a,{href:"https://github.com/ERDDAP/erddap/issues",children:"GitHub \u671f"}),"\u8868\u793a\u4f60\u6253\u7b97\u505a\u7684\u6539\u8b8a\u3002 \u4e00\u65e6\u8b8a\u66f4\u5b8c\u6210, \u8acb\u63d0\u51fa\u62c9\u52d5\u8981\u6c42\u4ee5\u8981\u6c42\u5408\u5e76 \u3002 \u5171\u540c\u7684\u4fee\u6539\u5305\u62ec:"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u60a8\u8981\u5beb\u4e0b\u53e6\u4e00\u500b\u5b50\u985eEDDGrid\u6216 EDD Table \u8655\u7406\u5176\u4ed6\u8cc7\u6599\u4f86\u6e90\u985e\u578b\u3002 \u5982\u679c\u6709,\u6211\u5011\u5efa\u8b70\u4f60\u627e\u5230\u6700\u63a5\u8fd1\u7684\u5b50\u985e \u5e76\u4f7f\u7528\u9019\u500b\u4ee3\u78bc\u4f5c\u70ba\u8d77\u59cb\u9ede"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u60a8\u8981\u5beb\u5165\u53e6\u4e00\u500b\u5132\u5b58 As_ FileType_ \u65b9\u6cd5 \u3002 \u5982\u679c\u6709, \u6211\u5011\u5efa\u8b70\u60a8\u5728\u5176\u4e2d\u627e\u5230\u6700\u8fd1\u7684\u5132\u5b58 As_ FileType_ \u65b9\u6cd5EDDGrid\u6216 EDD Table \u5e76\u4f7f\u7528\u6b64\u78bc\u70ba\u8d77\u59cb\u9ede \u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["\u4f60\u5beb\u7684\u5bc6\u78bc\u662f\u81ea\u6210\u4e00\u4f53\u7684 \u4f60\u4e0d\u9700\u8981\u77e5\u9053\u6240\u6709\u7684\u7d30\u7bc0ERDDAP\u5167\u90e8\u7684 \u6211\u5011\u5f88\u5bb9\u6613\u628a\u60a8\u7684\u5bc6\u78bc\u5beb\u9032ERDDAP. \u6ce8\u610f, \u5982\u679c\u60a8\u63d0\u4ea4\u4ee3\u78bc, \u57f7\u7167\u9700\u8981\u7b26\u5408ERDDAP\u2122",(0,r.jsx)(e.a,{href:"https://erddap.github.io/setup.html#license",children:"\u6388\u6b0a"}),"(\u4f8b\u5982,",(0,r.jsx)(e.a,{href:"https://www.apache.org/licenses/",children:"\u963f\u5e15\u5947\u8a9eName"}),",",(0,r.jsx)(e.a,{href:"https://www.opensource.org/licenses/bsd-license.php",children:"BSD \u4e2d"}),",\u6216",(0,r.jsx)(e.a,{href:"https://www.opensource.org/licenses/mit-license.php",children:"MIT-X"}),"). \u6211\u5011\u6703\u5217\u51fa\u4f60\u5011\u5728",(0,r.jsx)(e.a,{href:"/credits",children:"\u4fe1\u7528"}),"."]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u5982\u679c\u60a8\u6709\u4e0a\u9762\u672a\u5305\u542b\u7684\u529f\u80fd, \u60a8\u5e0c\u671b\u52a0\u5165\u5176\u4e2dERDDAP\u4e2d,",(0,r.jsx)(e.a,{href:"https://github.com/ERDDAP/erddap/discussions/categories/ideas",children:"GitHub \u8a0e\u8ad6"}),". \u6280\u8853\u59d4\u54e1\u6703\u5c07\u8a0e\u8ad6,ERDDAP\u2122."]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"-\u5224\u65b7\u60a8\u7684\u7de8\u78bc\u8d21\u732e-",children:"** \u5224\u65b7\u60a8\u7684\u7de8\u78bc\u8d21\u732e **"}),"\n",(0,r.jsx)(e.p,{children:"\u5982\u679c\u60a8\u8981\u63d0\u4ea4\u8981\u5305\u542b\u7684\u4ee3\u78bc\u6216\u5176\u4ed6\u8b8a\u66f4ERDDAP\u592a\u597d\u4e86 \u4f60\u7684\u8d21\u732e\u9700\u8981\u7b26\u5408\u67d0\u4e9b\u6807\u51c6\u624d\u80fd\u88ab\u63a5\u53d7 \u5982\u679c\u4f60\u9075\u5faa\u4ee5\u4e0b\u7684\u6307\u5f15,\u4f60\u5c31\u6703\u5927\u5927\u589e\u52a0\u4f60\u7684\u8d21\u732e\u88ab\u63a5\u53d7\u7684\u6a5f\u6703."}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5176ERDDAP\u2122\u5c08\u6848\u7531 NATD \u7ba1\u7406 (NOAA\u4efb\u547d) \u7531\u6280\u8853\u59d4\u54e1\u6703\u63d0\u4f9b\r\n2007\u5e74 (\u958b\u59cbERDDAP) \u76f4\u52302022\u5e74 \u90a3\u662f\u9b91\u52c3\xb7\u897f\u8499\u65af (\u4e5f\u662f\u5275\u59cb\u8005\u9818\u5c0e\u8005) . \u5f9e2023\u5e741\u6708\u5f00\u59cb,\u90a3\u662f\u514b\u91cc\u65af\xb7\u7d04\u7ff0 \u57fa\u672c\u4e0a,NATD\u662f\u8ca0\u8cac\u7684ERDDAP,\u6240\u4ee5\u4ed6/\u4ed6\u5c0d\u6c7a\u5b9a\u6709\u6700\u540e\u7684\u6d88\u606fERDDAP\u2122\u7a0b\u5f0f\u78bc, \u4e3b\u8981\u662f\u95dc\u65bc\u8a2d\u8a08\u548c\u662f\u5426\u63a5\u53d7\u7d66\u5b9a\u7684\u62c9\u529b\u8981\u6c42 \u3002 \u4e00\u5b9a\u662f\u56e0\u70ba\u6548\u7387\u539f\u56e0 (\u5b83\u5c0dLinus Torvalds\u548cLinux\u6709\u597d\u8655) \u90e8\u5206\u51fa\u4e8e\u5b89\u5168\u539f\u56e0: \u7e3d\u5f97\u6709\u4eba\u544a\u8a34IT\u5b89\u5168\u4eba\u54e1 \u4ed6\u5c0d\u5bc6\u78bc\u7684\u5b89\u5168\u548c\u5b8c\u6574\u8ca0\u8cac"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"NATD\u4e0d\u80fd\u4fdd\u8b49\u4ed6\u6703\u63a5\u53d7\u4f60\u7684\u5bc6\u78bc\r\n\u5982\u679c\u4e00\u500b\u9805\u76ee\u6c92\u6709\u6211\u5011\u6240\u5e0c\u671b\u7684\u90a3\u6a23\u6210\u529f \u5982\u679c\u5b83\u4e0d\u80fd\u88ab\u62ef\u6551 NATD\u5c31\u4e0d\u6703\u628a\u9019\u500b\u9805\u76ee\u5217\u5165ERDDAP\u2122\u5206\u914d\u3002 \u8acb\u4e0d\u8981\u611f\u5230\u96e3\u904e\u3002 \u6709\u6642\u8a08\u756b\u6548\u679c\u4e0d\u76e1\u5982\u4eba\u610f \u6240\u6709\u8edf\u9ad4\u958b\u767c\u8005\u90fd\u6703\u9019\u6a23 \u5982\u679c\u4f60\u9075\u5faa\u4e0b\u9762\u7684\u898f\u77e9, \u4f60\u5927\u5927\u5730\u589e\u52a0\u4e86\u4f60\u7684\u6210\u529f\u6a5f\u6703\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5982\u679c\u6539\u8b8a\u662f\u666e\u904d\u7684\u5229\u76ca\u548c\u6548\u7528,\u90a3\u6700\u597d.\r\n\u5982\u679c\u5bc6\u78bc\u662f\u4f60\u5011\u7d44\u7e54\u7684 \u6700\u597d\u4fdd\u6301\u4e00\u500b\u55ae\u7368\u7684\u5206\u652fERDDAP\u2122\u4f9b\u4f60\u4f7f\u7528\u3002 Axiom\u5e72\u7684 \u5e78\u597d\u5409\u7279\u8b93\u4e8b\u60c5\u8b8a\u5f97\u5f88\u5bb9\u6613 NATD\u5e0c\u671b\u4fdd\u6301\u5c0dERDDAP\u4e26\u4e0d\u8b93\u5b83\u6210\u70ba\u5eda\u623f\u6c34\u69fd\u5c08\u6848,"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u8ddf\u8457Java\u6cd5\u5178\u516c\u7ea6\u3002\r\n\u4e00\u822c\u8aaa\u4f86,\u4f60\u7684\u5bc6\u78bc\u61c9\u8a72\u662f\u54c1\u8cea\u597d\u7684 \u800c\u4e14\u61c9\u8a72\u9075\u5faa\u539f\u5247",(0,r.jsx)(e.a,{href:"https://www.oracle.com/technetwork/java/codeconventions-150003.pdf",children:"Java\u6cd5\u5178"}),": \u5c07 . class \u6a94\u6848\u653e\u5728\u76ee\u9304\u7ed3\u6784\u7684\u9002\u5f53\u4f4d\u7f6e, \u7d66 . class \u6a94\u6848\u4e00\u500b\u9002\u5f53\u7684\u540d\u7a31, \u5305\u62ec roalJavaDoc \u8a3b\u89e3, \u5305\u542b // \u8a3b\u89e3\u5728\u6bcf\u6bb5\u78bc\u9996, \u7e2e\u6392\u70ba 4 \u500b\u7a7a\u683c (\u6c92\u6709\u5206\u9801) ,\u907f\u514d\u884c >80\u5b57\u7b26\u7b49\u3002 \u50b3\u7d71\u6539\u8b8a, \u5982\u679c\u6709\u7591\u554f, \u4ee3\u78bc\u8981\u7b26\u5408\u7d04\u6cd5\u800c\u4e0d\u662f\u73b0\u6709\u7684\u4ee3\u78bc\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u4f7f\u7528\u63cf\u8ff0\u985e, \u65b9\u6cd5\u548c\u8b8a\u6578\u540d\u7a31 \u3002\r\n\u8b93\u5176\u4ed6\u4eba\u66f4\u5bb9\u6613\u8b80\u5230\u5bc6\u78bc"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u907f\u514d\u82b1\u5f0f\u4ee3\u78bc \u3002\r\n\u5f9e\u957f\u8fdc\u770b,\u4f60\u6216\u5176\u4ed6\u4eba\u5fc5\u9808\u627e\u51fa\u5bc6\u78bc\u624d\u80fd\u7dad\u6301\u4e0b\u53bb \u6240\u4ee5\u8acb\u4f7f\u7528\u7c21\u55ae\u7684\u7de8\u78bc\u65b9\u6cd5 \u8b93\u5176\u4ed6\u4eba\u66f4\u5bb9\u6613 (\u5305\u62ec\u4f60\u672a\u4f86) \u60f3\u6e05\u695a \u986f\u7136,\u5982\u679c\u7528\u82b1\u62db\u6709\u771f\u6b63\u7684\u512a\u9edeJava\u7de8\u7a0b\u529f\u80fd, \u4f7f\u7528\u5b83, \u4f46\u5927\u91cf\u8a18\u9304\u4f60\u6240\u505a\u7684, \u539f\u56e0, \u4ee5\u53ca\u5b83\u662f\u5982\u4f55\u5de5\u4f5c\u7684 \u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5728\u4f60\u958b\u59cb\u4e4b\u524d\u548c\u6280\u8853\u59d4\u54e1\u6703\u5408\u4f5c\r\n\u5982\u679c\u4f60\u5e0c\u671b\u5f97\u5230\u60a8\u7684\u5bc6\u78bc\u8b8a\u66f4ERDDAP\u2122\u6280\u8853\u59d4\u54e1\u6703\u80af\u5b9a\u6703\u60f3\u5728\u60a8\u4fee\u6539\u5bc6\u78bc\u4e4b\u524d \u8ac7\u4e00\u4e0b\u60a8\u8981\u505a\u4ec0\u9ebc \u8a72\u600e\u9ebc\u505a \u9019\u6a23\u6211\u5011\u5c31\u53ef\u4ee5\u907f\u514d\u4f60\u505a\u51faNATD\u6700\u5f8c\u4e0d\u63a5\u53d7\u7684\u6539\u8b8a \u7576\u4f60\u5de5\u4f5c\u6642,NATD\u548c\u6280\u8853\u59d4\u54e1\u6703 \u613f\u610f\u56de\u7b54\u554f\u984c \u5e6b\u52a9\u4f60\u627e\u51fa\u73b0\u6709\u7684\u5bc6\u78bc (\u6982\u8ff0) \u5982\u4f55\u8655\u7406\u4f60\u7684\u5c08\u6848"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u72ec\u7acb\u5de5\u4f5c (\u8d8a\u591a\u8d8a\u597d) \u5728\u4f60\u958b\u59cb\u4e4b\u540e\r\n\u76f8\u5c0d\u65bc\u4ee5\u4e0a\u300c\u8207\u6280\u8853\u59d4\u54e1\u6703\u5408\u4f5c\u300d, \u5982\u679cNATD\u8981\u544a\u8a34\u4f60\u5e7e\u4e4e\u4e00\u5207 \u56de\u7b54\u5f88\u591a\u554f\u984c (\u7279\u5225\u662f\u90a3\u4e9b\u4f60\u53ef\u4ee5\u901a\u904e\u8b80\u53d6\u6587\u4ef6\u6216\u5bc6\u78bc\u4f86\u56de\u7b54\u7684) \u90a3\u9ebc\u4f60\u7684\u52aa\u529b\u4e26\u4e0d\u662f NATD\u7684\u6642\u9593\u8282\u7701 \u800c\u4e14\u4ed6\u4e5f\u53ef\u4ee5\u81ea\u5df1\u505a \u662f",(0,r.jsx)(e.a,{href:"https://en.wikipedia.org/wiki/The_Mythical_Man-Month",children:"\u795e\u8a71\u4eba\u7269\u6708"}),"\u6709\u554f\u984c \u7576\u7136,\u6211\u5011\u61c9\u8a72\u7e7c\u7e8c\u4ea4\u6d41 \u4ee5\u78ba\u4fdd\u8a08\u756b\u80fd\u5982\u671f\u9032\u884c, \u4f46\u4f60\u8d8a\u80fd\u7368\u7acb\u5de5\u4f5c (\u5728\u6280\u8853\u59d4\u54e1\u6703\u540c\u610f\u624b\u982d\u7684\u5de5\u4f5c\u548c\u4e00\u822c\u65b9\u6cd5\u4e4b\u540e) \u8d8a\u597d"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u907f\u514d\u866b\u5b50 \u3002\r\n\u5982\u679c\u5728\u767c\u884c\u524d\u672a\u6293\u5230\u932f\u8aa4, \u9019\u6703\u5f15\u8d77\u4f7f\u7528\u8005\u7684\u554f\u984c (\u6700\u591a) ,\u8fd4\u56de\u932f\u8aa4\u7684\u4fe1\u606f (\u6700\u7cdf\u7cd5\u7684) ,\u662f\u6c61\u9ede\u4e0aERDDAP\u540d\u8072,\u5c07\u4e0d\u65b7ERDDAP\u2122\u8a2d\u7f6e\u591a\u5e74\u3002 \u52aa\u529b\u907f\u514d\u866b\u5b50 \u4e00\u90e8\u5206\u662f\u5beb\u6e05\u6f54\u78bc (\u6240\u4ee5\u66f4\u5bb9\u6613\u770b\u5230\u554f\u984c) . \u4e00\u90e8\u5206\u662f\u5beb\u4f5c\u55ae\u4f4d\u7684\u6e2c\u8a66 \u4e00\u90e8\u5206\u662f\u5beb\u7a0b\u5f0f\u78bc\u6642\u7684\u907f\u87f2\u614b\u5ea6 \u4e0d\u8981\u8b93NATD\u540e\u6094 \u52a0\u4e0a\u4f60\u7684\u5bc6\u78bcERDDAP\u2122."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5beb\u55ae\u4f4d\u6e2c\u8a66\u6216\u6e2c\u8a66\r\n\u8981\u7528\u65b0\u7684\u4ee3\u78bc, \u60a8\u61c9\u8a72\u5c07 JUnit \u6e2c\u8a66\u5beb\u5165\u6e2c\u8a66\u6a94 \u3002\r\n\u8acb\u81f3\u5c11\u5beb\u4e0b\u4e00\u500b\u55ae\u4f4d\u7684\u6e2c\u8a66\u65b9\u6cd5, \u5fb9\u5e95\u6aa2\u67e5\u60a8\u5beb\u7684\u4ee3\u78bc, \u4e26\u52a0\u5165\u5230\u8ab2\u7a0b\u7684 JUnit \u6e2c\u8a66\u6a94\u4e2d, \u8b93\u5b83\u81ea\u52d5\u57f7\u884c \u3002 \u55ae\u4f4d (\u76f8\u5173) \u6e2c\u8a66\u662f\u6355\u6349\u87f2\u5b50\u7684\u6700\u597d\u65b9\u6cd5\u4e4b\u4e00, (\u96a8\u8457\u5176\u4ed6\u4e8b\u7269\u7684\u6539\u8b8aERDDAP\u2122) . \u5982\u9b91\u52c3\u6240\u8a00 \u300c\u55ae\u8eab\u6aa2\u67e5\u8b93\u6211\u665a\u4e0a\u7761\u89ba\u300d"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u8b93NATD\u5bb9\u6613\u7406\u89e3\u5e76\u63a5\u53d7\u4f60\u62c9\u529b\u8981\u6c42\u4e2d\u7684\u8b8a\u66f4.\r\n\u4e00\u90e8\u5206\u662f\u5beb\u55ae\u4f4d\u6e2c\u8a66\u65b9\u6cd5 (s) . \u5176\u4e2d\u4e00\u90e8\u5206\u662f\u9650\u5236\u60a8\u7684\u8b8a\u66f4 \u3002 (\u6216\u4e00\u500b\u985e\u5225) \u5982\u679c\u6709\u53ef\u80fd\u7684\u8a71 NATD\u4e0d\u6703\u63a5\u53d7\u4efb\u4f55\u62c9\u529b\u8981\u6c42 \u96a8\u8457\u6578\u4ee5\u767e\u8a08\u7684\u8b8a\u5316 NATD\u544a\u8a34IT\u5b89\u5168\u4eba\u58eb, \u82e5\u6539\u8b8a\u904e\u591a, \u6216\u662f\u592a\u96e3\u89e3\u6790,"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u4fdd\u6301\u7c21\u55ae\u3002\r\n\u60a8\u7684\u5bc6\u78bc\u7684\u4e00\u500b\u597d\u4e3b\u984c\u662f: \u7c21\u55ae\u9ede\u3002 \u7c21\u55ae\u7684\u5bc6\u78bc\u5c0d\u5176\u4ed6\u4eba\u4f86\u8aaa\u5f88\u7c21\u55ae (\u5305\u62ec\u4f60\u672a\u4f86) \u4ee5\u8b80\u53d6\u548c\u7ef4\u62a4\u3002 NATD\u5f88\u5bb9\u6613\u7406\u89e3\u5e76\u63a5\u53d7"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u505a\u4f60\u7684\u5bc6\u78bc\u7684\u9577\u671f\u8cac\u4efb\r\n\u5f9e\u957f\u8fdc\u770b,\u4f60\u6700\u597d\u7e7c\u7e8c\u8ca0\u8cac \u7dad\u6301\u4f60\u7684\u5bc6\u78bc,\u56de\u7b54\u554f\u984c (\u4f8b\u5982,ERDDAP\u2122\u8c37\u6b4c\u7fa4\u7d44) . \u6709\u4e9b\u4f5c\u8005\u6307\u51fa,\u4ee3\u78bc\u65e2\u662f\u8ca1\u7522\u4e5f\u662f\u8d1f\u503a\u3002 \u5982\u679c\u672a\u4f86\u767c\u73fe\u4e86\u87f2\u5b50 \u6700\u597d\u80fd\u4fee\u597d \u56e0\u70ba\u6c92\u4eba\u6bd4\u4f60\u66f4\u77ad\u89e3\u4f60\u7684\u5bc6\u78bc (\u4e5f\u56e0\u6b64\u6709\u907f\u514d\u87f2\u5b50\u7684\u523a\u6fc0) . NATD\u4e26\u975e\u8981\u6c42\u5805\u5b9a\u627f\u8afe, NATD\u53ea\u662f\u8aaa,\u505a\u7dad\u4fee\u6703\u975e\u5e38\u611f\u8b1d\u3002"}),"\n"]}),"\n"]})]})}function D(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>d,x:()=>c});var s=i(6540);const r={},l=s.createContext(r);function d(n){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:d(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);