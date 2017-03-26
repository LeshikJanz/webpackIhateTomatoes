"use strict";
function createAction(type, payloadMapper) {
    var scopedName = this.scope ? this.scope + "/" : '';
    var name = "mercparts/" + scopedName + type;
    function actionCreator() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return {
            type: name,
            payload: payloadMapper ? payloadMapper.apply(void 0, args) : args[0],
        };
    }
    actionCreator.toString = function () { return name; };
    actionCreator.bind({ displayName: name });
    return actionCreator;
}
exports.createAction = createAction;
exports.scopedCreator = function (scopeName) { return createAction.bind({ scope: scopeName }); };
//# sourceMappingURL=createAction.js.map