'use strict';

module.exports = function(Sky) {
  Sky.updateGrid = function (data, cb) {
    const Cloud = Sky.models.Cloud;

    data.forEach((d) => Cloud.upsertWithWhere({ id: d.i }, { grid: d }));

    cb(null, 'Grid has been successfully updated');
  };

  Sky.remoteMethod('updateGrid', {
    accepts: { arg: 'data', type: 'array' },
    returns: { arg: 'message', type: 'string' }
  });
};
