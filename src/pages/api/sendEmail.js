import nodemailer from 'nodemailer';

// Configure the SMTP transporter with MXRoute credentials
const transporter = nodemailer.createTransport({
    host: 'shadow.mxrouting.net', // Replace with your MXRoute SMTP server
    port: 587, // or 465 for SSL
    secure: false, // true for port 465, false for port 587
    auth: {
        user: process.env.MXROUTE_EMAIL_USER, // Your MXRoute SMTP username
        pass: process.env.MXROUTE_EMAIL_PASS  // Your MXRoute SMTP password
    }
});

// Handler for sending the email
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { name, email, message } = req.body;

    // Set up the email options
    const mailOptions = {
        from: `"${name}" <${email}>`, // The sender's email and name
        to: 'contact@michael-sweat.com', // Replace with the email you want to receive messages
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message}</p>`
    };

    try {
        // Attempt to send the email
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send email', error: error.message });
    } 
}
