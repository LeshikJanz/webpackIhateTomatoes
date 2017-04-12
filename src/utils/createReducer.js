"use strict";
exports.DefaultCase = Symbol('DefaultCase');
exports.createReducer = function (declaration, initialValue) {
    return function reducerFn(state, action) {
        if (state === void 0) { state = initialValue; }
        var reducer = declaration[action.type] || declaration[exports.DefaultCase];
        return reducer ? reducer(state, action.payload, action) : state;
    };
};
//# sourceMappingURL=createReducer.js.map