---
title: Case Innovatieroute AI
date: "2018-09-26T00:00:00.121Z"
template: "post"
draft: false
slug: "selectie-innovatieroute"
category: "Selectie"
tags:
  - "AI"
  - "Machine Learning"
  - "Keras"
  - "Python"
  - "Tensorflow"
description: "AI is iets dat bij veel mensen tot de verbeelding spreekt. Iedereen heeft er wel al eens van gehoord en hoe vaak het tegenwoordig in het nieuws komt is al lang niet meer op 2 handen te tellen ..."
socialImage: "/media/image-2.jpg"
---

<!-- ![Ida](/media/portfolio/ida.png) -->

AI is iets dat bij veel mensen tot de verbeelding spreekt. Iedereen heeft er wel al eens van gehoord en hoe vaak het tegenwoordig in het nieuws komt is al lang niet meer op 2 handen te tellen. Bij mij is dit helemaal niet anders. Toen ik de keuze moest maken voor een innovatieroute tussen AR/VR, blockchain of AI was mijn keuze bijgevolg snel gemaakt.
Iedereen die tegenwoordig gebruik maakt van een smartphone of het internet is op één of andere manier al in aanraking gekomen met AI. Dit is iets dat ik wel al wist maar ik had er nooit echt bij stilgestaan. De innovatieroute was de eerste keer dat ik een blik nam achter het gordijn van AI.

In de seminaries werd ons door oud-studenten werkend bij gerenommeerde bedrijven binnen AI, een overzicht gegeven van de verschillende soorten AI en de gelijkenissen/verschillen tussen deze versies en de problemen die ze kunnen oplossen.

Na de seminaries was het aan ons om een project uit te bouwen om onze nieuw opgedane kennis in de praktijk te brengen. We konden kiezen tussen een case waarbij een digitale buitenwipper beslissingen neemt over de gemoedstoestand van personen, een case die teksten kan analyseren en een samenvatting kan maken hiervan en een case om een AI te trainen die gebouwen van de PXL kan herkennen en taggen.

De case om PXL gebouwen te herkennen leek onze groep het meest te liggen. Om dit te realiseren moesten we met behulp van Python, Tensorflow en Keras, een AI trainen die in een grote verzameling van gebouwen de gebouwen van de PXL kon herkennen en eruit halen. Van deze gebouwen zou vervolgens gekeken worden welk van de PXL gebouwen het precies was.
We waren tijdens de seminaries al eens in aanraking gekomen met Keras en hadden al eens een afbeeldingsklassificatie-AI getraind. Dit ging echter over relatief simpele convolutionele netwerken op kleine afbeeldingen. Als we de case echter op dezelfde manier wilden oplossen moesten we over enorm veel rekenkracht, tijd en afbeeldingen van gebouwen beschikken. Er zijn echter al verschillende convolutionele netwerken om afbeeldingen te klassificeren dus als we een reeds getraine AI konden herscholen om gebouwen te herkennen zou dit ideaal zijn.

Google heeft met zijn Inception V3 een model dat op miljoenen afbeeldingen getraind is over een lange periode. Het is mogelijk om dit model te nemen en enkel de laatste lagen van het convolutioneel netwerk te hertrainen. Hierdoor is het mogelijk om een zeer accurate AI te hebben terwijl relatief weinig rekenkracht en afbeeldingen nodig zijn.

![Inception V3 Diagram](/media/portfolio/inceptionv3onc--oview.png)

Het enige dat moest gebeuren was om deze laatste lagen te hertrainen. Hoewel om een AI te hertrainen veel minder afbeeldingen nodig zijn dan om hem vanaf 0 te trainen, waren er toch enkele honderden afbeeldingen nodig. Het leek ons aangewezen om in plaats van honderden foto’s te gaan nemen van de PXL-gebouwen, enkele filmpjes te maken van de gebouwen en de frames hieruit te gebruiken als afbeeldingen. Hierdoor hadden we meer afbeeldingen dan nodig om een AI te trainen. De rest van de afbeeldingen kon dus gebruikt worden om de AI te testen.

Het eindresultaat van de case was dat wanneer de AI over een duidelijke foto van een PXL-gebouw beschikte, hij met gemiddeld 90% zekerheid kon zeggen over welk gebouw het ging. Om echt het onderscheid te maken tussen een PXL-gebouw en een willekeurig gebouw hadden we echter niet genoeg data van andere gebouwen voorzien. Ongeacht dit kleine probleem was het toch een geslaagde case.

### Reflectie

Onze groep bestond uit 4 mensen. Niemand had echter ervaring met AI dus het was voor iedereen even zoeken waar zijn sterkte zou liggen. Iedereen kreeg bijgevolg de vrijheid om zelf opzoekwerk te doen en dit kon vervolgens gedeeld worden in onze Slack-groep.

Er moesten verschillende dingen gebeuren. Er moest onderzoek gedaan worden naar convolutionele neurale netwerken en hoe deze met behulp van Keras makkelijk geschreven konden worden. Vervolgens moesten afbeeldingen van de PXL-gebouwen gezocht worden. Deze aspecten zouden vervolgens samengevoegd moeten worden om één eindresultaat te bekomen. Mijn taak bestond uit het kijken naar Keras om een AI te trainen uit grote afbeeldingen die kleine afwijkingen in hun grootte konden hebben.

Tot nu toe waren alle afbeeldingen die we gebruikten voor een AI te trainen evengroot. Met grootte van 32x32 pixels waren deze afbeeldingen ook totaal niet groot te noemen. Ik kwam dus al snel tot de conclusie dat het niet realistisch was om zelf een AI te trainen. Hierna werd de focus dus meer gelegd op het zoeken naar een andere manier om de AI te trainen.
Na een tijdje zoeken kwam een ander teamlid met een link naar Google’s Inception V3 model dat we konden gebruiken voor het trainen van een AI. Toen we dit hadden kon hierop gefocust worden. Ik heb samen met een ander teamlid uitgezocht hoe we dit konden doen terwijl de rest van het team afbeeldingen uit video’s van de schoolgebouwen haalden en deze sorteerden op gebouw. Hierna konden we deze gebruiken om de AI te hertrainen.

Het uitwerken van deze case was een zeer leerrijke ervaring. Het heeft ervoor gezorgd dat ik een andere kijk op AI heb gekregen en heeft mijn interesse enkel meer opgewakkerd. De vrijheid die we elkaar gaven in het team zorgden ook voor een goede sfeer binnen het team waarbij ieders sterkte tot uiting kwam. Ikzelf was eerst te zeer gefocust op het creëren van een eigen AI maar met feedback van de rest van mijn team ben ik ook tot de conclusie gekomen dat dit niet realistisch was. Ik heb nadien ook geleerd om mij beter af te stemmen op de andere teamleden toen de beslissing werd genomen om met het Google model verder te gaan.

De ervaringen uit dit project hebben ervoor gezorgd dat ik bij het kiezen van een IT-project, opnieuw ging kijken voor een project waar AI bij kwam kijken. Dit is uiteindelijk een project geworden waarbij we met behulp van AI, een objectdetectie gingen doen in de fruitsector. Mijn ervaringen in de innovatieroute hebben mij geholpen om mijn nieuwe teamleden te helpen. Zo heb ik hen bijvoorbeeld kunnen overtuigen om niet te focussen op een volledig zelf getrainde AI. Ik ben er ook van overtuigd dat de uitkomst van het IT-project niet hetzelfde was geweest indien ik voor een andere innovatieroute had gekozen.
