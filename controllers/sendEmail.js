const nodemailer = require('nodemailer');

const sendEmail = async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  let info = await transporter.sendMail({
    from: '"Fred Boo 👻" <boo@example.com>',
    to: 'bear@example.com, baz@example.com',
    subject: 'Hello ✔',
    // text: 'Hello world!',
    html: '<b>Hello world!</b>',
  });

  res.json(info);
};

module.exports = sendEmail;
