"use strict";
exports.DefaultCase = Symbol('DefaultCase');
exports.createReducer = (declaration, initialValue) => {
    return function reducerFn(state = initialValue, action) {
        const reducer = declaration[action.type] || declaration[exports.DefaultCase];
        return reducer ? reducer(state, action.payload, action) : state;
    };
};
//# sourceMappingURL=createReducer.js.map