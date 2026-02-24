
# Contact Form Backend Setup

This project includes a backend server to handle contact form submissions and send them to your Gmail account.

## 1. Prerequisites
- Node.js and npm installed
- A Gmail account
- (Recommended) Create a Gmail App Password for security: https://support.google.com/accounts/answer/185833

## 2. Setup
1. Install dependencies:
	```bash
	npm install
	```
2. Create a `.env` file in the project root with:
	```env
	GMAIL_USER=yourgmail@gmail.com
	GMAIL_PASS=yourapppassword
	PORT=3001
	```
	Replace with your Gmail and app password.

3. Start the backend server:
	```bash
	npm start
	```

## 3. Usage
- The contact form on the website will POST to `http://localhost:3001/api/contact`.
- You will receive an email at your Gmail address for each submission.

## 4. Deployment
- For production, deploy the backend to a service (e.g., Render, Heroku, Vercel, etc.) and update the frontend fetch URL accordingly.

---
**Note:** Never commit your real `.env` file or credentials to public repositories.
