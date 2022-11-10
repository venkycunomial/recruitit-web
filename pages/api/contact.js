export default async (req, res) => {
  console.log(`Body:: ${JSON.stringify(req.body)}`);
  if (req.method === 'POST') {
    console.log(`Body:: ${JSON.stringify(req.body)}`);
    try {
      fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${req.body.gReCaptchaToken}`,
      })
        .then((reCaptchaRes) => reCaptchaRes.json())
        .then(async (reCaptchaRes) => {
          console.log(reCaptchaRes, 'Response from Google reCaptcha verification API');
          if (reCaptchaRes?.score > 0.5) {
            const { firstName, lastName, email, phone, company, howCanWeHelp } = req.body;

            let nodemailer = require('nodemailer');
            const transporter = await nodemailer.createTransport({
              port: 465,
              host: 'smtp.gmail.com',
              auth: {
                user: 'satherajesh184@gmail.com',
                pass: 'gwuojvhkdomzouvj',
              },
              secure: true,
            });

            const mailOptions = {
              from: email,
              to: 'sales@cunomial.com',
              subject: `Contact form submission from ${firstName} ${lastName}`,
              html: `<p>You have a new contact form submission</p><br>
                <p><strong>Name: </strong> ${firstName} ${lastName} </p><br>
                <p><strong>Email: </strong> ${email} </p><br>
                <p><strong>Phone: </strong> ${phone} </p><br>
                <p><strong>Company: </strong> ${company} </p><br>
                <p><strong>How Can We Help: </strong> ${howCanWeHelp} </p><br>
                <p><strong>ReCaptcha score(ignore this field): </strong> ${reCaptchaRes?.score} </p><br>
              `,
            };

            transporter.sendMail(mailOptions, function (err, info) {
              if (err) console.log(err);
              else console.log(info);
            });

            // .sendMail(mailOption, (err, data) => {
            //   if (err) {
            //     res.status(500).json({ error: 'failed' });
            //   } else {
            //     res.status(200).json({ success: 'mail sent', data: data });
            //   }
            // });

            res.status(200).send(req.body);
          } else {
            res.status(200).json({
              status: 'failure',
              message: 'Google ReCaptcha Failure',
            });
          }
        });
    } catch (err) {
      res.status(405).json({
        status: 'failure',
        message: 'Error submitting the enquiry form',
      });
    }
  } else {
    res.status(405);
    res.end();
  }
};
