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

  /**
   * Hook for deleting knowledge relations
   */
  Knowledges.observe('before delete', function deleteRelation(ctx, next) {
    if (ctx.where.id) {
      Knowledges.findOne({
        where: {
          id: ctx.where.id
        }
      }, function (err, knowledge) {
        if (knowledge.founderId) {
          const Relation = ctx.Model.app.models.Relation;
          Relation.findOne({
            where: {
              knowledgeId: knowledge.founderKnowledgeId
            }
          }, function (err, relation) {
            if (relation) {
              Relation.destroyById(relation.id, function (err) {
                if (err) console.error(err);
              })
            }
          })
        }
      })
    }

    next();
  });
};
