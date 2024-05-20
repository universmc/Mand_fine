const fs = require("fs");
const path = require("path"); // Ajouté pour utiliser path.join
const Groq = require("groq-sdk");
const groq = new Groq();

// // Charger les fichiers JSON de rôles Groq
// const rolesSystem = JSON.parse(fs.readFileSync(path.join(__dirname, 'roles/roles-system.json'), 'utf8'));
// const rolesAssistant = JSON.parse(fs.readFileSync(path.join(__dirname, 'roles/roles-assistant.json'), 'utf8'));
// const rolesUser = JSON.parse(fs.readFileSync(path.join(__dirname, 'roles/roles-user.json'), 'utf8'));

async function main() {
    groq.chat.completions.create({
        messages: [
        //   {role: "system", name:"systemDream", content:"Phase 1: Initialisation de l'instance"},
        //   {role: "assistant", name:"✨_pi", content: "Initialisation en cours..."},
        //   {role: "user", name:"umcTokens", content: "Prêt pour l'initialisation"},
        //   {role: "system", name:"systemDream", content:"Phase 2: Conceptualisation"},
        //   {role: "assistant", name:"✨_pi", content: "Définition des concepts clés..."},
        //   {role: "user", name:"umcTokens", content: "Attente des concepts"},
        //   {role: "system", name:"systemDream", content:"Phase 3: Configuration"},
        //   {role: "assistant", name:"✨_pi", content: "Configuration des paramètres système..."},
        //   {role: "user", name:"umcTokens", content: "Confirmation de la configuration"},
        //   {role: "system", name:"systemDream", content:"Phase 4: Entraînement du modèle IA"},
        //   {role: "assistant", name:"✨_pi", content: "Entraînement en cours..."},
        //   {role: "user", name:"umcTokens", content: "Suivi de l'entraînement"},
        // // Correction de la duplication et de la faute de frappe
        //   {role: "system", name:"systemDream", content:"Phase 5: Itération & Scripts Frontend"},
        //   {role: "assistant", name:"✨_pi", content: "Itération sur les scripts Frontend..."},
        //   {role: "user", name:"umcTokens", content: "Révision des scripts Frontend"},
             {role: "system", name:"systemDream", content:"Phase 6: Test & Débogage"},
             {role: "assistant", name:"✨_pi", content: "Tests et débogage en cours..."},
             {role: "user", name:"umcTokens", content: "Attente des résultats de test"},
        // {role: "system", name:"systemDream", content:"Phase 7: Validation & Documentation"},
        // {role: "assistant", name:"✨_pi", content: "Validation et création de la documentation..."},
        // {role: "user", name:"umcTokens", content: "Vérification de la documentation"},
        // {role: "system", name:"systemDream", content:"Phase 8: Déploiement de la version système"},
        // {role: "assistant", name:"✨_pi", content: "Préparation au déploiement..."},
        // {role: "user", name:"umcTokens", content: "Prêt pour le déploiement"},
        // {role: "system", name:"systemDream", content:"Phase 9: Annonce de l'affiliation et contribution"},
        // {role: "assistant", name:"✨_pi", content: "Annonce en cours..."},
        // {role: "user", name:"umcTokens", content: "Participation à l'annonce"},
        // {role: "system", name:"systemDream", content:"Phase 10: création d'une boucle d'itération pour chaque phase de l'entraînement du modèle"},
        // {role: "assistant", name:"✨_pi", content: "Entrainnement en cours ..."},
        ],
        model: "mixtral-8x7b-32768",
        temperature: 0.4,
        max_tokens: 4096,
        top_p: 1,
        stop: null,
        stream: false
    }).then((chatCompletion) => {
        const gqlContent = chatCompletion.choices[0]?.message?.content;
        const outputFilePath = path.join("output", "docs(✨_pi)_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".gql");
        fs.writeFileSync(outputFilePath, gqlContent);
        console.log("Documentation générée et enregistrée dans " + outputFilePath);
    });
}

main();
