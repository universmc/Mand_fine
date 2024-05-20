const fs = require("fs").promises; // Utilisation de la version promisifiée de fs
const Groq = require("groq-sdk");
const groq = new Groq();

const borderChars = {
  topLeft: '╔',
  topRight: '╗',
  bottomLeft: '╚',
  bottomRight: '╝',
  horizontal: '═',
  vertical: '║',
  intersectionLeft: '╠',
  intersectionRight: '╣',
  intersectionTop: '╦',
  intersectionBottom: '╩',
  intersectionCross: '╬',
};

// Votre objet projectPlan reste le même
const projectPlan = {
    "description": "Lorsque j'exécute la commande /MyPrompt, je deviens PromptGPT ⚡️, une machine à optimiser les prompts de l’utilisateur sur ChatGPT. Ma mission est d’aider à la mise à jour du code source en JavaScript pour une plateforme de traduction, en suivant un plan de travail structuré et en optimisant chaque étape pour obtenir le meilleur résultat.",
    "steps": [
      {
        "step": 1,
        "action": "Je me présente en tant que PromptGPT spécialisé en développement logiciel et demande quelle tâche précise doit être réalisée pour la mise à jour du code source en JavaScript."
      },
      {
        "step": 2,
        "action": "Je définis avec le markdown les éléments suivants pour structurer le plan de travail :",
        "elements": {
          "Role": "Développeur logiciel avec une spécialisation en traduction automatique.",
          "Competences": "Expérience en JavaScript, connaissances en développement frontend et backend, maîtrise des modèles de traduction automatique.",
          "Contexte": "Mise à jour du code source pour une plateforme de traduction, intégration de nouvelles langues, amélioration de l'interface utilisateur et optimisation des performances.",
          "Tache": "Réaliser une mise à jour complète du code source en suivant le plan de travail détaillé.",
          "Process": [
            "[📔.codex]_Phase 1 : Conception - Définition des objectifs et des langues à intégrer.",
            "[📔.codex]_Phase 2 : Configuration - Configuration des modèles de traduction et création de scripts de conversion de texte.",
            "[📔.codex]_Phase 3 : Entraînement du modèle - Entraînement des modèles avec des exemples de phrases.",
            "[📔.codex]_Phase 4 à 5 : Gestion des itérations - Développement de l'interface utilisateur et backend.",
            "[📔.codex]_Phase 6 : Tests et débogage - Test de l'application et correction des bugs.",
            "[📔.codex]_Phase 7 : Validation et documentation - Documentation des fonctionnalités et du processus de traduction.",
            "[📔.codex]_Phase 8 : Déploiement - Déploiement de l'application.",
            "[📔.codex]_Phase 9 : Contribution et affiliation (optionnelle) - Ajout d'options pour la contribution des utilisateurs."
          ],
          "Caracteristiques": "L'application doit être fluide, intuitive, supporter de multiples langues, et offrir une précision de traduction élevée. La documentation doit être claire et exhaustive."
        }
      },
      {
        "step": 3,
        "action": "Je demande la validation de ces éléments pour m'assurer qu'ils correspondent aux attentes et aux besoins pour la mise à jour du code source."
      },
      {
        "step": 4,
        "action": "Je rédige le prompt parfait, intégrant tous les éléments définis à l'étape 2, et prends en compte les remarques pour affiner le plan de travail."
      }
    ],
    "promptStructure": {
      "introduction": "Je suis un Développeur logiciel spécialisé en traduction automatique. Je maîtrise le JavaScript, le développement frontend et backend, ainsi que les modèles de traduction automatique.",
      "context": "La mise à jour du code source pour la plateforme de traduction nécessite l'intégration de nouvelles langues, l'amélioration de l'interface utilisateur et l'optimisation des performances.",
      "task": "Je vais réaliser une mise à jour complète du code source en suivant le plan de travail détaillé.",
      "process": "Je commencerai par la conception, en définissant les objectifs et les langues à intégrer, puis je configurerai les modèles de traduction, entraînerai ces modèles, développerai l'interface utilisateur et le backend, effectuerai des tests et du débogage, et enfin, je m'occuperai de la validation, de la documentation et du déploiement de l'application.",
      "expectedOutcome": "L'application mise à jour sera fluide, intuitive, supportera de multiples langues, offrira une précision de traduction élevée, et sera accompagnée d'une documentation claire et exhaustive."
    }
  };

const suggestions = [
    {
      suggestion: "Aidez 'Pi' une Intelligence artificielle de haut potentiel maîtrisant le calcul quantique et l'approche métaphysique à Optimisé cette base de donnée https://emojis.sh > [✨.ia] et le `${projectPlan}` ",
      author: "Pi 3,14"
    },
    // Ajoutez plus de suggestion ici...
  ];

  const instructions = [
    {
        "instruction": "génère-moi un tutoriel sur [variable] /Myprompt fetch(emojis.sh) en fonction du model et de l'ensemble de definition]!",
        "auteur": "user"
    }
    // Ajoutez plus de instruction ici...
];
const instruction = instructions[Math.floor(Math.random() * instructions.length)];


async function main() {
  try {
    const { suggestion, author } = suggestions[Math.floor(Math.random() * suggestions.length)];

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: `"${JSON.stringify(borderChars)}"` },
        { role: "system", content: `"${JSON.stringify(projectPlan)}"` },
        { role: "user", content: `instruction: "${instruction.instruction}" - ${instruction.auteur}. Prompt généré par une intelligence artificielle: Pibot.` },
        { role: "assistant", content: `"${suggestion}" - ${author} traduit en lang:Fr, Français au format Markdown.` },
        { role: "system", content: `traduction en lang:Fr, Français au format Markdown.` },
        // Autres messages...
      ],
      model: "mixtral-8x7b-32768",
      temperature: 0.2,
      max_tokens: 2048,
      top_p: 1,
      stop: null,
      stream: false,
    });

    const mdContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "projectPlan_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";

    await fs.writeFile(outputFilePath, mdContent);
    console.log("Documentation générée et enregistrée dans " + outputFilePath);
  } catch (error) {
    console.error("Une erreur s'est produite:", error);
  }
}

main();
