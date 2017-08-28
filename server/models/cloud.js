'use strict';

module.exports = function (Cloud) {
  /**
   * Adding createDate and updateDate
   */
  Cloud.observe('before save', function updateDate(ctx, next) {
    if (ctx.instance) {
      if (!ctx.instance.createDate) {
        ctx.instance.createDate = ctx.instance.updateDate = new Date();
      } else {
        ctx.instance.updateDate = new Date();
      }
    }

    next();
  });
};
