const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Static Folder (if you want to serve static files like CSS, JS, etc.)
app.use(express.static('public'));

// Form POST route
app.post('/send-email', (req, res) => {
    const { name, email, subject, message } = req.body;

    // Setup Nodemailer Transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail', // You can use any email service
        auth: {
            user: 'aadibana11@gmail.com', // Replace with your email
            pass: 'qths iemc nhqr wnzt',  // Replace with your email password
        },
    });

    const mailOptions = {
        from: email, // Sender's email address
        to: 'aadibana11@gmail.com', // Your email address where you want to receive messages
        subject: subject,
        text: `You have a new message from ${name} (${email}):\n\n${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error:', error);
            return res.status(500).send('Something went wrong.');
        }
        res.status(200).send('Message sent successfully!');
    });
    
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
