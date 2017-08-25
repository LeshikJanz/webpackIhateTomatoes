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

  Cloud.updateGrid = function (data, cb) {
    data.forEach((d) => Cloud.upsertWithWhere({ id: d.i }, { grid: d }));

    cb(null, 'Grid has been successfully updated');
  }

  Cloud.remoteMethod('updateGrid', {
    accepts: { arg: 'data', type: 'array' },
    returns: { arg: 'message', type: 'string' }
  });
};
