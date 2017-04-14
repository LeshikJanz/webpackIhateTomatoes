"use strict";
const base_1 = require("./base");
exports.fetchCloud = (id, params = {}) => {
    return base_1.request
        .get(`Clouds/${id}/knowledge`, params)
        .then((content) => content.map((c) => c));
};
exports.fetchKnowledge = (id, params = {}) => {
    return base_1.request
        .get(`Knowledges/${id}`, params)
        .then((content) => content.map((c) => c));
};
exports.addNewKnowledge = (params = {}) => {
    return base_1.request
        .post(`Knowledges`, params)
        .then((c) => c);
};
exports.updateKnowledgeById = (id, params = {}) => {
    return base_1.request
        .put(`Knowledges/${id}`, params)
        .then((c) => c);
};
//# sourceMappingURL=cloud.js.map