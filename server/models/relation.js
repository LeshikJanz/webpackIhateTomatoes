'use strict';

module.exports = function (Relation) {
  /**
   * Adding createDate
   */
  Relation.observe('before save', function updateDate(ctx, next) {
    if (ctx.instance) {
      ctx.instance.createDate = new Date();
    }

    next();
  });
};
