"use strict";
function createAction(type, payloadMapper) {
    const scopedName = this.scope ? `${this.scope}/` : '';
    const name = `big-head/${scopedName}${type}`;
    function actionCreator(...args) {
        return {
            type: name,
            payload: payloadMapper ? payloadMapper(...args) : args[0],
        };
    }
    actionCreator.toString = () => name;
    actionCreator.bind({ displayName: name });
    return actionCreator;
}
exports.createAction = createAction;
exports.scopedCreator = (scopeName) => createAction.bind({ scope: scopeName });
//# sourceMappingURL=createAction.js.map