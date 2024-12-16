"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[411],{6590:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>t,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"server-admin/deploy-update","title":"Aktualizacja","description":"Jak zrobi\u0107 aktualizacj\u0119 istniej\u0105cegoERDDAP\u2122na serwerze","source":"@site/i18n/pl/docusaurus-plugin-content-docs/current/server-admin/deploy-update.md","sourceDirName":"server-admin","slug":"/server-admin/deploy-update","permalink":"/pl/docs/server-admin/deploy-update","draft":false,"unlisted":false,"editUrl":"https://github.com/erddap/erddap/tree/main/documentation/docs/server-admin/deploy-update.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docSidebar","previous":{"title":"Instalacja","permalink":"/pl/docs/server-admin/deploy-install"},"next":{"title":"Contributing","permalink":"/pl/docs/category/contributing"}}');var i=n(4848),r=n(8453);const o={sidebar_position:2},t="Aktualizacja",d={},l=[];function c(e){const a={a:"a",em:"em",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.header,{children:(0,i.jsx)(a.h1,{id:"aktualizacja",children:"Aktualizacja"})}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.a,{href:"#update",children:"Jak zrobi\u0107 aktualizacj\u0119 istniej\u0105cegoERDDAP\u2122na serwerze"})}),"\n",(0,i.jsxs)(a.ol,{children:["\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsxs)(a.p,{children:["Dokonaj zmian wymienionych w",(0,i.jsx)(a.a,{href:"https://erddap.github.io/changes.html",children:"Zmiany"}),'w sekcji zatytu\u0142owanej "RzeczyERDDAP\u2122Administratorzy musz\u0105 wiedzie\u0107 i zrobi\u0107 "dla wszystkichERDDAP\u2122wersje od wersji, kt\xf3rej u\u017cywasz.']}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsxs)(a.p,{children:["Je\u015bli uaktualniaszERDDAP\u2122wersja 2.18 lub poni\u017cej, musisz przej\u015b\u0107 doJava21 (lub nowsze) i powi\u0105zanego Tomcata 10. Patrz regularnieERDDAP\u2122Instrukcja monta\u017cu",(0,i.jsx)(a.a,{href:"#java",children:"Java"}),"oraz",(0,i.jsx)(a.a,{href:"#tomcat",children:"Tomcat"}),". B\u0119dziesz r\xf3wnie\u017c musia\u0142 skopiowa\u0107 sw\xf3j_tomcat_/content/erddapkatalog ze starej instalacji Tomcat do nowej instalacji Tomcat."]}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsxs)(a.p,{children:["Pobierz",(0,i.jsx)(a.a,{href:"https://github.com/ERDDAP/erddap/releases/download/v2.25.1/erddap.war",children:"erddap.war"}),"into _ tomcat _ / webapps.\r\n(Wersja 2.25 _ 1, 592,292,039 bajt\xf3w, MD5 = 652AFC9D1421F00B5F789DA2C4732D4C, datowany na 2024- 11- 07)"]}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.a,{href:"#messages.xml",children:"messages.xml"})}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsx)(a.p,{children:"Cz\u0119sto: Je\u015bli uaktualniaszERDDAP\u2122wersja 1.46 (lub powy\u017cej) i wystarczy u\u017cy\u0107 standardowych wiadomo\u015bci, nowy standard messages.xml zostanie zainstalowany automatycznie (w\u015br\xf3d plik\xf3w .class poprzez erddap. wojna) ."}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsxs)(a.p,{children:["Rzadko: Je\u015bli uaktualniaszERDDAP\u2122wersja 1.44 (lub poni\u017cej) ,\r\nMUSI usun\u0105\u0107 stary plik messages.xml:\r\n",(0,i.jsx)(a.em,{children:"tomcat"}),"/content/erddapMessages.xml.\r\nNowy standard messages.xml zostanie zainstalowany automatycznie (w\u015br\xf3d plik\xf3w .class poprzez erddap. wojna) ."]}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsx)(a.p,{children:"Rzadko: Je\u015bli zawsze wprowadzasz zmiany do standardowego pliku messages.xml (na miejscu) ,\r\nmusisz dokona\u0107 tych zmian w nowym pliku messages.xml (kt\xf3ry jest\r\nWEB- INF / classes / gov / noaa / pfel / erddap / util / messages.xml po erddap.war jest zdekompresowana przez Tomcat)."}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsx)(a.p,{children:"Rzadko: Je\u015bli posiadasz niestandardowy plik messages.xml_tomcat_/content/erddap/,\r\nMusisz si\u0119 dowiedzie\u0107 (przez diff) jakie zmiany zosta\u0142y wprowadzone w domy\u015blnym messages.xml (kt\xf3re s\u0105 w nowym erddap. wojna jako\r\nWEB- INF / classes / gov / noaa / pfel / erddap / util / messages.xml) i odpowiednio modyfikuj sw\xf3j plik messages.xml."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsx)(a.p,{children:"Zainstaluj nowyERDDAP\u2122w j\u0119zyku Tomcat:"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsx)(a.p,{children:"Nie u\u017cywaj Tomcat Manager. Pr\u0119dzej czy p\xf3\u017aniej b\u0119d\u0105 problemy z pami\u0119ci\u0105 PermGen. Lepiej jest wy\u0142\u0105czy\u0107 i uruchomi\u0107 Tomcat.\r\n\\ * Zast\u0105p odno\u015bniki do _ tomcat _ below aktualnym katalogiem Tomcat na komputerze."}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsx)(a.p,{children:"Dla Linuksa i Maca:"}),"\n",(0,i.jsxs)(a.ol,{children:["\n",(0,i.jsx)(a.li,{children:"Wy\u0142\u0105cz Tomcat: Z linii polece\u0144 u\u017cyj: _ tomcat _ / bin / shutdown.sh\r\nU\u017cyj ps - ef - 124; grep tomcat, aby sprawdzi\u0107, czy / kiedy proces zosta\u0142 zatrzymany. (To mo\u017ce zaj\u0105\u0107 minut\u0119 lub dwie.)"}),"\n",(0,i.jsx)(a.li,{children:"Usu\u0144 zdekompresowaneERDDAP\u2122instalacja: In _ tomcat _ / webapps, use\r\nrm-rf erddap"}),"\n",(0,i.jsx)(a.li,{children:"Usu\u0144 stary erddap. plik wojenny: In _ tomcat _ / webapps, u\u017cyj rm erddap. wojna"}),"\n",(0,i.jsx)(a.li,{children:"Skopiuj nowy erddap. plik wojenny z katalogu tymczasowego do _ tomcat _ / webapps"}),"\n",(0,i.jsx)(a.li,{children:"Przywr\xf3\u0107 Tomcat iERDDAP: use _ tomcat _ / bin / startup.sh"}),"\n",(0,i.jsx)(a.li,{children:"WidokERDDAP\u2122w przegl\u0105darce, aby sprawdzi\u0107, czy restart si\u0119 powi\xf3d\u0142.\r\n(Cz\u0119sto musisz spr\xf3bowa\u0107 kilka razy i poczeka\u0107 minut\u0119 zanim zobaczyszERDDAP\u2122.)"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsx)(a.p,{children:"Dla Windows:"}),"\n",(0,i.jsxs)(a.ol,{children:["\n",(0,i.jsx)(a.li,{children:"Wy\u0142\u0105cz Tomcat: Z linii polece\u0144 u\u017cyj: _ tomcat _\\ bin\\shutdown.bat"}),"\n",(0,i.jsx)(a.li,{children:"Usu\u0144 zdekompresowaneERDDAP\u2122instalacja: In _ tomcat _ / webapps, use\r\ndel / S / Q erddap"}),"\n",(0,i.jsx)(a.li,{children:"Usu\u0144 stary erddap. akta wojenne: In _ tomcat _\\ webapps, u\u017cyj del erddap. wojna"}),"\n",(0,i.jsx)(a.li,{children:"Skopiuj nowy erddap. plik wojenny z katalogu tymczasowego do _ tomcat _\\ webapps"}),"\n",(0,i.jsx)(a.li,{children:"Przywr\xf3\u0107 Tomcat iERDDAP: use _ tomcat _\\ bin\\ startup.bat"}),"\n",(0,i.jsx)(a.li,{children:"WidokERDDAP\u2122w przegl\u0105darce, aby sprawdzi\u0107, czy restart si\u0119 powi\xf3d\u0142.\r\n(Cz\u0119sto musisz spr\xf3bowa\u0107 kilka razy i poczeka\u0107 minut\u0119 zanim zobaczyszERDDAP\u2122.)"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(a.p,{children:["Aktualizacja problem\xf3wERDDAP?\r\nNapisz do mnieerd dot data at noaa dot gov. Pomog\u0119 ci.\r\nAlbo, mo\u017cesz do\u0142\u0105czy\u0107 do",(0,i.jsx)(a.a,{href:"#ERDDAPMailingList",children:"ERDDAP\u2122Grupa Google / Lista pocztowa"}),"i wy\u015blij tam swoje pytanie."]})]})}function p(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,a,n)=>{n.d(a,{R:()=>o,x:()=>t});var s=n(6540);const i={},r=s.createContext(i);function o(e){const a=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:a},e.children)}}}]);