const nodemailer = require('nodemailer');
var fs = require('fs');
const NAME_SELECTOR = 'emailer-name';

function getEmailTemplate(name) {
  return fs.readFileSync(__dirname + '/content/template.html', "utf8")
    .replace(NAME_SELECTOR, name);
}

const senderEmail = 'treshaalesha@gmail.com';
const CLIENT_ID = '533691920336-burelau4h4tlvbljpb0eoesjl65u03n4.apps.googleusercontent.com';
const CLIENT_SECRET = 'b0pGPP6z9nxWvWjLymrg_cO_';
const REFRESH_TOKEN = '1/kUB_lYplvTEY1iA39rY_9eTnaNZPFZXunL5ZIXy6cE0';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: senderEmail,
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    refreshToken: REFRESH_TOKEN
  },
});

exports.transporter = transporter;
exports.getEmailTemplate = getEmailTemplate;