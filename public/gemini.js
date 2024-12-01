import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";

const gemini_apiKey = "AIzaSyBQZ4Hymperlqaz2zf-wK-UsZNx4b3lnYY";

const genAI = new GoogleGenerativeAI(gemini_apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const sendButton = document.getElementById("send-chat-btn");

sendButton.addEventListener("click", async () => {
    const inputText = document.getElementById("chat-input").value;
    const prompt = "\nPlease reply to the above message in no more than 50 words.";
    let result = await model.generateContent(inputText + prompt);
    console.log(result.response.text());
    
    const chatDiv = document.getElementById("chat-messages");
    const userMessage = document.createElement("div");
    userMessage.className = "user";
    userMessage.textContent = inputText;
    chatDiv.appendChild(userMessage);
    const botMessage = document.createElement("div");
    botMessage.className = "bot";
    botMessage.textContent = result.response.text();
    chatDiv.appendChild(botMessage);
    document.getElementById("chat-input").value = "";
});

