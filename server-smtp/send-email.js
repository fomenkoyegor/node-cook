const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: "localhost",
  port: 4321,
});
transporter.sendMail(
  {
    from: "foma@gmail.com",
    to: "fabysshk@gmail.com",
    subject: "Hello",
    text: "wtf",
  },
  (err, info) => {
    if (err) {
      console.log(err);
    }
    console.log("Message Sent:", info);
  }
);
