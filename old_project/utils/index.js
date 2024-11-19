const nodemailer = require("nodemailer");

async function sendEmail({name, subject, email, message}) {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let emailAccount = {
        smtp: process.env.EMAIL_SMTP_HOST,
        port: process.env.EMAIL_SMTP_PORT,
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    }

    console.log(emailAccount)
    // let emailAccount = await nodemailer.createemailAccount();
    // emailAccount.smtp = "smtp.ethereal.email";
    // emailAccount.port = 587;
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: emailAccount.smtp,
        port: emailAccount.port,
        secure: true, // true for 465, false for other ports
        secureConnection: false, // true for 465, false for other ports
        auth: {
            user: emailAccount.user, // generated ethereal user
            pass: emailAccount.pass, // generated ethereal password
        },
    });

    var text = subject + "\n" + message
    var html = `
        <b>Name:</b> ${name}<br/><br/>
        <b>From:</b> ${email}<br/><br/>
        <b>Subject:</b> ${subject}<br/><br/>
        ----------------------
        <br/><br/>
        ${message}
    `

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: 'EAA - Estaleiro Atlântico do Amboim',
        to: emailAccount.user, // list of receivers
        subject: "Contacto",
        text: text, 
        html: html,
    });

    // console.log("testAccount", testAccount);
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    return {
        messageSent: info.messageId,
        previewUrl: nodemailer.getTestMessageUrl(info),
    }
}

module.exports = { 
    sendEmail 
}