"use strict";
var base_1 = require("./base");
/**
 * Fetching cloud groups including clouds
 *
 * See: .../explorer/#!/CloudGroups:PUT
 *
 * @returns {ICloudGroup[]} cloudGroups - cloud groups
 */
exports.fetchCloudGroups = function (accountId) {
    return base_1.request
        .get('CloudGroups?filter={"include": ["clouds"]' + (accountId ? ", \"where\": {\"accountId\": \"" + accountId + "\"}}" : '}'), {})
        .then(function (cloudGroups) { return cloudGroups; });
};
/**
 * Updating cloud by id
 *
 * See: .../explorer/#!/Clouds/{id}:PUT
 *
 * @param {string} id - cloud id
 * @param {ICloud} cloud - cloud
 *
 * @returns {ICloud} cloud - updated cloud
 */
exports.updateCloudById = function (id, cloud) {
    return base_1.request
        .put("Clouds/" + id, cloud)
        .then(function (cloud) { return cloud; });
};
/**
 * Fetching cloud by id including knowledge
 *
 * See: .../explorer/#!/Clouds/{id}:POST
 * @param {string} id - cloud id
 *
 * @returns {ICloud} cloud - cloud
 */
exports.fetchCloud = function (id) {
    return base_1.request
        .get("Clouds/" + id + "?filter={\"include\": [\"knowledge\"]}", {})
        .then(function (cloud) { return cloud; });
};
/**
 * Creating new cloud
 *
 * See: .../explorer/#!/CloudGroups/{id}/clouds:POST
 * @param {string} id - cloud id
 * @param {ICloud} cloud - cloud
 *
 * @returns {ICloud} c - cloud
 */
exports.addNewCloud = function (id, cloud) {
    return base_1.request
        .post("CloudGroups/" + id + "/clouds", cloud)
        .then(function (c) { return c; });
};
/**
 * Creating new cloud group
 *
 * See: .../explorer/#!/CloudGroups/{id}/clouds:POST
 * @param {ICloudGroup} cloudGroup - cloud group
 *
 * @returns {ICloudGroup} c - cloud group
 */
exports.addNewCloudGroup = function (cloudGroup) {
    return base_1.request
        .post("CloudGroups", cloudGroup)
        .then(function (c) { return c; });
};
/**
 * Deleting cloud group by id
 *
 * See: .../explorer/#!/CloudGroups/{id}:DELETE
 * @param {string} id - deleting cloud group id
 *
 * @returns {string} c - amount of deleted cloud groups
 */
exports.deleteCloudGroup = function (id) {
    return base_1.request
        .delete("CloudGroups/" + id)
        .then(function (c) { return c; });
};
/**
 * Deleting cloud by id
 *
 * See: .../explorer/#!/Clouds/{id}:DELETE
 * @param {string} id - deleting cloud id
 *
 * @returns {string} c - amount of deleted clouds
 */
exports.deleteCloud = function (id) {
    return base_1.request
        .delete("Clouds/" + id)
        .then(function (c) { return c; });
};
/**
 * Fetching knowledge by id
 *
 * See: .../explorer/#!/Knowledges/{id}:GET
 * @param {string} id - knowledge id
 *
 * @returns {IKnowledge} knowledge - knowledge
 */
exports.fetchKnowledgeById = function (id) {
    return base_1.request
        .get("Knowledges/" + id, {})
        .then(function (knowledge) { return knowledge; });
};
/**
 * Creating new knowledge
 *
 * See: .../explorer/#!/Clouds/{cloudId}/Knowledge:POST
 * @param {IKnowledge} knowledge - cloud knowledge
 *
 * @returns {IKnowledge} knowledge - knowledge
 */
exports.addNewKnowledge = function (knowledge) {
    return base_1.request
        .post("Clouds/" + knowledge.cloudId + "/Knowledge", knowledge)
        .then(function (knowledge) { return knowledge; });
};
/**
 * Update knowledge by id
 *
 * See: .../explorer/#!/Knowledges/{id}:PUT
 * @param {string} id - knowledge id
 * @param {IKnowledge} knowledge - cloud knowledge
 *
 * @returns {IKnowledge} knowledge - knowledge
 */
exports.updateKnowledgeById = function (id, knowledge) {
    return base_1.request
        .put("Knowledges/" + id, knowledge)
        .then(function (knowledge) { return knowledge; });
};
//# sourceMappingURL=cloud.js.map