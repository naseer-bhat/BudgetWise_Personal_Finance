import express from "express";
import Notification from "../models/Notification.js";
const router=express.Router();

 router.put('/:id/read', async (req, res) => {
    try {
        const notificationId = req.params.id;

        // Find the notification and update the 'read' status
        const notification = await Notification.findByIdAndUpdate(
            notificationId,
            { read: true }

        );

        if (!notification) {
            return res.status(404).json({ message: 'Notification not found' });
        }

        res.status(200).json(notification);
    } catch (error) {
        res.status(500).json({ message: 'Error marking notification as read', error });
    }
});

export default router
