// server.js
import express from "express";
import { createServer } from "http"; // use for Socket.IO
import { Server } from "socket.io";
import { connectToDB } from "./src/config/db.js";
import allRoutes from "./src/routes/routes.js";
import helmet from "helmet";
import dotenv from "dotenv";
import cors from "cors";
import "./src/jobs/scheduler.js"; // This starts the cron job

dotenv.config();

const app = express();
const httpServer = createServer(app); // Wrap express app with http server
const io = new Server(httpServer, {
    cors: {
        origin: "*", // or your frontend URL
        methods: ["GET", "POST"],
    },
});

// Store connected users
const connectedUsers = new Map();

io.on("connection", (socket) => {
    console.log(" New client connected:", socket.id);

    socket.on("register", (userId) => {
        connectedUsers.set(userId, socket.id);
        console.log(` User ${userId} registered with socket ${socket.id}`);
    });

    socket.on("disconnect", () => {
        for (let [userId, sockId] of connectedUsers) {
            if (sockId === socket.id) connectedUsers.delete(userId);
        }
        console.log(" Client disconnected:", socket.id);
    });
});

// Middleware & DB
app.use(cors());
app.use(helmet());
app.use(express.json());
const DBUrl = process.env.MONGO_URL||"mongodb://localhost:27017/";
connectToDB(DBUrl);
// app.get("/health", (req, res) => {
//     res.status(200).send("OK");
// })
// Routes
app.use("/api/", allRoutes);

// Export io and connectedUsers for use in other files
export { io, connectedUsers };

// Start server
const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () =>
    console.log(` Server is running on port ${PORT}`)
);





// import express from "express";
// import { connectToDB } from "./src/config/db.js";
// import allRoutes from "./src/routes/routes.js";
// import helmet from "helmet";
// import dotenv from "dotenv";
// import socketio from "socket.io";
// dotenv.config();
// const app = express();
//
// app.use(helmet());
// app.use(express.json());
// connectToDB(process.env.MONGODB_URI);
// app.use("/api/", allRoutes);
// app.listen(process.env.PORT, () =>
//   console.log(`Server is running on port ${process.env.PORT}`)
// );
