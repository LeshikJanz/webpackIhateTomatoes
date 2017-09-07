'use strict';
const nodemailer = require('nodemailer');
const email = require('../../server/emailing/index');

module.exports = function (Auth) {
  /**
   * This hook is called just before a model is created.
   */
  Auth.beforeCreate = function (next, modelInstance) {
    /**
     * Sending account activating instructions
     */
    email.transporter.sendMail({
      from: 'BigHead <treshaalesha@gmail.com>',
      to: modelInstance.email,
      subject: 'Welcome to BigHead!',
      text: '',
      html: email.getEmailTemplate(modelInstance.username)
    }, function (err, res) {
      if (err) console.log(err);
      else console.log('email sent');
    });

    next();
  }
}
