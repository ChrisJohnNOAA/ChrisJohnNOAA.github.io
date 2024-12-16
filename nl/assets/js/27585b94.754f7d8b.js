"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[575],{6510:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"contributing/programmer-guide","title":"Programmagids","description":"Dit zijn dingen waar alleen een programmeur mee wil werken.ERDDAP\'sJavaDe lessen moeten het weten.","source":"@site/i18n/nl/docusaurus-plugin-content-docs/current/contributing/programmer-guide.md","sourceDirName":"contributing","slug":"/contributing/programmer-guide","permalink":"/nl/docs/contributing/programmer-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/erddap/erddap/tree/main/documentation/docs/contributing/programmer-guide.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docSidebar","previous":{"title":"Bijdragen aanERDDAP\u2122","permalink":"/nl/docs/contributing/"}}');var a=i(4848),r=i(8453);const s={sidebar_position:2},d="Programmagids",o={},l=[{value:"** Ophalen van de broncode **",id:"-ophalen-van-de-broncode-",level:3},{value:"** ERDDAP\u2122afhankelijkheden **",id:"-erddapafhankelijkheden-",level:3},{value:"** Halfweg **",id:"-halfweg-",level:4},{value:"** Ontwikkelingsbeleid **",id:"-ontwikkelingsbeleid-",level:3},{value:"** Belangrijke klassen **",id:"-belangrijke-klassen-",level:3},{value:"** Codebijdragen **",id:"-codebijdragen-",level:3},{value:"** Beoordelen van uw codebijdragen **",id:"-beoordelen-van-uw-codebijdragen-",level:3}];function c(e){const n={a:"a",em:"em",h1:"h1",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"programmagids",children:"Programmagids"})}),"\n",(0,a.jsx)(n.p,{children:"Dit zijn dingen waar alleen een programmeur mee wil werken.ERDDAP'sJavaDe lessen moeten het weten."}),"\n",(0,a.jsx)(n.h3,{id:"-ophalen-van-de-broncode-",children:"** Ophalen van de broncode **"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Via broncode op GitHub\r\nDe broncode voor recente openbare versies en in-ontwikkeling versies is ook beschikbaar via",(0,a.jsx)(n.a,{href:"https://github.com/ERDDAP",children:"GitHub"}),". Lees alstublieft de",(0,a.jsx)(n.a,{href:"https://github.com/ERDDAP/erddap/wiki",children:"Wiki"}),"Voor dat project. Als u de broncode wilt wijzigen (en eventueel de wijzigingen in de norm hebben opgenomenERDDAP\u2122distributie) Dit is de aanbevolen aanpak."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"-erddapafhankelijkheden-",children:"** ERDDAP\u2122afhankelijkheden **"}),"\n",(0,a.jsx)(n.p,{children:"ERDDAP\u2122gebruikt Maven om code afhankelijkheden en enkele statische referentiebestanden te laden (WEB-INF/ref) . Dit wordt gedaan om het opslaan van veel grote bestanden in de repository te voorkomen.\r\nU kunt  U kunt ook gebruik maken van het pakket van MVN om een oorlogsbestand te genereren.\r\nU kunt de ref-bestanden handmatig downloaden:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://github.com/ERDDAP/ERDDAPRefFiles/releases/download/1.0.0/etopo1_ice_g_i2.zip",children:"etopo1\\_ice\\_g\\_i2.zip"}),"en rits het uit in /WEB-INF/ref/ ."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://github.com/ERDDAP/ERDDAPRefFiles/releases/download/1.0.0/ref_files.zip",children:"ref\\_files.zip"}),"en rits het uit in /WEB-INF/ref/ ."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://github.com/ERDDAP/erddapContent/releases/download/content1.0.0/erddapContent.zip",children:"erddapContent.zip"})," (versie 1.0.0, 20333 bytes, MD5=2B8D2A5AE5ED73E3A42B529C168C60B5, gedateerd 2024-10-14) en rits het uit in ",(0,a.jsx)(n.em,{children:"tomcat"}),", aanmaken_tomcat_/content/erddap."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:'OPMERKING: Maven zal standaard statische referentie cache en test data archief downloads en alleen uitpakken wanneer een nieuwe versie wordt gedownload. Om het downloaden helemaal over te slaan, kunt u de  (b.v. -DskipResourceDownload pakket Wat?) . Om extractie te forceren, stel je in op "Ddownload.unpack=true'}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["ERDDAP\u2122en haar subcomponenten hebben zeer liberale, open-source",(0,a.jsx)(n.a,{href:"https://erddap.github.io/setup.html#license",children:"licenties"}),", zodat u de broncode kunt gebruiken en wijzigen voor elk doel, voor-winst of niet-winst. Merk op datERDDAP\u2122en veel subcomponenten hebben licenties die vereisen dat u de bron van de code die u gebruikt erkent. Zie",(0,a.jsx)(n.a,{href:"https://erddap.github.io/setup.html#credits",children:"Kredieten"}),". Of het nu nodig is of niet, het is gewoon een goede vorm om al deze bijdragen te erkennen."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"** Gebruik de code voor andere projecten **"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Terwijl u bent welkom om delen van deERDDAP\u2122code voor andere projecten, wees gewaarschuwd dat de code kan en zal veranderen. We beloven niet om andere toepassingen van onze code te ondersteunen. Git en GitHub zullen je belangrijkste oplossingen zijn om hiermee om te gaan -- Git laat je toe om onze wijzigingen samen te voegen in je wijzigingen.\r\n** Voor veel situaties waar u zou kunnen worden geneigd om delen vanERDDAP\u2122in uw project, we denken dat u het veel gemakkelijker zal vinden om te installeren en te gebruikenERDDAP\u2122zoals is, ** en schrijf dan andere diensten die gebruik makenERDDAPDe diensten. U kunt uw eigenERDDAP\u2122installatie ruwweg in een uur of twee. U kunt uw eigenERDDAP\u2122installatie op een gepolijste manier in een paar dagen (afhankelijk van het aantal en de complexiteit van uw datasets) . Maar hacken delen vanERDDAP\u2122voor uw eigen project duurt het waarschijnlijk weken (en maanden om subtiliteiten te vangen) en u verliest de mogelijkheid om wijzigingen en bug fixes van volgendeERDDAP\u2122Loslaten. We (Natuurlijk.) denk dat er vele voordelen aan het gebruikERDDAP\u2122zoals is en uwERDDAP\u2122openbare installatie. Maar in sommige omstandigheden, zou u misschien niet uwERDDAP\u2122openbare installatie. Dan kan uw service toegang krijgen tot en gebruik maken van uw priv\xe9ERDDAP\u2122en je klanten hoeven niets te weten overERDDAP\u2122."}),"\n",(0,a.jsx)(n.h4,{id:"-halfweg-",children:"** Halfweg **"}),"\n",(0,a.jsx)(n.p,{children:"Of, er is een andere aanpak die u nuttig kan vinden die halverwege tussen duiken inERDDAP's code en gebruikERDDAP\u2122als stand-alone webservice: In de EDD klasse is er een statische methode waarmee je een instantie van een dataset kunt maken (op basis van het productdossier indatasets.xml) :\r\nEenFromDataset Xml (Tekenreeks tDatasetID)\r\nHet geeft een instantie van een EDDTable terug ofEDDGriddataset. Gezien dat geval, kunt u bellen\\\r\nNieuw bestand makenvoorDapQuery (String userDapQuery, String dir, String fileNaam, String file Typenaam)\r\nDus, dit is een eenvoudige manier om te gebruikenERDDAP's methoden om gegevens op te vragen en krijg een bestand in reactie, net zoals een cli\xebnt zou gebruiken deERDDAP\u2122webapplicatie. Maar deze aanpak werkt binnen uwJavaprogramma en omzeilt de behoefte aan een applicatie server zoals Tomcat. We gebruiken deze aanpak voor veel van de eenheidstesten van EDDTable enEDDGridsubklassen, zodat je voorbeelden hiervan kunt zien in de broncode voor al die klassen."}),"\n",(0,a.jsx)(n.h3,{id:"-ontwikkelingsbeleid-",children:"** Ontwikkelingsbeleid **"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Er zijn configuraties voor",(0,a.jsx)(n.a,{href:"https://github.com/ERDDAP/erddap/blob/main/development/jetty",children:"Jetty."}),"en",(0,a.jsx)(n.a,{href:"https://github.com/ERDDAP/erddap/blob/main/development/docker",children:"Docker"}),"in GitHub, hoewel releases verwacht worden in Tomcat."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["** Facultatief ** : InstellenERDDAP\u2122in Tomcat\\\r\nSindsERDDAP\u2122is voornamelijk bedoeld om een servlet lopen in Tomcat, wij raden u aan de standaard",(0,a.jsx)(n.a,{href:"/docs/server-admin/deploy-install",children:"installatie-instructies"}),"Tomcat installeren en vervolgens installerenERDDAP\u2122in Tomcat's webapps directory. Onder andere,ERDDAP\u2122is ontworpen om te worden ge\xefnstalleerd in Tomcat's directory structuur en verwacht Tomcat om een aantal .jar bestanden."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"ERDDAP\u2122vereist geen specifieke IDE (Chris gebruikt voornamelijk Visual Studio Code, Bob gebruikt EditPlus) . Wij gebruiken geen Eclipse, Ant, etc.; evenmin bieden wijERDDAP- de steun voor hen. Het project gebruikt Maven."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"We gebruiken een batch bestand dat alle .class bestanden in de bronboom verwijdert om ervoor te zorgen dat we een schone compilatie hebben (met javac) ."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Momenteel gebruiken we de javac jdk-21.0.3+9 van Adopium om gov.noaa.pfeg.coastwatch.TestAll te compileren (het heeft links naar een paar klassen die anders niet zouden worden samengesteld) En doe de testen. Om veiligheidsredenen is het bijna altijd het beste om de nieuwste versies vanJava21 en Tomcat 10."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Wanneer we javac of java uitvoeren, is de huidige map ",(0,a.jsx)(n.em,{children:"tomcat"}),"/webapps/erddap/WEB-INF ."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Onze javac en java klaspad is\r\nKlassen;../../../lib/servlet-api.jar;lib/"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Dus uw javac-commandoregel zal iets zijn als\\"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"En je java commandoregel zal zoiets zijn als\r\nKlassen voor java-cp;../../../lib/servlet-apijar;lib/* -Xmx4000M -Xms4000M Klassen/gov/noaa/pfel/coastwatch/testAll\r\nJavaom afvalverzamelingsstatistieken af te drukken."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Als test Alle compilaties, allesERDDAP\u2122De behoeften zijn samengesteld. Een paar klassen zijn samengesteld die niet nodig zijn voorERDDAP\u2122. Als het compileren van TestAll slaagt maar geen klasse compileert, is die klasse niet nodig. (Er zijn een aantal onafgemaakte/ongebruikte klassen.)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"In een paar gevallen gebruiken we 3rd party broncode in plaats van .jar bestanden (met name voorDODS) en hebben ze enigszins gewijzigd om problemen compileren metJava21. We hebben vaak andere kleine wijzigingen aangebracht (met nameDODS) om andere redenen."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["De meeste klassen hebben testmethoden in hun bijbehorende src/test bestand. U kunt de JUnit testen uitvoeren met het commando  Dit zal downloaden verschillende zip-bestanden van gegevens die de tests vertrouwen op de nieuwste release van",(0,a.jsx)(n.a,{href:"https://github.com/ERDDAP/erddapTest/releases/",children:"ERDDAP/erdap Test"}),"\\"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"OPMERKING: Maven caches downloads maar zal de gedownloade archieven van elke uitvoering, die tijd kost, uitpakken. Downloaden overslaan\r\nen unzipping testgegevensarchieven, kunt u de naam van de eigendom van Maven te downloaden (b.v. -DskipTestResourceDownload pakket Wat?) ."}),"\n",(0,a.jsx)(n.h3,{id:"-belangrijke-klassen-",children:"** Belangrijke klassen **"}),"\n",(0,a.jsx)(n.p,{children:"Als u wilt kijken naar de broncode en proberen uit te vinden hoeERDDAP\u2122Werkt, alsjeblieft."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"De code heeftJavaDe Voorzitter. - Het debat is gesloten.JavaDocs zijn niet gegenereerd. Voel je vrij om ze te genereren."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"De belangrijkste klassen (met inbegrip van de hieronder genoemde) zijn binnen gov/noaa/pfel/erdap."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"DeERDDAP\u2122klasse heeft de hoogste niveau methoden. Het verlengt HttpServlet."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"ERDDAP\u2122geeft verzoeken door aan instanties van subklassen vanEDDGridof EDDTable, die individuele datasets vertegenwoordigen."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"EDStatic heeft de meeste statische informatie en instellingen (b.v. van de setup.xml en messages.xml bestanden) en biedt statische diensten (e-mails versturen) ."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"EDDGriden EDDTable subclasses verwerken het verzoek, krijgen gegevens van subklasse-specifieke methoden, vervolgens formatteren de gegevens voor het antwoord."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"EDDGridsubklassen push data naar GridDataAccessor (de interne gegevenscontainer voor gerasterde gegevens) ."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"EDDTable subclasses push data in TableWriter subclasses, die gegevens schrijven naar een specifiek bestandstype on-the-fly."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Andere klassen (b.v. lage klassen) zijn ook belangrijk, maar het is minder waarschijnlijk dat u zult werken om ze te veranderen."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"-codebijdragen-",children:"** Codebijdragen **"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["GitHub problemen\r\nAls u wilt bijdragen maar geen project heeft, zie de lijst van",(0,a.jsx)(n.a,{href:"https://github.com/ERDDAP/erddap/issues",children:"GitHub problemen"}),", waarvan veel projecten die je zou kunnen nemen. Als u wilt werken aan een probleem, wijs het dan aan uzelf om aan anderen aan te geven dat u eraan werkt. De GitHub kwestie is de beste plek om vragen te bespreken over hoe om te gaan met het werk op dat punt."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Als de verandering die u wilt maken is een van de onderstaande veel voorkomende gevallen, maak een",(0,a.jsx)(n.a,{href:"https://github.com/ERDDAP/erddap/issues",children:"GitHub issue"}),"het aangeven van de verandering die u van plan bent te maken. Zodra de wijziging is voltooid, doe dan een pull verzoek om de merge aan te vragen. De gemeenschappelijke veranderingen omvatten:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Je wilt nog een subklasse schrijven vanEDDGridof EDDTable om een ander gegevensbrontype te verwerken. Zo ja, dan raden wij u aan om de dichtstbijzijnde bestaande subklasse te vinden en die code als uitgangspunt te gebruiken."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"U wilt een andere saveAs_FileType_ methode schrijven. Zo ja, dan raden wij u aan de dichtstbijzijnde bestaande saveAs_FileType_ methode te vinden inEDDGridof EDDTable en gebruik die code als uitgangspunt."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Die situaties hebben het voordeel dat de code die je schrijft zelf is. U hoeft niet alle details vanERDDAPDe binnenkant. En het zal gemakkelijk zijn voor ons om uw code in te voegenERDDAP. Merk op dat als u een code indient, de licentie compatibel moet zijn met deERDDAP\u2122",(0,a.jsx)(n.a,{href:"https://erddap.github.io/setup.html#license",children:"licentie"}),"(bv.",(0,a.jsx)(n.a,{href:"https://www.apache.org/licenses/",children:"Apache"}),",",(0,a.jsx)(n.a,{href:"https://www.opensource.org/licenses/bsd-license.php",children:"BSD"}),", of",(0,a.jsx)(n.a,{href:"https://www.opensource.org/licenses/mit-license.php",children:"MIT-X"}),"). Wij zullen uw bijdrage in de",(0,a.jsx)(n.a,{href:"/credits",children:"kredieten"}),"."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Als u een functie die niet hierboven wordt behandeld die u wilt toevoegen aanERDDAP, wordt aanbevolen om eerst een discussie thread in de",(0,a.jsx)(n.a,{href:"https://github.com/ERDDAP/erddap/discussions/categories/ideas",children:"GitHub discussies"}),". Voor significante kenmerken/wijzigingen zal de Technische Raad deze bespreken en beslissen of het toe te voegen aanERDDAP\u2122."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"-beoordelen-van-uw-codebijdragen-",children:"** Beoordelen van uw codebijdragen **"}),"\n",(0,a.jsx)(n.p,{children:"Als u code of andere wijzigingen wilt insturen die inERDDAPDat is geweldig. Uw bijdrage moet voldoen aan bepaalde criteria om geaccepteerd te worden. Als u de onderstaande richtlijnen volgt, verhoogt u sterk de kans dat uw bijdrage wordt geaccepteerd."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"DeERDDAP\u2122project wordt beheerd door een NATD (NOAAAangestelde technisch directeur) met input van een Technisch Bestuur.\r\nVanaf 2007 (het begin vanERDDAP) tot 2022, dat was Bob Simons (ook de Stichter-Leader) . Vanaf januari 2023 is dat Chris John. In principe is de NATD verantwoordelijk voorERDDAPDe Voorzitter. - Het debat is gesloten.ERDDAP\u2122code, met name over het ontwerp en of een gegeven trekverzoek wordt aanvaard of niet. Dit moet deels om redenen van effici\xebntie gebeuren. (het werkt geweldig voor Linus Torvalds en Linux) en gedeeltelijk om veiligheidsredenen: Iemand moet de IT-beveiligingsmensen vertellen dat hij verantwoordelijkheid neemt voor de veiligheid en integriteit van de code."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"De NATD garandeert niet dat hij uw code zal accepteren.\r\nAls een project gewoon niet zo goed werkt als we hadden gehoopt en als het niet kan worden gered, zal de NATD het project niet opnemen in deERDDAP\u2122distributie. Voel je niet slecht. Soms werken projecten niet zo goed als gehoopt. Het gebeurt met alle softwareontwikkelaars. Als u de onderstaande richtlijnen volgt, verhoogt u sterk uw kansen op succes."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Het is het beste als de veranderingen van algemeen belang en nut zijn.\r\nAls de code specifiek is voor uw organisatie, is het waarschijnlijk het beste om een aparte tak vanERDDAP\u2122voor uw gebruik. Axiom doet dit. Gelukkig maakt Git dit makkelijk. De NATD wil een consistente visie voorERDDAP, niet toestaan dat het een keuken gootsteen project waar iedereen voegt een aangepaste functie voor hun project."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Volg deJavaCodeverdragen.\r\nIn het algemeen moet uw code goede kwaliteit en moet volgen het origineel",(0,a.jsx)(n.a,{href:"https://www.oracle.com/technetwork/java/codeconventions-150003.pdf",children:"JavaCodeverdragen"}),": zet .class bestanden op de juiste plaats in de directory structuur, geef .class bestanden een passende naam, omvatten juisteJavaDoc commentaar, inclusief //commentaren aan het begin van elke alinea van code, inspringen met 4 spaties (geen tab) , vermijd lijnen >80 tekens, enz. De conventies veranderen en de broncode is niet altijd volledig bijgewerkt. Bij twijfel, match code met de conventies en niet bestaande code."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Gebruik beschrijvende klasse, methode en variabele namen.\r\nDat maakt de code makkelijker voor anderen om te lezen."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Vermijd dure code.\r\nOp de lange termijn zullen jij of andere mensen de code moeten uitzoeken om het te behouden. Dus gebruik alstublieft eenvoudige coderingsmethoden die dus gemakkelijker zijn voor anderen (inclusief u in de toekomst) Om erachter te komen. Uiteraard, als er een echt voordeel aan het gebruik van sommige chiqueJavaprogrammeren functie, gebruiken, maar uitgebreid documenteren wat je deed, waarom, en hoe het werkt."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Werk met de Technische Raad voordat u begint.\r\nAls u hoopt om uw code wijzigingen getrokken inERDDAP\u2122, De Technische Raad zal zeker willen praten over wat je gaat doen en hoe je gaat doen voordat u wijzigingen in de code. Op die manier kunnen we voorkomen dat je veranderingen maakt die de NATD uiteindelijk niet accepteert. Wanneer u het werk doet, is de NATD en Technical Board bereid om vragen te beantwoorden om u te helpen erachter te komen de bestaande code en (Totaal) hoe u uw project aanpakt."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:['Zelfstandig werken (zoveel mogelijk) Als je begint.\r\nIn tegenstelling tot het bovenstaande "Werk met de Technische Raad," moedigt de NATD je aan om na de start van het project zo onafhankelijk mogelijk te werken. Als de NATD je bijna alles moet vertellen en veel vragen moet beantwoorden (vooral degenen die u had kunnen beantwoorden door het lezen van de documentatie of de code) , dan zijn uw inspanningen geen tijdsbesparing voor de NATD en kan hij net zo goed zelf het werk doen. Het is de',(0,a.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/The_Mythical_Man-Month",children:"Mythische man maand"}),"probleem. Natuurlijk moeten we nog steeds communiceren. Het zou geweldig zijn om periodiek te zien uw werk in uitvoering om ervoor te zorgen dat het project op schema. Maar hoe meer je zelfstandig kunt werken (na overeenstemming van de technische raad over de onderhavige taak en de algemene ori\xebntatie) Hoe beter."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Vermijd insecten.\r\nAls een bug niet wordt gevangen voordat een release, het veroorzaakt problemen voor gebruikers (ten hoogste) , geeft de verkeerde informatie terug (in het ergste geval) , is een vlek opERDDAP's reputatie, en zal aanhouden op verouderdeERDDAP\u2122installaties voor jaren. Werk heel hard om bugs te vermijden. Een deel hiervan is het schrijven van schone code (dus het is gemakkelijker om problemen te zien) . Een deel hiervan is het schrijven van eenheidstesten. Een deel hiervan is een constante houding van bug vermijding wanneer je code schrijft. Maak de NATD geen spijt van het toevoegen van uw code aanERDDAP\u2122."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:'Schrijf een test of test.\r\nVoor nieuwe code moet je JUnit testen in een testbestand schrijven.\r\nGelieve ten minste \xe9\xe9n individuele testmethode te schrijven die de code die u schrijft grondig test en toevoegt aan het JUnit testbestand van de klasse zodat deze automatisch wordt uitgevoerd. Eenheid (en verwant) testen zijn een van de beste manieren om bugs te vangen, aanvankelijk, en op de lange termijn (als andere dingen veranderen inERDDAP\u2122) . Zoals Bob zei: "Eenheidstests laten me \'s nachts slapen."'}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Maak het voor de NATD gemakkelijk om de wijzigingen in uw trekverzoek te begrijpen en te accepteren.\r\nEen deel daarvan is het schrijven van een eenheidstestmethode (s) . Een deel daarvan is het beperken van uw wijzigingen tot een sectie van code (of \xe9\xe9n klasse) indien mogelijk. De NATD accepteert geen trekverzoeken met honderden wijzigingen in de code. De NATD vertelt de IT-beveiligingsmensen dat s/hij verantwoordelijkheid neemt voor de veiligheid en integriteit van de code. Als er te veel veranderingen zijn of ze zijn te moeilijk om uit te vinden, dan is het gewoon te moeilijk om te controleren of de wijzigingen correct zijn en geen bugs of beveiligingsproblemen introduceren."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Hou het simpel.\r\nEen goed algemeen thema voor uw code is: Houd het eenvoudig. Eenvoudige code is gemakkelijk voor anderen (inclusief u in de toekomst) lezen en onderhouden. Het is gemakkelijk voor de NATD om te begrijpen en dus te accepteren."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Neem lange termijn verantwoordelijkheid voor uw code.\r\nOp de lange termijn, is het het beste als u de voortdurende verantwoordelijkheid op zich neemt voor het behoud van uw code en het beantwoorden van vragen over het (b.v.ERDDAP\u2122Google-groep) . Zoals sommige auteurs opmerken, code is zowel een verplichting als een actief. Als een bug wordt ontdekt in de toekomst, het is het beste als je het repareren, want niemand kent uw code beter dan u (ook zodat er een stimulans om te voorkomen dat bugs in de eerste plaats) . De NATD vraagt niet om een vaste verbintenis om continu onderhoud te leveren. De NATD zegt alleen dat het onderhoud zeer gewaardeerd zal worden."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>d});var t=i(6540);const a={},r=t.createContext(a);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);