const nodemailer = require('nodemailer');
const fs = require('fs');
const NAME_SELECTOR = 'emailer-name';
const CONFIRAMTION_LINK_SELECTOR = 'confirmation-link';
const { SERVER_URL } = require('../constants/index');

function getConfirmationLink(userId, token) {
  return `${SERVER_URL}api/Accounts/confirm?uid=${userId}&token=${token}`;
}

function getEmailTemplate(name, confirmation_link) {
  return fs.readFileSync(__dirname + '/content/email-template.html', "utf8")
    .replace(NAME_SELECTOR, name)
    .replace(CONFIRAMTION_LINK_SELECTOR, confirmation_link);
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
exports.getConfirmationLink = getConfirmationLink;