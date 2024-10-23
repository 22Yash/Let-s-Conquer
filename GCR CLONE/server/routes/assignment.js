const express = require('express');
const router = express.Router();
const Student = require('../model/studentModel');
const multer = require('multer');

// Set up storage for uploaded files
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Specify the destination folder
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`); // Rename the file to avoid conflicts
    }
});

const upload = multer({ storage: storage });

// POST route for student data submission
router.post('/', upload.single('file'), async (req, res) => {
    const { name, email } = req.body;

    // Validate input
    if (!name || !email) {
        return res.status(422).json({ err: "Please fill all the details" });
    }

    try {
        const student = new Student({
            name,
            email,
            file: req.file.path, // Save the path of the uploaded file
        });

        await student.save();
        res.status(201).json({ message: "Successfully submitted" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;
