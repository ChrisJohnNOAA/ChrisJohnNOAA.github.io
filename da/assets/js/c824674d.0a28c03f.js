"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[645],{8588:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>l,default:()=>k,frontMatter:()=>s,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"contributing/programmer-guide","title":"Programmeringsguide","description":"Disse er ting, som kun en programm\xf8r, der har til hensigt at arbejde medERDDAP\'sJavaklasser skal vide.","source":"@site/i18n/da/docusaurus-plugin-content-docs/current/contributing/programmer-guide.md","sourceDirName":"contributing","slug":"/contributing/programmer-guide","permalink":"/da/docs/contributing/programmer-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/erddap/erddap/tree/main/documentation/docs/contributing/programmer-guide.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docSidebar","previous":{"title":"Bidrag til at bidrage tilERDDAP\u2122","permalink":"/da/docs/contributing/"}}');var t=n(4848),d=n(8453);const s={sidebar_position:2},l="Programmeringsguide",a={},o=[{value:"** S\xe5dan f\xe5r du kildekoden **",id:"-s\xe5dan-f\xe5r-du-kildekoden-",level:3},{value:"** ERDDAP\u2122afh\xe6ngigheder **",id:"-erddapafh\xe6ngigheder-",level:3},{value:"** Halvvejs **",id:"-halvvejs-",level:2},{value:"** Udviklingsmilj\xf8 **",id:"-udviklingsmilj\xf8-",level:3},{value:"** Vigtige klasser **",id:"-vigtige-klasser-",level:3},{value:"** Kodebidrag **",id:"-kodebidrag-",level:3},{value:"** Vurderinger af din kode **",id:"-vurderinger-af-din-kode-",level:3}];function g(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"programmeringsguide",children:"Programmeringsguide"})}),"\n",(0,t.jsx)(r.p,{children:"Disse er ting, som kun en programm\xf8r, der har til hensigt at arbejde medERDDAP'sJavaklasser skal vide."}),"\n",(0,t.jsx)(r.h3,{id:"-s\xe5dan-f\xe5r-du-kildekoden-",children:"** S\xe5dan f\xe5r du kildekoden **"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Via Source Code p\xe5 GitHub\r\nKildekoden for de seneste offentlige versioner og in-udvikling versioner er ogs\xe5 tilg\xe6ngelig via",(0,t.jsx)(r.a,{href:"https://github.com/ERDDAP",children:"GitHub"}),". L\xe6s venligst l\xe6se",(0,t.jsx)(r.a,{href:"https://github.com/ERDDAP/erddap/wiki",children:"Wikimedia Commons"}),"for projektet. Hvis du vil \xe6ndre kildekoden (og muligvis har \xe6ndringerne indarbejdet i standardenERDDAP\u2122distribution af distribution) , dette er den anbefalede tilgang."]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"-erddapafh\xe6ngigheder-",children:"** ERDDAP\u2122afh\xe6ngigheder **"}),"\n",(0,t.jsx)(r.p,{children:"ERDDAP\u2122bruger Maven til at indl\xe6se kode afh\xe6ngigheder samt nogle statiske referencefiler (WEB-INF/ref) . Dette g\xf8res for at undg\xe5 at gemme mange store filer i lageret.\r\nDu kan bruge `mvn kompilere\u2019, og det vil hente afh\xe6ngigheder og ref filer. Du kan ogs\xe5 bruge \u2019mvn pakke\u2019 til at generere en krig fil.\r\nDu kan manuelt downloade ref-filer:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"https://github.com/ERDDAP/ERDDAPRefFiles/releases/download/1.0.0/etopo1_ice_g_i2.zip",children:"\\_ice\\_g\\_i2.zip"}),"og unzip det ind /WEB-INF / ."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"https://github.com/ERDDAP/ERDDAPRefFiles/releases/download/1.0.0/ref_files.zip",children:"ref \\_files.zip"}),"og unzip det ind /WEB-INF / ."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"https://github.com/ERDDAP/erddapContent/releases/download/content1.0.0/erddapContent.zip",children:"ErddapContent.zip"})," (Version 1.0.0, 20333 bytes, MD5=2B8D2A5AE5ED73E3A42B529C168C60B5, af 2024-10-14-14-14) og indpakke det ind i ",(0,t.jsx)(r.em,{children:"tomcat"}),", oprettelse_tomcat_/content/erddap."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["BEM\xc6RK: Som standard vil Maven cache statisk reference og test data arkiv downloads og kun udtr\xe6kke dem, n\xe5r en ny version downloades. For at springe hen over kan du indstille \u2019skipResourceDownload\u2019 og/eller ",(0,t.jsx)(r.code,{children:"skipTestResourceDownload\u2019 egenskaber til Mavenn (f.eks. "}),"mvn -DskipResourceDownload pakke \u201e) . For at styrke udvinding skal du indstille \u2019-Ddownload.unpack=true\u2019 og `Ddownload.unpackN\xe5rChanged=false\u2019."]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["ERDDAP\u2122og dens underkomponenter har meget liberal, open-source",(0,t.jsx)(r.a,{href:"https://erddap.github.io/setup.html#license",children:"licenser"}),", s\xe5 du kan bruge og \xe6ndre kildekoden til ethvert form\xe5l, for-profit eller ikke-for-profit. Bem\xe6rk, atERDDAP\u2122og mange underkomponenter har licenser, der kr\xe6ver, at du anerkender kilden til den kode, du bruger. Se endnu",(0,t.jsx)(r.a,{href:"https://erddap.github.io/setup.html#credits",children:"Credits"}),". Uanset om det er n\xf8dvendigt eller ej, er det bare god form til at anerkende alle disse bidragydere."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"** Brug koden til andre projekter **"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"Mens du er velkommen til at bruge dele af deleneERDDAP\u2122kode for andre projekter, advares om, at koden kan og vil \xe6ndre. Vi lover ikke at st\xf8tte andre anvendelser af vores kode. Git og GitHub vil v\xe6re dine vigtigste l\xf8sninger til at h\xe5ndtere dette - Git giver dig mulighed for at fusionere vores \xe6ndringer i dine \xe6ndringer.\r\n** I mange situationer, hvor du kan blive fristet til at bruge dele afERDDAP\u2122i dit projekt, vi tror, du vil finde det meget nemmere at installere og brugeERDDAP\u2122som er, ** og derefter skrive andre tjenester, der brugerERDDAP's tjenester. Du kan oprette din egenERDDAP\u2122installation er i en time eller to. Du kan oprette din egenERDDAP\u2122installation p\xe5 en poleret m\xe5de p\xe5 et par dage (Afh\xe6ngigt af antallet og kompleksiteten af dine datas\xe6t) . Men hacking af dele afERDDAP\u2122for dit eget projekt er sandsynligt at tage uger (og m\xe5neder til at fange finesser) og du vil miste evnen til at indarbejde \xe6ndringer og fejlrettelser fra efterf\xf8lgendeERDDAP\u2122udgivelser. Vi vi vi vi (selvf\xf8lgelig) tror der er mange fordele at brugeERDDAP\u2122som er og g\xf8r dinERDDAP\u2122Installation af offentligt tilg\xe6ngelige. Men i nogle tilf\xe6lde, vil du muligvis ikke g\xf8re dinERDDAP\u2122Installation af offentligt tilg\xe6ngelige. S\xe5 kan din tjeneste f\xe5 adgang til og bruge din privateERDDAP\u2122og dine kunder beh\xf8ver ikke vide omERDDAP\u2122."}),"\n",(0,t.jsx)(r.h2,{id:"-halvvejs-",children:"** Halvvejs **"}),"\n",(0,t.jsx)(r.p,{children:"Eller der er en anden tilgang, som du kan finde nyttige, som er halvvejs mellem at tr\xe6kke indERDDAP's kode og brugERDDAP\u2122som en selvst\xe6ndig webtjeneste: I EDD-klassen er der en statisk metode, der lader dig foretage en forekomst af et datas\xe6t (baseret p\xe5 specifikationendatasets.xml) :\r\n`oneFraDataset Xml (Streng tDatasetID)\r\n\"Det returnerer en forekomst af en EDDTabel ellerEDDGridDatas\xe6t. I betragtning af, at du kan ringe til \\\r\n\u2018makeNewFileForDapQuery (String brugerDapQuery, String dir, String filnavn, String fil Typenavn)\r\n\u2018at fort\xe6lle instansen til at lave en datafil, af en bestemt filType, med resultaterne fra en brugerforesp\xf8rgsel. Dette er s\xe5ledes en simpel m\xe5de at brugeERDDAP's metoder til at anmode data og f\xe5 en fil i svar, ligesom en klient ville bruge denERDDAP\u2122web ans\xf8gning. Men denne tilgang arbejder inden for jeresJavaprogram og omg\xe5 behovet for en applikationsserver som Tomcat. Vi bruger denne tilgang til mange af enhedstestene af EDDTable ogEDDGridsubclasses, s\xe5 du kan se eksempler p\xe5 dette i kildekoden for alle disse klasser."}),"\n",(0,t.jsx)(r.h3,{id:"-udviklingsmilj\xf8-",children:"** Udviklingsmilj\xf8 **"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["Der er konfigurationer til",(0,t.jsx)(r.a,{href:"https://github.com/ERDDAP/erddap/blob/main/development/jetty",children:"Jetty"}),"og og og",(0,t.jsx)(r.a,{href:"https://github.com/ERDDAP/erddap/blob/main/development/docker",children:"Docker"}),"I GitHub forventes udgivelser at k\xf8re i Tomcat."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["** Valgfrit ekstraudstyr ** : Ops\xe6t opERDDAP\u2122I n\xe6rheden af Tomcat\\\r\nSidenERDDAP\u2122er prim\xe6rt beregnet til at v\xe6re en servlet, der k\xf8rer i Tomcat, vi anbefaler st\xe6rkt, at du f\xf8lger standarden",(0,t.jsx)(r.a,{href:"/docs/server-admin/deploy-install",children:"installationsvejledning"}),"at installere Tomcat, og derefter installereERDDAP\u2122i Tomcats webapps-katalog. Blandt andet,ERDDAP\u2122blev designet til at blive installeret i Tomcats mappe struktur og forventer Tomcat at give nogle .jar filer."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"ERDDAP\u2122kr\xe6ver ikke en specifik IDE (Chris bruger prim\xe6rt Visual Studio Code, Bob brugte EditPlus) . Vi bruger ikke Eclipse, Ant osv.; og vi tilbyder heller ikkeERDDAP-relateret st\xf8tte til dem. Projektet bruger Maven."}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Vi bruger en batch-fil, der sletter alle .class-filer i kildetr\xe6et for at sikre, at vi har en ren kompilere (med javac) ."}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Vi bruger i \xf8jeblikket Adoptiums javac jdk-21.0.3+9 til at kompilere gov.noaa.pfeg.coastwatch.TestAll (det har links til et par klasser, der ikke ville blive kompileret ellers) og k\xf8re testen. Af sikkerhedsm\xe6ssige \xe5rsager er det n\xe6sten altid bedst at bruge de nyeste versioner afJava21 og Tomcat 10."}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["N\xe5r vi k\xf8rer javac eller java, er den nuv\xe6rende mappe ",(0,t.jsx)(r.em,{children:"tomcat"}),"/webapps/erddap/WEB-INF."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["Vores javac og java klassepat er\r\n",(0,t.jsx)(r.code,{children:"classes;../.././lib/servlet-api.jar;lib/* "})]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["S\xe5 din javac kommandolinje vil v\xe6re noget som \\\r\n",(0,t.jsx)(r.code,{children:"javac -encoding UTF-8 -cp klasser;../.../lib/servlet-api.jar;lib/* klasser/gov/noaa/pfel/coastwatch/TestAll.java"})]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["Og din java kommandolinje vil v\xe6re noget som \\\r\n",(0,t.jsx)(r.code,{children:'java -cp klasser;../../lib/servlet-api.jar;lib/* -Xmx4000M -Xms4000M klasser/gov/noaa/pfel/coastwatch/TestAll "Valgfrit: du kan tilf\xf8je '}),"verbose",":gc","', som fort\xe6llerJavatil at udskrive affaldsopsamlingsstatistik."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Hvis test Alle kompilerer, altERDDAP\u2122Der er udarbejdet behov. Et par klasser kompileres, der ikke er n\xf8dvendige for atERDDAP\u2122. Hvis du kompilerer TestAll lykkes, men ikke kompilere nogle klasse, er denne klasse ikke n\xf8dvendig. (Der er nogle ubehandlede klasser.)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"I et par tilf\xe6lde bruger vi 3. parts kildekode i stedet for .jar filer (s\xe6rligt forDODS) og har \xe6ndret dem lidt for at undg\xe5 problemer med at kompilere medJava21. Vi har ofte lavet andre sm\xe5 \xe6ndringer (s\xe6rligt tilDODS) af andre grunde."}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["De fleste klasser har testmetoder i deres tilknyttede src/test-fil. Du kan k\xf8re JUnit tests med kommandoen `mvn. Dette vil downloade flere zip-filer af data, som testen er afh\xe6ngige af fra den seneste udgivelse af",(0,t.jsx)(r.a,{href:"https://github.com/ERDDAP/erddapTest/releases/",children:"ERDDAP/erddap Test af test"}),".\\"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"BEM\xc6RK: Maven caches downloads, men vil unzip de downloadede arkiver p\xe5 hver udf\xf8relse, som tager tid. S\xe5dan springes\r\nog unzipping testdata arkiver, kan du angive \u2019skipTestResourceDownload\u2019 ejendom til Maven (f.eks. `mvn -DskipTestResourceDownload pakke \u201e) ."}),"\n",(0,t.jsx)(r.h3,{id:"-vigtige-klasser-",children:"** Vigtige klasser **"}),"\n",(0,t.jsx)(r.p,{children:"Hvis du vil se p\xe5 kildekoden og fors\xf8ge at finde ud af, hvordanERDDAP\u2122V\xe6r venlig at g\xf8re."}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Koden harJavaDoc kommentarer, menJavaDocs er ikke blevet genereret. Du er velkommen til at generere dem."}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"De vigtigste klasser (herunder dem, der er n\xe6vnt nedenfor) er inden for gov/noaa/pfel/erddap."}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"The The The The The The TheERDDAP\u2122klasse har de h\xf8jeste niveau metoder. Det udvider HttpServlet."}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"ERDDAP\u2122anmodninger om forekomster af underklasser afEDDGrideller EDDTable, som repr\xe6senterer individuelle datas\xe6t."}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"EDStatic har de fleste af de statiske oplysninger og indstillinger (f.eks. fra ops\xe6tningen.xml og meddelelser.xml-filer) og tilbyder statiske tjenester (f.eks. sende e-mails) ."}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"EDDGridog EDDTable subclasses parse anmodningen, f\xe5 data fra subclass-specifikke metoder, og derefter formatere dataene for svaret."}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"EDDGridUnderklasser skubbe data til GridDataAccessor (den interne databeholder til gitterded data) ."}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"EDDTable subclasses skubber data ind i TableWriter subclasses, som skriver data til en bestemt filtype p\xe5 farten."}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Andre klasser (f.eks. lav niveau klasser) er ogs\xe5 vigtigt, men det er mindre sandsynligt, at du vil arbejde for at \xe6ndre dem."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"-kodebidrag-",children:"** Kodebidrag **"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["GitHub problemer\r\nHvis du gerne vil bidrage, men ikke har et projekt, kan du se listen over",(0,t.jsx)(r.a,{href:"https://github.com/ERDDAP/erddap/issues",children:"GitHub problemer"}),", mange af hvilke projekter du kunne tage p\xe5. Hvis du vil arbejde p\xe5 et problem, skal du tildele det til dig selv for at angive andre, du arbejder p\xe5 det. GitHub-problemet er det bedste sted at diskutere eventuelle sp\xf8rgsm\xe5l for, hvordan man kan forts\xe6tte med at arbejde p\xe5 problemet."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["Hvis den \xe6ndring, du gerne vil g\xf8re, er en af de nedenst\xe5ende f\xe6lles sager, skal du oprette en",(0,t.jsx)(r.a,{href:"https://github.com/ERDDAP/erddap/issues",children:"GitHub Issue"}),"angiver den \xf8nskede \xe6ndring. S\xe5 n\xe5r \xe6ndringen er f\xe6rdig, skal du foretage en pull anmodning om at anmode om fusioneren. De almindelige \xe6ndringer omfatter:"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Du \xf8nsker at skrive en anden underklasse afEDDGrideller EDDTable at h\xe5ndtere en anden datakilde type. Hvis det er tilf\xe6ldet, anbefaler vi, at du finder den n\xe6rmeste eksisterende underklasse og bruger koden som udgangspunkt."}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Du \xf8nsker at skrive en anden SaveAs_FileType_ metode. Hvis det er tilf\xe6ldet, anbefaler vi, at du finder den n\xe6rmeste eksisterende SaveAs_FileType_ metode iEDDGrideller EDDTable og brug koden som udgangspunkt."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["Disse situationer har den fordel, at den kode, du skriver, er selvst\xe6ndig. Du beh\xf8ver ikke at vide alle detaljer omERDDAP's interne. Og det vil v\xe6re nemt for os at indarbejde din kode iERDDAP. Bem\xe6rk, at hvis du indsender kode, skal licensen v\xe6re kompatibel med licensenERDDAP\u2122",(0,t.jsx)(r.a,{href:"https://erddap.github.io/setup.html#license",children:"licenslicens"}),"(f.eks.",(0,t.jsx)(r.a,{href:"https://www.apache.org/licenses/",children:"Apache Apache"}),",",(0,t.jsx)(r.a,{href:"https://www.opensource.org/licenses/bsd-license.php",children:"BSD"}),"eller",(0,t.jsx)(r.a,{href:"https://www.opensource.org/licenses/mit-license.php",children:"MIT-X"}),"). Vi vil liste dit bidrag p\xe5",(0,t.jsx)(r.a,{href:"/credits",children:"kreditter"}),"."]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Hvis du har en funktion ikke d\xe6kket over, at du gerne vil tilf\xf8je tilERDDAP, det anbefales at f\xf8rst oprette en diskussionstr\xe5d i den",(0,t.jsx)(r.a,{href:"https://github.com/ERDDAP/erddap/discussions/categories/ideas",children:"GitHub diskussioner"}),". For v\xe6sentlige funktioner/\xe6ndringer vil den tekniske bestyrelse diskutere dem og beslutte, om du vil godkende tilf\xf8jelsen til detERDDAP\u2122."]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"-vurderinger-af-din-kode-",children:"** Vurderinger af din kode **"}),"\n",(0,t.jsx)(r.p,{children:"Hvis du vil indsende kode eller andre \xe6ndringer, der skal medtages iERDDAP, det er fantastisk. Dit bidrag skal opfylde visse kriterier for at blive accepteret. Hvis du f\xf8lger retningslinjerne nedenfor, kan du \xf8ge chancerne for dit bidrag blive accepteret."}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"The The The The The The TheERDDAP\u2122Projektet administreres af en NATD (NOAAUdpeget teknisk direkt\xf8r) med input fra en teknisk bestyrelse.\r\nFra 2007 (begyndelsen afERDDAP) gennem 2022, der var Bob Simons (ogs\xe5 grundl\xe6ggeren-Leader) . Begyndende i januar 2023, det er Chris John. Dybest set er NATD ansvarlig forERDDAP, s\xe5 s/he har det endelige ord om beslutninger omERDDAP\u2122kode, is\xe6r om designet og om en given pull anmodning vil blive accepteret eller ej. Det skal v\xe6re p\xe5 denne m\xe5de delvist af effektive \xe5rsager (det virker fantastisk til Linus Torvalds og Linux) og dels af sikkerhedsm\xe6ssige \xe5rsager: Nogen skal fort\xe6lle IT-sikkerhedsfolk, der s/he tager ansvar for sikkerheden og integriteten af koden."}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"NATD garanterer ikke, at s/he vil acceptere din kode.\r\nHvis et projekt bare ikke virker ud, og vi havde h\xe5bet, og hvis det ikke kan blive l\xf8ftet, vil NATD ikke inkludere projektet i projektet i projektetERDDAP\u2122distribution. Du f\xf8ler ikke d\xe5rligt. Nogle gange arbejder projekter ikke ud og h\xe5ber. Det sker for alle softwareudviklere. Hvis du f\xf8lger nedenst\xe5ende retningslinjer, \xf8ger du dine chancer for succes."}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Det er bedst, hvis \xe6ndringerne er af generel interesse og anvendelighed.\r\nHvis koden er bestemt til din organisation, er det sandsynligvis bedst at opretholde en separat gren afERDDAP\u2122til din brug. Axiom g\xf8r dette. Heldigvis g\xf8r Git det nemt at g\xf8re. NATD \xf8nsker at opretholde en konsekvent vision forERDDAP, ikke tillade det at blive et k\xf8kkenvask projekt, hvor alle tilf\xf8jer en brugerdefineret funktion til deres projekt."}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["F\xf8lg instruktionerne p\xe5 sk\xe6rmenJavaCode Konventioner.\r\nGenerelt skal din kode v\xe6re god kvalitet og skal f\xf8lge originalen",(0,t.jsx)(r.a,{href:"https://www.oracle.com/technetwork/java/codeconventions-150003.pdf",children:"JavaCode Konventioner"}),": s\xe6tte .class filer i det rigtige sted i mappen struktur, give .class filer et passende navn, omfatter ordentligJavaDoc kommentarer, omfatter //komster i starten af hvert afsnit af kode, indrykning med 4 mellemrum (Ingen fane) , undg\xe5 linjer >80 tegn osv. Konventioner \xe6ndres og kildekoden er ikke altid helt opdateret. N\xe5r du er i tvivl, skal du matche koden til konventionerne og ikke eksisterende kode."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Brug beskrivende klasse, metode og variable navne.\r\nDet g\xf8r koden nemmere for andre at l\xe6se."}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Undg\xe5 fancy kode.\r\nI det lange l\xf8b skal du eller andre mennesker finde ud af koden for at opretholde det. S\xe5 brug venligst enkle kodningsmetoder, der dermed er lettere for andre (herunder dig i fremtiden) at finde ud af. Naturligvis, hvis der er en reel fordel at bruge nogle fancyJavaprogrammeringsfunktion, brug det, men i vid udstr\xe6kning dokumentere, hvad du gjorde, hvorfor og hvordan det virker."}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Arbejd med det tekniske Board, f\xf8r du starter.\r\nHvis du h\xe5ber at f\xe5 dine kode\xe6ndringer trukket indERDDAP\u2122, Den tekniske bestyrelse vil helt sikkert gerne tale om, hvad du skal g\xf8re, og hvordan du skal g\xf8re det, f\xf8r du foretager \xe6ndringer i koden. P\xe5 den m\xe5de kan vi undg\xe5, at du foretager \xe6ndringer, som NATD, i sidste ende, ikke accepterer. N\xe5r du g\xf8r arbejdet, er NATD og Technical Board villig til at besvare sp\xf8rgsm\xe5l for at hj\xe6lpe dig med at finde ud af den eksisterende kode og (Samlet set) hvordan du h\xe5ndterer dit projekt."}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:['Arbejd selvst\xe6ndigt (s\xe5 meget som muligt) efter du starter.\r\nI mods\xe6tning til ovenst\xe5ende "Work with te Technical Board", efter du er begyndt p\xe5 projektet, opfordrer NATD dig til at arbejde s\xe5 selvst\xe6ndigt som muligt. Hvis NATD skal fort\xe6lle dig n\xe6sten alt og svare p\xe5 mange sp\xf8rgsm\xe5l (is\xe6r dem, du kunne have besvaret ved at l\xe6se dokumentationen eller koden) , s\xe5 din indsats ikke er en tidsbesparelse for NATD og s/he kan ogs\xe5 g\xf8re arbejdet dem selv. Det er det',(0,t.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/The_Mythical_Man-Month",children:"Mytisk mand m\xe5ned"}),"problem. Selvf\xf8lgelig b\xf8r vi stadig kommunikere. Det ville v\xe6re fantastisk til periodisk at se dit arbejde i fremskridt for at sikre, at projektet er p\xe5 vej. Men jo mere du kan arbejde selvst\xe6ndigt (efter den tekniske bestyrelse accepterer opgaven ved h\xe5nden og den generelle tilgang) , jo bedre."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Undg\xe5 fejl.\r\nHvis en fejl ikke er fanget f\xf8r en udgivelse, for\xe5rsager det problemer for brugerne (Bedst til bedste) , returnere de forkerte oplysninger (v\xe6rste i v\xe6rste fald) , er en slet p\xe5ERDDAP's ry, og vil forts\xe6tte p\xe5 for\xe6ldetERDDAP\u2122installationer i \xe5revis. Arbejd meget h\xe5rdt for at undg\xe5 bugs. En del af dette er at skrive ren kode (s\xe5 det er nemmere at se problemer) . En del af dette er skrive enhedstest. En del af dette er en konstant holdning til fejl undg\xe5else, n\xe5r du skriver kode. G\xf8r ikke NATD fortryde at tilf\xf8je din kode tilERDDAP\u2122."}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:'Skriv en enhedstest eller test.\r\nFor ny kode skal du skrive JUnit tests i en testfil.\r\nSkriv mindst en individuel testmetode, der grundigt tester den kode, du skriver, og tilf\xf8j den til klassens JUnit testfil, s\xe5 den k\xf8rer automatisk. En enheds enhed (og relateret) tests er en af de bedste m\xe5der at fange bugs, i f\xf8rste omgang og p\xe5 lang sigt (som andre ting \xe6ndrer sig iERDDAP\u2122) . Da Bob sagde, "Unit tests er, hvad lader mig sove om natten."'}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"G\xf8r det nemt for NATD at forst\xe5 og acceptere \xe6ndringerne i din pull-foresp\xf8rgsel.\r\nEn del af det er at skrive en enhedstest metode (s s s) . En del af dette begr\xe6nser dine \xe6ndringer til et afsnit af kode (eller en klasse) hvis det er muligt. NATD vil ikke acceptere nogen pull anmodning med hundredvis af \xe6ndringer i koden. NATD fort\xe6ller de IT-sikkerhedsfolk, der s/he tager ansvar for sikkerheden og integriteten af koden. Hvis der er for mange \xe6ndringer, eller de er for sv\xe6rt at finde ud af, s\xe5 er det bare for sv\xe6rt at kontrollere \xe6ndringerne er korrekte og ikke introducere fejl eller sikkerhedsproblemer."}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Hold den enkel.\r\nEt godt overordnet tema for din kode er: Hold den enkel. Enkel kode er let for andre (herunder dig i fremtiden) at l\xe6se og vedligeholde. Det er nemt for NATD at forst\xe5 og dermed acceptere."}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Overdrag langsigtet ansvar for din kode.\r\nI det lange l\xf8b er det bedst, hvis du antager l\xf8bende ansvar for at opretholde din kode og besvare sp\xf8rgsm\xe5l om det (f.eks. i teERDDAP\u2122Google Group) . Som nogle forfattere bem\xe6rker, er kode et ansvar samt et aktiv. Hvis en fejl er opdaget i fremtiden, er det bedst, hvis du l\xf8ser det, fordi ingen kender din kode bedre end dig (ogs\xe5 s\xe5 der er et incitament til at undg\xe5 bugs p\xe5 det f\xf8rste sted) . NATD beder ikke om et fast tilsagn om l\xf8bende vedligeholdelse. NATD siger bare, at vedligeholdelsen vil blive meget v\xe6rdsat."}),"\n"]}),"\n"]})]})}function k(e={}){const{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>l});var i=n(6540);const t={},d=i.createContext(t);function s(e){const r=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(d.Provider,{value:r},e.children)}}}]);