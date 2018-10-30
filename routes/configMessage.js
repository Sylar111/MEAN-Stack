const nodemailer = require('nodemailer');

module.exports = (messages) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'sylar.tdh@gmail.com', // Your sending email
      pass: '123456vy' // Your sending email password
    }
  });

  const mailOptions = {
    from: `"${messages.name} ♦ " <${messages.email}>`,
    to: 'sylar.tdh@gmail.com', // Your destination email
    subject: messages.text,
    html: `
    <strong>UserName: </strong> ${messages.name} <br/>
    <strong>UserEmail: </strong> ${messages.email}  <br/>
    <strong>Message: </strong> ${messages.message}
    `
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err)
      console.log(err);
    else
      console.log(info);
  });
}
