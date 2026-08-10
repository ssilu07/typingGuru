/* =====================================================
   TypingGuru — App Logic
   script.js
   ===================================================== */

/* ── Passages ── */
const LEVELS = {
  easy: [
    {name:"मेरा घर", text:"यह मेरा घर है। घर के पास एक बाग है। बाग में आम और नीम के पेड़ हैं। पेड़ों पर चिड़िया रहती हैं। सुबह हम सब सैर करने जाते हैं। माता जी खाना बनाती हैं। पिता जी काम पर जाते हैं। मेरी बहन गाना गाती है। हम सब मिलकर रहते हैं। शाम को हम आँगन में खेलते हैं। दादा जी हमें कहानी सुनाते हैं। दादी जी हमें प्यार करती हैं। रात को हम जल्दी सोते हैं और सुबह जल्दी उठते हैं। हमारा घर सबसे अच्छा है। घर में सब खुश रहते हैं।"},
    {name:"मेरा विद्यालय", text:"मेरा विद्यालय बहुत सुंदर है। यहाँ हरे भरे पेड़ हैं। पेड़ों की छाया में बैठना अच्छा लगता है। कक्षा में हम पढ़ते और लिखते हैं। गुरु जी हमें अच्छी बातें बताते हैं। वे हमें गिनती और पहाड़े सिखाते हैं। खेल के समय हम मैदान में जाते हैं। वहाँ हम दौड़ लगाते हैं और गेंद से खेलते हैं। मेरे विद्यालय में एक बड़ा पुस्तकालय भी है। वहाँ हम कहानी की किताबें पढ़ते हैं। हम समय पर विद्यालय आते हैं और मन लगाकर पढ़ते हैं। हम अपनी कक्षा को साफ रखते हैं। मुझे अपना विद्यालय बहुत अच्छा लगता है।"},
    {name:"सुबह की सैर", text:"सुबह की सैर सेहत के लिए अच्छी होती है। ठंडी हवा मन को ताजा कर देती है। पक्षी मीठे स्वर में गाते हैं। फूलों पर तितलियाँ उड़ती हैं। लोग बाग में टहलते हैं और योग करते हैं। बच्चे दौड़ लगाते हैं और खूब हँसते हैं। बड़े लोग घास पर बैठकर बातें करते हैं। सूरज की पहली किरण से दिन की शुरुआत होती है। सैर करने से शरीर में ताकत आती है। मन भी खुश रहता है और पढ़ाई में मन लगता है। जो रोज सुबह टहलता है, वह कम बीमार पड़ता है। इसलिए हमें रोज सुबह जल्दी उठना चाहिए और सैर करने जाना चाहिए।"},
    {name:"बरसात का दिन", text:"आज सुबह से बादल छाए हैं। थोड़ी देर में बारिश होने लगी। ठंडी हवा चलने लगी और मौसम सुहाना हो गया। बच्चे छाता लेकर बाहर निकले। कुछ बच्चे पानी में कागज की नाव चलाने लगे। मोर बाग में नाचने लगा। पेड़ और पौधे धुलकर हरे हो गए। किसान बहुत खुश हैं क्योंकि बारिश से खेतों को पानी मिलता है। माता जी ने गरम पकौड़े बनाए। हम सबने बैठकर साथ में खाए। शाम को आसमान में सुंदर इंद्रधनुष दिखा। उसमें सात रंग थे। बरसात का दिन हम सबको बहुत अच्छा लगता है। पानी बरसने के बाद हवा साफ हो जाती है।"},
    {name:"मेरा प्यारा दोस्त", text:"मेरा एक प्यारा दोस्त है। उसका नाम राहुल है। वह मेरे पास ही रहता है। हम दोनों एक ही कक्षा में पढ़ते हैं। हम रोज साथ में विद्यालय जाते हैं। राहुल पढ़ने में बहुत अच्छा है। वह मुझे गणित समझाता है और मैं उसे हिंदी पढ़ाता हूँ। शाम को हम दोनों मैदान में खेलते हैं। हमें गेंद का खेल सबसे अच्छा लगता है। जब मैं बीमार था, तब राहुल मुझसे मिलने आया था। वह मेरे लिए फल लाया था। हम कभी आपस में नहीं लड़ते। सच्चा दोस्त वही होता है जो सुख और दुख में साथ दे। मुझे अपने दोस्त पर गर्व है।"},
    {name:"पेड़ हमारे मित्र", text:"पेड़ हमारे सच्चे मित्र होते हैं। वे हमें फल, फूल और ताजी हवा देते हैं। पेड़ों से हमें सुंदर छांव मिलती है। पंछी पेड़ों पर अपना सुंदर घोंसला बनाते हैं। हमें कभी भी पेड़ों को काटना नहीं चाहिए। हमें अपने आसपास और भी नए पेड़ लगाने चाहिए। पेड़ हमारी धरती को बहुत सुंदर और हरा-भरा बनाते हैं। पेड़ों के बिना हम जीवित नहीं रह सकते हैं। इसलिए हम सबको हमेशा पेड़ों की रक्षा करनी चाहिए।"}
  ],
  medium: [
    {name:"भारत — सामान्य परिचय", text:"भारत एक विशाल देश है। यहाँ अनेक भाषाएँ बोली जाती हैं और विभिन्न धर्मों के लोग मिलजुल कर रहते हैं। हमारे देश की संस्कृति अत्यंत प्राचीन और समृद्ध है। गंगा, यमुना और ब्रह्मपुत्र जैसी नदियाँ इस भूमि को उपजाऊ बनाती हैं। किसान परिश्रम से अन्न उगाते हैं और देश की प्रगति में योगदान देते हैं। हमें अपने देश पर गर्व है।"},
    {name:"परिश्रम का महत्व", text:"परिश्रम ही सफलता की कुंजी है। जो व्यक्ति निरंतर मेहनत करता है, वह अपने लक्ष्य को अवश्य प्राप्त करता है। आलस्य मनुष्य का सबसे बड़ा शत्रु है। विद्यार्थी जीवन में समय का सदुपयोग करना अत्यंत आवश्यक है। जो समय बीत जाता है, वह लौटकर नहीं आता। इसलिए हमें अपने कार्य को पूरी लगन तथा निष्ठा से करना चाहिए।"},
    {name:"पर्यावरण संरक्षण", text:"पर्यावरण की रक्षा करना हम सबका दायित्व है। वृक्ष हमें ऑक्सीजन देते हैं, वर्षा लाने में सहायता करते हैं और भूमि के कटाव को रोकते हैं। बढ़ते प्रदूषण के कारण जलवायु परिवर्तन की समस्या गंभीर होती जा रही है। हमें अधिक से अधिक पेड़ लगाने चाहिए और जल का संरक्षण करना चाहिए। स्वच्छ पर्यावरण ही स्वस्थ जीवन का आधार है।"},
    {name:"समय का सदुपयोग", text:"समय सबसे मूल्यवान धन है। धन खोकर पुनः कमाया जा सकता है, परंतु बीता हुआ समय कभी वापस नहीं आता। महान व्यक्तियों की सफलता का रहस्य समय का सदुपयोग ही है। हमें प्रातः जल्दी उठकर अपने दिन की योजना बनानी चाहिए। जो व्यक्ति समय का सम्मान करता है, समय भी उसका साथ देता है।"}
  ],
  hard: [
    {name:"भारतीय संस्कृति", text:"भारतीय संस्कृति की सर्वश्रेष्ठ विशेषता उसकी आध्यात्मिक दृष्टि है। प्राचीन ग्रंथों में ज्ञान, कर्तव्यनिष्ठा और आत्मानुशासन पर विशेष बल दिया गया है। ऋषियों ने वसुधैव कुटुम्बकम् का उद्घोष कर विश्वबंधुत्व का संदेश दिया। राष्ट्र की प्रगति के लिए वैज्ञानिक दृष्टिकोण और परंपरागत मूल्यों में संतुलन अत्यावश्यक है।"},
    {name:"प्रतियोगी परीक्षा", text:"प्रतियोगी परीक्षाओं में उत्कृष्ट प्रदर्शन के लिए दृढ़ संकल्प, नियमित अभ्यास और सकारात्मक दृष्टिकोण अनिवार्य हैं। विद्यार्थियों को पाठ्यक्रम का सूक्ष्म विश्लेषण कर प्राथमिकताएँ निर्धारित करनी चाहिए। आत्मविश्वास और धैर्य ही संघर्ष के क्षणों में सफलता का मार्ग प्रशस्त करते हैं। निष्ठापूर्वक किया गया परिश्रम कभी व्यर्थ नहीं जाता।"},
    {name:"राष्ट्रभाषा हिंदी", text:"हिंदी हमारी राष्ट्रभाषा एवं राष्ट्रीय अस्मिता की प्रतीक है। संविधान निर्माताओं ने देवनागरी लिपि में लिखित हिंदी को राजभाषा का गौरवपूर्ण स्थान प्रदान किया। वैश्वीकरण के युग में हिंदी साहित्य, पत्रकारिता और तकनीकी क्षेत्रों में निरंतर प्रगति कर रही है। प्रत्येक नागरिक का कर्तव्य है कि वह अपनी मातृभाषा के प्रचार-प्रसार में सक्रिय योगदान दे।"},
    {name:"एक कहानी यह भी", text:"मेरी एक नानी थीं। जाहिर है। पर मैंने उन्हें कभी देखा नहीं। मेरी माँ की शादी होने से पहले ही उनकी मृत्यु हो गई थी। शायद नानी से कहानी न सुन पाने के कारण बाद में, हम तीन बहिनों को खुद कहानियाँ कहनी पड़ीं। नानी से कहानी भले न सुनी हो, नानी की कहानी जरूर सुनी और बहुत बाद में जाकर उसका असली मर्म समझ में आया। पहले इतना ही जाना कि मेरी नानी, पारंपरिक, अनपढ़, परदानशीं औरत थीं, जिनके पति शादी के तुरंत बाद उन्हें छोड़कर बैरिस्ट्री पढ़ने विलायत चले गए थे। कैंब्रिज विश्वविद्यालय से डिग्री लेकर जब वे लौटे और विलायती रीति-रिवाज के संग जिंदगी बसर करने लगे तो, नानी के अपने रहन-सहन पर, उसका कोई असर नहीं पड़ा, न उन्होंने अपनी किसी इच्छा-आकांक्षा या पसंद-नापंसद का इजहार पति पर कभी किया। पर जब कम-उम्र में नानी ने खुद को मौत के करीब पाया तो, पंद्रह वर्षीय इकलौती बेटी मेरी माँ की शादी की फिक्र ने इतना डराया कि वे एकदम मुँहजोर हो उठीं।"},
    {name:"गोमा किसान और वर्षा", text:"एक था किसान। गोमा मोरी नाम था उसका। गुजर-बसर लायक खेती थी। एक गाय, एक जोड़ी बैल, बीस बकरियाँ थीं। छोटा-सा घर। घर के सामने पशु बाँधने का बाड़ा। तीन साल से वर्षा बहुत कम हुई थी। न फसलें हुईं थीं न चारा। इस वर्ष भी आषाढ़ सूखा ही रह गया। वर्षा की कोई आशा नहीं बँधी थी। खेत जोतकर क्या करूँगा? गोमा ने एक लंबी साँस छोड़ी और मन ही मन सोचा। वह बैलों को हाँकते हुए वापस घर की ओर चल पड़ा। अगले दिन गोमा बड़े सवेरे सोकर उठा। गाय, बैल व बकरियों को बाड़े से निकाला। उसकी पत्नी बकरियों को घेरकर उन्हें चराने चली गई।"},
    {name:"जल की आत्मकथा", text:"इतने दिन आनंद से काटने के पश्चात् अब दुख सहन करने का साहस हममें न था। बहुत पता लगाने पर हमें ज्ञात हुआ कि हमारे भार से ही हमारे नीचेवाले भाई दबकर पानी हो गए हैं। उनका शरीर ठोसपन को छोड़ चुका है और उनके तरल शरीर पर हम फिसल चले हैं। मैं कई मास समुद्र में इधर-उधर घूमती रही। फिर एक दिन गर्म-धारा से भेंट हो गई। धारा के जलते अस्तित्व को ठंडक पहुँचाने के लिए हमने उसकी गर्मी सोखनी प्रारंभ कर दी और इसके फलस्वरूप मैं पिघल पड़ी और पानी बनकर समुद्र में मिल गई। समुद्र का भाग बनकर मैंने जो दृश्य देखा वह वर्णनातीत है।"},
    {name:"लोकतंत्र और सामाजिक सद्भाव", text:"क्या लोकतांत्रिक शासन व्यवस्थाएँ शांति और सद्भाव का जीवन जीने में नागरिकों के लिए मददगार साबित होती हैं? लोकतांत्रिक व्यवस्था से यह उम्मीद करना उचित है कि वह सद्भावपूर्ण सामाजिक जीवन उपलब्ध कराएगी। हमने इससे पहले के अध्यायों में पाया कि लोकतांत्रिक व्यवस्थाएँ अनेक तरह के सामाजिक विभाजनों को सँभालती हैं। हमने पहले अध्याय में देखा कि किस तरह बेल्जियम ने अपने यहाँ के विभिन्न जातीय समूहों की आकांक्षाओं के बीच सफलतापूर्वक सामंजस्य स्थापित किया। लोकतांत्रिक व्यवस्थाएँ आम तौर पर अपने अंदर की प्रतिद्वंद्विताओं को सँभालने की प्रक्रिया विकसित कर लेती हैं। इससे इन टकरावों के विस्फोटक या हिंसक रूप लेने का अंदेशा कम हो जाता है। कोई भी समाज अपने विभिन्न समूहों के बीच के टकरावों को पूरी तरह और स्थायी रूप से नहीं खत्म कर सकता, पर हम इन अंतरों और विभेदों का आदर करना सीख सकते हैं और इनके बीच बातचीत से सामंजस्य बैठाने का तरीका विकसित कर सकते हैं। इस काम के लिए लोकतंत्र सबसे अच्छा है। गैर-लोकतांत्रिक व्यवस्थाएँ आमतौर पर अपने अंदरूनी सामाजिक मतभेदों से आँखें फेर लेती हैं या उन्हें दबाने की कोशिश करती हैं। इस प्रकार सामाजिक अंतर, विभाजन और टकरावों को सँभालना निश्चित रूप से लोकतांत्रिक व्यवस्थाओं का एक बड़ा गुण है, पर श्रीलंका का उदाहरण हमें इस बात की भी याद दिलाता है कि इस परिणाम को हासिल करने के लिए लोकतांत्रिक व्यवस्थाओं को स्वयं भी दो शर्तों को पूरा करना होता हैः यह गौर करना जरूरी है कि लोकतंत्र का सीधे-सीधे अर्थ बहुमत की राय से शासन करना नहीं है। बहुमत को सदा ही अल्पमत का ध्यान रखना होता है। उसके साथ काम करने की जरूरत होती है। तभी, सरकार जन-सामान्य की इच्छा का प्रतिनिधित्व कर पाती है। बहुमत और अल्पमत की राय कोई स्थायी चीज नहीं होती। यह भी समझना जरूरी है कि बहुमत के शासन का अर्थ धर्म, नस्ल अथवा भाषायी आधार के बहुसंख्यक समूह का शासन नहीं होता। बहुमत के शासन का मतलब होता है कि हर फैसले या चुनाव में अलग-अलग लोग और समूह बहुमत का निर्माण कर सकते हैं या बहुमत में हो सकते हैं। लोकतंत्र तभी तक लोकतंत्र रहता है जब तक, प्रत्येक नागरिक को किसी न किसी अवसर पर बहुमत का हिस्सा बनने का मौका मिलता है। अगर किसी को जन्म के आधार पर बहुसंख्यक समुदाय का हिस्सा बनने से रोका जाता है तब लोकतांत्रिक शासन उस व्यक्ति या समूह के लिए समावेशी नहीं रह जाता। व्यक्ति की गरिमा और आजादी के मामले में लोकतांत्रिक व्यवस्था किसी भी अन्य शासन प्रणाली से काफी आगे है। प्रत्येक व्यक्ति अपने साथ के लोगों से सम्मान पाना चाहता है। अक्सर, टकराव तभी पैदा होते हैं जब कुछ लोगों को लगता है कि उनके साथ सम्मान का व्यवहार नहीं किया गया। गरिमा और आजादी की चाह ही लोकतंत्र का आधार है। दुनिया भर की लोकतांत्रिक व्यवस्थाएँ इस चीज को मानती हैं-कम से कम सिद्धांत के तौर पर तो जरूर। अलग-अलग लोकतांत्रिक व्यवस्थाओं में इन बातों पर अलग-अलग स्तर का आचरण होता है। लोकतांत्रिक सरकारें सदा नागरिकों के अधिकारों का सम्मान नहीं करतीं। फिर, जो समाज लंबे समय तक गुलामी में रहे हैं उनके लिए यह एहसास करना आसान नहीं है कि सभी व्यक्ति बराबर हैं। यहाँ स्त्रियों की गरिमा का ही उदाहरण लें। दुनिया के अधिकांश समाज पुरुष-प्रधान समाज रहे हैं। महिलाओं के लंबे संघर्ष के बाद अब जाकर यह माना जाने लगा है कि महिलाओं के साथ गरिमा और समानता का व्यवहार लोकतंत्र की जरूरी शर्त है और आज अगर कहीं यह हालत है तो उसका यह मतलब नहीं कि औरतों के साथ सदा से सम्मान का व्यवहार हुआ है। बहरहाल, एक बार जब सिद्धांत रूप में इस बात को स्वीकार कर लिया गया है तो अब औरतों के लिए वैधानिक और नैतिक रूप से अपने प्रति गलत मान्यताओं और व्यवहारों के खिलाफ संघर्ष करना आसान हो गया है। अलोकतांत्रिक व्यवस्था में यह बात संभव न थी क्योंकि वहाँ व्यक्तिगत आजादी और गरिमा न तो वैधानिक रूप से मान्य है, न नैतिक रूप से। यही बात जातिगत असमानता पर भी लागू होती है। भारत में लोकतांत्रिक व्यवस्था ने कमजोर और भेदभाव का शिकार हुई जातियों के लोगों के समान दर्जे और समान अवसर के दावे को बल दिया है। आज भी जातिगत भेदभाव और दमन के उदाहरण देखने को मिलते हैं पर इनके पक्ष में कानूनी या नैतिक बल नहीं होता। संभवतः इसी अहसास के चलते आम लोग अपने लोकतांत्रिक अधिकारों के प्रति ज्यादा चौकस हुए हैं। लोकतंत्र से लगाई गई उम्मीदों को किसी लोकतांत्रिक देश के मूल्यांकन का आधार भी बनाया जा सकता है। लोकतंत्र की एक खासियत है कि इसकी जाँच-परख और परीक्षा कभी खत्म नहीं होती। वह एक जाँच पर खरा उतरे तो अगली जाँच आ जाती है। लोगों को जब लोकतंत्र से थोड़ा लाभ मिल जाता है तो वे और लाभों की माँग करने लगते हैं। वे लोकतंत्र से और अच्छा काम चाहते हैं। यही कारण है कि जब हम उनसे लोकतंत्र के कामकाज के बारे में पूछते हैं तो वे हमेशा लोकतंत्र से जुड़ी अपनी अन्य अपेक्षाओं का पुलिंदा खोल देते हैं और शिकायतों का अंबार लगा देते हैं। शिकायतों का बने रहना भी लोकतंत्र की सफलता की गवाही देता है। इससे पता चलता है कि लोग सचेत हो गए हैं और वे सत्ता में बैठे लोगों के कामकाज का आलोचनात्मक मूल्यांकन करने लगे हैं। लोकतंत्र के कामकाज से लोगों का असंतोष जताना लोकतंत्र की सफलता को तो बताता ही है साथ ही यह लोगों के प्रजा से नागरिक बनने की गवाही भी देता है। आज अधिकांश लोग मानते हैं कि सरकार की चाल-ढाल पर उनके वोट से असर पड़ता है और यह उनके अपने हितों को भी प्रभावित करता है।"},
    {name:"महाभारत की कथा", text:"महाभारत की कथा महर्षि पराशर के कीर्तिमान पुत्र वेद व्यास की देन है। व्यास जी ने महाभारत की यह कथा सबसे पहले अपने पुत्र शुकदेव को कंठस्थ कराई थी और बाद में अपने दूसरे शिष्यों को। मानव-जाति में महाभारत की कथा का प्रसार महर्षि वैशंपायन के द्वारा हुआ। वैशंपायन व्यास जी के प्रमुख शिष्य थे। ऐसा माना जाता है कि महाराजा परीक्षित के पुत्र जनमेजय ने एक बड़ा यज्ञ किया। इस महायज्ञ में सुप्रसिद्ध पौराणिक सूत जी भी मौजूद थे। सूत जी ने समस्त ऋषियों की एक सभा बुलाई। महर्षि शौनक इस सभा के अध्यक्ष हुए। सूत जी ने ऋषियों की सभा में महाभारत की कथा प्रारंभ की कि महाराजा शांतनु के बाद उनके पुत्र चित्रांगद हस्तिनापुर की गद्दी पर बैठे। उनकी अकाल मृत्यु हो जाने पर उनके भाई विचित्र वीर्य राजा हुए। उनके दो पुत्र हुए-धृतराष्ट्र और पांडु। बड़े बेटे धृतराष्ट्र जन्म से ही अंधे थे, इसलिए उस समय की नीति के अनुसार पांडु को गद्दी पर बैठाया गया। पांडु ने कई वर्षों तक राज्य किया। उनकी दो रानियाँ थीं-कुंती और माद्री। कुछ समय राज्य करने के बाद पांडु अपने किसी अपराध के प्रायश्चित के लिए तपस्या करने जंगल में गए। उनकी दोनों रानियाँ भी उनके साथ ही गईं। वनवास के समय कुंती और माद्री ने पाँच पांडवों को जन्म दिया। कुछ समय बाद पांडु की मृत्यु हो गई। पाँचों अनाथ बच्चों का वन के ऋषि-मुनियों ने पालन-पोषण किया और पढ़ाया-लिखाया। जब युधिष्ठिर सोलह वर्ष के हुए, तो ऋषियों ने पाँचों कुमारों को हस्तिनापुर ले जाकर पितामह भीष्म को सौंप दिया। पाँचों पांडव बुद्धि से तेज और शरीर से बली थे। उनकी प्रखर बुद्धि और मधुर स्वभाव ने सबको मोह लिया था। यह देखकर धृतराष्ट्र के पुत्र कौरव उनसे जलने लगे और उन्होंने पांडवों को तरह-तरह से कष्ट पहुँचाना शुरू किया। दिन-पर-दिन कौरवों और पांडवों के बीच वैरभाव बढ़ता गया। अंत में पितामह भीष्म ने दोनों को किसी तरह समझाया और उनके बीच संधि कराई। भीष्म के आदेशानुसार कुरु-राज्य के दो हिस्से किए गए। कौरव हस्तिनापुर में ही राज करते रहे और पांडवों को एक अलग राज्य दे दिया गया, जो आगे चलकर इंद्रप्रस्थ के नाम से मशहूर हुआ। इस प्रकार कुछ दिन शांति रही। उन दिनों राजा लोगों में चौसर खेलने का आम रिवाज था। राज्य तक की बाजियाँ लगा दी जाती थीं। इस रिवाज के मुताबिक एक बार पांडवों और कौरवों ने चौपड़ खेला। कौरवों की तरफ से कुटिल शकुनि खेला। उसने युधिष्ठिर को हरा दिया। इसके फलस्वरूप पांडवों का राज्य छिन गया और उनको तेरह वर्ष का वनवास भोगना पड़ा। उसमें एक शर्त यह भी थी कि बारह वर्ष के वनवास के बाद एक वर्ष अज्ञातवास करना होगा। उसके बाद उनका राज्य उन्हें लौटा दिया जाएगा। द्रौपदी के साथ पाँचों पांडव बारह वर्ष वनवास और एक वर्ष अज्ञातवास में बिताकर वापस लौटे, पर लालची दुर्योधन ने लिया हुआ राज्य वापस करने से इंकार कर दिया। अतः पांडवों को अपने राज्य के लिए लड़ना पड़ा। युद्ध में सारे कौरव मारे गए, तब पांडव उस विशाल साम्राज्य के स्वामी हुए। इसके बाद छत्तीस वर्ष तक पांडवों ने राज्य किया और फिर अपने पोते परीक्षित को राज्य देकर द्रौपदी के साथ तपस्या करने हिमालय चले गए। संक्षेप में यही महाभारत की कथा है। गंगा एक सुंदर युवती का रूप धारण किए नदी के तट पर खड़ी थी, उनके सौंदर्य और नवयौवन ने राजा शांतनु को मोह लिया था। गंगा बोली, राजन् आपकी पत्नी होना मुझे स्वीकार है, पर इससे पहले आपको मेरी शर्तें माननी होंगी। क्या आप मानेंगे? राजा ने कहा अवश्य! राजा शांतनु ने गंगा की सारी शर्तें मान लीं और वचन दिया कि वह उनका पूर्ण रूप से पालन करेंगे। समय पाकर गंगा से शांतनु के कई तेजस्वी पुत्र हुए, परंतु गंगा ने उनको जीने नहीं दिया। बच्चे के पैदा होते ही वह उसे नदी की बहती हुई धारा में फेंक देती थी और फिर हँसती-मुसकराती राजा शांतनु के महल में आ जाती थी। अज्ञात सुंदरी के इस व्यवहार से राजा शांतनु चकित रह जाते। उनके आश्चर्य और क्षोभ का पारावार न रहता। शांतनु वचन दे चुके थे, इस कारण मन मसोसकर रह जाते थे। सात बच्चों को गंगा ने इसी भाँति नदी की धारा में बहा दिया। आठवाँ बच्चा पैदा हुआ। गंगा उसे भी लेकर नदी की तरफ जाने लगी, तो शांतनु से न रहा गया। बोले माँ होकर अपने नादान बच्चों को अकारण ही क्यों मार दिया यह घृणित व्यवहार तुम्हें शोभा नहीं देता है। राजा की बात सुनकर गंगा मन-ही-मन मुसकराई, परंतु क्रोध का अभिनय करती हुई बोली राजन् क्या आप अपना वचन भूल गए हैं? मालूम होता है कि आपको पुत्र से ही मतलब है, मुझसे नहीं। आपको मेरी क्या परवाह है! ठीक है, पर शर्त के अनुसार मैं अब नहीं ठहर सकती। हाँ, आपके इस पुत्र को मैं नदी में नहीं फेंकूंगी। इस अंतिम बालक को मैं कुछ दिन पालूँगी और फिर पुरस्कार के रूप में आपको सौंप दूँगी। यह कहकर गंगा बच्चे को साथ लेकर चली गई। यही बच्चा आगे चलकर भीष्म पितामह के नाम से विख्यात हुआ। गंगा के चले जाने से राजा शांतनु का मन विरक्त हो गया। उन्होंने भोग-विलास से जी हटा लिया और राज-काज में मन लगाने लगे। एक दिन राजा शिकार खेलते-खेलते गंगा के तट पर चले गए, तो देखा किनारे पर खड़ा एक सुंदर और गठीला युवक गंगा की बहती हुई धारा पर बाण चला रहा था। बाणों की बौछार से गंगा की प्रचंड धारा एकदम रुकी हुई थी। यह दृश्य देखकर शांतनु दंग रह गए। इतने में ही राजा के सामने स्वयं गंगा आकर उपस्थित हो गई। गंगा ने युवक को अपने पास बुलाया और राजा से बोली राजन् पहचाना मुझे और इस युवक को? यही आपका और मेरा आठवाँ पुत्र देवव्रत है। महर्षि वसिष्ठ ने इसे शिक्षा दी है। शास्त्र-ज्ञान में शुक्राचार्य और रण-कौशल में परशुराम ही इसका मुकाबला कर सकते हैं। यह जितना कुशल योद्धा है, उतना ही चतुर राजनीतिज्ञ भी है। आपका पुत्र, मैं आपको सौंप रही हूँ। अब ले जाइए इसे अपने साथ। गंगा ने देवव्रत का माथा चूमा और आशीर्वाद देकर राजा के साथ उसे विदा कर दिया।"},
    {name:"विकास और उसकी तुलना", text:"अगर विकास का अर्थ अलग-अलग हो सकता है, तो फिर कुछ देशों को विकसित और कुछ को अविकसित कैसे कहा जा सकता है? इससे पहले कि हम इस विषय पर आएँ, एक अन्य प्रश्न के बारे में सोचते हैं। जब हम भिन्न-भिन्न चीजों की तुलना करते हैं तो उसमें समानताएँ और अंतर दोनों हो सकते हैं। हम इनकी तुलना करने के लिए किन पहलुओं का प्रयोग करते हैं? कक्षा में विद्यार्थियों को ही देखते हैं। हम विभिन्न विद्यार्थियों की तुलना कैसे करते हैं? उनमें ऊँचाई, स्वास्थ्य, प्रतिभा और रुचि के अनुसार अंतर हैं। हो सकता है, सबसे स्वस्थ विद्यार्थी सबसे पढ़ाकू विद्यार्थी न हो। सबसे बुद्धिमान विद्यार्थी हो सकता है मित्रता व्यवहार न रखता हो। तो, हम विद्यार्थियों की तुलना कैसे करते हैं? हम जो मापदण्ड प्रयोग करेंगे वह तुलना के उद्देश्य पर निर्भर करेगा। खेलकूद टीम, वाद विवाद टीम, संगीत टीम या पिकनिक के लिए टीम, सबके चयन के लिए अलग मापदण्ड होंगे। फिर भी, अगर हमें किसी उद्देश्य से कक्षा के विद्यार्थियों की सर्वांगीण प्रगति के बारे में मानक चाहिए तो हम उसे कैसे चुनेंगे? सामान्यतया हम व्यक्तियों की एक या दो महत्त्वपूर्ण विशिष्टताएँ लेकर उनके आधार पर तुलना करते हैं। तुलना के लिए क्या महत्त्वपूर्ण विशिष्टताएँ चुनी जाएँ इस पर मतभेद हो सकते हैं- विद्यार्थियों का मित्रतापूर्ण व्यवहार और सहयोग भावना, उनकी रचनात्मकता या उनके द्वारा प्राप्त अंक? यही बात विकास पर भी लागू होती है। देशों की तुलना करने के लिए उनकी आय सबसे महत्त्वपूर्ण विशिष्टता समझी जाती है। जिन देशों की आय अधिक है उन्हें कम आय वाले देशों से अधिक विकसित समझा जाता है। यह इस समझ पर आधारित है कि अधिक आय का अर्थ है मानवीय आवश्यकताओं की सभी वस्तुओं का अधिक होना। जो भी लोगों को पसंद है और जो उनके पास होना चाहिए, वे उन सभी वस्तुओं को अधिक आय के द्वारा प्राप्त कर पायेंगे। इसलिये, ज्यादा आय अपने आप में एक महत्त्वपूर्ण लक्ष्य समझा जाता है। अब, एक देश की आय क्या है? अन्तर्दृष्टि से, किसी देश की आय उस देश के सभी निवासियों की आय है। इससे हमें देश की कुल आय ज्ञात होती है। लेकिन, देशों के बीच तुलना करने के लिए कुल आय इतना उपयुक्त माप नहीं है। क्योंकि देशों की जनसंख्या अलग-अलग होती है, कुल आय की तुलना करने से हमें यह ज्ञात नहीं होगा कि औसत व्यक्ति क्या कमा सकता है? क्या एक देश के लोग दूसरे देश के लोगों से बेहतर हैं? इसलिए, हम औसत आय की तुलना करते हैं जो कि देश की कुल आय को कुल जनसंख्या से भाग देकर निकाली जाती है। औसत आय को प्रतिव्यक्ति आय भी कहा जाता है। विश्व बैंक की विश्व विकास रिपोर्ट के अनुसार, देशों का वर्गीकरण करने में इस मापदण्ड का प्रयोग किया गया है। वे देश जिनकी 2017 में प्रतिव्यक्ति आय 12,056 डाॅलर प्रति वर्ष या उससे अधिक है, उसे समृद्ध देश और वे देश जिनकी प्रतिव्यक्ति आय 995 डाॅलर प्रति वर्ष या उससे कम है, उन्हें निम्न आय वाला देश कहा गया है। भारत मध्य आय वर्ग के देशों में आता है क्योंकि उसकी प्रतिव्यक्ति आय 2017 में केवल 1820 डाॅलर प्रति वर्ष थी। समृद्ध देशां, जिनमें मध्य पूर्व के देश और कुछ अन्य छोटे देश शामिल नहीं हैं, को आमतौर पर विकसित देश कहा जाता है। ऐसा क्यों है कि हरियाणा में आसैत व्यक्ति की आय केरल के औसत व्यक्ति की आय से अधिक है, लेकिन इन महत्त्वपूर्ण क्षेत्रों में वह केरल से पीछे है? इसका कारण यह है कि यह आवश्यक नहीं कि जेब में रखा रूपया वे सब वस्तुएँ और सेवाएँ खरीद सके, जिनकी आपको एक बेहतर जीवन के लिए आवश्यकता हो सकती है। नागरिक कितनी भौतिक वस्तुएँ और सेवाएँ प्रयोग कर सकते हैं इसके लिए आय अपने आप में संपूर्ण रूप से पर्याप्त सूचक नहीं है। उदाहरण के लिए, सामान्यता आपका द्रव्य आपके लिए प्रदूषण मुक्त वातावरण नहीं खरीद सकता या बिना मिलावट की दवाएँ आपको नहीं दिला सकता, जब तक आप ऐसे समुदाय में ही जाकर नहीं रहने लग जाते जहाँ ये सुविधाएँ पहले से उपलब्ध हैं। द्रव्य आपको संक्रामक बीमारियों से भी नहीं बचा सकता, जब तक आपका पूरा समुदाय इनसे बचाव के लिए कदम नहीं उठाता। इमारतों और खरीददारी के लिए शाॅपिंग माॅल से भरे हुए हैं। समस्या शिशु मृत्यु दर पर समाप्त नहीं हो जाती। बिहार के लगभग आधे बच्चे कक्षा आठवीं के बाद स्कूल नहीं जा रहे हैं अर्थात् यदि आप बिहार के किसी स्कूल में पढ़ते होते, तो आपकी प्रारंभिक कक्षा के लगभग आधे से अधिक बच्चे गायब होते। जिन बच्चों को स्कूल में होना चाहिए था, वे वहाँ नहीं होते। अगर ये आपके साथ होता, तो आप अभी यह सब न पढ़ पाते जो पढ़ रहे हैं। वास्तव में जीवन में बहुत सी महत्त्वपूर्ण चीजों के लिए सबसे अच्छा और सस्ता तरीका इन वस्तुओं और सेवाओं को सामूहिक रूप से उपलब्ध कराना है। जरा सोचिए, किसी स्थानीय इलाके के लिए सामूहिक सुरक्षा प्रदान करना अधिक सस्ता है अथवा हर घर के लिए अलग-अलग सुरक्षा गार्ड रखना? आप क्या करते, अगर आपके गाँव या इलाके में आपके अतिरिक्त कोई और पढ़ने में रूचि नहीं रखता? क्या तुम पढ़ पाओगे? शायद तब तक नहीं जब तक तुम्हारे माता-पिता तुम्हें कहीं और निजी स्कूल में पढ़ने भेजने की क्षमता न रखते हों। आप इसलिए पढ़ पा रहे हो क्योंकि बहुत से अन्य बच्चे पढ़ना चाहते हैं और बहुत से लोग ये मानते हैं कि सरकार को स्कूल खोलने चाहिए और अन्य प्रकार की सुविधाएँ उपलब्ध करानी चाहिए जिससे सभी बच्चों को पढ़ने का अवसर मिले। अभी भी बहुत से क्षेत्रों में बच्चे मुख्य रूप से लड़कियाँ, उच्च विद्यालयी शिक्षा भी नहीं ले पाती हैं। क्योंकि सरकार/समाज ने इसके लिए पर्याप्त सुविधाएँ उपलब्ध नहीं कराई हैं। केरल में शिशु मृत्यु दर कम है क्योंकि यहाँ स्वास्थ्य और शिक्षा की मौलिक सुविधाएँ पर्याप्त मात्रा में उपलब्ध हैं। इसी प्रकार, कुछ राज्यों में सार्वजनिक वितरण प्रणाली (सा.वि.प्र.) ठीक प्रकार कार्य करती है। ऐसे राज्यों में लोगों के स्वास्थ्य और पोषण स्तर निश्चित रूप से बेहतर होने की संभावना है। हम विकास को जिस तरह भी परिभाषित करें, अभी के लिए मान लें कि एक विशेष देश काफी विकसित है। हम निश्चित रूप से यह चाहेंगे कि विकास का यह स्तर और ऊँचा हो या कम से कम भावी पीढ़ी के लिए यह स्तर बना रहे। यह स्पष्ट रूप से वांछनीय है। लेकिन बीसवी सदी के उत्तरार्द्ध से बहुत से वैज्ञानिक यह चेतावनी देते आ रहे हैं कि विकास का वर्तमान प्रकार और स्तर धारणीय नहीं है। भूमिगत जल नवीकरणीय साधन का उदाहरण हैं। फसल और पौधों की तरह इन साधनों की पुनः पूर्ति प्रकृति करती है, लेकिन यहाँ भी हम इन साधनों का अति-उपयोग कर सकते हैं। उदाहरण के लिए, भूमिगत जल का यदि बरसात द्वारा हो रही पुनः पूर्ति से अधिक प्रयोग करते हैं, तो हम इस साधन का अति-उपयोग कर रहे होंगे। गैर नवीकरणीय साधन वो हैं जो वर्षों से प्रयोग के पश्चात् समाप्त हो जाते हैं। इन संसाधनों का धरती पर एक निश्चित भण्डार है और इनकी पुनः पूर्ति नहीं हो सकती। कभी-कभी हमें ऐसे नए साधन मिल जाते हैं, जिनके बारे में हमें पहले कोई जानकारी नहीं थी। नये स्रोत भण्डार में वृद्धि करते हैं, लेकिन समय के साथ यह भी समाप्त हो जाएँगे।"}
  ]
};

const EN_LEVELS = {
  easy: [
    {name:"Police Administration", text:"The Uttar Pradesh Police is one of the largest single police forces in the world. It is the law enforcement agency for the state of Uttar Pradesh in India. Headquartered in Lucknow, the UP Police is headed by the Director General of Police. Working as a computer operator in the UP Police is a matter of great pride and responsibility. A computer operator plays a vital role in the daily functioning of the police department. They are responsible for managing data, generating reports, handling communication, and assisting in the digital transformation of the police force. The role requires a good typing speed, accuracy, and basic knowledge of computer hardware and software. The advent of technology has brought significant changes in how the police operate. Digital platforms like the Crime and Criminal Tracking Network and Systems (CCTNS) have been implemented to connect all police stations across the country. This system helps in the quick sharing of information regarding criminals and incidents. As a computer operator, you will be working extensively on such platforms. You must ensure that the data entered is accurate and secure. Confidentiality is of utmost importance in police work. Information related to ongoing investigations, personal details of citizens, and internal communications must never be compromised. Therefore, computer operators are trained to handle sensitive data with care. In addition to data entry, operators may also be tasked with monitoring CCTV footage, managing the control room during emergencies, and assisting senior officers in preparing digital presentations. The job is dynamic and requires a person to be alert and efficient. Time management is another crucial skill. During critical situations, information needs to be processed and disseminated rapidly. A delay of a few minutes can have serious consequences. Hence, maintaining a calm demeanor under pressure while maintaining a high typing speed is essential. To succeed in the typing test for this post, regular practice is necessary. One should aim for a typing speed of at least thirty to forty words per minute with minimum errors. Focus on touch typing, which means typing without looking at the keyboard. This method significantly increases both speed and accuracy. Remember to maintain proper posture while typing. Sit up straight, keep your wrists slightly elevated, and place your fingers gently on the home row keys. Taking short breaks during practice sessions can prevent fatigue and reduce the risk of repetitive strain injuries. The journey to becoming a UP Police computer operator may seem challenging, but with dedication and consistent effort, it is definitely achievable. The state government provides various facilities and allowances to its employees, making it a secure and rewarding career choice. Furthermore, serving the public and contributing to the maintenance of law and order is a noble endeavor. By fulfilling your duties sincerely, you become an integral part of the system that ensures the safety and well-being of millions of citizens. So, keep practicing, stay focused on your goal, and you will surely succeed in the upcoming examination. This passage is designed to help you build the stamina and accuracy needed for a fifteen minute long typing test. Keep your eyes on the screen and your fingers moving steadily across the keys. Practice makes perfect, and every keystroke brings you closer to your dream job."}
  ],
  medium: [
    {name:"Cyber Crime & IT Act", text:"In recent years, the rapid growth of the internet and digital technologies has revolutionized the way we communicate, work, and conduct business. However, this digital boom has also given rise to a new breed of criminal activities known collectively as cybercrime. Cybercrime encompasses a wide range of illegal activities carried out using computers, networks, and the internet. These include hacking, identity theft, financial fraud, phishing, ransomware attacks, and cyberbullying. As technology evolves, so do the methods employed by cybercriminals, making it increasingly challenging for law enforcement agencies to combat these threats. To address this growing menace, the Government of India enacted the Information Technology Act, 2000, commonly known as the IT Act. This comprehensive legislation provides the legal framework for electronic governance and aims to prevent and penalize cybercrimes. The IT Act covers various offenses, such as tampering with computer source documents, hacking into computer systems, publishing obscene information in electronic form, and unauthorized access to protected systems. It also legally recognizes electronic records and digital signatures, thereby facilitating e-commerce and electronic filing of documents with government agencies. The UP Police has been proactive in setting up specialized Cyber Crime Police Stations and Cyber Cells across the state. These units are equipped with advanced forensic tools and staffed by trained personnel capable of investigating complex cyber offenses. A computer operator in the UP Police may frequently interact with these specialized units, assisting in data collection, logging cyber complaints, and maintaining records of digital evidence. Understanding the basics of the IT Act and common cyber threats is beneficial for anyone working in this environment. Phishing is one of the most common cybercrimes, where attackers send fraudulent emails or messages that appear to be from legitimate organizations to trick individuals into revealing sensitive information, such as passwords or credit card numbers. Another significant threat is ransomware, a type of malicious software that encrypts a victim's data and demands payment for the decryption key. To protect against such attacks, it is crucial to follow basic cybersecurity hygiene. This includes using strong, unique passwords for different accounts, enabling two-factor authentication, keeping software and operating systems updated, and being cautious about clicking on unknown links or downloading attachments from unverified sources. The role of a computer operator also involves ensuring that the department's own computer systems remain secure. Operators must adhere strictly to the department's IT policies, avoid using unauthorized external storage devices, and report any suspicious activity on the network immediately. Cybersecurity is a shared responsibility, and every employee plays a part in maintaining the integrity of the organization's digital infrastructure. As the world becomes increasingly interconnected, the fight against cybercrime will continue to be a top priority for law enforcement. By staying informed about the latest technological developments and legal provisions, police departments can better protect citizens in the digital realm. The UP Police's commitment to enhancing its technical capabilities reflects its dedication to addressing the challenges of modern policing. For those aspiring to join the force as computer operators, demonstrating proficiency in typing and a basic understanding of computer operations and security will be a significant advantage in the selection process."}
  ],
  hard: [
    {name:"Digital India & E-Governance", text:"The Digital India initiative, launched by the Government of India in July 2015, is a flagship program aimed at transforming the country into a digitally empowered society and a knowledge economy. The vision of Digital India is centered on three key areas: providing digital infrastructure as a core utility to every citizen, enabling governance and services on demand, and ensuring the digital empowerment of citizens. This ambitious campaign has profound implications for all sectors of society, including public administration and law enforcement. E-governance, a critical component of Digital India, involves the use of information and communication technology (ICT) to deliver government services, exchange information, and integrate various standalone systems. The objective is to make government services accessible to the common man in his locality through common service delivery outlets, and to ensure efficiency, transparency, and reliability of such services at affordable costs. In the context of the Uttar Pradesh Police, e-governance has led to the implementation of several citizen-centric services. Portals and mobile applications have been developed to allow citizens to file First Information Reports (FIRs) online, verify tenant or employee credentials, report lost articles, and seek emergency assistance. These digital platforms have not only made it more convenient for the public to interact with the police but have also improved the efficiency of police operations by streamlining administrative processes and reducing paperwork. The backbone of this digital transformation is the Crime and Criminal Tracking Network and Systems (CCTNS) project. CCTNS aims to create a comprehensive and integrated system for effective policing through e-governance. It involves creating a nationwide networked infrastructure for the evolution of an IT-enabled state-of-the-art tracking system around the Investigation of Crime and Detection of Criminals. The system connects police stations across the country, facilitating the seamless sharing of real-time intelligence and crime data. For a computer operator working within the UP Police, interacting with CCTNS and other e-governance portals is a daily responsibility. Operators are tasked with accurately entering FIR details, updating case diaries, uploading charge sheets, and managing databases of criminals. The accuracy and speed at which this data is entered are critical, as the information is often used by investigating officers, courts, and senior officials for decision-making. A minor typographical error can lead to significant confusion or even alter the course of an investigation. Therefore, maintaining a high typing speed coupled with absolute accuracy is non-negotiable. Furthermore, the integration of advanced technologies such as Artificial Intelligence (AI) and Big Data analytics into policing is becoming increasingly prevalent. Predictive policing, which uses data analysis to identify patterns and predict where and when crimes are likely to occur, relies heavily on the quality of the data inputted into the system. As a computer operator, you are the crucial link between raw data and actionable intelligence. The Digital India initiative also emphasizes digital literacy, ensuring that citizens and government employees alike possess the skills needed to navigate the digital world safely and effectively. Training programs are regularly conducted to keep police personnel updated on the latest software applications and cybersecurity protocols. As technology continues to evolve at a rapid pace, the role of IT professionals and computer operators within law enforcement agencies will only grow in importance. By preparing diligently for your typing exam and familiarizing yourself with the concepts of e-governance and digital policing, you are taking the first step towards a challenging yet highly rewarding career in the UP Police force."}
  ]
};

const LANGS = { hindi: LEVELS, english: EN_LEVELS };

/* ── Inscript Keyboard Mapping ── */
const INS = {
  "1":"१","2":"२","3":"३","4":"४","5":"५","6":"६","7":"७","8":"८","9":"९","0":"०","=":"ृ",
  "q":"ौ","w":"ै","e":"ा","r":"ी","t":"ू","y":"ब","u":"ह","i":"ग","o":"द","p":"ज","[":"ड","]":"़","\\":"ॉ",
  "a":"ो","s":"े","d":"्","f":"ि","g":"ु","h":"प","j":"र","k":"क","l":"त",";":"च","'":"ट",
  "x":"ं","c":"म","v":"न","b":"व","n":"ल","m":"स","/":"य",
  "@":"ॅ","#":"्र","$":"र्","%":"ज्ञ","^":"त्र","&":"क्ष","*":"श्र","_":"ः","+":"ऋ",
  "Q":"औ","W":"ऐ","E":"आ","R":"ई","T":"ऊ","Y":"भ","U":"ङ","I":"घ","O":"ध","P":"झ","{":"ढ","}":"ञ","|":"ऑ",
  "A":"ओ","S":"ए","D":"अ","F":"इ","G":"उ","H":"फ","K":"ख","L":"थ",":":"छ","\"":"ठ",
  "X":"ँ","C":"ण","N":"ळ","M":"श","<":"ष",">":"।"
};
const SHIFT_KEYS = "@#$%^&*_+QWERTYUIOP{}|ASDFGHKL:\"XCNM<>";

function keyLabel(k) {
  const shifted = SHIFT_KEYS.includes(k);
  const disp = /[a-z]/.test(k) ? k.toUpperCase() : k;
  return shifted ? "⇧" + disp : disp;
}
const REV = {};
for (const [k, v] of Object.entries(INS)) { if (!(v in REV)) REV[v] = keyLabel(k); }
REV[","] = ","; REV["."] = "."; REV[" "] = "Space";

const SPECIAL3 = ["ज्ञ","त्र","क्ष","श्र"];

function keysForWord(word) {
  const cp = Array.from(word);
  const out = [];
  let i = 0;
  while (i < cp.length) {
    const three = cp.slice(i, i + 3).join("");
    if (SPECIAL3.includes(three)) { out.push({u: three, k: REV[three]}); i += 3; continue; }
    const two = cp.slice(i, i + 2).join("");
    if (two === "्र") { out.push({u: "्र", k: REV["्र"]}); i += 2; continue; }
    if (two === "र्" && cp[i + 2]) { out.push({u: "र्", k: REV["र्"]}); i += 2; continue; }
    out.push({u: cp[i], k: REV[cp[i]] || "?"});
    i++;
  }
  return out;
}

/* ── Grapheme Utilities ── */
const segmenter = (typeof Intl !== "undefined" && Intl.Segmenter)
  ? new Intl.Segmenter("hi", {granularity: "grapheme"}) : null;
function graphemes(str) {
  if (segmenter) return Array.from(segmenter.segment(str), s => s.segment);
  return Array.from(str);
}

/* ── State ── */
let durationSec = 120, timeLeft = 120, timerId = null, startTime = 0;
let started = false, finished = false;
let level = "medium", kbMode = "inscript", lang = "hindi";
let wordsData = [];

const el = id => document.getElementById(id);
const passageEl = el("passage"), inputEl = el("input"), tip = el("tip");
const timeV = el("timeV"), wpmV = el("wpmV"), accV = el("accV"), errV = el("errV");
const overlay = el("overlay"), sel = el("passageSel"), engWarn = el("engWarn");

/* ── Passage Loading ── */
function fillSelect() {
  sel.innerHTML = "";
  LANGS[lang][level].forEach((p, i) => {
    const o = document.createElement("option");
    o.value = i; o.textContent = p.name;
    sel.appendChild(o);
  });
}

function loadPassage() {
  const p = LANGS[lang][level][+sel.value || 0];
  const words = p.text.split(" ");
  passageEl.innerHTML = "";
  wordsData = [];
  words.forEach((wtext, wi) => {
    const wspan = document.createElement("span");
    wspan.className = "word";
    wspan.dataset.word = wtext;
    const gs = graphemes(wtext);
    const wspans = gs.map(g => {
      const s = document.createElement("span");
      s.className = "g";
      s.textContent = g;
      wspan.appendChild(s);
      return s;
    });
    passageEl.appendChild(wspan);
    let spaceSpan = null;
    if (wi < words.length - 1) {
      spaceSpan = document.createElement("span");
      spaceSpan.className = "g";
      spaceSpan.textContent = " ";
      passageEl.appendChild(spaceSpan);
    }
    wordsData.push({text: wtext, g: gs, el: wspan, spans: wspans, spaceSpan});
  });
  if (wordsData[0]) {
    wordsData[0].el.classList.add("active");
    wordsData[0].spans[0].classList.add("cur");
  }
  attachTooltips();
}

/* ── Tooltips ── */
function attachTooltips() {
  passageEl.querySelectorAll(".word").forEach(w => {
    w.addEventListener("mouseenter", () => showTip(w));
    w.addEventListener("mouseleave", hideTip);
    w.addEventListener("touchstart", () => { showTip(w); setTimeout(hideTip, 2500); }, {passive: true});
  });
}
function showTip(w) {
  if (lang !== "hindi") return;
  const word = w.dataset.word;
  if (!word) return;
  const units = keysForWord(word);
  tip.innerHTML = '<div class="t-word">' + word + ' <small>— Inscript keys</small></div>' +
    '<div class="chips">' + units.map(u =>
      '<div class="chip"><div class="u">' + u.u + '</div><div class="kk">' + u.k + '</div></div>'
    ).join("") + '</div>';
  tip.style.display = "block";
  const r = w.getBoundingClientRect(), tr = tip.getBoundingClientRect();
  let x = r.left + r.width / 2 - tr.width / 2;
  x = Math.max(8, Math.min(x, window.innerWidth - tr.width - 8));
  let y = r.top - tr.height - 10;
  if (y < 8) y = r.bottom + 10;
  tip.style.left = x + "px";
  tip.style.top = y + "px";
}
function hideTip() { tip.style.display = "none"; }

/* ── Timer ── */
function fmt(t) { return Math.floor(t / 60) + ":" + String(t % 60).padStart(2, "0"); }
function startTimer() {
  started = true;
  startTime = Date.now();
  timerId = setInterval(() => {
    timeLeft--;
    timeV.textContent = fmt(timeLeft);
    if (timeLeft <= 10) el("timerStat").classList.add("low");
    updateStats();
    if (timeLeft <= 0) finish();
  }, 1000);
}
function elapsedMin() {
  if (!started || !startTime) return 1 / 60;
  const m = (Date.now() - startTime) / 60000;
  return Math.min(Math.max(m, 1 / 60), durationSec / 60);
}

/* ── Word Comparison ── */
function compare() {
  wordsData.forEach(w => {
    w.el.classList.remove("active");
    w.spans.forEach(s => s.classList.remove("ok", "bad", "cur"));
    if (w.spaceSpan) w.spaceSpan.classList.remove("ok", "bad", "cur");
  });
  let typedWords = inputEl.value.split(" ");
  if (finished) { while (typedWords.length && typedWords[typedWords.length - 1] === "") typedWords.pop(); }
  const lastIdx = typedWords.length - 1;
  let okWords = 0, badWords = 0, attempted = 0;

  for (let wi = 0; wi < typedWords.length && wi < wordsData.length; wi++) {
    const tw = graphemes(typedWords[wi]);
    const W = wordsData[wi];
    const isCurrent = (wi === lastIdx) && !finished;

    for (let i = 0; i < W.g.length; i++) {
      const s = W.spans[i];
      if (i < tw.length) {
        s.classList.add(tw[i] === W.g[i] ? "ok" : "bad");
      } else if (!isCurrent) {
        s.classList.add("bad");
      }
    }

    if (!isCurrent) {
      attempted++;
      if (typedWords[wi] === W.text) okWords++;
      else badWords++;
      if (W.spaceSpan) W.spaceSpan.classList.add("ok");
    }

    if (isCurrent) {
      W.el.classList.add("active");
      let curSpan = null;
      if (tw.length < W.g.length) curSpan = W.spans[tw.length];
      else if (W.spaceSpan) curSpan = W.spaceSpan;
      if (curSpan) {
        curSpan.classList.add("cur");
        curSpan.scrollIntoView({block: "nearest"});
      }
    }
  }
  for (let wi = wordsData.length; wi < typedWords.length; wi++) { attempted++; badWords++; }
  return {okWords, badWords, attempted};
}

/* ── Stats ── */
function updateStats() {
  const s = compare();
  const min = elapsedMin();
  const keystrokes = Array.from(inputEl.value).length;
  const gross = (keystrokes / 5) / min;
  const errRate = s.badWords / min;
  const net = Math.max(0, gross - errRate);
  const acc = s.attempted ? (s.okWords / s.attempted * 100) : 100;
  wpmV.textContent = started ? net.toFixed(1) : "0";
  accV.textContent = acc.toFixed(0) + "%";
  errV.textContent = s.badWords;
  return {...s, min, gross, errRate, net, acc, keystrokes};
}

/* ── Finish & Reset ── */
function finish() {
  if (finished) return;
  finished = true;
  clearInterval(timerId);
  inputEl.disabled = true;
  const s = updateStats();
  const name = el("nameIn").value.trim();
  el("rName").textContent = name || "—";
  el("rWpm").textContent = s.net.toFixed(2);
  el("rOk").textContent = s.okWords;
  el("rErr").textContent = s.badWords;
  el("rTotal").textContent = s.attempted;
  el("rKeys").textContent = s.keystrokes;
  el("rErrRate").textContent = s.errRate.toFixed(2);
  el("rAcc").textContent = s.acc.toFixed(2);
  el("rGross").textContent = s.gross.toFixed(2);
  el("rTime").textContent = s.min.toFixed(1);
  overlay.classList.add("show");
}

function reset() {
  clearInterval(timerId); timerId = null;
  started = false; finished = false;
  startTime = 0;
  timeLeft = durationSec;
  inputEl.value = ""; inputEl.disabled = false;
  timeV.textContent = fmt(timeLeft);
  el("timerStat").classList.remove("low");
  wpmV.textContent = "0"; accV.textContent = "100%"; errV.textContent = "0";
  overlay.classList.remove("show");
  engWarn.classList.remove("show");
  hideTip();
  loadPassage();
  inputEl.focus();
}

/* ── Inscript Typing ── */
inputEl.addEventListener("keydown", e => {
  if (lang !== "hindi") return;
  if (kbMode !== "inscript") return;
  if (e.ctrlKey || e.metaKey || e.altKey) return;
  const k = e.key;
  if (k.length !== 1) return;
  if (k === " " || k === "," || k === ".") return;
  const mapped = INS[k];
  e.preventDefault();
  if (mapped === undefined && !/[()\-!?]/.test(k)) return;
  const insert = mapped !== undefined ? mapped : k;
  const st = inputEl.selectionStart, en = inputEl.selectionEnd;
  inputEl.value = inputEl.value.slice(0, st) + insert + inputEl.value.slice(en);
  const pos = st + insert.length;
  inputEl.setSelectionRange(pos, pos);
  inputEl.dispatchEvent(new Event("input", {bubbles: true}));
});

/* ── Events ── */
inputEl.addEventListener("input", () => {
  if (finished) return;
  if (!started && inputEl.value.length > 0) startTimer();
  if (lang === "hindi" && /[A-Za-z]/.test(inputEl.value)) engWarn.classList.add("show");
  else if (lang === "english" && /[\u0900-\u097F]/.test(inputEl.value)) engWarn.classList.add("show");
  else engWarn.classList.remove("show");
  updateStats();
  const tws = inputEl.value.split(" ");
  const lastW = wordsData[wordsData.length - 1];
  if (tws.length > wordsData.length ||
     (tws.length === wordsData.length && graphemes(tws[tws.length - 1]).length >= lastW.g.length)) {
    finish();
  }
});
inputEl.addEventListener("paste", e => e.preventDefault());

document.querySelectorAll("#lvlSeg button").forEach(b => {
  b.addEventListener("click", () => {
    document.querySelectorAll("#lvlSeg button").forEach(x => x.classList.remove("active"));
    b.classList.add("active");
    level = b.dataset.lvl;
    fillSelect();
    reset();
  });
});
document.querySelectorAll("#durSeg button").forEach(b => {
  b.addEventListener("click", () => {
    document.querySelectorAll("#durSeg button").forEach(x => x.classList.remove("active"));
    b.classList.add("active");
    durationSec = (+b.dataset.min) * 60;
    reset();
  });
});
document.querySelectorAll("#kbSeg button").forEach(b => {
  b.addEventListener("click", () => {
    document.querySelectorAll("#kbSeg button").forEach(x => x.classList.remove("active"));
    b.classList.add("active");
    kbMode = b.dataset.kb;
    inputEl.focus();
  });
});

el("langSel").addEventListener("change", () => {
  lang = el("langSel").value;
  document.body.classList.toggle("en", lang === "english");
  el("kbGroup").style.display = (lang === "hindi") ? "" : "none";
  el("hintHi").style.display = (lang === "hindi") ? "" : "none";
  el("hintEn").style.display = (lang === "english") ? "" : "none";
  engWarn.innerHTML = (lang === "hindi")
    ? "⚠ English letters detected. Switch to <b>Inscript (built-in)</b> mode above, or enable a Hindi keyboard on your system — this test is Hindi-only."
    : "⚠ Hindi characters detected. This is an <b>English</b> typing test — please type in English, or switch the language back to हिंदी.";
  inputEl.placeholder = (lang === "hindi")
    ? "Start typing here… your full text stays visible. Press Space to move to the next word."
    : "Start typing the passage here… Press Space to move to the next word.";
  fillSelect();
  reset();
});

sel.addEventListener("change", reset);
el("restartBtn").addEventListener("click", reset);
el("againBtn").addEventListener("click", reset);

/* ── Theme Toggle ── */
const themeToggleBtn = el("themeToggle");

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("tg-theme", theme);
}

themeToggleBtn.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme") || "dark";
  applyTheme(current === "dark" ? "light" : "dark");
});

/* ── Init ── */
// Theme already set by inline script in HTML (prevents flash)
// Ensure it's also saved to localStorage on first visit
if (!localStorage.getItem("tg-theme")) {
  localStorage.setItem("tg-theme", "dark");
}

fillSelect();
reset();
