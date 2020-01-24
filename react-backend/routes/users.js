var express = require('express');
var nodeMailer = require('nodemailer');
var router = express.Router();

/* POST Send Email. */
router.post('/', function(req, res, next) {
    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'barackob63@gmail.com',
            pass: 'aglmnzx13'
        }
    });
    let mailOptions = {
        from: '"Test Team" <barackob63@gmail.com>', // sender address
        to: req.body.email, // list of receivers
        subject: 'Confirm', // Subject line
        html: '<b>It is very important than you sent us a message. Thanks.</b>' // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.statusCode = 500;
            res.send('error');
            return false;
        }
    });
    res.statusCode = 200;
    res.send('success');
});

module.exports = router;
