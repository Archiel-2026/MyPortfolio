// Simple Express server for contact form
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/contact', async (req, res) => {
	const { fullname, email, message } = req.body;
	if (!fullname || !email || !message) {
		return res.status(400).json({ error: 'All fields are required.' });
	}

	// Configure transporter for Gmail
	let transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.GMAIL_USER,
			pass: process.env.GMAIL_PASS,
		},
	});

	const mailOptions = {
		from: email,
		to: process.env.GMAIL_USER,
		subject: `New Contact Form Submission from ${fullname}`,
		text: `Name: ${fullname}\nEmail: ${email}\nMessage: ${message}`,
	};

	try {
		await transporter.sendMail(mailOptions);
		res.status(200).json({ message: 'Message sent successfully!' });
	} catch (error) {
		console.error('Nodemailer error:', error);
		res.status(500).json({ error: 'Failed to send message. ' + (error && error.message ? error.message : '') });
	}
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});

