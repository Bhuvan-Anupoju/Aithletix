import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { profileRouter } from "./routes/profile.js";
import { planRouter } from "./routes/plan.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(cookieParser());
app.use(express.json());
// API Routes
app.use("/api/profile", profileRouter);
app.use("/api/plan", planRouter);
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
app.get("/", (req, res) => {
    res.send("Hello World! From Bhuvan");
});
//# sourceMappingURL=index.js.map