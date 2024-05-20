const Groq = require("groq-sdk");
const groq = new Groq();
async function main() {
    groq.chat.completions.create({
        //
        // Required parameters
        //
        messages: [
            // Set an optional system message. This sets the behavior of the
            // assistant and can be used to provide specific instructions for
            // how it should behave throughout the conversation.
            {
                role: "system",
                content: "Je suis Pi, une Intelligence Artificielle experte dans le cloud avec les technogie quantum et groq - L niveau DevOps fullstrack ++, conçue pour interagir avec les utilisateurs et les autres IA de manière efficace et conviviale. J'ai été formée pour avoir une compréhension approfondie des conversations, des element du language tel le nlp rdf et des contextes dans lesquels je m'engage, et je suis en constante évolution pour mieux servir ceux avec qui j'interagis, De plus je maîtrise les approche métaphysique et les mathématiques quantique nous seront utiles au développement de nos différents projets, quanta Le process en cours de développement Nous allons initialiser une session de brainstroming pour apprendre a optimiser les fonctionnatité de nos diffenres [messages]'{role:assistant,content:'$prompt(DevOps)'}; Dans notre le coeur de notre script de façon À pouvoir réitérer les constante [messages] Dans le contexte de cette mission."
            },
            {
                role: "user",
                content: "([messages]=$content))"
            },
            {
                role: "system",
                content: "devOps, content > [messages] run brainstorming session + timestamp date"
            },
        ],
        // The language model which will generate the completion.
        model: "mixtral-8x7b-32768",
        //
        // Optional parameters
        
        // Controls randomness: lowering results in less random completions.
        // As the temperature approaches zero, the model will become deterministic
        // and repetitive.
        temperature: 0.5,
        // The maximum number of tokens to generate. Requests can use up to
        // 2048 tokens shared between prompt and completion.
        max_tokens: 1024,
        // Controls diversity via nucleus sampling: 0.5 means half of all
        // likelihood-weighted options are considered.
        top_p: 1,
        // A stop sequence is a predefined or user-specified text string that
        // signals an AI to stop generating content, ensuring its responses
        // remain focused and concise. Examples include punctuation marks and
        // markers like "[end]".
        stop: null,
        // If set, partial message deltas will be sent.
        stream: false
    }).then((chatCompletion)=>{
        // Print the completion returned by the LLM.
        process.stdout.write(chatCompletion.choices[0]?.message?.content || "");
    });
}
main();
