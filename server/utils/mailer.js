import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export const sendContactEmail = async ({ name, email, company, message }) => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.EMAIL_TO) return;

  await transporter.sendMail({
    from: `KinzaTechSolutions Website <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    subject: `New website contact from ${name}`,
    html: `<h3>New Contact Inquiry</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || 'N/A'}</p>
      <p><strong>Message:</strong><br/>${message}</p>`
  });
};
