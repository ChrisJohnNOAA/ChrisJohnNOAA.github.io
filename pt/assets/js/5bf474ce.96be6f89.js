"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[137],{7321:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>d,contentTitle:()=>t,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"server-admin/deploy-update","title":"Atualiza\xe7\xe3o","description":"Como fazer uma atualiza\xe7\xe3o de um existenteERDDAP\u2122em seu servidor","source":"@site/i18n/pt/docusaurus-plugin-content-docs/current/server-admin/deploy-update.md","sourceDirName":"server-admin","slug":"/server-admin/deploy-update","permalink":"/pt/docs/server-admin/deploy-update","draft":false,"unlisted":false,"editUrl":"https://github.com/erddap/erddap/tree/main/documentation/docs/server-admin/deploy-update.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docSidebar","previous":{"title":"Instalar","permalink":"/pt/docs/server-admin/deploy-install"},"next":{"title":"Contributing","permalink":"/pt/docs/category/contributing"}}');var n=s(4848),o=s(8453);const i={sidebar_position:2},t="Atualiza\xe7\xe3o",d={},l=[];function c(e){const a={a:"a",em:"em",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.header,{children:(0,n.jsx)(a.h1,{id:"atualiza\xe7\xe3o",children:"Atualiza\xe7\xe3o"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.a,{href:"#update",children:"Como fazer uma atualiza\xe7\xe3o de um existenteERDDAP\u2122em seu servidor"})}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["Fa\xe7a as altera\xe7\xf5es listadas em",(0,n.jsx)(a.a,{href:"https://erddap.github.io/changes.html",children:"Mudan\xe7as"}),'na se\xe7\xe3o intitulada "CoisasERDDAP\u2122Os administradores precisam saber e fazer" para todos osERDDAP\u2122vers\xf5es desde a vers\xe3o que voc\xea estava usando.']}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["Se voc\xea est\xe1 atualizando deERDDAP\u2122vers\xe3o 2.18 ou abaixo, voc\xea precisa mudar paraJava21 (ou mais recente) e o Tomcat 10 relacionado. Veja o regularERDDAP\u2122instru\xe7\xf5es de instala\xe7\xe3o para",(0,n.jsx)(a.a,{href:"#java",children:"Java"}),"e",(0,n.jsx)(a.a,{href:"#tomcat",children:"Tomcat"}),". Voc\xea tamb\xe9m ter\xe1 que copiar o seu_tomcat_/content/erddapdiret\xf3rio de sua antiga instala\xe7\xe3o Tomcat para sua nova instala\xe7\xe3o Tomcat."]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["Baixar",(0,n.jsx)(a.a,{href:"https://github.com/ERDDAP/erddap/releases/download/v2.25.1/erddap.war",children:"erddap.war"}),"em ",(0,n.jsx)(a.em,{children:"tomcat"}),"/webapps .\r\n(vers\xe3o 2.25_1, 592,292,039 bytes, MD5=652AFC9D1421F00B5F789DA2C4732D4C, datado de 2024-11-07)"]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.a,{href:"#messages.xml",children:"mensagens.xml"})}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"Comum: Se voc\xea est\xe1 atualizando deERDDAP\u2122vers\xe3o 1.46 (ou superior) e voc\xea apenas usar as mensagens padr\xe3o, o novo padr\xe3o message.xml ser\xe1 instalado automaticamente (entre os arquivos .class via erddap. Guerra) ."}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["Rare: Se voc\xea est\xe1 atualizando deERDDAP\u2122vers\xe3o 1.44 (ou abaixo) ,\r\nvoc\xea DEVE excluir o arquivo old message.xml:\r\n",(0,n.jsx)(a.em,{children:"tomcat"}),"/content/erddap/messages.xml .\r\nAs novas mensagens padr\xe3o.xml ser\xe3o instaladas automaticamente (entre os arquivos .class via erddap. Guerra) ."]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"Rare: Se voc\xea sempre fizer altera\xe7\xf5es no arquivo standard message.xml (no lugar) ,\r\nvoc\xea precisa fazer essas altera\xe7\xf5es no novo arquivo message.xml (que \xe9\r\nWEB-INF/classes/gov/noaa/pfel/erddap/util/messages.xml ap\xf3s o erddap.war \xe9 decomprimido por Tomcat."}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"Rare: Se voc\xea manter um arquivo custom message.xml em_tomcat_/content/erddap/,\r\nvoc\xea precisa descobrir (via diff) que mudan\xe7as foram feitas para o padr\xe3o message.xml (que est\xe3o no novo erddap. guerra como\r\nWEB-INF/classes/gov/noaa/pfel/erddap/util/messages.xml) e modificar seu arquivo custom message.xml de acordo."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"Instalar o novoERDDAP\u2122em Tomcat:"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["N\xe3o use o Tomcat Manager. Mais cedo ou mais tarde haver\xe1 problemas de mem\xf3ria PermGen. \xc9 melhor desligar e iniciar Tomcat.\r\n\\* Substituir refer\xeancias a ",(0,n.jsx)(a.em,{children:"tomcat"})," abaixo com o diret\xf3rio Tomcat real em seu computador."]}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"Para Linux e Macs:"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:["Tomcat de desligamento: De uma linha de comando, use: ",(0,n.jsx)(a.em,{children:"tomcat"}),"/bin/shutdown.sh\r\nE use ps -ef | grep tomcat para ver se/quando o processo foi interrompido. (Pode demorar um minuto ou dois.)"]}),"\n",(0,n.jsxs)(a.li,{children:["Remover o descomprimidoERDDAP\u2122instala\xe7\xe3o: Em ",(0,n.jsx)(a.em,{children:"tomcat"}),"/webapps, use\r\nRm -rf erddap"]}),"\n",(0,n.jsxs)(a.li,{children:["Apague o velho erddap. arquivo de guerra: In ",(0,n.jsx)(a.em,{children:"tomcat"}),"/webapps, use rm erddap. Guerra"]}),"\n",(0,n.jsxs)(a.li,{children:["Entendido. arquivo de guerra do diret\xf3rio tempor\xe1rio para ",(0,n.jsx)(a.em,{children:"tomcat"}),"/webapps"]}),"\n",(0,n.jsxs)(a.li,{children:["Reinicie Tomcat eERDDAP: use ",(0,n.jsx)(a.em,{children:"tomcat"}),"/bin/startup.sh"]}),"\n",(0,n.jsx)(a.li,{children:"Visualiza\xe7\xe3oERDDAP\u2122no seu navegador para verificar que o rein\xedcio conseguiu.\r\n(Muitas vezes, voc\xea tem que tentar algumas vezes e esperar um minuto antes de verERDDAP\u2122.)"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"Para Windows:"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:["Tomcat de desligamento: De uma linha de comando, use: ",(0,n.jsx)(a.em,{children:"tomcat"}),"\\bin\\\\shutdown.bat"]}),"\n",(0,n.jsxs)(a.li,{children:["Remover o descomprimidoERDDAP\u2122instala\xe7\xe3o: Em ",(0,n.jsx)(a.em,{children:"tomcat"}),"/webapps, use\r\n/S/Q erddap"]}),"\n",(0,n.jsxs)(a.li,{children:["Apague o velho erddap. arquivo de guerra: Em ",(0,n.jsx)(a.em,{children:"tomcat"}),"\\\\webapps, use del erddap. Guerra"]}),"\n",(0,n.jsxs)(a.li,{children:["Entendido. arquivo de guerra do diret\xf3rio tempor\xe1rio para ",(0,n.jsx)(a.em,{children:"tomcat"}),"\\webapps"]}),"\n",(0,n.jsxs)(a.li,{children:["Reinicie Tomcat eERDDAP: use ",(0,n.jsx)(a.em,{children:"tomcat"}),"\\bin\\\\startup.bat"]}),"\n",(0,n.jsx)(a.li,{children:"Visualiza\xe7\xe3oERDDAP\u2122no seu navegador para verificar que o rein\xedcio conseguiu.\r\n(Muitas vezes, voc\xea tem que tentar algumas vezes e esperar um minuto antes de verERDDAP\u2122.)"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:["Atualiza\xe7\xe3o de problemasERDDAP?\r\nE-mail para mimerd dot data at noaa dot gov. Eu ajudo-te.\r\nOu voc\xea pode se juntar a",(0,n.jsx)(a.a,{href:"#ERDDAPMailingList",children:"ERDDAP\u2122Google Group / Lista de Correios"}),"e postar sua pergunta l\xe1."]})]})}function m(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,a,s)=>{s.d(a,{R:()=>i,x:()=>t});var r=s(6540);const n={},o=r.createContext(n);function i(e){const a=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(o.Provider,{value:a},e.children)}}}]);