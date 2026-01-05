import schedule from 'node-schedule';
import Message from '../../models/message.js';

export const handleScheduling = async (req, res) => {
    try {
        const { message, day, time } = req.body;

        // Combine day and time into a single JS Date
        const scheduledDate = new Date(`${day} ${time}`);

        if (isNaN(scheduledDate.getTime())) {
            return res.status(400).send({ status: false, message: "Invalid date/time provided" });
        }

        // Use node-schedule to create a one-time job
        schedule.scheduleJob(scheduledDate, async () => {
            try {
                const newEntry = new Message({
                    msgContent: message,
                    targetTime: scheduledDate
                });
                await newEntry.save();
                console.log('>>> Scheduled message successfully saved to DB');
            } catch (err) {
                console.error('Error during scheduled save:', err.message);
            }
        });

        res.status(200).send({
            status: true,
            message: `Job set for ${day} at ${time}`
        });

    } catch (error) {
        res.status(500).send({ status: false, message: error.message });
    }
};