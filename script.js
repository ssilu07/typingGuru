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
    {name:"जल की आत्मकथा", text:"इतने दिन आनंद से काटने के पश्चात् अब दुख सहन करने का साहस हममें न था। बहुत पता लगाने पर हमें ज्ञात हुआ कि हमारे भार से ही हमारे नीचेवाले भाई दबकर पानी हो गए हैं। उनका शरीर ठोसपन को छोड़ चुका है और उनके तरल शरीर पर हम फिसल चले हैं। मैं कई मास समुद्र में इधर-उधर घूमती रही। फिर एक दिन गर्म-धारा से भेंट हो गई। धारा के जलते अस्तित्व को ठंडक पहुँचाने के लिए हमने उसकी गर्मी सोखनी प्रारंभ कर दी और इसके फलस्वरूप मैं पिघल पड़ी और पानी बनकर समुद्र में मिल गई। समुद्र का भाग बनकर मैंने जो दृश्य देखा वह वर्णनातीत है।"}
  ]
};

const EN_LEVELS = {
  easy: [
    {name:"The Sun", text:"The sun rises in the east. It gives us light and heat. Plants need sunlight to grow. We should not look directly at the sun. It sets in the west every evening. The day begins with sunrise. Animals wake up in the morning. Farmers start their work at dawn. Children go to school after sunrise. The sun is very important for life on earth."},
    {name:"My Pet Dog", text:"I have a pet dog. His name is Bruno. He is brown and white. Bruno loves to play fetch. Every morning I take him for a walk. He wags his tail when he is happy. Bruno barks at strangers to protect our home. He eats twice a day. I give him fresh water every morning. Bruno sleeps near my bed at night. He is my best friend."},
    {name:"The Library", text:"Our school has a big library. It has thousands of books. Students can borrow books for two weeks. The library is open every day except Sunday. We must keep quiet inside the library. Books on science, history and fiction are arranged on different shelves. The librarian helps us find the right book. Reading regularly improves our vocabulary. I visit the library every week to find new stories."}
  ],
  medium: [
    {name:"Technology Today", text:"Technology has changed the way we live and work. Smartphones allow us to communicate instantly across the globe. Artificial intelligence is transforming industries from healthcare to finance. Electric vehicles are reducing our dependence on fossil fuels. However, we must also address the challenges that come with rapid technological advancement, including data privacy and job displacement."},
    {name:"Climate Change", text:"Climate change is one of the most pressing issues of our time. Rising global temperatures are causing glaciers to melt and sea levels to rise. Extreme weather events are becoming more frequent and severe. Governments, businesses, and individuals must work together to reduce carbon emissions. Transitioning to renewable energy sources is essential for a sustainable future."},
    {name:"The Value of Reading", text:"Reading is one of the most valuable habits a person can develop. Books expand our knowledge, improve our vocabulary, and enhance our ability to think critically. Fiction allows us to experience different perspectives and cultures without leaving home. Non-fiction keeps us informed about the world. In an age of digital distractions, making time to read remains one of the best investments we can make."}
  ],
  hard: [
    {name:"Artificial Intelligence", text:"Artificial intelligence represents one of the most transformative technological developments in human history. Machine learning algorithms, trained on vast datasets, can now perform tasks that were once exclusively the domain of human cognition. From natural language processing to computer vision, AI systems demonstrate capabilities that challenge our understanding of intelligence itself. Yet these advances also raise profound ethical questions about accountability, bias, and the future of human labor."},
    {name:"Quantum Computing", text:"Quantum computing harnesses the principles of quantum mechanics to process information in fundamentally different ways from classical computers. Qubits, unlike classical bits, can exist in superposition states, enabling quantum computers to explore multiple solutions simultaneously. While still in its nascent stages, quantum computing promises to revolutionize fields such as cryptography, drug discovery, and optimization problems that currently require enormous computational resources."},
    {name:"Neuroscience Frontier", text:"Modern neuroscience has made remarkable strides in unraveling the mysteries of the human brain. Advanced neuroimaging techniques allow researchers to observe neural activity in real time, revealing how thoughts, emotions, and memories are formed and stored. The discovery of neuroplasticity has overturned long-held beliefs about the brain's fixed nature, demonstrating that it can reorganize itself throughout life. These insights are transforming our approaches to treating neurological and psychiatric disorders."}
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
