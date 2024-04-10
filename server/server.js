const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
// const OpenAIApi = require("openai");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { config } = require("dotenv");

config(); // Load environment

// Access your API key as an environment variable 
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  
const port = 4000;
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("Connected successfully! to socket ", socket.id);
  socket.on("sent-messageUsername-to-server", (message, username) => {
    io.emit("sent-messageUsername-to-client", message, username);
  });
  socket.on("sent-api-question", async(message, username)=>{
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    const prompt = message
  
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    socket.emit("sent-api-response", text)
  })
});

app.get("/", (req, res) => {
  res.send("<h1>Hello, Server side</h1>");
});

server.listen(port, async () => {
  console.log(`listening on *:${port}`);
});
