import Groq from "groq-sdk";
const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});


export const getGroqChatCompletion = (content) => {
    return groq.chat.completions.create({
        messages: [
            {
                role: "user",
                content: content
            }
        ],
        model: "llama3-8b-8192"
    });
}
