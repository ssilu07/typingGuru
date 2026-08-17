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
    , {name:"पुलिस प्रशासन", text:"उत्तर प्रदेश पुलिस प्रशासन राज्य में कानून और व्यवस्था बनाए रखने के लिए एक प्रमुख स्तंभ है। पुलिस विभाग का मुख्य उद्देश्य नागरिकों को सुरक्षित वातावरण प्रदान करना और अपराधों पर नियंत्रण रखना है। एक कंप्यूटर ऑपरेटर के रूप में, आपको पुलिस विभाग की विभिन्न तकनीकी और प्रशासनिक प्रक्रियाओं का हिस्सा बनने का अवसर मिलता है। आधुनिक युग में पुलिस प्रशासन ने भी तकनीकीकरण की दिशा में महत्वपूर्ण कदम उठाए हैं, जिससे कार्यक्षमता और पारदर्शिता में काफी वृद्धि हुई है। पुलिस स्टेशनों का कंप्यूटरीकरण, ऑनलाइन एफआईआर दर्ज करने की सुविधा, और क्रिमिनल ट्रैकिंग नेटवर्क सिस्टम (CCTNS) जैसी पहल इसी दिशा में किए गए महत्वपूर्ण प्रयास हैं। इन प्रणालियों के प्रभावी संचालन के लिए एक कंप्यूटर ऑपरेटर की भूमिका अत्यंत महत्वपूर्ण होती है। उसे डेटा प्रविष्टि, रिकार्ड का रखरखाव, और आवश्यक सूचनाओं का समय पर प्रेषण सुनिश्चित करना होता है। पुलिस विभाग में तकनीकी कर्मचारियों की बढ़ती मांग यह दर्शाती है कि भविष्य में अपराध नियंत्रण और जांच प्रक्रियाओं में तकनीक का महत्व और अधिक बढ़ने वाला है। एक जिम्मेदार कर्मचारी के तौर पर आपको न केवल तकनीकी रूप से दक्ष होना चाहिए, बल्कि पुलिस विभाग की कार्यप्रणाली और कानूनी प्रक्रियाओं की भी बुनियादी समझ होनी चाहिए। जनसेवा के इस महत्वपूर्ण क्षेत्र में कार्य करना गर्व का विषय है, जहाँ आपकी दक्षता सीधे तौर पर समाज की सुरक्षा और कानून व्यवस्था को सुदृढ़ करने में योगदान देती है।"}
  ],
  medium: [
    {name:"भारत — सामान्य परिचय", text:"भारत एक विशाल देश है। यहाँ अनेक भाषाएँ बोली जाती हैं और विभिन्न धर्मों के लोग मिलजुल कर रहते हैं। हमारे देश की संस्कृति अत्यंत प्राचीन और समृद्ध है। गंगा, यमुना और ब्रह्मपुत्र जैसी नदियाँ इस भूमि को उपजाऊ बनाती हैं। किसान परिश्रम से अन्न उगाते हैं और देश की प्रगति में योगदान देते हैं। हमें अपने देश पर गर्व है।"},
    {name:"परिश्रम का महत्व", text:"परिश्रम ही सफलता की कुंजी है। जो व्यक्ति निरंतर मेहनत करता है, वह अपने लक्ष्य को अवश्य प्राप्त करता है। आलस्य मनुष्य का सबसे बड़ा शत्रु है। विद्यार्थी जीवन में समय का सदुपयोग करना अत्यंत आवश्यक है। जो समय बीत जाता है, वह लौटकर नहीं आता। इसलिए हमें अपने कार्य को पूरी लगन तथा निष्ठा से करना चाहिए।"},
    {name:"पर्यावरण संरक्षण", text:"पर्यावरण की रक्षा करना हम सबका दायित्व है। वृक्ष हमें ऑक्सीजन देते हैं, वर्षा लाने में सहायता करते हैं और भूमि के कटाव को रोकते हैं। बढ़ते प्रदूषण के कारण जलवायु परिवर्तन की समस्या गंभीर होती जा रही है। हमें अधिक से अधिक पेड़ लगाने चाहिए और जल का संरक्षण करना चाहिए। स्वच्छ पर्यावरण ही स्वस्थ जीवन का आधार है।"},
    {name:"समय का सदुपयोग", text:"समय सबसे मूल्यवान धन है। धन खोकर पुनः कमाया जा सकता है, परंतु बीता हुआ समय कभी वापस नहीं आता। महान व्यक्तियों की सफलता का रहस्य समय का सदुपयोग ही है। हमें प्रातः जल्दी उठकर अपने दिन की योजना बनानी चाहिए। जो व्यक्ति समय का सम्मान करता है, समय भी उसका साथ देता है।"}
    , {name:"साइबर अपराध और आईटी एक्ट", text:"सूचना प्रौद्योगिकी के इस तेजी से बदलते युग में, जहाँ इंटरनेट और डिजिटल उपकरणों ने हमारे जीवन को बेहद सुविधाजनक बना दिया है, वहीं साइबर अपराध जैसी गंभीर चुनौतियां भी सामने आई हैं। साइबर अपराध में वे सभी गैरकानूनी गतिविधियां शामिल हैं, जो कंप्यूटर, नेटवर्क या डिजिटल उपकरणों के माध्यम से की जाती हैं। इनमें हैकिंग, फिशिंग, ऑनलाइन धोखाधड़ी, पहचान की चोरी और साइबर बुलिंग जैसी कई गतिविधियां शामिल हैं। एक कंप्यूटर ऑपरेटर के रूप में आपको इन खतरों के प्रति अत्यधिक जागरूक रहना चाहिए, क्योंकि पुलिस विभाग में तकनीकी कार्य करते समय डेटा सुरक्षा सर्वोच्च प्राथमिकता होती है। भारत सरकार ने इन साइबर अपराधों से निपटने और इलेक्ट्रॉनिक कॉमर्स को कानूनी मान्यता प्रदान करने के लिए सूचना प्रौद्योगिकी अधिनियम (IT Act), 2000 लागू किया था। यह अधिनियम डिजिटल हस्ताक्षरों को मान्यता देता है और इलेक्ट्रॉनिक गवर्नेंस को बढ़ावा देने के लिए एक मजबूत कानूनी ढांचा प्रदान करता है। समय-समय पर इस अधिनियम में महत्वपूर्ण संशोधन भी किए गए हैं, ताकि नए और जटिल साइबर अपराधों को प्रभावी ढंग से रोका जा सके। साइबर सुरक्षा सुनिश्चित करने के लिए मजबूत पासवर्ड का उपयोग, नियमित डेटा बैकअप, और सुरक्षित नेटवर्क का प्रयोग जैसी बुनियादी सावधानियां बरतना अत्यंत आवश्यक है। पुलिस विभाग के साइबर सेल इन अपराधों की जांच में महत्वपूर्ण भूमिका निभाते हैं, और एक तकनीकी विशेषज्ञ के रूप में आपको डिजिटल साक्ष्यों को सुरक्षित रखने और उनके विश्लेषण में सहयोग करना पड़ सकता है।"}
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
    , {name:"डिजिटल इंडिया और ई-गवर्नेंस", text:"डिजिटल इंडिया कार्यक्रम भारत सरकार की एक महत्वाकांक्षी पहल है, जिसका मुख्य उद्देश्य देश को डिजिटल रूप से सशक्त समाज और ज्ञान आधारित अर्थव्यवस्था में बदलना है। इस पहल के तहत ई-गवर्नेंस को विशेष रूप से बढ़ावा दिया जा रहा है, ताकि सरकारी सेवाएं नागरिकों तक इलेक्ट्रॉनिक रूप से पहुंचाई जा सकें। ई-गवर्नेंस का अर्थ है सरकारी कामकाज में सूचना और संचार प्रौद्योगिकी (ICT) का उपयोग करना, जिससे पारदर्शिता, जवाबदेही और कार्यकुशलता में सुधार हो सके। उत्तर प्रदेश पुलिस प्रशासन ने भी ई-गवर्नेंस की दिशा में कई सराहनीय कदम उठाए हैं। अब नागरिक घर बैठे ऑनलाइन शिकायत दर्ज कर सकते हैं, पासपोर्ट सत्यापन की स्थिति जान सकते हैं, और विभिन्न प्रकार के प्रमाणपत्रों के लिए आवेदन कर सकते हैं। यह सब एक सुदृढ़ तकनीकी बुनियादी ढांचे और कुशल कंप्यूटर ऑपरेटरों के बिना संभव नहीं है। डिजिटल इंडिया के तीन प्रमुख घटक हैं: सुरक्षित डिजिटल बुनियादी ढांचे का निर्माण, डिजिटल रूप से सेवाएं प्रदान करना, और नागरिकों में डिजिटल साक्षरता बढ़ाना। जब सरकारी विभाग अपनी प्रक्रियाओं को डिजिटल करते हैं, तो फाइलों के रखरखाव में लगने वाला समय और कागजी कार्रवाई काफी कम हो जाती है। इसके परिणामस्वरूप निर्णय लेने की प्रक्रिया तेज होती है और आम जनता को सरकारी दफ्तरों के चक्कर नहीं लगाने पड़ते। एक कंप्यूटर ऑपरेटर के रूप में, आप इस डिजिटल क्रांति के अग्रिम मोर्चे पर कार्य करते हैं। आपकी टाइपिंग गति, कंप्यूटर कौशल और नई तकनीकों को तेजी से सीखने की क्षमता, पुलिस विभाग में ई-गवर्नेंस को सफलतापूर्वक लागू करने में महत्वपूर्ण भूमिका निभाती है। इसलिए, निरंतर अपने कौशल को निखारना और तकनीकी बदलावों के साथ खुद को अपडेट रखना आपके करियर की प्रगति के लिए नितांत आवश्यक है।"}
  ]
};

const EN_LEVELS = {
  easy: [
    {name:"Police Administration", text:"The Uttar Pradesh Police is one of the largest single police forces in the world. It is the law enforcement agency for the state of Uttar Pradesh in India. Headquartered in Lucknow, the UP Police is headed by the Director General of Police. Working as a computer operator in the UP Police is a matter of great pride and responsibility. A computer operator plays a vital role in the daily functioning of the police department. They are responsible for managing data, generating reports, handling communication, and assisting in the digital transformation of the police force. The role requires a good typing speed, accuracy, and basic knowledge of computer hardware and software. The advent of technology has brought significant changes in how the police operate. Digital platforms like the Crime and Criminal Tracking Network and Systems (CCTNS) have been implemented to connect all police stations across the country. This system helps in the quick sharing of information regarding criminals and incidents. As a computer operator, you will be working extensively on such platforms. You must ensure that the data entered is accurate and secure. Confidentiality is of utmost importance in police work. Information related to ongoing investigations, personal details of citizens, and internal communications must never be compromised. Therefore, computer operators are trained to handle sensitive data with care. In addition to data entry, operators may also be tasked with monitoring CCTV footage, managing the control room during emergencies, and assisting senior officers in preparing digital presentations. The job is dynamic and requires a person to be alert and efficient. Time management is another crucial skill. During critical situations, information needs to be processed and disseminated rapidly. A delay of a few minutes can have serious consequences. Hence, maintaining a calm demeanor under pressure while maintaining a high typing speed is essential. To succeed in the typing test for this post, regular practice is necessary. One should aim for a typing speed of at least thirty to forty words per minute with minimum errors. Focus on touch typing, which means typing without looking at the keyboard. This method significantly increases both speed and accuracy. Remember to maintain proper posture while typing. Sit up straight, keep your wrists slightly elevated, and place your fingers gently on the home row keys. Taking short breaks during practice sessions can prevent fatigue and reduce the risk of repetitive strain injuries. The journey to becoming a UP Police computer operator may seem challenging, but with dedication and consistent effort, it is definitely achievable. The state government provides various facilities and allowances to its employees, making it a secure and rewarding career choice. Furthermore, serving the public and contributing to the maintenance of law and order is a noble endeavor. By fulfilling your duties sincerely, you become an integral part of the system that ensures the safety and well-being of millions of citizens. So, keep practicing, stay focused on your goal, and you will surely succeed in the upcoming examination. This passage is designed to help you build the stamina and accuracy needed for a fifteen minute long typing test. Keep your eyes on the screen and your fingers moving steadily across the keys. Practice makes perfect, and every keystroke brings you closer to your dream job."}
    , {name:"The Importance of Trees", text:"Trees are an essential part of our environment and play a crucial role in maintaining the ecological balance of our planet. They provide us with oxygen, which is vital for the survival of all living beings. Through the process of photosynthesis, trees absorb carbon dioxide from the atmosphere and release oxygen. This not only helps in purifying the air but also reduces the impact of greenhouse gases, thereby mitigating climate change. Furthermore, trees offer shade and shelter to various species of birds, insects, and animals, fostering biodiversity. They act as natural air conditioners, cooling the surrounding environment by providing shade and releasing moisture through their leaves. The roots of trees hold the soil firmly, preventing soil erosion during heavy rains and floods. Trees also give us numerous products such as fruits, nuts, wood, and medicines. Wood from trees is used for building houses, making furniture, and producing paper. Spending time around trees and in nature has been proven to reduce stress, anxiety, and depression, promoting overall mental well-being. Therefore, it is our responsibility to protect and conserve our forests and plant more trees in our neighborhoods. Afforestation and reforestation are key to combating environmental degradation and ensuring a sustainable future for generations to come. Every single tree planted makes a difference, contributing to a greener, healthier, and more beautiful world. By taking care of our environment today, we secure a better tomorrow for everyone."}
    , {name:"A Day at the Beach", text:"A day at the beach is one of the most relaxing and enjoyable experiences one can have. The sound of the waves crashing against the shore, the warm sand under your feet, and the gentle ocean breeze create a perfect setting for a perfect day. People of all ages love visiting the beach for various reasons. Children enjoy building sandcastles, collecting seashells, and splashing in the shallow water. Teenagers and adults often engage in activities like swimming, surfing, playing beach volleyball, or simply sunbathing. The beach is a great place to disconnect from the hustle and bustle of daily life and reconnect with nature. Walking along the coastline can be incredibly soothing, helping to clear the mind and reduce stress. Many people also love watching the sunrise or sunset at the beach, as the sky turns into a beautiful canvas of orange, pink, and purple hues. Packing a picnic with sandwiches, fruits, and cold drinks adds to the fun, making it a perfect outing for families and friends. However, it is important to remember to keep the beach clean by not littering and disposing of garbage properly. Protecting marine life and the coastal ecosystem should always be a priority. Applying sunscreen and staying hydrated are also crucial to prevent sunburn and heat exhaustion. Overall, a day at the beach offers a wonderful combination of fun, relaxation, and an opportunity to appreciate the natural beauty of the ocean."}
    , {name:"The Solar System", text:"Our solar system is a vast and fascinating place, consisting of the Sun and everything that orbits around it. This includes eight major planets, their moons, dwarf planets, asteroids, and comets. The Sun, a massive star at the center of the solar system, provides the necessary light and heat for life to exist on Earth. Its immense gravitational pull keeps all the celestial bodies in their respective orbits. The planets are divided into two groups: the inner rocky planets and the outer gas giants. Mercury, Venus, Earth, and Mars are the inner planets, known for their solid surfaces and relatively smaller sizes. Earth is the only planet known to support life, thanks to its ideal distance from the Sun, presence of liquid water, and a protective atmosphere. The outer planets, Jupiter, Saturn, Uranus, and Neptune, are much larger and composed mostly of gases and liquids. Jupiter is the largest planet, famous for its Great Red Spot, a giant storm. Saturn is well-known for its beautiful and prominent ring system. Beyond Neptune lies the Kuiper Belt, a region filled with icy bodies, including the dwarf planet Pluto. Space exploration, through telescopes and robotic spacecraft, has provided us with incredible insights into the mysteries of our solar system. Learning about the planets and their unique characteristics helps us understand the vastness of the universe and our place within it. The more we explore, the more we realize how much there is still to discover."}
    , {name:"Healthy Eating Habits", text:"Maintaining healthy eating habits is essential for overall well-being and a long, active life. A balanced diet provides the body with the necessary nutrients, vitamins, and minerals required to function optimally. This includes a variety of foods such as fresh fruits, vegetables, whole grains, lean proteins, and healthy fats. Fruits and vegetables are rich in antioxidants, which protect the body from diseases and boost the immune system. Whole grains, like brown rice and oats, provide sustained energy and keep the digestive system healthy. It is also important to stay hydrated by drinking plenty of water throughout the day. Water helps in digestion, regulates body temperature, and keeps the skin glowing. On the other hand, one should limit the intake of processed foods, sugary snacks, and beverages, as they are high in empty calories and can lead to weight gain and various health issues like diabetes and heart disease. Planning meals ahead of time can help in making healthier choices and avoiding the temptation of fast food. Eating meals at regular intervals prevents overeating and keeps metabolism active. Additionally, practicing mindful eating, which involves paying attention to the taste and texture of food and eating slowly, can improve digestion and prevent overindulgence. Cultivating healthy eating habits from a young age sets the foundation for a healthy lifestyle. Remember, the food we eat acts as fuel for our bodies, and making nutritious choices is one of the best investments we can make for our health."}
    , {name:"The History of Bicycles", text:"The bicycle is a simple yet revolutionary invention that has transformed the way people travel. The history of the bicycle dates back to the early nineteenth century. The first iteration, known as the 'dandy horse' or 'running machine,' was invented by Karl von Drais in 1817. It had two wheels and a wooden frame but lacked pedals, requiring the rider to push along the ground with their feet. In the 1860s, pedals were added to the front wheel, creating the 'velocipede' or 'boneshaker,' named for its uncomfortable ride on bumpy roads. The design evolved further in the 1870s with the 'penny-farthing,' which featured a very large front wheel and a small rear wheel. This allowed for faster speeds but was difficult to balance and prone to accidents. The turning point came in the late 1880s with the invention of the 'safety bicycle.' It featured two wheels of equal size, a chain drive connected to the rear wheel, and pneumatic rubber tires, making it much safer and more comfortable to ride. This design closely resembles the bicycles we use today. The popularity of bicycles skyrocketed, providing an affordable, efficient, and environmentally friendly mode of transportation. Today, bicycles are used worldwide for commuting, recreation, and sports. They promote physical fitness, reduce traffic congestion, and produce no harmful emissions. The evolution of the bicycle is a testament to human ingenuity and the desire for practical and sustainable mobility."}
  ],
  medium: [
    {name:"Cyber Crime & IT Act", text:"In recent years, the rapid growth of the internet and digital technologies has revolutionized the way we communicate, work, and conduct business. However, this digital boom has also given rise to a new breed of criminal activities known collectively as cybercrime. Cybercrime encompasses a wide range of illegal activities carried out using computers, networks, and the internet. These include hacking, identity theft, financial fraud, phishing, ransomware attacks, and cyberbullying. As technology evolves, so do the methods employed by cybercriminals, making it increasingly challenging for law enforcement agencies to combat these threats. To address this growing menace, the Government of India enacted the Information Technology Act, 2000, commonly known as the IT Act. This comprehensive legislation provides the legal framework for electronic governance and aims to prevent and penalize cybercrimes. The IT Act covers various offenses, such as tampering with computer source documents, hacking into computer systems, publishing obscene information in electronic form, and unauthorized access to protected systems. It also legally recognizes electronic records and digital signatures, thereby facilitating e-commerce and electronic filing of documents with government agencies. The UP Police has been proactive in setting up specialized Cyber Crime Police Stations and Cyber Cells across the state. These units are equipped with advanced forensic tools and staffed by trained personnel capable of investigating complex cyber offenses. A computer operator in the UP Police may frequently interact with these specialized units, assisting in data collection, logging cyber complaints, and maintaining records of digital evidence. Understanding the basics of the IT Act and common cyber threats is beneficial for anyone working in this environment. Phishing is one of the most common cybercrimes, where attackers send fraudulent emails or messages that appear to be from legitimate organizations to trick individuals into revealing sensitive information, such as passwords or credit card numbers. Another significant threat is ransomware, a type of malicious software that encrypts a victim's data and demands payment for the decryption key. To protect against such attacks, it is crucial to follow basic cybersecurity hygiene. This includes using strong, unique passwords for different accounts, enabling two-factor authentication, keeping software and operating systems updated, and being cautious about clicking on unknown links or downloading attachments from unverified sources. The role of a computer operator also involves ensuring that the department's own computer systems remain secure. Operators must adhere strictly to the department's IT policies, avoid using unauthorized external storage devices, and report any suspicious activity on the network immediately. Cybersecurity is a shared responsibility, and every employee plays a part in maintaining the integrity of the organization's digital infrastructure. As the world becomes increasingly interconnected, the fight against cybercrime will continue to be a top priority for law enforcement. By staying informed about the latest technological developments and legal provisions, police departments can better protect citizens in the digital realm. The UP Police's commitment to enhancing its technical capabilities reflects its dedication to addressing the challenges of modern policing. For those aspiring to join the force as computer operators, demonstrating proficiency in typing and a basic understanding of computer operations and security will be a significant advantage in the selection process."}
    , {name:"The Wonders of the Ocean", text:"The ocean is a vast and mysterious realm that covers more than seventy percent of our planet's surface. It is home to an incredible diversity of life, ranging from microscopic plankton to the massive blue whale, the largest animal ever known to have existed. The ocean is divided into several zones, each with its own unique ecosystem and environmental conditions. The sunlit zone near the surface is teeming with life, including colorful coral reefs, schools of fish, dolphins, and sea turtles. Coral reefs, often referred to as the rainforests of the sea, support a quarter of all marine species despite covering a tiny fraction of the ocean floor. As we descend deeper, sunlight fades, and pressure increases. In the twilight and midnight zones, creatures have adapted in fascinating ways, such as bioluminescence, which allows them to produce their own light to attract prey or communicate. The deepest part of the ocean, the Mariana Trench, plunges nearly seven miles down and remains largely unexplored. Oceans also play a critical role in regulating the Earth's climate by absorbing significant amounts of solar radiation and carbon dioxide. Ocean currents act as a global conveyor belt, distributing heat and nutrients around the world. However, the oceans are facing severe threats from human activities, including overfishing, plastic pollution, and climate change. Ocean acidification and rising temperatures are causing coral bleaching and endangering marine habitats. Protecting the oceans is vital for the health of our planet and the survival of countless species, highlighting the need for sustainable practices and global conservation efforts."}
    , {name:"The Evolution of Computers", text:"The evolution of computers is a remarkable journey of technological advancement that has drastically changed human civilization. The concept of a programmable machine dates back to the early nineteenth century with Charles Babbage's design of the Analytical Engine. However, the first electronic general-purpose computers, like the ENIAC, were developed during World War II. These early machines were massive, filling entire rooms, and consumed enormous amounts of electricity. They relied on vacuum tubes for processing and were primarily used for complex calculations. The invention of the transistor in the late 1940s marked a significant turning point, making computers smaller, faster, and more reliable. This was followed by the development of integrated circuits in the 1960s, which placed multiple transistors on a single silicon chip. The 1970s saw the birth of the microprocessor, leading to the creation of personal computers (PCs). Companies like Apple and IBM introduced affordable computers that could be used in homes and offices. The introduction of graphical user interfaces (GUIs) and the mouse made computers user-friendly for the general public. The 1990s brought the advent of the World Wide Web, connecting computers globally and revolutionizing communication, commerce, and access to information. Today, computers have evolved into incredibly powerful and portable devices, such as laptops, tablets, and smartphones, capable of performing complex tasks in a fraction of a second. The continuous advancements in artificial intelligence and quantum computing promise to push the boundaries even further, opening up new possibilities for innovation and discovery."}
    , {name:"The Great Wall of China", text:"The Great Wall of China is one of the most awe-inspiring architectural feats in human history and a symbol of China's enduring strength and resilience. Stretching over thirteen thousand miles across the northern borders of China, the wall was built to protect the Chinese states and empires against the raids and invasions of various nomadic groups from the Eurasian Steppe. The construction of the wall is not the work of a single dynasty; it is a series of fortifications built, rebuilt, and maintained from the third century BC to the seventeenth century AD. The most famous and well-preserved sections were constructed during the Ming Dynasty. The builders used materials available locally, including rammed earth, wood, bricks, and stones. The wall is not a continuous line but a collection of walls, trenches, and natural barriers like mountains and rivers. Watchtowers were strategically placed along the wall to serve as observation posts, signal stations, and garrisons for troops. Smoke signals were used during the day and fire at night to transmit messages quickly across vast distances. The construction involved millions of workers, including soldiers, peasants, and prisoners, many of whom lost their lives due to the harsh conditions. Today, the Great Wall is a UNESCO World Heritage site and a major tourist attraction, drawing millions of visitors from around the globe. It stands as a testament to the ingenuity, determination, and organizational capabilities of ancient Chinese civilization."}
    , {name:"Benefits of Regular Exercise", text:"Regular physical exercise is one of the most important things you can do for your health. It provides a wide range of physical, mental, and emotional benefits that contribute to a higher quality of life. Engaging in consistent physical activity helps in weight management by burning calories and building muscle mass. It reduces the risk of chronic diseases such as heart disease, type 2 diabetes, and certain types of cancer. Exercise strengthens the heart and improves blood circulation, which helps lower blood pressure and cholesterol levels. Furthermore, weight-bearing exercises like walking, running, and weightlifting are crucial for maintaining strong bones and preventing osteoporosis, especially as we age. Beyond the physical advantages, exercise has a profound impact on mental health. Physical activity stimulates the release of endorphins, often referred to as 'feel-good' hormones, which act as natural mood lifters. Regular exercise can significantly reduce symptoms of depression, anxiety, and stress. It also improves sleep quality, allowing you to fall asleep faster and deepen your sleep. Additionally, engaging in sports or group fitness classes provides opportunities for social interaction, which can boost self-esteem and foster a sense of community. The World Health Organization recommends at least 150 minutes of moderate-intensity aerobic activity per week for adults. Incorporating physical activity into your daily routine, whether it is taking the stairs instead of the elevator, going for a brisk walk, or cycling to work, can yield substantial long-term health benefits."}
    , {name:"The Lifecycle of a Butterfly", text:"The lifecycle of a butterfly is one of nature's most fascinating and beautiful transformations, known as metamorphosis. This process consists of four distinct stages: the egg, the larva, the pupa, and the adult butterfly. The cycle begins when a female butterfly lays her eggs, usually on the leaves of a specific host plant. These eggs are incredibly small and can be round, oval, or cylindrical, depending on the species. After a few days, a larva, commonly known as a caterpillar, hatches from the egg. The caterpillar's primary job is to eat and grow. It consumes the leaf it was born on and continues to eat voraciously, shedding its skin multiple times as it rapidly increases in size. Once the caterpillar has reached its full growth, it enters the pupa stage. It attaches itself to a twig or leaf and forms a protective casing around itself, known as a chrysalis. Inside the chrysalis, a remarkable transformation occurs. The caterpillar's body breaks down into a cellular soup and reorganizes into the complex structure of an adult butterfly. This stage can last anywhere from a few weeks to several months. Finally, the adult butterfly emerges from the chrysalis. At first, its wings are soft and folded, so it must pump fluid into them and wait for them to dry and harden before it can fly. The adult butterfly's main purpose is to reproduce and start the cycle all over again, adding beauty and aiding in pollination along the way."}
  ],
  hard: [
    {name:"Digital India & E-Governance", text:"The Digital India initiative, launched by the Government of India in July 2015, is a flagship program aimed at transforming the country into a digitally empowered society and a knowledge economy. The vision of Digital India is centered on three key areas: providing digital infrastructure as a core utility to every citizen, enabling governance and services on demand, and ensuring the digital empowerment of citizens. This ambitious campaign has profound implications for all sectors of society, including public administration and law enforcement. E-governance, a critical component of Digital India, involves the use of information and communication technology (ICT) to deliver government services, exchange information, and integrate various standalone systems. The objective is to make government services accessible to the common man in his locality through common service delivery outlets, and to ensure efficiency, transparency, and reliability of such services at affordable costs. In the context of the Uttar Pradesh Police, e-governance has led to the implementation of several citizen-centric services. Portals and mobile applications have been developed to allow citizens to file First Information Reports (FIRs) online, verify tenant or employee credentials, report lost articles, and seek emergency assistance. These digital platforms have not only made it more convenient for the public to interact with the police but have also improved the efficiency of police operations by streamlining administrative processes and reducing paperwork. The backbone of this digital transformation is the Crime and Criminal Tracking Network and Systems (CCTNS) project. CCTNS aims to create a comprehensive and integrated system for effective policing through e-governance. It involves creating a nationwide networked infrastructure for the evolution of an IT-enabled state-of-the-art tracking system around the Investigation of Crime and Detection of Criminals. The system connects police stations across the country, facilitating the seamless sharing of real-time intelligence and crime data. For a computer operator working within the UP Police, interacting with CCTNS and other e-governance portals is a daily responsibility. Operators are tasked with accurately entering FIR details, updating case diaries, uploading charge sheets, and managing databases of criminals. The accuracy and speed at which this data is entered are critical, as the information is often used by investigating officers, courts, and senior officials for decision-making. A minor typographical error can lead to significant confusion or even alter the course of an investigation. Therefore, maintaining a high typing speed coupled with absolute accuracy is non-negotiable. Furthermore, the integration of advanced technologies such as Artificial Intelligence (AI) and Big Data analytics into policing is becoming increasingly prevalent. Predictive policing, which uses data analysis to identify patterns and predict where and when crimes are likely to occur, relies heavily on the quality of the data inputted into the system. As a computer operator, you are the crucial link between raw data and actionable intelligence. The Digital India initiative also emphasizes digital literacy, ensuring that citizens and government employees alike possess the skills needed to navigate the digital world safely and effectively. Training programs are regularly conducted to keep police personnel updated on the latest software applications and cybersecurity protocols. As technology continues to evolve at a rapid pace, the role of IT professionals and computer operators within law enforcement agencies will only grow in importance. By preparing diligently for your typing exam and familiarizing yourself with the concepts of e-governance and digital policing, you are taking the first step towards a challenging yet highly rewarding career in the UP Police force."}
    , {name:"The Theory of Relativity", text:"Albert Einstein's theory of relativity revolutionized our understanding of space, time, and gravity, fundamentally altering the landscape of modern physics. Proposed in two parts—special relativity and general relativity—this framework challenged the long-held Newtonian mechanics. Special relativity, introduced in 1905, established that the laws of physics are the same for all non-accelerating observers, and that the speed of light in a vacuum is constant, regardless of the motion of the light source or observer. This led to the famous equation E=mc², which demonstrated the equivalence of mass and energy. It also introduced the concept of time dilation, where time passes slower for an object moving at high speeds compared to a stationary observer. A decade later, in 1915, Einstein presented the theory of general relativity, which provided a new description of gravity. Instead of viewing gravity as a mysterious force pulling objects together, general relativity describes it as the curvature of spacetime caused by mass and energy. Massive objects, like planets and stars, warp the fabric of spacetime around them, and this curvature dictates the paths that objects and light follow. This theory successfully explained the precise orbit of Mercury and predicted phenomena such as the bending of light by gravity, known as gravitational lensing, and the existence of black holes. The theory of relativity has been repeatedly confirmed through numerous experiments and observations, and its principles are essential for the accurate functioning of modern technologies like the Global Positioning System (GPS)."}
    , {name:"Architecture of Ancient Rome", text:"The architecture of Ancient Rome stands as a testament to the ingenuity and engineering prowess of one of history's greatest civilizations. Roman architects heavily adopted the classical styles of Ancient Greece but innovated significantly by introducing new materials and structural techniques. The most revolutionary development was the widespread use of concrete, known as opus caementicium. Roman concrete was remarkably durable, allowing for the construction of massive, complex structures that could withstand the test of time and the elements. This material enabled the Romans to perfect the use of arches, vaults, and domes, freeing them from the constraints of the traditional post-and-lintel system. The arch allowed for the distribution of weight, enabling the construction of towering aqueducts that transported fresh water over vast distances to cities and towns. The Colosseum, an iconic amphitheater, is a masterpiece of Roman engineering, featuring a complex system of vaulted corridors and seating for tens of thousands of spectators. Another architectural marvel is the Pantheon, which boasts the world's largest unreinforced concrete dome, perfectly proportioned with a central oculus that provides natural light. Roman architecture also placed a strong emphasis on public infrastructure, including public baths, basilicas, and extensive road networks, which facilitated trade, communication, and military movement. The legacy of Roman architecture is profound, having heavily influenced the architectural styles of the Renaissance, Neoclassical periods, and modern civic buildings worldwide."}
    , {name:"Process of Photosynthesis", text:"Photosynthesis is a fundamental biological process that sustains life on Earth by converting light energy into chemical energy. This complex biochemical pathway primarily occurs in plants, algae, and certain types of bacteria. Through photosynthesis, these autotrophic organisms synthesize glucose, a simple sugar, from carbon dioxide and water, using sunlight as the energy source. The process takes place within specialized organelles called chloroplasts, which contain chlorophyll, the green pigment responsible for capturing light energy. Photosynthesis is broadly divided into two main stages: the light-dependent reactions and the light-independent reactions, also known as the Calvin cycle. During the light-dependent reactions, which occur in the thylakoid membrane of the chloroplast, chlorophyll absorbs photons of light. This energy is used to split water molecules into oxygen, protons, and electrons. The oxygen is released into the atmosphere as a byproduct, while the electrons and protons are used to generate ATP (adenosine triphosphate) and NADPH, which act as energy carriers. The light-independent reactions take place in the stroma of the chloroplast and do not require direct sunlight. In this stage, the ATP and NADPH produced earlier are utilized to fix carbon dioxide into organic molecules. Through a series of enzyme-mediated reactions, the carbon is eventually converted into glucose. This glucose serves as a crucial energy source for the plant's growth and development, and it forms the base of the global food web, providing sustenance for almost all heterotrophic organisms on the planet."}
    , {name:"Rise of Artificial Intelligence", text:"The rise of Artificial Intelligence (AI) represents one of the most transformative technological shifts of the twenty-first century, with profound implications across all sectors of society. AI refers to the simulation of human intelligence in machines programmed to think, learn, and problem-solve. The roots of AI date back to the mid-twentieth century, but recent exponential advancements in computing power, the availability of massive datasets, and breakthroughs in machine learning algorithms have accelerated its development. Machine learning, a subset of AI, enables systems to learn from data and improve their performance without being explicitly programmed. Deep learning, utilizing artificial neural networks inspired by the human brain, has led to significant achievements in natural language processing, image recognition, and autonomous navigation. Today, AI is integrated into our daily lives through virtual assistants, recommendation systems, and predictive text. In the healthcare sector, AI algorithms analyze medical images to detect diseases with high accuracy and assist in drug discovery. In finance, AI is used for algorithmic trading, fraud detection, and risk management. The automotive industry is leveraging AI to develop self-driving cars, promising to revolutionize transportation. However, the rapid proliferation of AI also raises significant ethical and socioeconomic concerns. Issues surrounding data privacy, algorithmic bias, and the potential displacement of jobs due to automation require careful consideration and robust regulatory frameworks. As AI continues to evolve, balancing innovation with ethical responsibility will be critical in harnessing its potential for the benefit of humanity."}
    , {name:"Impact of Climate Change", text:"Climate change is undeniably the most pressing environmental crisis facing our planet today, characterized by long-term shifts in temperatures and weather patterns. While natural variations have occurred throughout Earth's history, the current warming trend is unequivocally driven by human activities, particularly the emission of greenhouse gases. The burning of fossil fuels such as coal, oil, and natural gas releases massive amounts of carbon dioxide and methane into the atmosphere, trapping heat and causing the global average temperature to rise. The consequences of this warming are far-reaching and multifaceted. The melting of polar ice caps and glaciers is contributing to a steady rise in global sea levels, threatening coastal communities and island nations with inundation and increased vulnerability to storm surges. Furthermore, climate change is intensifying the frequency and severity of extreme weather events, including prolonged droughts, devastating hurricanes, and catastrophic wildfires. These changes disrupt agricultural systems, leading to food insecurity and water scarcity. Ecosystems and biodiversity are also under severe threat, as many species struggle to adapt to rapidly changing habitats, leading to shifts in geographical ranges and heightened risks of extinction. Ocean acidification, resulting from the absorption of excess carbon dioxide, is devastating marine life, particularly coral reefs. Addressing climate change requires urgent, coordinated global action to transition towards renewable energy sources, enhance energy efficiency, and implement sustainable land-use practices to mitigate emissions and build resilience against its inevitable impacts."}
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
let backspaceCount = 0;

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
  el("rBackspaces").textContent = backspaceCount;
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
  backspaceCount = 0;
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
  if (e.key === "Backspace") backspaceCount++;
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

document.querySelectorAll("#hlSeg button").forEach(b => {
  b.addEventListener("click", () => {
    document.querySelectorAll("#hlSeg button").forEach(x => x.classList.remove("active"));
    b.classList.add("active");
    if (b.dataset.hl === "off") {
      el("passage").classList.add("no-highlight");
    } else {
      el("passage").classList.remove("no-highlight");
    }
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
