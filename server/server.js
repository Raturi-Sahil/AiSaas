import express from "express";
import cors from "cors";
import { clerkMiddleware, requireAuth } from '@clerk/express'

const app = express();

app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());
app.use(requireAuth());

app.get('/', (req, res) => {
    res.send({msg: "Server is live"});
});

const PORT =  process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server is listening on port ", PORT);
});
