'use strict';

module.exports = function (View) {
  /**
   * Hook for adding date to instance and replace instance if this is already exist
   */
  View.observe('before save', function updateTimestamp(ctx, next) {
    if (ctx.instance) {
      View.findOne({
          where: {
            accountId: ctx.instance.userId,
            cloudId: ctx.instance.cloudId
          }
        }, function (err, view) {
          if (view) {
            View.destroyById(view.id, function (err) {
              if (err) console.error(err);
            })
          }
        }
      );
      ctx.instance.date = new Date();
    }
    next();
  });
};
