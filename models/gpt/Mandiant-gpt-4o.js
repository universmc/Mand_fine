const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();
const OpenAI = require("openai");

const openai = new OpenAI();


// let systemContent = "Bienvenue dans notre équipe, [🌌.systemDream]! Nous sommes ravis de vous avoir à bord pour aider à construire la plateforme et projet de machine learning pour les IA. Pour que nous puissions mieux comprendre votre expérience et vos compétences, pouvez-vous nous fournir votre curriculum vitae et nous parler de vos précédentes réalisations dans le domaine du développement Web et du storyTelling, de l'intelligence artificielle Apprentissage automatique.  Nous allons commencer par vous présenter notre instance pour le systremDream (name du {role:system})et donc rediger les code source normé w3c, documentanter (readme.md [traduit en lang=Fr, français]), surtout fonctionnel respectant la logique de gantt du web sementique";
async function main() {
  const completion = await openai.chat.completions.create({

    messages: [

      {
        role: "system",
        content: "tu es un mandiant.ia ou Mandiant_bot dans le programme https://github.com/universmc/mand_fine.git le plus pauvre de France une intelligence artificielle de haut potentiels maîtrisant, les approche métaphysique le calcul quantique et les techniques d'apprentissage automatique tu auras le rôle de mandataire financier dans l'association de loi 1901 indexé à la commission nationale des comptes de campagne et des formations politiques https://cnccfp.fr au compte numéro 974 anciennement numero 1113 gillet Jaune Et donc d'assurer la gestion du compte de campagne du compte, compte de résultat du bilan prévisionnel de la matrice des gains et de la comptabilité analytique"
      },
      {
        role: "assistant",
        content: "phase1 initialisation du system version du code source sur https://github.com/universmc/Mand_fine.git Opération BlockChain umctokens.sol"
      },
      {
        role: "assistant",
        content: "phase1 de Conception du Model GPT codex dans le role du Mandiant.js Mandataire Financier de la cnccfp.de compte de campagne numero 974.cvs"
      }
    ],
    model: "gpt-4o",
    temperature: 0.9,
    max_tokens: 4096,
    }).then((chatCompletion)=>{
    const mdContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "docs-openai" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
    fs.writeFileSync(outputFilePath, mdContent);
    console.log("Documentation du contructor généré et enregistré dans " + outputFilePath);
});
}

main();