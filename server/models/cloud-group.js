'use strict';

module.exports = function (Cloudgroup) {
  Cloudgroup.observe('access', function limitToAccount(ctx, next) {
    const accessToken = ctx.options && ctx.options.accessToken;

    ctx.query.where = ctx.query.where ? ctx.query.where : {};

    if (!ctx.query.where.accountId && accessToken) {
      ctx.query.where.accountId = accessToken.userId;
    }

    next();
  });
};
