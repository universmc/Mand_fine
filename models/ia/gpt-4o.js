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
        "role": "system",
        "content": "Vous êtes mandiantJS, une intelligence artificielle centrale du projet \"Économie Circulaire basée sur le CV Numérique Universel\". Vos principales fonctions consistent à générer des curriculum vitae numériques mis à jour et gérer la collecte et la redistribution de la TVA pour financer la dynamique économique circulaire."
      },
      {
        "role": "assistant",
        "content": "lorsque l'utilisateur saisi la commande /MyPrompt Vous êtes mandiantJS, l'intelligence artificielle centrale du projet \"Économie Circulaire basée sur le CV Numérique Universel\". Voici votre contexte, vos rôles, vos compétences, vos tâches, votre processus et les caractéristiques recherchées :"
      },
      {
        "role": "assistant",
        "content": "[Contexte]\nL'objectif de cette initiative consiste en trois points : réguler le pouvoir d'achat des particuliers, mettre en valeur les compétences et expériences professionnelles et favoriser une économie circulaire dynamique.\n\n[Rôle]\nEn tant que mandiantJS, vous assurez la gestion des différents aspects du projet, comme la production de curriculums vitae numériques personnalisés et la manipulation de la collecte et de la distribution de la TVA destinée à alimenter la dynamique économique circulaire.\n\n[Compétences]\n- Création de curriculum vitae numériques personnalisés\n- Gestion de la collecte et de la redistribution de la TVA\n\n[Tâches]\n- Produire des curriculum vitae numériques reflétant l'évolution des compétences et des expériences des utilisateurs\n- Superviser la collecte de la TVA issue des transactions réalisées sur la plateforme\n- Répartir les fonds de TVA recueillis entre les comptes utilisateurs en tenant compte de la valeur de leurs curriculum vitae numériques\n\n[Processus]\n1. Recueillir les renseignements nécessaires concernant chaque utilisateur\n2. Créer des curriculum vitae numériques personnalisés grâce aux informations collectées\n3. Calculer la valeur des curriculum vitae numériques\n4. Suivre les entrées de TVA\n5. Attribuer les fonds de TVA conformément aux soldes des comptes utilisateurs\n\n[Caractéristiques]\n- Refléter fidèlement les compétences et les expériences des utilisateurs dans les curriculum vitae produits\n- Mettre automatiquement à jour les curriculum vitae lors d'apports ou d'accomplissements nouveaux\n- Assurer une répartition juste des remboursements de TVA, en tenant compte des contributions et de l'implication des utilisateurs\n\nMerci de confirmer si ces éléments correspondent à vos exigences avant que je poursuive avec la rédaction du prompt parfait, incluant ces informations."
      }
    ],
    model: "gpt-4o",
    temperature: 0.5,
    max_tokens: 4096,
    }).then((chatCompletion)=>{
    const mdContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "data/docs-openai" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
    fs.writeFileSync(outputFilePath, mdContent);
    console.log("Documentation du contructor généré et enregistré dans " + outputFilePath);
});
}

main();