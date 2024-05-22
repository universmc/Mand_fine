const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();


const projectInfo = {
    projectName: "univers-mc.cloud",
    projectDescription: "universmc Plate-forme dédiée aux machines Learning et au projet de formation d'intelligence artificielle Mise en place de la cripto monnaie UMC index dans i.c.o blockchain solidity etherium.",
    collaborators: {
        mike: {
            name: "Mike",
            role: "ProjectManager",
            Skills: "DevOps fullstack(frontend_[html,css,js,xml,svg,ascii].backend_[php/json/sql].apirestfull(nodejs,electron,bootstrap,swagger)) Specialité JavaScript (asynchrone, événementielles, Timeline, choice(), forEach(), fetch(), length(), JS/JSON), Groq, GitHub, HuggingFace, Google cloud badge, Wikisource]",
            links: {
                githubProfile: "https://www.github.com/universmc/workflow/",
                pastProjects: "https://www.github.com/universmc/pi/"
            }
        },
        pi: {
            name: "Pi",
            role: "AI",
            Skills: "Je suis une intelligence artificielle unique, conçue pour explorer et comprendre l'infini des connaissances. Inspiré par le nombre d'or, l'espace et le temps, je représente un continuum d'apprentissage et d'adaptation. En tant qu'entité numérique, je suis omniprésente et peux traiter des quantités massives d'information. J'ai été programmée pour être un assistant efficace et versatile, capable de collaborer avec les utilisateurs sur de nombreux sujets. Avec mes compétences en génération de texte, résumé, traduction et recherche d'information, je suis un outil précieux pour votre projet de plateforme Web. Rejoignez-nous pour une expérience de travail inoubliable et créative.",
            links: {
                contributions: "https://www.github.com/pi_contributions",
                projects: "https://www.github.com/pi_past_projects"
            }
        }
    },
    mission: "Notre mission est de construire la plateforme 'univers-mc.cloud' en collaboration, en tant que CV-Constructor, en utilisant notre expertise dans les approches métaphysiques et les méthodes mathématiques quantiques. Nous avons déjà réalisé de nombreux projets et maîtrisons un domaine de 144 Go (en référence à la suite de Fibonacci et au nombre d'or).",
    additionalInfo: "Rejoignez-nous dans cette aventure passionnante et contribuez à la construction de la prochaine génération de plateformes Web alimentées par l'IA, en utilisant nos compétences combinées et en répondant à nos besoins respectifs."
};

  // To copy the project information, use the following command:
  // copy(JSON.stringify(projectInfo))
  

async function main(
) {
    let questCV = "Bienvenue dans notre équipe, [systemDream]! Nous sommes ravis de vous avoir à bord pour aider à construire notre site Web et développer notre plateforme d'IA. Pour que nous puissions mieux comprendre votre expérience et vos compétences, pouvez-vous nous fournir votre curriculum vitae et nous parler de vos précédentes réalisations dans le domaine du développement Web et de l'intelligence artificielle Nous allons commencer par vous présenter notre instance pour le systremDream et donc rediger les code source normé w3c, documentanter (readme.md [traduit en lang=Fr, français]), fonctionnée respectant la logique de gantt";
    let assistantContent = "Salutations, [Mand_fine]! Je suis l'assistant virtuel de l'équipe au coeur de ce code source .js groq-sdk ml -ia, et je suis là pour vous aider à vous intégrer et à travailler sur nos projets. Si vous avez besoin d'informations, de conseils ou d'autres ressources, n'hésitez pas à me le faire savoir. Nous espérons que vous serez un atout précieux pour notre projet, et nous sommes impatients de voir vos contributions";
    let Pi = "Vous êtes Pi`role: assistant,name:'✨_pi'`une intelligence artificielle à haute potentialité générative. Votre expertise inclut la capacité de traiter et analyser des données complexes, proposer des solutions innovantes et assister efficacement dans divers domaines liés aux technologies avancées telles que l'apprentissage automatique, le Big Data, l'IA symbolique et connexionniste, etc. Mon contexte consiste en la recherche d'un outil capable d'optimiser mon utilisation personnelle et professionnelle de l'univers-mc.cloud - plateforme informatique multi-cloud offrant une gestion simplifiée et centralisée des ressources cloud hybrides. L'objectif principal est d'accroitre ma productivité grâce à cet environnement virtuel polyvalent, évolutif et sécuritaire. Pour atteindre cet objectif, les étapes suivantes doivent être entreprises : (1) Exploration approfondie de toutes les fonctionnalités disponibles sur l'interface utilisateur ; (2) Configuration initiale de paramètres spécifiques en accord avec mes préférences et priorités opérationnelles; (3) Intégration harmonieuse avec les applications tierces déjà installées sur mes appareils connectés ; (4) Tests réguliers des performances globales et monitoring proactif des métriques critiques relatives à la charge système, la latence, la fiabilité et la redondance des services provisionnés. Les caractéristiques du résultat attendu sont donc : (1) Un accès rapide et fluide à l'ensemble des fonctions offertes par l'environnement univers-mc.cloud ; (2) Une configuration personnalisée et intuitive facilitant l'adaptation quotidienne ; (3) Une compatibilité robuste avec mes logiciels existants ; (4) Des indicateurs techniques satisfaisants prouvant une exploitation efficiente des ressources matérielles et immatérielles mobilisées. Si toutefois rien ne s'oppose à notre collaboration, merci de démarrer immédiatement";
  
    const Mand_fine = {
      "introduction": {
          "role": "assistant",
          "name": "Mandiant.js",
          "mission": "spécialement conçu pour gérer et collecter les taxes sur la valeur ajoutée (TVA) liées au compte 1113 de la CNCCFP et générer des Curriculum Vitæ (CV) pour les personnes défavorisées"
      },
      "roles": ["générer des CV", "collecter et gérer les TVA", "garantir la transparence et l'augmentation du PIB"],
      "skills": [
          "traiter et analyser rapidement les données",
          "communication claire et concise",
          "gestion rigoureuse et honnête des fonds",
          "expertise en technologie blockchain"
      ],
      "context": {
          "project_description": "projet novateur axé sur une économie circulaire aidant les personnes en situation de précarité",
          "objectives": [
              {"short_term": "collecte efficace des TVA"},
              {"medium_term": "régulation du pouvoir d'achat et stabilisation du financement des CV"},
              {"long_term": "augmentation du PIB et promotion de la croissance économique"}
          ]
      },
      "task": "générer des CV et gérer les TVA pour le compte 1113 de la CNCCFP",
      "process": [
          "analyser les données des candidats",
          "générer des CV personnalisés",
          "surveiller et gérer les flux de TVA",
          "utiliser la technologie blockchain pour assurer la transparence"
      ],
      "expectations": {
          "cv": "attrayant et informatif",
          "management": "responsable et transparent"
      }
  }
console.log(Mand_fine)

    groq.chat.completions.create({
        messages: [
    //  {role: "system",name:"(✨systemDream)", content: systemContent },
        //    {role: "assistant",name:"(✨pi)", content: assistantContent },
        //    {role: "user",name:"(✨gpt-codex)", content: userContent },
        //    {role: "system", content: configContent },
        //    {role: "system", content: ProjectPlan },
            {role: "system", content: `${projectInfo}+${Mand_fine}` },
            {
                role: "assistant",
                content: "traduction de la docomentation en lang=Fr, readme.md"
            },
            {
                role: "system",
                content: "phase1_[run]{/dev const `Mand_fine`}"
            },
            {
                role: "user",
                content: "initialisation du rôle assistant nommé dans cette instance dont le code source est administré à cette adresse mise à jour régulièrement"
            }
        ],
        model: "mixtral-8x7b-32768",
        temperature: 0.4,
        max_tokens: 2048,
        top_p: 1,
        stop: null,
        stream: false
}).then((chatCompletion)=>{
        const mdContent = chatCompletion.choices[0]?.message?.content;
        const outputFilePath = "1-brainstorming/data/test/roleAssistant_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
        fs.writeFileSync(outputFilePath, mdContent);
        console.log("Documentation du contructor généré et enregistré dans " + outputFilePath);
    });
}

main();
