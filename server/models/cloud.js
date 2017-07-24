'use strict';

module.exports = function(Cloud) {
  Cloud.observe('access', function limitToAccount(ctx, next) {
    const options = ctx.options && ctx.options;
    console.log('options');
    console.log(options);

    // ctx.query.where.accountId = '596f6843ee847e09f541eb9a';
    next();
  });
};
