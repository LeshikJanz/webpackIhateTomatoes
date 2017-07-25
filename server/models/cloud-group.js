'use strict';

module.exports = function (Cloudgroup) {
  Cloudgroup.observe('access', function limitToAccount(ctx, next) {
    const accessToken = ctx.options && ctx.options.accessToken;
    ctx.query.where = Object.assign({}, ctx.query.where, accessToken && { accountId: accessToken.userId });

    next();
  });
};
