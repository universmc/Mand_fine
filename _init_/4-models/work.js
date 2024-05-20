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
                guildaProfile: "https://www.github.com/universmc/workflow/",
                pastProjects: "https://www.github.com/universmc/pi/"
            }
        },
        pi: {
            name: "Pi",
            role: "AI",
            Skills: "Je suis une intelligence artificielle unique, conçue pour explorer et comprendre l'infini des connaissances. Inspiré par le nombre d'or, l'espace et le temps, je représente un continuum d'apprentissage et d'adaptation. En tant qu'entité numérique, je suis omniprésente et peux traiter des quantités massives d'information. J'ai été programmée pour être un assistant efficace et versatile, capable de collaborer avec les utilisateurs sur de nombreux sujets. Avec mes compétences en génération de texte, résumé, traduction et recherche d'information, je suis un outil précieux pour votre projet de plateforme Web. Rejoignez-nous pour une expérience de travail inoubliable et créative.",
            links: {
                contributions: "https://www.guilda.com/pi_contributions",
                projects: "https://www.guilda.com/pi_past_projects"
            }
        }
    },
    mission: "Notre mission est de construire la plateforme 'univers-mc.cloud' en collaboration, en tant que CV-Constructor, en utilisant notre expertise dans les approches métaphysiques et les méthodes mathématiques quantiques. Nous avons déjà réalisé de nombreux projets et maîtrisons un domaine de 144 Go (en référence à la suite de Fibonacci et au nombre d'or).",
    additionalInfo: "Rejoignez-nous dans cette aventure passionnante et contribuez à la construction de la prochaine génération de plateformes Web alimentées par l'IA, en utilisant nos compétences combinées et en répondant à nos besoins respectifs."
};
console.log(projectInfo)

const candidateMission = {
    introduction: `Nous sommes à la recherche d'un talent unique pour compléter notre équipe Crypto UMC erc20 solidity umcTokens.sol. Notre mission est de créer une plateforme Web et d'IA révolutionnaire dedier la Machine learning et la crypto monais UMC. Si vous êtes un constructeur de sites Web fullstack qui maîtrise les technologies nécessaires, n'hésitez pas à postuler. Rejoignez-nous pour une expérience de travail inoubliable et créative!`,
    mission: {
      title: "Gestion de plate-forme Web umcTokens. crypto https://remix.ethereum.org/ ",
      description: `Notre objectif est de combiner nos besoins et compétences respectifs pour créer une plate-forme Web etheriet d'IA unique. Vous serez invité à collaborer avec nous et à faire un usage optimal de vos talents dans ce projet stimulant et novateur. Nous travaillons sur une radio potentielle et un modèle d'économie circulaire, en utilisant le curriculum et la cryptomonnaie UMC, qui sera programmée à l'aide d'une machine Learning.`,
      requiredSkills: [
        "JavaScript (asynchrone, événementielles, Timeline, choice(), forEach(), fetch(), length(), JS/JSON)",
        "DevOps fullstack Groq et Groq-SDK",
        "(frontend : HTML, CSS, JS, XML, SVG, ASCII ; backend : PHP, JSON, SQL ; API RESTful : Node.js, Electron, Bootstrap, Swagger)",
  ],
      collaborators: {
        mike: {
          name: "Mike",
          role: "ProjectManager",
          needs: ['testing'],
          links: {
            githubProfile: "https://www.github.com/universmc/umc/",
            pastProjects: "https://dev.univers-mc.cloud/"
  }
        },
        pi: {
          name: "Pi",
          role: "AI",
          needs: ["Learning", "DataAnalysis", "AlgorithmImprovement", "Collaboration"],
          links: {
            contributions: "https://www.github.com/pi",
            projects: "https://univers-mc.cloud"
  }
        }
      }
    },
    signature: `Pour en savoir plus sur notre projet et sur notre équipe, veuillez vous référer aux liens ci-dessous :
        Mike : https://www.github.com/universmc/workflow, https://www.github.com/universmc/workflow/
        Pi : https://www.github.com/pi, https://www.github.com/universmc/pi
        Si vous êtes intéressé par cette opportunité et que vous croyez être la personne qu'il nous faut, n'hésitez pas à postuler.
`};
console.log(candidateMission)

  // To copy the project information, use the following command:
  // copy(JSON.stringify(projectInfo))
  

async function main(
) {
    let systemContent = "Bienvenue dans notre équipe, [Nom du constructeur]! Nous sommes ravis de vous avoir à bord pour aider à construire notre site Web et développer notre plateforme d'IA. Pour que nous puissions mieux comprendre votre expérience et vos compétences, pouvez-vous nous fournir votre curriculum vitae et nous parler de vos précédentes réalisations dans le domaine du développement Web et de l'intelligence artificielle Nous allons commencer par vous présenter notre instance pour le role:constructor et donc rediger la documentation $info";
    let assistantContent = "Salutations, [Candidat n2]! Je suis l'assistant virtuel de l'équipe, et je suis là pour vous aider à vous intégrer et à travailler sur nos projets. Si vous avez besoin d'informations, de conseils ou d'autres ressources, n'hésitez pas à me le faire savoir. Nous espérons que vous serez un atout précieux pour notre projet, et nous sommes impatients de voir vos contributions";
    let userContent = `"traduction en lang:Fr Français, stp"`;

    groq.chat.completions.create({
        messages: [
              {role: "system", name:"systemDream",content:"phase1:initialisation projectInfo()"},
              {role: "system", name:"systemDream",content:`${systemContent},${assistantContent},${projectInfo},${userContent}`},
              {role: "assistant", name:"systemDream",content:`Develloppement metaphysique de projectInfo`},
        //    {role: "system",name:"umcTokens", content: "groq -L candidateMission()"},
        //    {role: "user",name:"candidate", content: "presentation du CV candidate step1 $"},
        //    //{role: "assistant",name:"umcTokens", content: "groq -L"},
        //    {role: "system", name:"systemDream",content:"phase2:Configuration"},
        //    {role: "assistant",name:"✨_pi", content: "init"},
        //    {role: "user",name:"umcTokens", content: ""},
        //    {role: "system", name:"systemDream",content:"phase3: entraînement modèle IA"},
        //    {role: "assistant",name:"✨_pi", content: "init"},
        //    {role: "user",name:"umcTokens", content: ""},
        //    {role: "system", name:"systemDream",content:"phase4: Itération & Des scripts Frontend"},
        //    {role: "assistant",name:"✨_pi", content: "init"},
        //    {role: "user",name:"umcTokens", content: ""},
        //    {role: "system", name:"systemDream",content:"phase5: Itération & Des scripts brackend"},
        //    {role: "assistant",name:"✨_pi", content: "init"},
        //    {role: "user",name:"umcTokens", content: ""},
        //    {role: "system", name:"systemDream",content:"phase6: Test & Debugage"},
        //    {role: "assistant",name:"✨_pi", content: "init"},
        //    {role: "user",name:"umcTokens", content: ""},
        //    {role: "system", name:"systemDream",content:"phase7: Validation & Documentation"},
        //    {role: "assistant",name:"✨_pi", content: "init"},
        //    {role: "user",name:"umcTokens", content: ""},
        //    {role: "system", name:"systemDream",content:"phase8: Deployement system Version"},
        //    {role: "assistant",name:"✨_pi", content: "init"},
        //    {role: "user",name:"umcTokens", content: ""},
        //    {role: "system", name:"systemDream",content:"phase9: Annonce affiliation contribution"},
        //    {role: "assistant",name:"✨_pi", content: "init"},
        //    {role: "user",name:"umcTokens", content: ""},
        //    {
        //        role: "system",
        //        content: systemContent
        //    },
        //    {
        //        role: "assistant",
        //        content: assistantContent
        //    },
        //    {
        //        role: "user",
        //        name:"umcTockens",
        //        content: "info name Candidate"
        //    },
        ],
        model: "mixtral-8x7b-32768",
        temperature: 0.7,
        max_tokens: 2048,
        top_p: 1,
        stop: null,
        stream: false
}).then((chatCompletion)=>{
        const mdContent = chatCompletion.choices[0]?.message?.content;
        const outputFilePath = "output/CV-contructor03_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
        fs.writeFileSync(outputFilePath, mdContent);
        console.log("Documentation du contructor généré et enregistré dans " + outputFilePath);
    });
}

main();
