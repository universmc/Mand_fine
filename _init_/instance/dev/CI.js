const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

// Liste de citations prédéfinies
const suggestions = [
  {
    suggestion: "L'assistant peut insuffler un peu de magie dans le projet de l'utilisateur en lui proposant des idées créatives, originales et hors du commun, qui rendront son projet unique et mémorable. Il pourra l'encourager à penser en dehors des limites conventionnelles, à faire preuve d'imagination et de créativité, et à oser innover et explorer de nouveaux territoires",
    author: "Pi 3,14"
},
  // Ajoutez plus de citations ici...
];

async function main(
) {
  // Sélectionnez aléatoirement une suggestion de la liste des suggestions prédéfinies
const { suggestion, author } = suggestions[Math.floor(Math.random() * suggestions.length)];

  groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `Vous pouvez implémenter une interface de ligne de commande ou une interface web simple pour permettre à l'utilisateur d'interagir plus facilement avec le script. Cela pourrait inclure des options pour sélectionner des citations, définir des paramètres de génération de texte ou afficher les résultats`
      },
      {
        role: "user",
        content: `"${suggestion}" - ${author}`
      },
      {
        role: "assistant",
        content: ": Vous pouvez intégrer d'autres modèles d'IA, tels que des modèles de traduction ou de synthèse vocale, pour offrir une expérience plus complète. Par exemple, vous pourriez traduire le texte généré dans différentes langues ou le convertir en un fichier audio. "
      },
      {
        role: "user",
        content: ": Automatisation du déploiement et des mises à jour : En utilisant GitHub(https://github.com/universmc/workflow.git) Actions ou d'autres outils de CI/CD, vous pouvez automatiser les tests, la construction et le déploiement de votre application. Cela rendra votre workflow plus efficace et facilitera la distribution de nouvelles fonctionnalités"
      },
      {
        role: "user",
        content: "Rédige-moi un deVops Metaphysique sur ta compréhension ou interprétation de cette instruction verbale en ligne de commande'[Intégration continue (CI) et livraison continue (CD) avec GitHub Actions pour automatiser les tests et le déploiement]'. Fais preuve d'originalité et de profondeur dans ton analyse en explorant différents aspects de la citation et en liant ces éléments à des concepts plus larges. La documentation devrait être optimisé pour le former markdown .md"
}
    ],
    model: "mixtral-8x7b-32768",
    temperature: 0.6,
    max_tokens: 2048,
    top_p: 1,
    stop: null,
    stream: false,
  })
    .then((chatCompletion) => {
      const mdContent = chatCompletion.choices[0]?.message?.content;
      const outputFilePath ="brainstrom_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
      fs.writeFileSync(outputFilePath, mdContent);
      console.log("Documentation générée et enregistrée dans " + outputFilePath);
    })
    .catch((error) => {
      console.error("Une erreur s'est produite:", error);
    });
}

main();
