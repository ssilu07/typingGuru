/* =====================================================
   TypingGuru — Matra, Shift & English Practice Drills
   practice.js
   ===================================================== */

const HINDI_PRACTICE_DRILLS = [
  {
    id: "aadhe_akshar",
    name: "1. अर्धाक्षर एवं हलंत (Aadhe Akshar)",
    sets: [
      {
        name: "अर्धाक्षर सेट 1 — क, प, स, त, ध, व्य (क्या, प्यार, स्थान, ध्यान, स्वास्थ्य)",
        text: "क्या क्यों क्योंकि प्यारा प्यार व्यापार व्यक्त व्यक्ति व्यक्तित्व वाक्य मुख्य लक्ष्य स्थान स्थिति स्थायी स्थापना स्पष्ट स्पष्टीकरण स्वभाव स्वाभाविक स्वागत स्वास्थ्य स्मरण स्मृति उत्साह उत्सव उत्पन्न उत्पादन संकल्प विकल्प कल्प प्रतिष्ठा प्रतिष्ठित अनुष्ठान कष्ट नष्ट दृष्टि उत्कृष्ट सृष्टि पृष्ठ श्रेष्ठ निश्चय निश्चित पश्चात् पश्चात आश्चर्य उज्ज्वल उद्देश्य विद्वान द्वितीय द्वंद्व बुद्धि शुद्ध युद्ध संपन्न उन्नति प्रसन्न बच्चा सच्चा अच्छा इच्छा दिल्ली उल्लास उल्लेख चम्मच सम्मान सम्मेलन भक्त भक्ति शक्ति मुक्ति सूक्ष्म यक्ष कृष्ण"
      },
      {
        name: "अर्धाक्षर सेट 2 — कठिन परीक्षा शब्दावली (स्वावलंबन, अभिव्यक्ति, संप्रभुता)",
        text: "स्वावलंबन अभिव्यक्ति सर्वोत्कृष्ट संप्रभुता औद्योगिकीकरण उत्तरदायित्व परिप्रेक्ष्य महत्वाकांक्षा मनोवैज्ञानिक सहानुभूति निष्पक्षता प्रामाणिकता विशिष्टता कार्यप्रणाली प्रशासनिक क्रियान्वयन सशक्तिकरण व्यावसायिक पारस्परिकता सौहार्दपूर्ण आत्मनिर्भरता समकालीन विश्वविद्यालय संश्लेषण विश्लेषणात्मक संवैधानिक स्थापत्यकला पारिस्थितिकी उत्तराधिकारी बहुआयामी दूरदर्शिता न्यायसंगत सहअस्तित्व संवेदनशीलता औचित्य पुनर्विचार स्वैच्छिक सर्वसमावेशी प्रत्यायोजन प्रत्यक्षीकरण संस्तुति अभ्यावेदन अधिसूचना प्रतिहस्ताक्षर अवसंरचना"
      },
      {
        name: "अर्धाक्षर सेट 3 — द्वित्व एवं संयुक्त व्यंजन (च्च, त्त, न्न, म्म, ल्ल, ब्ब, स्थ, स्प)",
        text: "कच्चा पक्का सच्चा बच्चा छज्जा लज्जा कुत्ता पत्ता गत्ता सत्ता पन्ना गन्ना भिन्न खिन्न चम्मच निकम्मा हिम्मत मरम्मत दिल्ली बिल्ली गुल्ली पिल्ला डिब्बा धब्बा गुब्बारा रद्दी गद्दी भद्दी क्यारी त्याग प्यास न्याय ध्यान ध्येय अभ्यास सभ्यता सभ्य भव्य भव्यता श्यामल श्वास श्वेत श्याम स्थूल स्तम्भ स्तूप स्पर्श स्पर्धा स्थायी स्थान स्थापना स्तुति स्निग्ध स्नेह स्नान स्फूर्ति स्त्रोत स्मृति"
      }
    ]
  },
  {
    id: "shift_keys",
    name: "2. शिफ्ट कुंजी एवं संयुक्ताक्षर (Shift Keys)",
    sets: [
      {
        name: "शिफ्ट सेट 1 — क्ष, त्र, ज्ञ, श्र, ऋ, ः, ँ, ॉ, ऑ (Special Shift Ligatures)",
        text: "ऋषि ऋतु ऋण ऋग्वेद ज्ञानी ज्ञान विज्ञान अज्ञात प्रज्ञान त्रिभुज त्रिशूल त्रिनेत्र त्रिकोण क्षत्रिय क्षमा रक्षा परीक्षा नक्षत्र श्रम श्रमिक आश्रम विश्राम श्रेष्ठ झंडा झरोखा झंझट ढोलक ढक्कन ढांचा ठंडा ठंड कंठ घंटा फल फूल फसल फायदा खटिया खरगोश खबर थाली थोड़ा थकावट छात्र छात्रा छत छाता औरत औषधि औजार औचित्य ऐनक ऐश्वर्य ऐतिहासिक आम आग आकाश ईंट ईश्वर ईर्ष्या ऊन ऊपर ऊर्जा भवन भारत भोजन घड़ा घर घंटा धनुष धर्म धुआं शंख शहर शांति षट्कोण चरण डॉक्टर कॉलेज ऑफिस आँख चाँद माँ गाँव प्रातः दुःख प्रायः स्वतः अंतःकरण उच्छृंखल षडानन"
      },
      {
        name: "शिफ्ट सेट 2 — शिफ्ट वर्णमाला पेयर्स व तीव्र अभ्यास (Shift Key Bigram Drill)",
        text: "कथ खत छट ठप फल भजन घध झढ ङञ षण शष श्र ज्ञ त्र क्ष ऋ ः ँ ॉ ऑ औ ऐ आ ई ऊ भ ङ घ ध झ ढ ञ ऑ ओ ए अ इ उ फ ख थ छ ठ ँ ण ळ श ष । क्षत्रिय त्रिभुज ज्ञानी श्रमिक ऋषिकेश प्रातःकाल अंतःकरण आँखें चाँदनी डॉक्टर कॉलेज औषधि ऐश्वर्य ओंकार औपचारिकता छत्रपति ढोलक ठकुराइन फणीश्वर घंटाघर धनंजय भागीरथी शमशेर षडानन"
      },
      {
        name: "शिफ्ट सेट 3 — शिफ्ट व्यंजन व स्वर गहन अभ्यास (ख, घ, छ, झ, ठ, ढ, थ, ध, फ, भ)",
        text: "खटिया खरगोश खजाना घटा घंटी घड़ियाल छाता छाया छिपकली झंडा झरना झरोखा ठाठ ठठेरा ठप्पा ढोलक ढलान ढक्कन थाली थर्मस थकावट धनुष धनवान धरोहर फल फसल फव्वारा भवन भगवान भलाई शंख शहद शहनाई षट्कोण षडानन धनुष चरण बाण वीणा ऋग्वेद ऋषि ऋण"
      }
    ]
  },
  {
    id: "matras",
    name: "3. समस्त मात्राएं एवं स्वर अभ्यास (All Matras & Vowels)",
    sets: [
      {
        name: "मात्रा सेट 1 — जटिल मात्राएं (ृ, ौ, ै, ो, ू, ी, ॉ, ॅ, ं, ँ, ः)",
        text: "ऋतु कृपा पृथ्वी दृष्टि प्रकृति संस्कृति दृष्टिकोण शृंखला ऊँचाई आँखें चाँद माँ बाँसुरी दुःख स्वतः प्रायः प्रातः अंतःकरण औद्योगिकीकरण प्रौद्योगिकी वैज्ञानिक ऐतिहासिक कौतूहल औषधि नौसेना दैनिक वैशिष्ट्य संकीर्णता रूपरेखा सौंदर्य कौमुदी वैदुष्य नैसर्गिकता प्रौढ़ता भौगोलिक भौतिकी रासायनिक जैतून तौलिया झोपड़ी चौपाल औषधालय वैचारिक वैधानिक औद्योगिक पैतृक वैतरणी कैकेयी सौहार्द नौसिखिया धौंकनी पौरोहित्य कौटिल्य भैरव शैशव वैराग्य भौमिक"
      },
      {
        name: "मात्रा सेट 2 — छोटी 'ि' व बड़ी 'ी' तथा छोटे 'ु' व बड़े 'ू' का भेद अभ्यास",
        text: "दिन दीन पिता पीता किला कील मिल मील सिल सील रवि रीवा कवि कीर्ति पति पीला गति गीत मति मीत कुल कूल पुल पूना धुल धूल सुख सूखा दुख दूर सुर सूर युग यूनानी रुक रूप गुरु गुरुकुल पशु पूज्य मनु मूरत साधु सूची तनु तूतिया वायु वानर बिंदु बूंद सिंधु सीमा"
      },
      {
        name: "मात्रा सेट 3 — अनुस्वार (ं), चन्द्रबिन्दु (ँ) व विसर्ग (ः) गहन अभ्यास",
        text: "संसार संबंध संगम संदेश संगीत संपादन आनंद पतंग तिरंगा मंदिर चंदन बंधन कंगन जंगल मंगल दंगल रंग तरंग चाँद आँख गाँव माँ पाँव बाँस छाँव दाँत साँप झाँसी ऊँट काँच फाँद बाँसुरी प्रातः प्रायः स्वतः अंतःकरण दुःख फलतः क्रमशः विशेषतः मूलतः निःस्वार्थ निःशुल्क निःसंदेह"
      }
    ]
  },
  {
    id: "rakar_reph",
    name: "4. 'र' के विभिन्न रूप — रकार ⇧#, रेफ ⇧$ व ट्र/ड्र",
    sets: [
      {
        name: "'र' सेट 1 — रकार (क्र, प्र, ग्र, ब्र, श्र, त्र) व रेफ (कर्म, धर्म, गर्व, सूर्य)",
        text: "प्रकाश प्रकृति प्रथम प्रयोग प्रक्रिया प्रमाण प्रभाव प्रसंग क्रिया क्रम क्रिकेट क्रांति ग्रामीण ग्राहक ट्रेन ट्रक ड्राइवर राष्ट्र राष्ट्रीय ड्रामा कार्य धर्म कर्म वर्ग गर्व मार्ग आशीर्वाद पुनर्विचार सूर्य धैर्य तर्क संदर्भ मर्यादा आकर्षण अंतर्विरोध अंतर्निहित संकीर्ण निर्मल पर्वत गर्जना दुरभिसंधि निर्दोष निर्भय निर्धारित वर्ष संघर्ष स्पर्श चक्र वक्र अग्र तीव्र शीघ्र सम्राट प्रेरणा"
      },
      {
        name: "'र' सेट 2 — कठिन र-संयुक्ताक्षर व प्रशासनिक शब्द संग्रह",
        text: "पुनरुत्थान अंतर्राष्ट्रीय कार्यप्रणाली कार्यपालिका क्षेत्राधिकार पुनरावलोकन प्रलेखन न्यायाभ्यास प्रतिपूर्ति परिसीमन कार्यवृत्त आर्द्र आर्द्रता शीर्ष शीर्षक विदीर्ण उत्तीर्ण संपूर्ण संकीर्णता दुर्दम्य निर्वचन अंतर्द्वंद्व सार्वभौमिक परामर्श प्राधिकरण प्रारूपकार प्रतिहस्ताक्षर अभिप्रेरणा संवर्द्धन पारगमन"
      }
    ]
  },
  {
    id: "speed_booster",
    name: "5. परीक्षा स्पीड बूस्टर पैसेज (Speed Booster Passage)",
    sets: [
      {
        name: "स्पीड बूस्टर पैसेज 1 — स्वावलंबन, तकनीक व प्रशासनिक कार्यप्रणाली",
        text: "भारतीय संस्कृति एवं सभ्यता में स्वावलंबन, त्याग और निष्पक्षता का सर्वोच्च स्थान रहा है। किसी भी लोकतांत्रिक राष्ट्र के सर्वांगीण विकास के लिए नागरिकों में उत्तरदायित्व, अनुशासन और वैज्ञानिक दृष्टिकोण का होना अत्यंत आवश्यक है। जब व्यक्ति अपने कर्तव्यों के प्रति समर्पित रहता है, तो समाज में सौहार्दपूर्ण वातावरण और परस्पर विश्वास बढ़ता है। आधुनिक प्रौद्योगिकी, औद्योगिकीकरण और डिजिटल क्रांति ने प्रशासनिक कार्यप्रणाली को तीव्र एवं पारदर्शी बना दिया है। हमें प्रकृति के संतुलन, जल संरक्षण, वृक्षारोपण और पर्यावरण सुरक्षा का भी पूर्ण ध्यान रखना होगा ताकि भावी पीढ़ियों का भविष्य उज्ज्वल और समृद्ध बन सके। परीक्षा में उच्च गति और शत-प्रतिशत शुद्धता प्राप्त करने के लिए प्रतिदिन अर्धाक्षर, मात्राओं और शिफ्ट कुंजियों का एकाग्रचित्त होकर अभ्यास करना ही सफलता की एकमात्र कुंजी है।"
      },
      {
        name: "स्पीड बूस्टर पैसेज 2 — न्यायपालिका, संविधान एवं विधि का शासन",
        text: "भारत का संविधान विश्व का सबसे विस्तृत और संप्रभु लोकतांत्रिक दस्तावेज है जो प्रत्येक नागरिक को समानता, स्वतंत्रता और न्याय का मौलिक अधिकार प्रदान करता है। स्वतंत्र और निष्पक्ष न्यायपालिका संविधान के संरक्षण और कानून के शासन को अक्षुण्ण रखने में महत्वपूर्ण भूमिका निभाती है। न्यायालयों में मुकदमों के त्वरित निस्तारण, विधि सम्मत फैसलों के अभिलेखीकरण और विधिक प्रलेखन के लिए कुशल एवं दक्ष कंप्यूटर ऑपरेटरों की आवश्यकता होती है। टंकण में उच्चतम गति के साथ-साथ वर्तनी, मात्राओं और विराम चिन्हों की पूर्ण शुद्धता बनाए रखना अत्यंत अपरिहार्य है। नियमित अभ्यास, एकाग्रता और सकारात्मक दृष्टिकोण से कोई भी अभ्यर्थी किसी भी कठिन परीक्षा में सफलता के नए आयाम स्थापित कर सकता है।"
      }
    ]
  },
  {
    id: "symbols_numbers",
    name: "6. विराम चिन्ह, संख्याएं एवं विशेष प्रतीक (Punctuation & Numbers)",
    sets: [
      {
        name: "प्रतीक सेट 1 — पूर्ण विराम (। = ⇧>), देवनागरी अंक, प्रश्नवाचक व उद्धरण",
        text: "भारत १ एक महान देश है। यहाँ २८ राज्य एवं ८ केंद्र शासित प्रदेश हैं। सत्य, अहिंसा और शांति—ये हमारे जीवन के मूल मंत्र हैं! क्या आप जानते हैं? सफलता के तीन नियम हैं: १. कठिन परिश्रम, २. दृढ़ संकल्प, तथा ३. निरंतर अभ्यास। \"कर्म ही पूजा है,\" यह उक्ति सर्वथा सत्य है (१९४७-२०२६)। कानून-व्यवस्था, न्यायपालिका और कार्यपालिका—तीनों का सामंजस्य अनिवार्य है। श्रीमान् / श्रीमती, दिनांक: १५/०८/२०२६, समय: १०:३० बजे। कुल योग: ₹५०,००० (पचास हजार रुपये मात्र)। १०% छूट के साथ कुल प्राप्तांक: ९८.५% रहा।"
      },
      {
        name: "प्रतीक सेट 2 — अंग्रेजी अंक (1, 2, 3...) व स्पेशल कैरेक्टर ड्रिल",
        text: "Case No. 4092/2026: Section 302, 307 & 120-B of IPC; Police Station: Hazratganj, Lucknow (U.P.) - 226001. Contact: +91-9876543210 | Email: support@typingguru.in. Test ID: #TG-89041 @ 10:15 AM. Speed: 35.50 WPM (Accuracy: 99.20%). Reference: [Govt. Order No. 512/VIII-1-2026], Dated: 12-08-2026. Note: Verify all facts & figures before final submission; 100% precision required!"
      }
    ]
  }
];

/* ── English Practice Drills (Dedicated & Completely Separate) ── */
const ENGLISH_PRACTICE_DRILLS = [
  {
    id: "en_home_row",
    name: "1. Home Row & Touch Typing (A S D F J K L ;)",
    sets: [
      {
        name: "Home Row Core — A S D F J K L ; (Finger Foundation)",
        text: "all ask fall flask glad hall lass salad sash alas dash flash glass slash alfalfa salad dad glad ask falls add flask gas lad shall dash salad sad ask flag half kafka fall glad flash alas dad flash fall glad salad hall lass flask sash dash alfalfa falls lad add gas dad sad flag half kafka all ask fall flask glad hall lass salad sash"
      },
      {
        name: "Top Row & Reach Expansion — Q W E R T Y U I O P (Reach Agility)",
        text: "type write quiet power tree root peer quote pretty paper power output query write tower report territory equip operate priority return require prototype property require output tweet query wiper poetry power write quote report tree paper power priority require territory property operate prototype equip write power tree type quote pretty report"
      },
      {
        name: "Bottom Row & Full Agility — Z X C V B N M , . / (Full Keyboard Flow)",
        text: "maximum zinc cabin amaze blaze brave bronze client carbon column complex combine examine example vanish vibrate volume vacuum zealous zigzag buzz zero zoom balance browse dynamic puzzle luxury exact zone examine matrix vanish bronze client column complex combine vibrate volume puzzle luxury maximum zinc cabin amaze brave blaze"
      }
    ]
  },
  {
    id: "en_shift_capitals",
    name: "2. Shift Keys & Capitalization (Uppercase & Acronyms)",
    sets: [
      {
        name: "Proper Nouns & World Geography (Capitals & Place Names)",
        text: "New Delhi London Washington Tokyo Paris Berlin Moscow Ottawa Canberra Beijing Singapore Cairo Madrid Rome Stockholm Dublin Amsterdam Brussels Vienna Bangkok Jakarta Seoul Brasilia Buenos Aires Wellington Copenhagen Helsinki Oslo Lisbon Athens Ankara Pretoria Nairobi New Delhi London Tokyo Washington Paris Berlin Moscow Ottawa Canberra Beijing Singapore Cairo Madrid"
      },
      {
        name: "Government, Legal & Corporate Acronyms (Fast Shift Transitions)",
        text: "UPPRPB UPSC SSC CGL CHSL IBPS SBI RBI IPC CrPC NCRB CCTNS AIIMS IIT IIM ISRO DRDO UNESCO UNICEF WHO WTO IMF NASA NATO Interpol Supreme Court High Court District Court Police Headquarters Ministry of Home Affairs Public Service Commission Directorate of Enforcement Comptroller and Auditor General Election Commission of India National Informatics Centre"
      },
      {
        name: "Mixed Title Case & Capitalized Sentences (Left/Right Shift Drill)",
        text: "The Constitution of India is the Supreme Law of the Sovereign Democratic Republic. The Supreme Court of India in New Delhi Delivered a Historic Judgment on Fundamental Rights. Every Citizen Must Uphold National Integrity, Public Order and Judicial Harmony. The Digital India Mission and National Cyber Security Policy Promote Technological Governance across the Nation."
      }
    ]
  },
  {
    id: "en_punctuation_symbols",
    name: "3. Punctuation & Special Symbols (Quotes, Semicolons & Symbols)",
    sets: [
      {
        name: "Quotes, Semicolons, Colons & Hyphens (Exam Punctuation Drill)",
        text: "Don't hesitate; it's essential. The Chairman stated: \"Dedication and honesty are non-negotiable.\" Rule No. 4(B) applies to all candidates; however, Section 12-A provides exceptions. Is it ready? Yes, it's 100% verified! Note: always double-check your facts, figures, and formatting—precision matters. Let's proceed: time is precious; don't make careless mistakes!"
      },
      {
        name: "Legal Citations & Case References (Judicial/Administrative Formatting)",
        text: "AIR 2026 SC 1428; (2025) 4 SCC 719 at p. 735. State of U.P. v. Ram Prakash & Ors., Criminal Appeal No. 492/2026 [Arising out of SLP (Crl.) No. 8912/2025]. IPC Sections: 302, 307, 420 & 120-B; CrPC Sec. 154(1) & 161(3). Order dated: 14.07.2026; Coram: Justice A.K. Sharma & Justice R.N. Verma. Reference: [G.O. No. 108/VIII-2-2026], Lucknow Bench."
      },
      {
        name: "Technical, Currency & Special Characters (@, #, $, %, &, *, /, _, +, =)",
        text: "Contact: support@typingguru.in | URL: https://typingguru.in/practice?user_id=1092&mode=strict. Server: 192.168.1.1:8080/api/v2/test_result#summary. Amount: $1,250.00 / ₹95,000/- (incl. 18% GST). Formula: A = P(1 + r/n)^(nt); Ratio: 16:9; Status: [ACTIVE] - 99.95% uptime. Hash: #TG-89041*SEC_2026 (Priority: High / Level: 05). Balance: +$450.00; Total: 100%."
      }
    ]
  },
  {
    id: "en_numbers_alphanumeric",
    name: "4. Numbers & Alphanumeric Drills (Number Row & Codes)",
    sets: [
      {
        name: "Top Number Row Mastery (0-9 Digits & Mixed Alphanumeric Sequences)",
        text: "Case 101 file 204 room 305 block 408 unit 509 ward 610 batch 712 code 819 zone 920 desk 135 port 246 item 357 rank 468 total 579 roll 680 pass 791 score 802 date 15/08/1947 year 2026 page 142 line 38 count 4905 time 10:45 AM speed 35.50 WPM score 98.75% room 204 block 509 code 819 port 246 total 579 batch 712 desk 135"
      },
      {
        name: "Official Dates, Contact Numbers, PIN Codes & Serial IDs",
        text: "FIR No. 208/2026, dated 15-08-2026; Mobile: +91-98765-43210, Landline: 0522-2401928; PIN: 226001, 110001, 400001, 700001, 600001; Aadhaar: 4920-1823-7645; Vehicle No. UP-32-AB-1234; Token: #TG-8902-X9; Transaction ID: TXN987654321012; Budget: ₹45,50,000.00; Percentage: 99.45% accuracy achieved in 15.00 minutes."
      }
    ]
  },
  {
    id: "en_tricky_spellings",
    name: "5. Tricky Words & Double Letters (Complex Spellings)",
    sets: [
      {
        name: "Double Letters Muscle Memory (cc, mm, ss, rr, ll, nn, pp, tt)",
        text: "accommodate embarrass harass occasion recommend necessary assess disappear committee occurrence aggression possess millennium successfully dilemma withhold misspell balloon exaggerate graffiti parallel interrupt privilege guarantee vacuum queue address bulletin collection discussion express flutter glitter happen illustrate juggle knuckle luggage mirror narrow opposite pattern qualify scribble trigger umbrella villain warrior yellow zigzag mattress broccoli zucchini espresso assessment occurrence possession aggressive questionnaire"
      },
      {
        name: "Tricky Letter Combinations & Silent Letters (ph, gh, gn, kn, mn, ps, sc, rh)",
        text: "rhythm twelfth lengths strengths awkward sphinx zephyr nymph abyss glyph kayak queue fjord yacht psychic vacuum igneous knapsack blizzard pharaoh asphyxia quartz jigsaw czar schism squeeze whisper zigzag gnash knoll wrist knuckle thumb solemn plumber crumb doubt subtle autumn hymn knight know knock knot gnarl gnome ghost ghetto ghastly drought light tight straight freight dough through although thorough throughout borough height weight weird sleigh neighbour freight reign foreign sovereign seize leisure receipt caffeine protein forfeit feint vein surveillance hygiene kaleidoscope receive ceiling deceive perceive conceit deceitful handkerchief hierarchy mischievous fiery sieve retrieve grieve relief belief cashier shield yield"
      },
      {
        name: "Competitive Exam Confusables & Frequently Misspelled Words",
        text: "conscientious prerequisite auxiliary surveillance supersede idiosyncrasy paraphernalia quintessential inadvertent acquiesce rendezvous bureaucracy maneuver camouflage hemorrhage lieutenant reconnaissance liaison sovereignty pseudonym disastrous pronunciation maintenance supersede rhythm gauge guarantee etiquette questionnaire prejudice leisure villain broccoli cemetery hierarchy weird accommodate occurrence privilege maintenance millennium judgment gauge separate definitely"
      }
    ]
  },
  {
    id: "en_speed_booster",
    name: "6. Exam Speed Booster Passages (High Speed Exam Passages)",
    sets: [
      {
        name: "Speed Booster 1 — Constitution, Rule of Law & Public Administration",
        text: "The Constitution of India is the supreme legal framework that governs the nation, ensuring equality, liberty, and justice to all citizens regardless of their background. An efficient, transparent, and responsive public administration is vital for upholding the rule of law and executing governmental policies with complete accountability. In this modern technological era, computer operators and administrative assistants play an indispensable role in maintaining accurate digital records, managing official communications, and accelerating judicial and executive workflows. Candidates preparing for high-speed typing examinations must maintain continuous finger rhythm, high mental concentration, and meticulous adherence to capitalization and punctuation marks. Regular daily practice on structured passages is the proven pathway to achieving benchmark speeds and complete transcription accuracy."
      },
      {
        name: "Speed Booster 2 — Digital Technology, Cyber Security & Law Enforcement",
        text: "Modern law enforcement agencies and judicial institutions rely heavily on computerized networks, biometric tracking databases, and high-speed data transmission systems. Initiatives like the Crime and Criminal Tracking Network and Systems (CCTNS) have interconnected thousands of police stations across the country, enabling immediate information sharing and enhanced investigative capabilities. In such critical operational environments, the role of skilled data processing personnel is paramount. A single clerical error in case registration, witness statement recording, or charge sheet filing can lead to significant legal complications. Therefore, typing proficiency demands not only swift key depression speed but also impeccable precision, disciplined backspace management, and strict compliance with standard keyboard layouts."
      }
    ]
  }
];

const PRACTICE_DRILLS = HINDI_PRACTICE_DRILLS;

/* ── Practice State ── */
let pracLang = "hindi"; // "hindi" | "english"
let pracCategory = "aadhe_akshar";
let pracSetIdx = 0;
let pracDurationSec = 120, pracTimeLeft = 120, pracTimerId = null, pracStartTime = 0;
let pracStarted = false, pracFinished = false;
let pracKbMode = "inscript";
let pracWordsData = [];
let pracBackspaceCount = 0;

/* ── DOM References ── */
const pracPassageEl = document.getElementById("pracPassage");
const pracInputEl = document.getElementById("pracInput");
const pracCatSeg = document.getElementById("pracCatSeg");
const pracSetSel = document.getElementById("pracSetSel");
const pracTimeV = document.getElementById("pracTimeV");
const pracWpmV = document.getElementById("pracWpmV");
const pracAccV = document.getElementById("pracAccV");
const pracErrV = document.getElementById("pracErrV");
const pracOverlay = document.getElementById("pracOverlay");
const pracEngWarn = document.getElementById("pracEngWarn");
const pracHeroBadge = document.getElementById("pracHeroBadge");
const pracHeroTitle = document.getElementById("pracHeroTitle");
const pracHeroDesc = document.getElementById("pracHeroDesc");
const guideBodyHi = document.getElementById("guideBodyHi");
const guideBodyEn = document.getElementById("guideBodyEn");
const guideTitleText = document.getElementById("guideTitleText");
const pracKbGroup = document.getElementById("pracKbGroup");

/* ── Helper to Get Active Drills Array ── */
function getActiveDrills() {
  return pracLang === "english" ? ENGLISH_PRACTICE_DRILLS : HINDI_PRACTICE_DRILLS;
}

/* ── Switch Practice Language (Hindi <-> English) ── */
function setPracticeLang(newLang) {
  pracLang = (newLang === "english") ? "english" : "hindi";

  // Update Language Segment UI
  document.querySelectorAll("#pracLangSeg button").forEach(b => {
    b.classList.toggle("active", b.dataset.plang === pracLang);
  });

  // Update Hero & Descriptions
  if (pracHeroBadge) {
    pracHeroBadge.textContent = (pracLang === "hindi")
      ? "🎯 Special Target Drill Practice"
      : "⚡ English Touch Typing & Speed Drills";
  }
  if (pracHeroTitle) {
    pracHeroTitle.textContent = (pracLang === "hindi")
      ? "मात्रा, अर्धाक्षर एवं शिफ्ट कुंजी विशेष अभ्यास · Matra & Shift Drills"
      : "English Typing Practice Drills · स्पीड व शुद्धता अभ्यास";
  }
  if (pracHeroDesc) {
    pracHeroDesc.textContent = (pracLang === "hindi")
      ? "हिंदी टाइपिंग में स्पीड बढ़ाने के लिए मात्राओं, हलंत (अर्धाक्षर) और Shift की वर्णों की अलग से डेली ड्रिल प्रैक्टिस करें।"
      : "Master touch typing rows, capital shift keys, punctuation, tricky spellings, numbers, and legal speed booster passages.";
  }

  // Update Cheatsheet Guide
  if (guideTitleText) {
    guideTitleText.textContent = (pracLang === "hindi")
      ? "Inscript Matra & Shift Quick Guide / शॉर्टकट नियम"
      : "English Touch Typing & Accuracy Guide / मुख्य नियम";
  }
  if (guideBodyHi && guideBodyEn) {
    if (pracLang === "hindi") {
      guideBodyHi.style.display = "";
      guideBodyEn.style.display = "none";
    } else {
      guideBodyHi.style.display = "none";
      guideBodyEn.style.display = "";
    }
  }

  // Hide or Show Keyboard Mode Option
  if (pracKbGroup) {
    pracKbGroup.style.display = (pracLang === "hindi") ? "" : "none";
  }

  // Update Input Attributes & Placeholder
  if (pracInputEl) {
    pracInputEl.setAttribute("lang", pracLang === "hindi" ? "hi" : "en");
    pracInputEl.placeholder = (pracLang === "hindi")
      ? "अभ्यास यहाँ टाइप करना शुरू करें… हर शब्द के बाद Space दबाएं। शब्द पर Hover करके इनस्क्रिप्ट की (Inscript keys) देखें।"
      : "Start typing the drill passage here… Press Space after each word. Maintain high accuracy and finger rhythm.";
  }

  // Update Warning Text
  if (pracEngWarn) {
    pracEngWarn.classList.remove("show");
    pracEngWarn.innerHTML = (pracLang === "hindi")
      ? "⚠ English letters detected. Switch to <b>Inscript (built-in)</b> mode above, or enable a Hindi keyboard on your system."
      : "⚠ Hindi characters detected. This is an <b>English</b> practice drill — please type in English.";
  }

  // Reset drill category & set
  const activeDrills = getActiveDrills();
  pracCategory = activeDrills[0] ? activeDrills[0].id : "";
  pracSetIdx = 0;

  initPracticeCategories();
  fillPracticeSets();
  pracReset();
}

/* ── Page Navigation Override ── */
window.switchPage = function(page, targetLang) {
  const setupView = document.getElementById("viewSetup");
  const testView = document.getElementById("viewTest");
  const practiceView = document.getElementById("viewPractice");

  if (typeof timerId !== "undefined" && timerId) { clearInterval(timerId); timerId = null; }
  if (pracTimerId) { clearInterval(pracTimerId); pracTimerId = null; }

  if (page === "test") {
    if (setupView) { setupView.style.display = "none"; setupView.classList.remove("active"); }
    if (practiceView) { practiceView.style.display = "none"; practiceView.classList.remove("active"); }
    if (testView) { testView.style.display = "block"; testView.classList.add("active"); }
    document.body.classList.add("in-test-view");
    if (typeof reset === "function") reset();
    const inp = document.getElementById("input");
    if (inp) inp.focus();
  } else if (page === "practice") {
    if (setupView) { setupView.style.display = "none"; setupView.classList.remove("active"); }
    if (testView) { testView.style.display = "none"; testView.classList.remove("active"); }
    const ov = document.getElementById("overlay");
    if (ov) ov.classList.remove("show");
    const revOv = document.getElementById("reviewOverlay");
    if (revOv) revOv.classList.remove("show");
    if (practiceView) {
      practiceView.style.display = "block";
      practiceView.classList.add("active");
    }
    document.body.classList.remove("in-test-view");

    if (targetLang) {
      setPracticeLang(targetLang);
    } else {
      const mainLang = document.getElementById("langSel")?.value;
      if (mainLang && mainLang !== pracLang) {
        setPracticeLang(mainLang);
      } else {
        pracReset();
      }
    }
  } else {
    // Setup Page
    if (testView) { testView.style.display = "none"; testView.classList.remove("active"); }
    if (practiceView) { practiceView.style.display = "none"; practiceView.classList.remove("active"); }
    if (setupView) { setupView.style.display = "block"; setupView.classList.add("active"); }
    document.body.classList.remove("in-test-view");
    const ov = document.getElementById("overlay");
    if (ov) ov.classList.remove("show");
    const revOv = document.getElementById("reviewOverlay");
    if (revOv) revOv.classList.remove("show");
    if (pracOverlay) pracOverlay.classList.remove("show");
  }
};

/* ── Initialize Category Buttons ── */
function initPracticeCategories() {
  if (!pracCatSeg) return;
  pracCatSeg.innerHTML = "";
  const drills = getActiveDrills();

  if (!drills.some(c => c.id === pracCategory) && drills[0]) {
    pracCategory = drills[0].id;
  }

  drills.forEach(cat => {
    const btn = document.createElement("button");
    btn.dataset.cat = cat.id;
    btn.textContent = cat.name;
    if (cat.id === pracCategory) btn.classList.add("active");
    btn.addEventListener("click", () => {
      document.querySelectorAll("#pracCatSeg button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      pracCategory = cat.id;
      pracSetIdx = 0;
      fillPracticeSets();
      pracReset();
    });
    pracCatSeg.appendChild(btn);
  });
}

/* ── Fill Drill Sets in Select Dropdown ── */
function fillPracticeSets() {
  if (!pracSetSel) return;
  pracSetSel.innerHTML = "";
  const drills = getActiveDrills();
  const catObj = drills.find(c => c.id === pracCategory) || drills[0];
  if (!catObj) return;

  catObj.sets.forEach((s, idx) => {
    const opt = document.createElement("option");
    opt.value = idx;
    opt.textContent = s.name;
    pracSetSel.appendChild(opt);
  });
}

/* ── Load Drill Passage & Build Word Tokens ── */
function loadPracticeDrill() {
  if (!pracPassageEl) return;
  const drills = getActiveDrills();
  const catObj = drills.find(c => c.id === pracCategory) || drills[0];
  const setObj = (catObj && catObj.sets[pracSetIdx]) ? catObj.sets[pracSetIdx] : (catObj ? catObj.sets[0] : null);
  if (!setObj) return;

  const words = setObj.text.split(" ");
  pracPassageEl.innerHTML = "";
  pracWordsData = [];

  words.forEach((wtext, wi) => {
    const wspan = document.createElement("span");
    wspan.className = "word";
    wspan.dataset.word = wtext;
    const gs = (pracLang === "hindi" && typeof graphemes === "function")
      ? graphemes(wtext)
      : Array.from(wtext);

    const wspans = gs.map(g => {
      const s = document.createElement("span");
      s.className = "g";
      s.textContent = g;
      wspan.appendChild(s);
      return s;
    });
    pracPassageEl.appendChild(wspan);
    let spaceSpan = null;
    if (wi < words.length - 1) {
      spaceSpan = document.createElement("span");
      spaceSpan.className = "g";
      spaceSpan.textContent = " ";
      pracPassageEl.appendChild(spaceSpan);
    }
    pracWordsData.push({ text: wtext, g: gs, el: wspan, spans: wspans, spaceSpan });
  });

  if (pracWordsData[0]) {
    pracWordsData[0].el.classList.add("active");
    if (pracWordsData[0].spans[0]) pracWordsData[0].spans[0].classList.add("cur");
  }
  attachPracticeTooltips();
}

/* ── Attach Inscript Tooltips (Hindi Only) ── */
function attachPracticeTooltips() {
  if (!pracPassageEl) return;
  if (pracLang !== "hindi") return;

  pracPassageEl.querySelectorAll(".word").forEach(w => {
    w.addEventListener("mouseenter", () => {
      if (pracLang === "hindi" && typeof showTip === "function") showTip(w);
    });
    w.addEventListener("mouseleave", () => {
      if (typeof hideTip === "function") hideTip();
    });
    w.addEventListener("touchstart", () => {
      if (pracLang === "hindi" && typeof showTip === "function") {
        showTip(w);
        setTimeout(() => { if (typeof hideTip === "function") hideTip(); }, 2500);
      }
    }, { passive: true });
  });
}

/* ── Time Calculations ── */
function pracElapsedMin() {
  if (!pracStarted || !pracStartTime) return 1 / 60;
  const m = (Date.now() - pracStartTime) / 60000;
  return Math.max(m, 1 / 60);
}

function pracStartTimer() {
  pracStarted = true;
  pracStartTime = Date.now();
  pracTimerId = setInterval(() => {
    if (pracDurationSec > 0) {
      pracTimeLeft--;
      const formatted = (typeof fmt === "function")
        ? fmt(pracTimeLeft)
        : `${Math.floor(pracTimeLeft / 60)}:${String(pracTimeLeft % 60).padStart(2, "0")}`;
      if (pracTimeV) pracTimeV.textContent = formatted;
      if (pracTimeLeft <= 10) document.getElementById("pracTimerStat")?.classList.add("low");
      pracUpdateStats();
      if (pracTimeLeft <= 0) pracFinish();
    } else {
      // Free mode: count upwards
      const elSec = Math.floor((Date.now() - pracStartTime) / 1000);
      const formatted = (typeof fmt === "function")
        ? fmt(elSec)
        : `${Math.floor(elSec / 60)}:${String(elSec % 60).padStart(2, "0")}`;
      if (pracTimeV) pracTimeV.textContent = formatted;
      pracUpdateStats();
    }
  }, 1000);
}

/* ── Live Text Comparison ── */
function pracCompare() {
  if (!pracInputEl) return { aligned: [], unattempted: [], bestI: 0 };
  const typedTokens = (typeof getTypedTokens === "function")
    ? getTypedTokens(pracInputEl.value, pracFinished)
    : [];
  const targetWords = pracWordsData.map(w => w.text);
  const { aligned, unattempted, bestI } = (typeof alignWordsPrefix === "function")
    ? alignWordsPrefix(targetWords, typedTokens)
    : { aligned: [], unattempted: [], bestI: 0 };

  pracWordsData.forEach(w => {
    w.el.className = "word";
    w.spans.forEach(s => s.className = "g");
    if (w.spaceSpan) w.spaceSpan.className = "g";
  });

  aligned.forEach(item => {
    if (item.targetIdx === null) return;
    const w = pracWordsData[item.targetIdx];
    if (!w) return;
    if (item.isCurrent) {
      w.el.classList.add("active");
      const uG = (pracLang === "hindi" && typeof graphemes === "function")
        ? graphemes(item.typed)
        : Array.from(item.typed);
      w.spans.forEach((s, idx) => {
        if (idx < uG.length) {
          s.classList.add(uG[idx] === w.g[idx] ? "ok" : "bad");
        } else if (idx === uG.length) {
          s.classList.add("cur");
        }
      });
    } else {
      if (item.target === item.typed) {
        w.el.classList.add("done-ok");
      } else {
        w.el.classList.add("done-bad");
      }
    }
  });

  const curItem = aligned.find(it => it.isCurrent);
  if (!curItem && bestI < pracWordsData.length && !pracFinished) {
    const nextW = pracWordsData[bestI];
    if (nextW) {
      nextW.el.classList.add("active");
      if (nextW.spans[0]) nextW.spans[0].classList.add("cur");
    }
  }

  // Auto-scroll passage
  const activeWordEl = pracPassageEl.querySelector(".word.active");
  if (activeWordEl) {
    const parent = pracPassageEl.parentElement;
    if (parent) {
      const topOffset = activeWordEl.offsetTop - parent.offsetTop;
      if (topOffset > parent.clientHeight * 0.6 || topOffset < parent.clientHeight * 0.1) {
        parent.scrollTo({ top: topOffset - parent.clientHeight * 0.35, behavior: "smooth" });
      }
    }
  }

  return { aligned, unattempted, bestI };
}

/* ── Live Stats Calculation ── */
function pracUpdateStats() {
  const { aligned } = pracCompare();
  const elMin = pracElapsedMin();
  let correctCount = 0;
  let errorCount = 0;
  let totalChars = 0;

  aligned.forEach(it => {
    if (it.isCurrent) return;
    if (it.target === it.typed) {
      correctCount++;
      totalChars += (it.target ? it.target.length + 1 : 0);
    } else if (it.typed) {
      errorCount++;
      totalChars += (it.typed.length + 1);
    }
  });

  const attempted = correctCount + errorCount;
  const grossWpm = (totalChars / 5) / elMin;
  const netWpm = Math.max(0, (correctCount / elMin));
  const accuracy = attempted > 0 ? ((correctCount / attempted) * 100) : 100;

  if (pracWpmV) pracWpmV.textContent = pracStarted ? netWpm.toFixed(0) : "0";
  if (pracAccV) pracAccV.textContent = pracStarted ? accuracy.toFixed(1) + "%" : "0%";
  if (pracErrV) pracErrV.textContent = `${correctCount} / ${errorCount}`;

  return { correctCount, errorCount, attempted, netWpm, grossWpm, accuracy, elMin };
}

/* ── Finish Drill & Display Results ── */
function pracFinish() {
  if (pracFinished) return;
  pracFinished = true;
  clearInterval(pracTimerId); pracTimerId = null;
  if (pracInputEl) pracInputEl.disabled = true;

  const stats = pracUpdateStats();
  const drills = getActiveDrills();
  const catObj = drills.find(c => c.id === pracCategory) || drills[0];
  const setObj = (catObj && catObj.sets[pracSetIdx]) ? catObj.sets[pracSetIdx] : (catObj ? catObj.sets[0] : null);

  const rwpm = document.getElementById("pracResWpm");
  if (rwpm) rwpm.textContent = stats.netWpm.toFixed(2);
  const rname = document.getElementById("pracResName");
  if (rname) rname.textContent = setObj ? setObj.name : "Drill Set";
  const rtot = document.getElementById("pracResTotal");
  if (rtot) rtot.textContent = stats.attempted;
  const rpure = document.getElementById("pracResPure");
  if (rpure) rpure.textContent = stats.correctCount;
  const rerr = document.getElementById("pracResErr");
  if (rerr) rerr.textContent = stats.errorCount;
  const racc = document.getElementById("pracResAcc");
  if (racc) racc.textContent = stats.accuracy.toFixed(2);
  const rtime = document.getElementById("pracResTime");
  if (rtime) rtime.textContent = stats.elMin.toFixed(2);
  const rback = document.getElementById("pracResBackspaces");
  if (rback) rback.textContent = pracBackspaceCount;

  const badge = document.getElementById("pracResBadge");
  if (badge) {
    const minBenchmarkWpm = (pracLang === "hindi") ? 25 : 35;
    if (stats.accuracy >= 95 && stats.netWpm >= minBenchmarkWpm) {
      badge.className = "r-qual-badge qual-pass";
      badge.textContent = (pracLang === "hindi")
        ? "EXCELLENT · उत्कृष्ट गति व शुद्धता"
        : "EXCELLENT · High Speed & Precision";
    } else if (stats.accuracy >= 85) {
      badge.className = "r-qual-badge qual-pass";
      badge.textContent = (pracLang === "hindi")
        ? "GOOD DRILL · अच्छा अभ्यास"
        : "GOOD DRILL · Well Done";
    } else {
      badge.className = "r-qual-badge qual-fail";
      badge.textContent = (pracLang === "hindi")
        ? "PRACTICE MORE · पुनः अभ्यास करें"
        : "PRACTICE MORE · Retake Drill";
    }
  }

  if (pracOverlay) pracOverlay.classList.add("show");
}

/* ── Reset Drill Arena ── */
function pracReset() {
  clearInterval(pracTimerId); pracTimerId = null;
  pracStarted = false; pracFinished = false;
  pracStartTime = 0;
  pracBackspaceCount = 0;
  pracTimeLeft = pracDurationSec;
  if (pracInputEl) {
    pracInputEl.value = "";
    pracInputEl.disabled = false;
  }
  
  if (pracTimeV) {
    pracTimeV.textContent = (pracDurationSec > 0)
      ? ((typeof fmt === "function") ? fmt(pracTimeLeft) : "02:00")
      : "00:00";
  }
  document.getElementById("pracTimerStat")?.classList.remove("low");
  if (pracWpmV) pracWpmV.textContent = "0";
  if (pracAccV) pracAccV.textContent = "0%";
  if (pracErrV) pracErrV.textContent = "0 / 0";
  
  if (pracOverlay) pracOverlay.classList.remove("show");
  if (pracEngWarn) pracEngWarn.classList.remove("show");
  if (typeof hideTip === "function") hideTip();
  loadPracticeDrill();

  const practiceView = document.getElementById("viewPractice");
  if (practiceView && practiceView.style.display !== "none" && pracInputEl) {
    pracInputEl.focus();
  }
}

/* ── Setup Practice Events & Key Handlers ── */
function setupPracticeEvents() {
  if (pracInputEl) {
    pracInputEl.addEventListener("keydown", e => {
      if (e.key === "Backspace") pracBackspaceCount++;
      if (typeof playKeySound === "function") playKeySound();

      // Only intercept for Inscript when in Hindi mode
      if (pracLang !== "hindi" || pracKbMode !== "inscript") return;
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      const k = e.key;
      if (k.length !== 1) return;
      if (k === " " || k === "," || k === ".") return;
      const mapped = (typeof INS !== "undefined") ? INS[k] : undefined;
      e.preventDefault();
      if (mapped === undefined && !/[()\-!?]/.test(k)) return;
      const insert = mapped !== undefined ? mapped : k;
      const st = pracInputEl.selectionStart, en = pracInputEl.selectionEnd;
      pracInputEl.value = pracInputEl.value.slice(0, st) + insert + pracInputEl.value.slice(en);
      const pos = st + insert.length;
      pracInputEl.setSelectionRange(pos, pos);
      pracInputEl.dispatchEvent(new Event("input", { bubbles: true }));
    });

    pracInputEl.addEventListener("input", () => {
      if (pracFinished) return;
      if (!pracStarted && pracInputEl.value.length > 0) pracStartTimer();

      if (pracLang === "hindi") {
        if (/[A-Za-z]/.test(pracInputEl.value)) {
          if (pracEngWarn) pracEngWarn.classList.add("show");
        } else {
          if (pracEngWarn) pracEngWarn.classList.remove("show");
        }
      } else {
        if (/[\u0900-\u097F]/.test(pracInputEl.value)) {
          if (pracEngWarn) {
            pracEngWarn.innerHTML = "⚠ Hindi characters detected. This is an <b>English</b> practice drill — please type in English.";
            pracEngWarn.classList.add("show");
          }
        } else {
          if (pracEngWarn) pracEngWarn.classList.remove("show");
        }
      }
      
      pracUpdateStats();
      const tws = (typeof getTypedTokens === "function") ? getTypedTokens(pracInputEl.value, false) : [];
      const lastW = pracWordsData[pracWordsData.length - 1];
      if (tws.length > pracWordsData.length ||
         (tws.length === pracWordsData.length && !tws[tws.length - 1].isCurrent && (pracLang === "hindi" && typeof graphemes === "function" ? graphemes(tws[tws.length - 1].text).length : tws[tws.length - 1].text.length) >= (lastW ? lastW.g.length : 0))) {
        pracFinish();
      }
    });

    pracInputEl.addEventListener("paste", e => e.preventDefault());
  }

  // Language Bar Switcher
  document.querySelectorAll("#pracLangSeg button").forEach(b => {
    b.addEventListener("click", () => {
      setPracticeLang(b.dataset.plang);
    });
  });

  if (pracSetSel) {
    pracSetSel.addEventListener("change", () => {
      pracSetIdx = +pracSetSel.value || 0;
      pracReset();
    });
  }

  document.querySelectorAll("#pracDurSeg button").forEach(b => {
    b.addEventListener("click", () => {
      document.querySelectorAll("#pracDurSeg button").forEach(x => x.classList.remove("active"));
      b.classList.add("active");
      pracDurationSec = (+b.dataset.min) * 60;
      pracReset();
    });
  });

  document.querySelectorAll("#pracKbSeg button").forEach(b => {
    b.addEventListener("click", () => {
      document.querySelectorAll("#pracKbSeg button").forEach(x => x.classList.remove("active"));
      b.classList.add("active");
      pracKbMode = b.dataset.kb;
      if (pracInputEl) pracInputEl.focus();
    });
  });

  const openPracticeNavBtn = document.getElementById("openPracticeNavBtn");
  if (openPracticeNavBtn) {
    openPracticeNavBtn.addEventListener("click", () => {
      const mainLang = document.getElementById("langSel")?.value || "hindi";
      switchPage("practice", mainLang);
    });
  }

  const openPracticeBtn = document.getElementById("openPracticeBtn");
  if (openPracticeBtn) {
    openPracticeBtn.addEventListener("click", () => switchPage("practice", "hindi"));
  }

  const openPracEnBtn = document.getElementById("openPracEnBtn");
  if (openPracEnBtn) {
    openPracEnBtn.addEventListener("click", () => switchPage("practice", "english"));
  }

  const pracBackBtn = document.getElementById("pracBackBtn");
  if (pracBackBtn) pracBackBtn.addEventListener("click", () => switchPage("setup"));

  const pracRestartBtn = document.getElementById("pracRestartBtn");
  if (pracRestartBtn) pracRestartBtn.addEventListener("click", pracReset);

  const pracResBackSetupBtn = document.getElementById("pracResBackSetupBtn");
  if (pracResBackSetupBtn) pracResBackSetupBtn.addEventListener("click", () => switchPage("setup"));

  const pracAgainBtn = document.getElementById("pracAgainBtn");
  if (pracAgainBtn) pracAgainBtn.addEventListener("click", () => {
    if (pracOverlay) pracOverlay.classList.remove("show");
    pracReset();
  });

  const pracNextBtn = document.getElementById("pracNextBtn");
  if (pracNextBtn) {
    pracNextBtn.addEventListener("click", () => {
      if (pracOverlay) pracOverlay.classList.remove("show");
      const drills = getActiveDrills();
      const catObj = drills.find(c => c.id === pracCategory) || drills[0];
      if (catObj && pracSetIdx + 1 < catObj.sets.length) {
        pracSetIdx++;
      } else {
        const catIdx = drills.findIndex(c => c.id === pracCategory);
        const nextCat = drills[(catIdx + 1) % drills.length];
        pracCategory = nextCat.id;
        pracSetIdx = 0;
        document.querySelectorAll("#pracCatSeg button").forEach(b => {
          b.classList.toggle("active", b.dataset.cat === pracCategory);
        });
      }
      fillPracticeSets();
      if (pracSetSel) pracSetSel.value = pracSetIdx;
      pracReset();
    });
  }

  const toggleGuideBtn = document.getElementById("toggleGuideBtn");
  if (toggleGuideBtn) {
    toggleGuideBtn.addEventListener("click", () => {
      const body = document.getElementById("guideBody");
      const text = document.getElementById("guideToggleText");
      if (!body || !text) return;
      if (body.style.display === "none") {
        body.style.display = "";
        text.textContent = "छिपाएं ▲";
      } else {
        body.style.display = "none";
        text.textContent = "दिखाएं ▼";
      }
    });
  }
}

// Initialize on load
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initPracticeCategories();
    fillPracticeSets();
    loadPracticeDrill();
    setupPracticeEvents();
  });
} else {
  initPracticeCategories();
  fillPracticeSets();
  loadPracticeDrill();
  setupPracticeEvents();
}
