const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

// Lire les citations à partir du fichier JSON
const instructions = JSON.parse(fs.readFileSync("instructions.json", "utf-8"));

async function main(
) {
    // Sélectionnez aléatoirement une citation
const instruction = instructions[Math.floor(Math.random() * instructions.length)];

    groq.chat.completions.create({
        messages: [
            {
                role: "system",
                content: `instruction: "${instruction.instruction}" - ${instruction.auteur}. Prompt généré par une intelligence artificielle: Pibot.`
            },
            {
                role: "assistant",
                content: `Tu utilisera le format .md (markdown) et le Makefile racine (/Makfile) pour rédiger le cours Magistral sur plan de développement de Instruction Metaphysique.`
            },
        ],
        model: "mixtral-8x7b-32768",
        temperature: 0.2,
        max_tokens: 4086,
        top_p: 1,
        stop: null,
        stream: false
}).then((chatCompletion) => {
        const mdContent = chatCompletion.choices[0]?.message?.content;
        const outputFilePath = "dev-gantt_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
        fs.writeFileSync(outputFilePath, mdContent);
        console.log("Documentation générée et enregistrée dans " + outputFilePath);
    });
}

main();
