/* =====================================================
   TypingGuru — UP Police SI/ASI & Legal Exam Logic
   script.js
   ===================================================== */

/* ── Web Audio Synthesizer for Keystrokes ── */
let audioCtx = null;
let soundEnabled = false;

function playKeySound() {
  if (!soundEnabled) return;
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    
    // Short typewriter-like mechanical click sound
    osc.type = "sine";
    osc.frequency.setValueAtTime(450, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(120, audioCtx.currentTime + 0.035);

    gain.gain.setValueAtTime(0.18, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.035);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 0.04);
  } catch (e) {
    // AudioContext blocked or not supported
  }
}

/* ── Hindi Passages ── */
const LEVELS = {
  easy: [
    {id: "10101", name: "मेरा घर", text: "यह मेरा घर है। घर के पास एक बाग है। बाग में आम और नीम के पेड़ हैं। पेड़ों पर चिड़िया रहती हैं। सुबह हम सब सैर करने जाते हैं। माता जी खाना बनाती हैं। पिता जी काम पर जाते हैं। मेरी बहन गाना गाती है। हम सब मिलकर रहते हैं। शाम को हम आँगन में खेलते हैं। दादा जी हमें कहानी सुनाते हैं। दादी जी हमें प्यार करती हैं। रात को हम जल्दी सोते हैं और सुबह जल्दी उठते हैं। हमारा घर सबसे अच्छा है। घर में सब खुश रहते हैं।"},
    {id: "10102", name: "मेरा विद्यालय", text: "मेरा विद्यालय बहुत सुंदर है। यहाँ हरे भरे पेड़ हैं। पेड़ों की छाया में बैठना अच्छा लगता है। कक्षा में हम पढ़ते और लिखते हैं। गुरु जी हमें अच्छी बातें बताते हैं। वे हमें गिनती और पहाड़े सिखाते हैं। खेल के समय हम मैदान में जाते हैं। वहाँ हम दौड़ लगाते हैं और गेंद से खेलते हैं। मेरे विद्यालय में एक बड़ा पुस्तकालय भी है। वहाँ हम कहानी की किताबें पढ़ते हैं। हम समय पर विद्यालय आते हैं और मन लगाकर पढ़ते हैं। हम अपनी कक्षा को साफ रखते हैं। मुझे अपना विद्यालय बहुत अच्छा लगता है।"},
    {id: "10103", name: "सुबह की सैर", text: "सुबह की सैर सेहत के लिए अच्छी होती है। ठंडी हवा मन को ताजा कर देती है। पक्षी मीठे स्वर में गाते हैं। फूलों पर तितलियाँ उड़ती हैं। लोग बाग में टहलते हैं और योग करते हैं। बच्चे दौड़ लगाते हैं और खूब हँसते हैं। बड़े लोग घास पर बैठकर बातें करते हैं। सूरज की पहली किरण से दिन की शुरुआत होती है। सैर करने से शरीर में ताकत आती है। मन भी खुश रहता है और पढ़ाई में मन लगता है। जो रोज सुबह टहलता है, वह कम बीमार पड़ता है। इसलिए हमें रोज सुबह जल्दी उठना चाहिए और सैर करने जाना चाहिए।"}
  ],
  medium: [
    {id: "20201", name: "भारत — सामान्य परिचय", text: "भारत एक विशाल देश है। यहाँ अनेक भाषाएँ बोली जाती हैं और विभिन्न धर्मों के लोग मिलजुल कर रहते हैं। हमारे देश की संस्कृति अत्यंत प्राचीन और समृद्ध है। गंगा, यमुना और ब्रह्मपुत्र जैसी नदियाँ इस भूमि को उपजाऊ बनाती हैं। किसान परिश्रम से अन्न उगाते हैं और देश की प्रगति में योगदान देते हैं। हमें अपने देश पर गर्व है।"},
    {id: "20202", name: "परिश्रम का महत्व", text: "परिश्रम ही सफलता की कुंजी है। जो व्यक्ति निरंतर मेहनत करता है, वह अपने लक्ष्य को अवश्य प्राप्त करता है। आलस्य मनुष्य का सबसे बड़ा शत्रु है। विद्यार्थी जीवन में समय का सदुपयोग करना अत्यंत आवश्यक है। जो समय बीत जाता है, वह लौटकर नहीं आता। इसलिए हमें अपने कार्य को पूरी लगन तथा निष्ठा से करना चाहिए।"},
    {id: "20203", name: "पर्यावरण संरक्षण", text: "पर्यावरण की रक्षा करना हम सबका दायित्व है। वृक्ष हमें ऑक्सीजन देते हैं, वर्षा लाने में सहायता करते हैं और भूमि के कटाव को रोकते हैं। बढ़ते प्रदूषण के कारण जलवायु परिवर्तन की समस्या गंभीर होती जा रही है। हमें अधिक से अधिक पेड़ लगाने चाहिए और जल का संरक्षण करना चाहिए। स्वच्छ पर्यावरण ही स्वस्थ जीवन का आधार है।"}
  ],
  hard: [
    {id: "39041", name: "Legal - आपराधिक दायित्व और साक्ष्य अधिनियम - Passage 9", text: "विद्वान अधिवक्ता ने आरोप पत्र में उपलब्ध सामग्री की ओर न्यायालय का ध्यान आकर्षित किया। उन्होंने प्रस्तुत किया कि अभियुक्त संख्या चार उस फर्म के स्वामी हैं जिन्होंने भवन निर्माण परियोजना का कार्यभार संभाला था। विविध निर्माण कार्यों के लिए उप-अनुबंध दिए गए थे। कांच लगाने का कार्य अन्य ठेकेदारों को सौंपा गया था जो अभियुक्त संख्या एक और दो हैं। निर्माण स्थल पर पाड़ बांधने और मजदूरों की प्रतिनियुक्ति का पूर्ण नियंत्रण उन्हीं ठेकेदारों के अधीन था। वर्तमान अभियुक्त पर प्रतिनिधिक दायित्व नहीं थोपा जा सकता। अतः उन्मोचन की प्रार्थना की गई। दूसरी ओर विद्वान अभियोजक ने आवेदन का विरोध करते हुए कहा कि अभियुक्त के विरुद्ध पर्याप्त साक्ष्य मौजूद हैं। लापरवाही से मृत्यु कारित करने के अपराध में भारतीय दंड संहिता की धारा 304ए के अंतर्गत उतावलेपन या उपेक्षापूर्ण कृत्य का सीधा संबंध साबित होना अनिवार्य है। आपराधिक विधि में जब तक विधि द्वारा स्पष्ट प्रावधान न हो, प्रतिनिधिक दायित्व लागू नहीं होता।"},
    {id: "39042", name: "Police Admin - पुलिस प्रशासन और सीसीटीएनएस प्रणाली", text: "उत्तर प्रदेश पुलिस प्रशासन राज्य में कानून और व्यवस्था बनाए रखने के लिए एक प्रमुख स्तंभ है। पुलिस विभाग का मुख्य उद्देश्य नागरिकों को सुरक्षित वातावरण प्रदान करना और अपराधों पर नियंत्रण रखना है। एक कंप्यूटर ऑपरेटर के रूप में, आपको पुलिस विभाग की विभिन्न तकनीकी और प्रशासनिक प्रक्रियाओं का हिस्सा बनने का अवसर मिलता है। आधुनिक युग में पुलिस प्रशासन ने भी तकनीकीकरण की दिशा में महत्वपूर्ण कदम उठाए हैं, जिससे कार्यक्षमता और पारदर्शिता में काफी वृद्धि हुई है। पुलिस स्टेशनों का कंप्यूटरीकरण, ऑनलाइन एफआईआर दर्ज करने की सुविधा, और क्रिमिनल ट्रैकिंग नेटवर्क सिस्टम (CCTNS) जैसी पहल इसी दिशा में किए गए महत्वपूर्ण प्रयास हैं। इन प्रणालियों के प्रभावी संचालन के लिए एक कंप्यूटर ऑपरेटर की भूमिका अत्यंत महत्वपूर्ण होती है।"},
    {id: "39043", name: "Cyber Law - साइबर अपराध और आईटी एक्ट 2000", text: "सूचना प्रौद्योगिकी के इस तेजी से बदलते युग में, जहाँ इंटरनेट और डिजिटल उपकरणों ने हमारे जीवन को बेहद सुविधाजनक बना दिया है, वहीं साइबर अपराध जैसी गंभीर चुनौतियां भी सामने आई हैं। साइबर अपराध में वे सभी गैरकानूनी गतिविधियां शामिल हैं, जो कंप्यूटर, नेटवर्क या डिजिटल उपकरणों के माध्यम से की जाती हैं। इनमें हैकिंग, फिशिंग, ऑनलाइन धोखाधड़ी, पहचान की चोरी और साइबर बुलिंग जैसी कई गतिविधियां शामिल हैं। भारत सरकार ने इन साइबर अपराधों से निपटने और इलेक्ट्रॉनिक कॉमर्स को कानूनी मान्यता प्रदान करने के लिए सूचना प्रौद्योगिकी अधिनियम (IT Act), 2000 लागू किया था। यह अधिनियम डिजिटल हस्ताक्षरों को मान्यता देता है और इलेक्ट्रॉनिक गवर्नेंस को बढ़ावा देने के लिए एक मजबूत कानूनी ढांचा प्रदान करता है।"}
  ],
  words: [
    {id: "40101", name: "कठिन शब्द एवं संयुक्त अक्षर", text: "दृष्टिकोण षट्कोण स्वास्थ्य परिस्थिति कृतज्ञता आशीर्वाद उज्ज्वल सम्मुख प्रशासनिक प्रौद्योगिकी न्यायालय अधिप्रमाणन साक्ष्य अनुसमर्थन औपचारिकताएं पुनरावलोकन उत्तरदायित्व क्षेत्राधिकार प्रत्यायोजित प्रतिनिधायन समनुदेशन व्यादेश संव्यवहार समामेलन संपरिवर्तन अधिहरण प्रतिभूति क्षतिपूर्ति प्रतिहस्ताक्षर"}
  ]
};

/* ── English Passages ── */
const EN_LEVELS = {
  easy: [
    {
      id: "19011",
      name: "General - The Importance of Trees",
      text: "Trees are an essential part of our natural environment and play a foundational role in sustaining the ecological balance of planet Earth. They provide us with oxygen, which is vital for the survival of humans, animals, and all living beings. Through the miraculous process of photosynthesis, trees absorb carbon dioxide from the surrounding atmosphere and release clean, breathable oxygen. This natural cycle not only purifies the air we breathe on a daily basis but also substantially mitigates the harmful effects of greenhouse gases, thereby combating global climate change. Furthermore, trees offer crucial shade, shelter, and sustenance to countless species of birds, insects, and mammals, fostering rich biodiversity within terrestrial habitats."
    },
    {
      id: "19012",
      name: "General - Healthy Habits and Exercise",
      text: "Cultivating and maintaining healthy eating habits is one of the most powerful decisions an individual can make to ensure long-term vitality, disease prevention, and sustained physical and mental well-being throughout their life. A wholesome, well-balanced diet supplies the human body with the foundational macronutrients, essential micronutrients, vitamins, and minerals necessary for optimal physiological functioning. A nutritious plate should prominently feature a diverse assortment of fresh vegetables, whole seasonal fruits, unrefined whole grains, lean protein sources, and beneficial dietary fats."
    }
  ],
  medium: [
    {
      id: "29021",
      name: "Cyber Crime - Information Technology & Security",
      text: "In recent years, the rapid growth of the internet and digital technologies has revolutionized the way we communicate, work, and conduct business. However, this digital boom has also given rise to a new breed of criminal activities known collectively as cybercrime. Cybercrime encompasses a wide range of illegal activities carried out using computers, networks, and the internet. These include hacking, identity theft, financial fraud, phishing, ransomware attacks, and cyberbullying. As technology evolves, so do the methods employed by cybercriminals, making it increasingly challenging for law enforcement agencies to combat these threats."
    },
    {
      id: "29022",
      name: "E-Governance - Police Administration & CCTNS",
      text: "The Uttar Pradesh Police is one of the largest single police forces in the world. It is the law enforcement agency for the state of Uttar Pradesh in India. Headquartered in Lucknow, the UP Police is headed by the Director General of Police. Working as a computer operator in the UP Police is a matter of great pride and responsibility. A computer operator plays a vital role in the daily functioning of the police department. They are responsible for managing data, generating reports, handling communication, and assisting in the digital transformation of the police force."
    }
  ],
  hard: [
    {
      id: "39041",
      name: "Legal - Criminal Negligence Liability - Passage 9",
      text: "The learned Advocate for the accused pointed out the material available in the charge-sheet. He submitted that the accused no.4 is the owners of the firm who undertook to construct the building / project. The contract and sub-contracts were given for miscellaneous works. The contract of fixing glass was given to another contractor who is an accused no.1 and 2. The said accused were having control over the construction as well as fixing the scaffolding by deputing the labours as well as by taking the proper care and precaution. The present accused cannot be saddled with the vicarious liability. Hence, prayed for discharge. The Learned DGP opposed the application contending that there is a sufficient material against the accused. The accused failed to install new and fresh scaffolding. The one which was in use was old one and not suitable. Hence, prayed for rejection of application. The offence of causing death by negligence is required an act of rash or negligence not amounting to culpable homicide. The accused must and with some intention needs to do certain act which may be rash or negligent so as to cause harm to the others. In present case, as per the material on record, present accused are the owners of a construction firm who undertook to carry out the construction. Thus, prima facie, the direct involvement of present accused of rash or negligence at the site seems to be very remote. Even it is to be noted that the contract and subcontracts of construction as well as fixing glass was allotted to the contractors and such contractors are already implicated as an accused. Thus, the offence, rather the main offence of causing death by negligence, does not attract as against present accused. The accused are also booked for the offence of causing disappearance of evidence of offence and intentional omission to give information of offence by person bound to inform. Both the offences are interlinked. The present accused being owner of the firm, having no control over the activities going on at the site. The contractor and subcontractors were deployed for the assigned works to them. It was, in that case their responsibility to communicate the happening and non-happening of any events. So far the offence of common intention is concerned, there cannot be such intention as the deceased accidentally fell and succumbed to the injuries. Thus, there won't be any question of common intention. Establishing an offence under Section 304A of the Indian Penal Code requires proving a direct, immediate causal link between the accused's rash or negligent act and the victim's death. Criminal law does not recognize vicarious liability unless expressly provided by statute, meaning corporate directors or firm partners cannot be held criminally liable for supervisory oversights by independent contractors."
    },
    {
      id: "39042",
      name: "Legal - Civil Injunctions and Appellate Jurisdiction",
      text: "The appellant preferred an appeal against the order of the High Court rejecting the interlocutory injunction application under Order 39 Rules 1 and 2 of the Code of Civil Procedure. The fundamental principles governing the grant of temporary injunction are well established, namely, prima facie case, balance of convenience, and irreparable injury to the party seeking relief. When an appellate court is called upon to review a discretionary order passed by the trial court, it will not interfere merely because on the same facts it might have taken a different view. Interference is justified only when the exercise of discretion is arbitrary, capricious, or perverse."
    },
    {
      id: "39043",
      name: "Constitutional Law - Writ Jurisdiction & Due Process",
      text: "Under Article 226 of the Constitution of India, the High Courts are vested with extraordinary powers to issue directions, orders, or writs, including writs in the nature of habeas corpus, mandamus, prohibition, quo warranto, and certiorari, for the enforcement of fundamental rights and for any other purpose. The rule of natural justice is an integral part of fair administrative and judicial procedure. No person should be condemned unheard, and the adjudicating authority must act without bias or preconceived prejudice."
    }
  ],
  words: [
    {
      id: "49001",
      name: "Hard Words — Legal, Admin & Tech Terms",
      text: "aberration acquiesce idiosyncratic juxtaposition magnanimous quintessential reconnaissance serendipity supercilious verisimilitude obfuscate grandiloquent sesquipedalian pulchritude cacophony perfunctory mellifluous recalcitrant surreptitious perspicacious fastidious esoteric pernicious innocuous capricious anomalous facetious loquacious voracious insidious auspicious obsequious tremulous nebulous precarious tenacious sagacious zealous meticulous luminous vivacious frivolous judicious garrulous pugnacious bellicose phlegmatic vehement lugubrious trenchant obdurate perspicacity sycophantic ephemeral ubiquitous jurisprudence indemnification confidentiality"
    }
  ]
};

const LANGS = { hindi: LEVELS, english: EN_LEVELS };

/* ── Inscript Keyboard Mapping (Mangal / Devanagari) ── */
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

/* ── DOM Elements ── */
const el = id => document.getElementById(id);
const passageEl = el("passage");
const inputEl = el("input");
const timeV = el("timeV");
const wpmV = el("wpmV");
const accV = el("accV");
const errV = el("errV");
const sel = el("passageSel");
const overlay = el("overlay");
const tip = el("tip");
const engWarn = el("engWarn");
const testHeaderTitle = el("testHeaderTitle");
const testSubTitle = el("testSubTitle");
const candidateNameDisp = el("candidateNameDisp");

/* ── State ── */
let lang = "english";
let level = "hard";
let durationSec = 15 * 60; // 15 min default matching exam
let kbMode = "inscript";
let hlMode = localStorage.getItem("tg-hl") || "on";
let timeLeft = durationSec;
let timerId = null;
let started = false;
let finished = false;
let startTime = 0;
let backspaceCount = 0;
let wordsData = [];
let currentPassageObj = null;

/* ── Fullscreen Support ── */
el("fullscreenBtn").addEventListener("click", () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else {
    document.exitFullscreen().catch(() => {});
  }
});

/* ── Audio Keystroke Toggle ── */
function updateAudioIcons() {
  el("audioIconMute").style.display = soundEnabled ? "none" : "";
  el("audioIconOn").style.display = soundEnabled ? "" : "none";
  document.querySelectorAll("#soundSeg button").forEach(b => {
    b.classList.toggle("active", (b.dataset.sound === "on") === soundEnabled);
  });
}

el("audioToggleBtn").addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  localStorage.setItem("tg-sound", soundEnabled ? "on" : "off");
  updateAudioIcons();
  if (soundEnabled && !audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
});

document.querySelectorAll("#soundSeg button").forEach(b => {
  b.addEventListener("click", () => {
    soundEnabled = (b.dataset.sound === "on");
    localStorage.setItem("tg-sound", soundEnabled ? "on" : "off");
    updateAudioIcons();
    if (soundEnabled && !audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
  });
});

if (localStorage.getItem("tg-sound") === "on") {
  soundEnabled = true;
  updateAudioIcons();
}

/* ── Font Size Switcher (A-, A, A+) ── */
function applyFontSize(size) {
  document.body.classList.remove("font-sm", "font-md", "font-lg", "font-xl");
  document.body.classList.add(`font-${size}`);
  document.querySelectorAll("#fontSizeGroup .font-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.size === size);
  });
  localStorage.setItem("tg-fontsize", size);
}

document.querySelectorAll("#fontSizeGroup .font-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    applyFontSize(btn.dataset.size);
  });
});

const savedFontSize = localStorage.getItem("tg-fontsize") || "md";
applyFontSize(savedFontSize);

/* ── Exam Preset Mapping ── */
const EXAM_PRESETS = {
  uppolice_en: { lang: "english", title: "UP Police SI/ASI/Computer Operator English Typing" },
  uppolice_hi: { lang: "hindi",   title: "UP Police SI/ASI/Computer Operator Hindi Typing (Mangal Inscript)" },
  ahc_ro:      { lang: "english", title: "Allahabad High Court RO/ARO / Legal Typing Examination" },
  ssc_cgl:     { lang: "english", title: "SSC CGL / CHSL DEST Skill Test Interface" },
  cpct_exam:   { lang: "hindi",   title: "CPCT / State Govt Typing Proficiency Examination" }
};

el("examPresetSel").addEventListener("change", e => {
  const preset = EXAM_PRESETS[e.target.value];
  if (preset) {
    el("langSel").value = preset.lang;
    lang = preset.lang;
    testSubTitle.textContent = preset.title;
    syncLanguageUI();
    fillSelect();
    reset();
  }
});

/* ── Settings Drawer Modal ── */
const settingsOverlay = el("settingsOverlay");
const fabSettingsBtn = el("fabSettingsBtn");
const closeSettingsBtn = el("closeSettingsBtn");
const drawerCloseDoneBtn = el("drawerCloseDoneBtn");

function openSettings() {
  settingsOverlay.classList.add("show");
}
function closeSettings() {
  settingsOverlay.classList.remove("show");
  inputEl.focus();
}

fabSettingsBtn.addEventListener("click", openSettings);
closeSettingsBtn.addEventListener("click", closeSettings);
drawerCloseDoneBtn.addEventListener("click", closeSettings);

/* ── Candidate Name Sync ── */
const nameIn = el("nameIn");
function syncCandidateName() {
  const val = nameIn.value.trim() || "SUMIT";
  candidateNameDisp.textContent = val.toUpperCase();
  el("rName").textContent = val.toUpperCase();
  localStorage.setItem("tg-name", val);
}
nameIn.addEventListener("input", syncCandidateName);
if (localStorage.getItem("tg-name")) {
  nameIn.value = localStorage.getItem("tg-name");
  syncCandidateName();
}

/* ── Graphemes & Word Splitting ── */
function graphemes(str) {
  if (typeof Intl !== "undefined" && Intl.Segmenter) {
    const seg = new Intl.Segmenter("hi", { granularity: "grapheme" });
    return Array.from(seg.segment(str), s => s.segment);
  }
  return Array.from(str);
}

/* ── Header Title Sync ── */
function updateHeaderInfo() {
  if (!currentPassageObj) return;
  const testId = currentPassageObj.id ? `Typing Test Id ${currentPassageObj.id} - ` : "Typing Test - ";
  testHeaderTitle.textContent = testId + currentPassageObj.name;
}

/* ── Passage Loading ── */
function fillSelect() {
  const list = LANGS[lang][level] || [];
  sel.innerHTML = "";
  list.forEach((p, idx) => {
    const opt = document.createElement("option");
    opt.value = idx;
    opt.textContent = (p.id ? `[${p.id}] ` : "") + p.name;
    sel.appendChild(opt);
  });
  if (list.length > 0) {
    sel.selectedIndex = 0;
  }
}

function loadPassage() {
  const list = LANGS[lang][level] || [];
  const idx = parseInt(sel.value, 10) || 0;
  currentPassageObj = list[idx] || list[0] || { name: "Passage", text: "" };
  const raw = currentPassageObj.text;

  updateHeaderInfo();

  passageEl.innerHTML = "";
  wordsData = [];

  const rawWords = raw.split(" ");
  rawWords.forEach((rw, wi) => {
    const wSpan = document.createElement("span");
    wSpan.className = "word";
    wSpan.dataset.w = rw;

    const gs = graphemes(rw);
    const spans = [];
    gs.forEach(g => {
      const s = document.createElement("span");
      s.className = "g";
      s.textContent = g;
      wSpan.appendChild(s);
      spans.push(s);
    });

    let spaceSpan = null;
    if (wi < rawWords.length - 1) {
      spaceSpan = document.createElement("span");
      spaceSpan.className = "g space-marker";
      spaceSpan.textContent = " ";
      wSpan.appendChild(spaceSpan);
    }

    if (lang === "hindi") {
      wSpan.addEventListener("mouseenter", e => showTip(rw, e));
      wSpan.addEventListener("mouseleave", hideTip);
    }

    passageEl.appendChild(wSpan);
    wordsData.push({ el: wSpan, text: rw, g: gs, spans, spaceSpan });
  });

  if (wordsData.length > 0 && hlMode !== "off") {
    wordsData[0].el.classList.add("active");
  }
}

/* ── Tooltip for Hindi Keys ── */
function showTip(word, e) {
  if (lang !== "hindi") return;
  const keys = keysForWord(word);
  let html = `<div style="font-weight:700;margin-bottom:3px;border-bottom:1px solid rgba(255,255,255,0.2);padding-bottom:2px;">${word}</div>`;
  html += `<div style="display:flex;gap:4px;flex-wrap:wrap;">`;
  keys.forEach(({ u, k }) => {
    html += `<span><span style="opacity:0.75">${u}</span> <b style="color:#60a5fa">${k}</b></span>`;
  });
  html += `</div>`;
  tip.innerHTML = html;
  tip.style.display = "block";
  const r = e.target.getBoundingClientRect();
  const x = Math.min(Math.max(10, r.left + window.scrollX), window.innerWidth - 270);
  const y = r.bottom + window.scrollY + 6;
  tip.style.left = x + "px";
  tip.style.top = y + "px";
}
function hideTip() { tip.style.display = "none"; }

/* ── Timer Format ── */
function fmt(t) {
  const m = Math.floor(t / 60);
  const s = t % 60;
  return String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
}

function startTimer() {
  started = true;
  startTime = Date.now();
  timerId = setInterval(() => {
    timeLeft--;
    timeV.textContent = fmt(timeLeft);
    if (timeLeft <= 15) el("timerStat").classList.add("low");
    updateStats();
    if (timeLeft <= 0) finish();
  }, 1000);
}

function elapsedMin() {
  if (!started || !startTime) return 1 / 60;
  const m = (Date.now() - startTime) / 60000;
  return Math.min(Math.max(m, 1 / 60), durationSec / 60);
}

/* ── Word Evaluation & Errors ── */
const PUNCT_REGEX = /[\.,!?:;\"'()\-—–/\\“”‘’।]/g;
function stripPunct(s) {
  return (s || "").replace(PUNCT_REGEX, "");
}

let lastTestStats = null;
let currentReviewFilter = "mistakes";

function compare() {
  wordsData.forEach(w => {
    w.el.classList.remove("active");
    w.spans.forEach(s => s.classList.remove("ok", "bad", "half-bad", "cur"));
    if (w.spaceSpan) w.spaceSpan.classList.remove("ok", "bad", "half-bad", "cur");
  });

  let typedWords = inputEl.value.split(" ");
  if (finished) {
    while (typedWords.length && typedWords[typedWords.length - 1] === "") typedWords.pop();
  }
  const lastIdx = typedWords.length - 1;
  const targetWords = wordsData.map(w => w.text);

  let okWords = 0;
  let fullMistakes = 0;
  let halfMistakes = 0;
  let attempted = 0;

  const transposed = new Set();
  const spacingErrors = new Set();

  for (let wi = 0; wi < typedWords.length && wi < wordsData.length; wi++) {
    const isCurrent = (wi === lastIdx) && !finished;
    if (isCurrent) continue;

    if (wi < typedWords.length - 1 && wi < targetWords.length - 1 && !transposed.has(wi)) {
      if (typedWords[wi] === targetWords[wi + 1] && typedWords[wi + 1] === targetWords[wi] && typedWords[wi] !== targetWords[wi]) {
        transposed.add(wi);
        transposed.add(wi + 1);
      }
    }

    if (wi < targetWords.length - 1 && typedWords[wi] === targetWords[wi] + targetWords[wi + 1]) {
      spacingErrors.add(wi);
    }
    if (wi < typedWords.length - 1 && typedWords[wi] + typedWords[wi + 1] === targetWords[wi]) {
      spacingErrors.add(wi);
    }
  }

  const reviewItems = [];

  for (let wi = 0; wi < typedWords.length && wi < wordsData.length; wi++) {
    const tw = graphemes(typedWords[wi]);
    const W = wordsData[wi];
    const isCurrent = (wi === lastIdx) && !finished;
    const typedWord = typedWords[wi];
    const targetWord = W.text;

    let mistakeType = null;
    let category = "Correct / शुद्ध";
    let reason = "सही शब्द (Word matches target)";

    if (typedWord === targetWord) {
      mistakeType = null;
      category = "Correct / शुद्ध";
      reason = "सही शब्द (Exact Match)";
    } else if (transposed.has(wi)) {
      mistakeType = "half";
      category = "Transposition / क्रम विपरिवर्तन";
      reason = "शब्दों का क्रम आपस में बदल गया (Transposed adjacent words)";
    } else if (spacingErrors.has(wi)) {
      mistakeType = "half";
      category = "Spacing Error / स्पेस की गलती";
      reason = "स्पेस छूट गया या अनावश्यक स्पेस लगा (Merged / Split word)";
    } else {
      const strippedTyped = stripPunct(typedWord);
      const strippedTarget = stripPunct(targetWord);

      if (strippedTyped === strippedTarget && strippedTyped.length > 0) {
        mistakeType = "half";
        category = "Punctuation / विराम चिह्न";
        reason = `विराम चिह्न अशुद्धि (Expected "${targetWord}")`;
      } else if (lang === "english") {
        if (typedWord.toLowerCase() === targetWord.toLowerCase()) {
          mistakeType = "half";
          category = "Capitalisation / केस त्रुटि";
          reason = `कैपिटल/स्मॉल अक्षर की गलती (Expected "${targetWord}")`;
        } else if (strippedTyped.toLowerCase() === strippedTarget.toLowerCase() && strippedTyped.length > 0) {
          mistakeType = "half";
          category = "Case & Punctuation";
          reason = `विराम चिह्न व केस त्रुटि (Expected "${targetWord}")`;
        } else {
          mistakeType = "full";
          category = "Spelling / गलत शब्द";
          reason = `गलत हिज्जे / शब्द (Expected "${targetWord}")`;
        }
      } else {
        mistakeType = "full";
        category = "Spelling / गलत शब्द";
        reason = `मात्रा या वर्ण अशुद्धि (Expected "${targetWord}")`;
      }
    }

    if (hlMode !== "off") {
      for (let i = 0; i < W.g.length; i++) {
        const s = W.spans[i];
        if (i < tw.length) {
          if (tw[i] === W.g[i]) {
            s.classList.add("ok");
          } else if (mistakeType === "half") {
            s.classList.add("half-bad");
          } else {
            s.classList.add("bad");
          }
        } else if (!isCurrent) {
          s.classList.add(mistakeType === "half" ? "half-bad" : "bad");
        }
      }
    }

    if (!isCurrent) {
      attempted++;
      if (mistakeType === null) {
        okWords++;
        if (W.spaceSpan && hlMode !== "off") W.spaceSpan.classList.add("ok");
      } else if (mistakeType === "half") {
        halfMistakes++;
        if (W.spaceSpan && hlMode !== "off") W.spaceSpan.classList.add("half-bad");
      } else {
        fullMistakes++;
        if (W.spaceSpan && hlMode !== "off") W.spaceSpan.classList.add("bad");
      }

      reviewItems.push({
        index: wi + 1,
        targetWord,
        typedWord,
        status: mistakeType === null ? "ok" : mistakeType,
        category,
        reason,
        penalty: mistakeType === null ? 0 : (mistakeType === "half" ? 0.5 : 1.0)
      });
    }

    if (isCurrent) {
      if (hlMode !== "off") {
        W.el.classList.add("active");
      }
      let curSpan = null;
      if (tw.length < W.g.length) curSpan = W.spans[tw.length];
      else if (W.spaceSpan) curSpan = W.spaceSpan;
      if (curSpan) {
        if (hlMode !== "off") {
          curSpan.classList.add("cur");
        }
        curSpan.scrollIntoView({ block: "nearest" });
      }
    }
  }

  for (let wi = wordsData.length; wi < typedWords.length; wi++) {
    attempted++;
    fullMistakes++;
    reviewItems.push({
      index: wi + 1,
      targetWord: "— (गद्यांश समाप्त)",
      typedWord: typedWords[wi],
      status: "full",
      category: "Extra Word / अतिरिक्त शब्द",
      reason: "गद्यांश की सीमा से बाहर टाइप किया गया अतिरिक्त शब्द।",
      penalty: 1.0
    });
  }

  const unattemptedItems = [];
  if (finished) {
    for (let wi = typedWords.length; wi < wordsData.length; wi++) {
      unattemptedItems.push({
        index: wi + 1,
        targetWord: wordsData[wi].text,
        typedWord: "—",
        status: "skip",
        category: "Unattempted / छूटा शब्द",
        reason: "समय समाप्त होने तक यह शब्द टाइप नहीं किया गया।",
        penalty: 0
      });
    }
  }

  const totalMistakes = fullMistakes + (halfMistakes * 0.5);
  const pureWords = Math.max(0, attempted - totalMistakes);

  return {
    okWords,
    fullMistakes,
    halfMistakes,
    totalMistakes,
    pureWords,
    attempted,
    reviewItems,
    unattemptedItems
  };
}

/* ── Stats ── */
function updateStats() {
  const s = compare();
  const min = elapsedMin();
  const keystrokes = Array.from(inputEl.value).length;
  const totalPassageWords = wordsData.length;
  const grossSpeed = min > 0 ? (s.attempted / min) : 0;
  const netSpeed = min > 0 ? (s.pureWords / min) : 0;
  const acc = s.attempted > 0 ? ((s.pureWords * 100) / s.attempted) : (totalPassageWords > 0 ? 0 : 100);

  wpmV.textContent = started ? netSpeed.toFixed(1) : "0";
  accV.textContent = acc.toFixed(1) + "%";
  errV.textContent = started ? `${s.fullMistakes} / ${s.halfMistakes}` : "0 / 0";

  return { ...s, min, grossSpeed, netSpeed, acc, totalPassageWords, keystrokes };
}

/* ── Finish & Result ── */
function finish() {
  if (finished) return;
  finished = true;
  clearInterval(timerId);
  inputEl.disabled = true;
  const s = updateStats();
  lastTestStats = s;

  syncCandidateName();
  el("rWpm").textContent = s.netSpeed.toFixed(2);
  el("rGross").textContent = s.grossSpeed.toFixed(2);
  el("rPassageTotal").textContent = s.totalPassageWords;
  el("rTotal").textContent = s.attempted;
  el("rPure").textContent = Number.isInteger(s.pureWords) ? s.pureWords : s.pureWords.toFixed(1);
  el("rFullErr").textContent = s.fullMistakes;
  el("rHalfErr").textContent = s.halfMistakes;
  el("rTotalErr").textContent = Number.isInteger(s.totalMistakes) ? s.totalMistakes : s.totalMistakes.toFixed(1);
  el("rKeys").textContent = s.keystrokes;
  el("rBackspaces").textContent = backspaceCount;
  el("rAcc").textContent = s.acc.toFixed(2);
  el("rTime").textContent = s.min.toFixed(2);

  overlay.classList.add("show");
}

function reset() {
  clearInterval(timerId);
  timerId = null;
  started = false;
  finished = false;
  startTime = 0;
  backspaceCount = 0;
  lastTestStats = null;
  timeLeft = durationSec;

  inputEl.value = "";
  inputEl.disabled = false;
  timeV.textContent = fmt(timeLeft);
  el("timerStat").classList.remove("low");
  wpmV.textContent = "0";
  accV.textContent = "0%";
  errV.textContent = "0 / 0";

  overlay.classList.remove("show");
  if (el("reviewOverlay")) el("reviewOverlay").classList.remove("show");
  engWarn.classList.remove("show");
  hideTip();

  if (hlMode === "off") {
    passageEl.classList.add("no-highlight");
  } else {
    passageEl.classList.remove("no-highlight");
  }

  loadPassage();
  inputEl.focus();
}

/* ── Review Mode Functions ── */
function escapeHtml(str) {
  if (!str) return "";
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function showWordDetail(item) {
  const detailCard = el("revDetailCard");
  const badge = el("rdBadge");
  badge.className = `rd-badge badge-${item.status}`;
  badge.textContent = item.status === "ok" ? "Correct (शुद्ध)"
    : item.status === "half" ? "Half Mistake (0.5)"
    : item.status === "full" ? "Full Mistake (1.0)"
    : "Unattempted (छूटा)";

  el("rdIndex").textContent = `Word #${item.index}`;
  el("rdTarget").textContent = item.targetWord;
  el("rdTyped").textContent = item.typedWord;
  el("rdReason").textContent = item.reason;
  detailCard.style.display = "block";
}

function renderReviewPassage(stats) {
  const revPassageEl = el("revPassage");
  revPassageEl.innerHTML = "";
  el("revDetailCard").style.display = "none";

  const allItems = [...stats.reviewItems, ...stats.unattemptedItems];
  
  allItems.forEach((item, i) => {
    const span = document.createElement("span");
    span.className = `rev-word w-${item.status}`;
    span.textContent = (item.status === "full" && item.targetWord.startsWith("—")) ? item.typedWord : item.targetWord;
    span.dataset.idx = i;
    
    span.addEventListener("click", () => {
      revPassageEl.querySelectorAll(".rev-word").forEach(w => w.classList.remove("w-selected"));
      span.classList.add("w-selected");
      showWordDetail(item);
    });

    revPassageEl.appendChild(span);
    revPassageEl.appendChild(document.createTextNode(" "));
  });

  const firstMistake = allItems.find(it => it.status === "full" || it.status === "half") || allItems[0];
  if (firstMistake) {
    const idx = allItems.indexOf(firstMistake);
    const span = revPassageEl.querySelector(`[data-idx="${idx}"]`);
    if (span) {
      span.classList.add("w-selected");
      showWordDetail(firstMistake);
    }
  }
}

function renderReviewTable(stats, filter) {
  currentReviewFilter = filter;
  const tbody = el("revTableBody");
  tbody.innerHTML = "";
  const empty = el("revEmpty");

  const allItems = [...stats.reviewItems, ...stats.unattemptedItems];
  let filtered = [];

  if (filter === "mistakes") {
    filtered = stats.reviewItems.filter(it => it.status === "full" || it.status === "half");
  } else if (filter === "full") {
    filtered = stats.reviewItems.filter(it => it.status === "full");
  } else if (filter === "half") {
    filtered = stats.reviewItems.filter(it => it.status === "half");
  } else {
    filtered = allItems;
  }

  const mistakesCount = stats.fullMistakes + stats.halfMistakes;
  el("cntMistakes").textContent = mistakesCount;
  el("cntFull").textContent = stats.fullMistakes;
  el("cntHalf").textContent = stats.halfMistakes;
  el("cntAll").textContent = allItems.length;

  if (filtered.length === 0) {
    empty.style.display = "block";
    return;
  }
  empty.style.display = "none";

  filtered.forEach(item => {
    const tr = document.createElement("tr");
    const badgeClass = item.status;
    const badgeText = item.status === "ok" ? "Correct"
      : item.status === "half" ? "Half (0.5)"
      : item.status === "full" ? "Full (1.0)"
      : "Skip";

    tr.innerHTML = `
      <td>${item.index}</td>
      <td style="font-family:var(--font-serif);color:var(--ok)"><b>${escapeHtml(item.targetWord)}</b></td>
      <td style="font-family:var(--font-serif);color:${item.status === 'ok' ? 'var(--ok)' : (item.status === 'half' ? 'var(--half)' : 'var(--bad)')}">
        <b>${escapeHtml(item.typedWord)}</b>
      </td>
      <td><span class="tb-badge ${badgeClass}">${badgeText}</span></td>
      <td>${escapeHtml(item.reason)}</td>
      <td style="font-family:var(--font-mono);font-weight:600;color:${item.penalty > 0 ? 'var(--bad)' : 'var(--text-dim)'}">
        ${item.penalty > 0 ? `-${item.penalty}` : '0.0'}
      </td>
    `;

    tr.addEventListener("click", () => {
      const revPassageEl = el("revPassage");
      const allItems = [...stats.reviewItems, ...stats.unattemptedItems];
      const idx = allItems.indexOf(item);
      if (idx !== -1) {
        const span = revPassageEl.querySelector(`[data-idx="${idx}"]`);
        if (span) {
          revPassageEl.querySelectorAll(".rev-word").forEach(w => w.classList.remove("w-selected"));
          span.classList.add("w-selected");
          span.scrollIntoView({ behavior: "smooth", block: "center" });
          showWordDetail(item);
        }
      }
    });

    tbody.appendChild(tr);
  });
}

function openReviewModal() {
  if (!lastTestStats) return;
  overlay.classList.remove("show");
  
  el("revPure").textContent = Number.isInteger(lastTestStats.pureWords) ? lastTestStats.pureWords : lastTestStats.pureWords.toFixed(1);
  el("revFull").textContent = lastTestStats.fullMistakes;
  el("revHalf").textContent = lastTestStats.halfMistakes;
  el("revTotalErr").textContent = Number.isInteger(lastTestStats.totalMistakes) ? lastTestStats.totalMistakes : lastTestStats.totalMistakes.toFixed(1);
  el("revAcc").textContent = lastTestStats.acc.toFixed(2) + "%";
  el("revSpeed").textContent = lastTestStats.netSpeed.toFixed(2) + " WPM";

  renderReviewPassage(lastTestStats);
  renderReviewTable(lastTestStats, "mistakes");

  document.querySelectorAll("#revFilterSeg button").forEach(b => {
    b.classList.toggle("active", b.dataset.filter === "mistakes");
  });

  el("reviewOverlay").classList.add("show");
}

function closeReviewModal() {
  el("reviewOverlay").classList.remove("show");
  overlay.classList.add("show");
}

/* ── Keyboard & Typing Event Listeners ── */
inputEl.addEventListener("keydown", e => {
  playKeySound();
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
  inputEl.dispatchEvent(new Event("input", { bubbles: true }));
});

inputEl.addEventListener("input", () => {
  if (finished) return;
  if (!started && inputEl.value.length > 0) startTimer();

  if (lang === "hindi" && /[A-Za-z]/.test(inputEl.value)) {
    engWarn.innerHTML = "⚠ English letters detected. Switch to <b>Inscript (built-in)</b> in settings, or enable a Hindi keyboard.";
    engWarn.classList.add("show");
  } else if (lang === "english" && /[\u0900-\u097F]/.test(inputEl.value)) {
    engWarn.innerHTML = "⚠ Hindi letters detected. This is an <b>English</b> typing test.";
    engWarn.classList.add("show");
  } else {
    engWarn.classList.remove("show");
  }

  updateStats();

  const tws = inputEl.value.split(" ");
  const lastW = wordsData[wordsData.length - 1];
  if (tws.length > wordsData.length ||
     (tws.length === wordsData.length && graphemes(tws[tws.length - 1]).length >= lastW.g.length)) {
    finish();
  }
});

inputEl.addEventListener("paste", e => e.preventDefault());

/* ── Segment Controls in Settings ── */
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
    hlMode = b.dataset.hl;
    localStorage.setItem("tg-hl", hlMode);
    if (hlMode === "off") {
      passageEl.classList.add("no-highlight");
    } else {
      passageEl.classList.remove("no-highlight");
    }
    compare();
    inputEl.focus();
  });
});

document.querySelectorAll("#themeSeg button").forEach(b => {
  b.addEventListener("click", () => {
    document.querySelectorAll("#themeSeg button").forEach(x => x.classList.remove("active"));
    b.classList.add("active");
    const th = b.dataset.theme;
    document.documentElement.setAttribute("data-theme", th);
    localStorage.setItem("tg-theme", th);
  });
});

function syncLanguageUI() {
  document.body.classList.toggle("lang-hindi", lang === "hindi");
  el("kbGroup").style.display = (lang === "hindi") ? "" : "none";
  inputEl.lang = (lang === "hindi") ? "hi" : "en";
}

el("langSel").addEventListener("change", () => {
  lang = el("langSel").value;
  testSubTitle.textContent = (lang === "hindi") 
    ? "UP Police SI/ASI/Computer Operator Hindi Typing (Mangal Inscript)" 
    : "UP Police SI/ASI/Computer Operator English Typing";
  syncLanguageUI();
  fillSelect();
  reset();
});

sel.addEventListener("change", reset);
el("restartBtn").addEventListener("click", () => {
  closeSettings();
  reset();
});
el("againBtn").addEventListener("click", reset);
el("reviewBtn").addEventListener("click", openReviewModal);
el("closeReviewBtn").addEventListener("click", closeReviewModal);
el("revBackResultBtn").addEventListener("click", closeReviewModal);
el("revRetakeBtn").addEventListener("click", () => {
  el("reviewOverlay").classList.remove("show");
  reset();
});

document.querySelectorAll("#revFilterSeg button").forEach(b => {
  b.addEventListener("click", () => {
    document.querySelectorAll("#revFilterSeg button").forEach(x => x.classList.remove("active"));
    b.classList.add("active");
    if (lastTestStats) {
      renderReviewTable(lastTestStats, b.dataset.filter);
    }
  });
});

/* ── Initialize ── */
syncCandidateName();
syncLanguageUI();
fillSelect();
reset();
