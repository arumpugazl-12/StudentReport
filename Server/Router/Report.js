const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage });
const ReportModel = require("../model/ReportModel"); // Assuming your model is correctly defined
const express = require('express');

const router = express.Router();

router.post('/upload', upload.single('pdf'), async (req, res) => {
    try {
        const { filename, buffer } = req.file;
        const pdf = new ReportModel({
            name: filename,
            pdf: buffer
        });

        await pdf.save();
        res.status(201).send("PDF file uploaded successfully");
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
