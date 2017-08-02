'use strict';

module.exports = function (Knowledges) {
  /**
   * Hook for adding createDate & updateDate to instance
   */
  Knowledges.observe('before save', function updateTimestamp(ctx, next) {
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
