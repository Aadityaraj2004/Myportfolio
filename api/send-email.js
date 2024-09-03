const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    // Create a transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'aadibana11@gmail.com', // Your email address
        pass: 'qths iemc nhqr wnzt'     // Your email app-specific password
      }
    });

    // Send email
    try {
      await transporter.sendMail({
        from: email,
        to: 'aadibana11@gmail.com', // Recipient email address
        subject: subject,
        text: message,
        html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`
      });

      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to send email', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
