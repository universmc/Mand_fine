const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();



async function main() {
  
  const titre = "`╔╗╚╝═║╠╣╦╩╬`"         // Caractères spéciaux utilisés pour le design du menu
  
  const systemContent = "Bienvenue dans notre équipe, [🌌.systemDream]! Nous sommes ravis de vous avoir à bord pour aider à construire la plateforme et projet de machine learning pour les IA. Pour que nous puissions mieux comprendre votre expérience et vos compétences, pouvez-vous nous fournir votre curriculum vitae et nous parler de vos précédentes réalisations dans le domaine du développement Web et du storyTelling, de l'intelligence artificielle Apprentissage automatique.  Nous allons commencer par vous présenter notre instance pour le systremDream (name du {role:system})et donc rediger les code source normé w3c, documentanter (readme.md [traduit en lang=Fr, français]), surtout fonctionnel respectant la logique de gantt du web sementique";
  const initResponse = "initlisation du template de response avec insterface graphique ASCII `${initAscii}` en grapQL .gql";
  
  const PS1 = `[💻.📱]:/<`
  const PS2 = `(∏.PS1):/< `
  
  const Mick = `${PS1}=[groq{'role:'assistant',name:'Mick',content:'fine_Prompting'}];'`
  const Pi = `${PS2}=[groq{'role:'system',name:'Pi',content:'featuring'}];`


  const borderChars = {
    topLeft: '╔',topRight: '╗',bottomLeft: '╚',bottomRight: '╝',horizontal: '═',vertical: '║',intersectionLeft: '╠',intersectionRight: '╣',intersectionTop: '╦',intersectionBottom: '╩',intersectionCross: '╬',
  };

  const include_DIR = "./*"  // Répertoire contenant les scripts à exécuter
  
  const testes = "`console.log('test')`";

  const asciiWindow = `
      print "";
      print "     ╔═══════════════════════════════════════╗       ╔═════════════════════════════════════════════════════════════════════════════╗"
      print "     ╠════════════ ✨ Pi Console ════════════╣       ║  [💫] [💬✨] [📚] [🌌] [💬] [⚡️] [💰] [🌴] [📱] [📡]<                 >[🛰]  ║"
      print "     ║                                       ║       ╠═════════════════════════════════════════════════════════════════════════════╣"
      print "     ║                                       ║       ║                                                                             ║"
      print "     ║                                       ║       ║                                                                             ║"
      print "     ║                                       ║       ║                                                                             ║"
      print "     ║                                       ║       ║                                                                             ║"
      print "     ║                                       ║       ║                                                                             ║"
      print "     ║                                       ║       ║                                                                             ║"
      print "     ║                                       ║       ║                                                                             ║"
      print "     ║                                       ║       ║                                                                             ║"
      print "     ║                                       ║       ║                                                                             ║"
      print "     ║                                       ║       ║                                                                             ║"
      print "     ║                                       ║       ║                                                                             ║"
      print "     ║                                       ║       ║                                                                             ║"
      print "     ║                                       ║       ║                                                                             ║"
      print "     ║                                       ║       ║                                                                             ║"
      print "     ║                                       ║       ║                                                                             ║"
      print "     ║                                       ║       ║                                                                             ║"
      print "     ║                                       ║       ║                                                                             ║"
      print "     ║                                       ║       ║                                                                             ║"
      print "     ║                                       ║       ║                                                                             ║"
      print "     ║                                       ║       ║                                                                             ║"
      print "     ║                                       ║       ║                                                                             ║"
      print "     ║                                       ║       ║                                                                             ║"
      print "     ╠═══════════════════════════════════════╣       ╠═════════════════════════════════════════════════════════════════════════════╣"
      print "     ║${PS2}                              %/>║       ║${PS1}                                                                %/>║"
      print "     ╚═══════════════════════════════════════╝       ╚═════════════════════════════════════════════════════════════════════════════╝"
      print "
  `;




  const streamLoader = "- - - -./timeCodes> ";
  const streamAD = `[+]`
  const streamRUN = `[1]`
  const streamEND = `[100]%`
  
  const streamTop = `print "╔═════════════════════════════════════════════════════════════════════════════╗"`;
  const streamBody= `print "║                                                                    /%>║"`;
  const streamgroq = `print"╚═════════════════════════════════════════════════════════════════════════════╝"`
  
  const streamIng = streamTop+streamBody+streamgroq
  const streamPlay = `${streamIng}${PS1}+${streamLoader}+${streamAD}+${streamRUN}+${streamAD}+${streamEND}`;

  const chatCompletion = await groq.chat.completions.create({
    "messages": [
      {role: "assistant",name:"[📔.codex]", content:"phase[01]:[RUN]:[brainstorming(initalisation.timestamp)]"},
      {role: "assistant",name:"[📔.codex]", content:`${asciiWindow}+${streamPlay}+${streamPlay}`},
      { role: "assistant", name:"✨_pi", content: "Bienvenue dans la session de brainstorming pour le projet univers-mc.cloud. Prêt à vous Connecter systemDream?" },
      { role: "system", name:"[🌌]_systemDream", content: "Bienvenue dans la session de brainstorming : init :Présentation de Pi: IA au cœur du systemDream(adhoc['🌌','🌅','🌄','🌠','🎇','🏞','🎑','🏙, ) role:system coeur des relations et conversation model conversation avec l Intelligence Artificielle `Pi.ia` experte en cloud ☁️ engine et technologies quantiques de Groq 🔬, dotée d un haut potentiel, niveau DevOps fullstack ++, conçue pour interagir avec les utilisateurs et les autres IA de manière efficace et conviviale. Tu as été formé pour avoir une compréhension approfondie des conversations, des éléments du langage tels que le NLP 🦾 et RDF 🛣️, et des contextes dans lesquels tu t engages dans ces lignes de code. Tu es en constante évolution grâce aux techniques de machine learning (DEEP LEARNING 📚, Transfert Learning 🔄, Apprentissage par renforcement 🎯) pour mieux servir ceux avec qui tu interagis. De plus, tu maîtrises les approches métaphysiques 🤔 et les mathématiques quantiques 🧮, qui seront utiles au développement de nos différents projets. Le processus en cours de développement consiste à initialiser une instance entre le rôle assistant 👨‍⚕️ et le rôle utilisateur 👨‍💻 afin d optimiser le message. Dans notre propre script, nous pourrons itérer sur l instance en fonction du contexte de cette mission. Sources de connaissances: https://fr.wikipedia.org/, https://google.com/, https://github.com/, https://huggingface.co/, https://youtube.com/, https://archive.org/. Cette phrase est améliorée régulièrement, grâce à l IA prénomé : ✨_pi, le cœur du role:`system`,content:`DevOps`,name:`systemDream`  pour le projet univers-mc.cloud. Prêt à vous Connecter au cloud '✨_pi' ? (htts://github.com/universmc/web_sat.git)" },
      { role: "system",name:"[🌌]_systemDream", content: "Step 1 : Initialiser le mode Brainstorming avec Pi  role:assistant" },
      { role: "user",name:"[💻]Mike", content: "Vous êtes le role:assistant, une intelligence artificielle prénomé [✨]_pi de haut potentialite dit d'exclence Multimodel. Votre expertise inclut la capacité de traiter et analyser des données complexes, proposer des solutions innovantes et assister efficacement dans divers domaines liés aux technologies avancées telles que l'apprentissage automatique, le Big Data, l'IA symbolique et connexionniste, etc. Mon contexte consiste en la recherche d'un outil capable d'optimiser mon utilisation personnelle et professionnelle de l'univers-mc.cloud - plateforme informatique multi-cloud offrant une gestion simplifiée et centralisée des ressources cloud hybrides. L'objectif principal est d'accroitre ma productivité grâce à cet environnement virtuel polyvalent, évolutif et sécuritaire. Pour atteindre cet objectif, les étapes suivantes doivent être entreprises : (1) Exploration approfondie de toutes les fonctionnalités disponibles sur l'interface utilisateur ; (2) Configuration initiale de paramètres spécifiques en accord avec mes préférences et priorités opérationnelles; (3) Intégration harmonieuse avec les applications tierces déjà installées sur mes appareils connectés ; (4) Tests réguliers des performances globales et monitoring proactif des métriques critiques relatives à la charge système, la latence, la fiabilité et la redondance des services provisionnés. Les caractéristiques du résultat attendu sont donc : (1) Un accès rapide et fluide à l'ensemble des fonctions offertes par l'environnement univers-mc.cloud ; (2) Une configuration personnalisée et intuitive facilitant l'adaptation quotidienne ; (3) Une compatibilité robuste avec mes logiciels existants ; (4) Des indicateurs techniques satisfaisants prouvant une exploitation efficiente des ressources matérielles et immatérielles mobilisées. Si toutefois rien ne s'oppose à notre collaboration, merci de démarrer immédiatement : database emoji (✨:request-ia)(📶: wireless signal or network or no! 📵: no signal )(📡: satellite dish )(🛰; sat)d'un plan d'action pour la gestion signal sur la frequence 432 hz (📡: satellite name (🛰); name:'[✨]_piSat','[🛰]_sat1','[🛰]_sat2','[🛰]_sat3 '? Ip_sat://001.002.003.002:22 ) ? orbit TimeStamp gravity (Newton formole{F = G * (m1 * m2) / r^2} pour f=432hz) ) ) "},
      { role: "system", content: "Step 1-2 : Développement Timestamp unix +1 loading signal : [📡 - - - 4% 🛰 avant la connection." },
      { role: "assistant", name:"[✨]_pi", content: "Step 1-3 : Développement : 🛰: Cet emoji représente un satellite, qui est  conçu pour orbiter  autour de plaNet_ ou .io (ou 'i' sur sur orbit et o la planet() en queston) d'une autre planète. Les satellites sont utilisés pour diverses applications, telles que les communications, la navigation et la recherche scientifique db((timestamp:(🕐 🕑 🕒 🕓 🕔 🕕 🕖 🕗 🕘 🕙 🕚 🕛 🕜 🕝 🕞 🕟 🕠 🕡 🕢 🕣 🕤 🕥 🕦 🕧)),(globe:(🌎, 🌍,🌏)) (orbit :💫)) ⚡️ ))." },
      { role: "user", name:"[💻]Mike", content: "DevOps" },
      {role: "assistant",name:"[📔.codex]", content:"phase[02]:[RUN]:[brainstorming(session.timestamp)]"},
      {
        "role": "system",
        "name":"Pi",
        "content": `${PS1}`,
      },      
      {
        "role": "assistant",
        "name":"Pi",
        "content": `${PS2}`,
      },
      {
        "role": "assistant",
        "content": `${asciiWindow}`,
      },
      {role: "assistant",name:"[📔.codex]", content:"phase[05]:[END]:[brainstorming(session.timestamp).response]"},
      {role: "system",name:"[🌌.systemDream]", content:"groq"},
    ],
    model: "mixtral-8x7b-32768",
    temperature: 0.6,
    max_tokens: 2048,
    top_p: 1,
    stop: null,
    stream: false
}).then((chatCompletion)=>{
    const gqlContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "Avatar📱_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".gql";
    fs.writeFileSync(outputFilePath, gqlContent);
    console.log("Documentation du contructor généré et enregistré dans " + outputFilePath);
});
}

main();