// models/Notification.js
import { Schema, model, Types } from "mongoose";

const NotificationSchema = new Schema({
    userId: { type: Types.ObjectId, ref: "User", required: true },
    message: { type: String, required: true },
    isRead: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
});

export default model("Notification", NotificationSchema);

