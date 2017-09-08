'use strict';
const nodemailer = require('nodemailer');
const email = require('../../server/emailing/index');
const path = require('path');


module.exports = function (Account) {
  /**
   * This hook is called just after a model is created.
   */
  Account.observe('after save', function (ctx, next) {
    const verifyAccount = function () {
      ctx.instance.verify(Account.getVerifyOptions());
      next();
    };

    const sendEmail = function () {
      email.transporter.sendMail({
        from: 'BigHead <treshaalesha@gmail.com>',
        to: ctx.instance.email,
        subject: 'Welcome to BigHead!',
        text: '',
        html: email.getEmailTemplate(ctx.instance.username, email.getConfirmationLink(ctx.instance.id, ctx.instance.verificationToken))
      }, function (err, res) {
        if (err) console.log(err);
        else console.log('email sent');
      });
    };

    if (ctx.instance && !ctx.instance.emailVerified) {
      ctx.instance.verificationToken ? sendEmail() : verifyAccount();
    }

  });

  Account.beforeRemote('confirm', function (ctx) {
    ctx.res.send('Your account has successfully confirmed');
  });
};