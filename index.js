import express from "express"
import cors from "cors"
import { getGroqChatCompletion } from "./utils/groq.js"

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())


app.post("/ai",async(req,res) => {
    try{
        const { content } = req.body
        const chatCompletion = await getGroqChatCompletion(content)
        const hasil = chatCompletion.choices[0]?.message.content || "perintah tidak boleh kosong"

        res.json({
            message : hasil
        })
    }catch(err){
        res.json({
            messsage : "error bang"
        })
    }
})


app.listen(port, () => {
    console.log(`Server running on http://localhost:3000/`)
})