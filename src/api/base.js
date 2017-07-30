"use strict";
/**
 * Initial http configuration
 */
var config = {
    baseUrl: '/api/'
};
/**
 * Function for converting http response to JSON format
 *
 * @param {any} response - http response
 *
 * @returns {any} response - http response
 */
exports.JSONResponse = function (response) {
    if (response.ok) {
        return response.json();
    }
    var json = response.json();
    return json.then(function (err) {
        throw err;
    });
};
/**
 * Object for sending GET, POST, PUT, DELETE, etc requests
 *
 * @type {any}
 */
exports.request = new Object({
    get: function (apiEndpoint, params) {
        var paramsString = Object
            .keys(params)
            .map(function (key) { return (key + "=" + encodeURIComponent(params[key])); })
            .join("&");
        return fetch(config.baseUrl + apiEndpoint + (paramsString ? "" + paramsString : ""), {
            headers: {
                "Authorization": localStorage.getItem('Token')
            }
        })
            .then(exports.JSONResponse);
    },
    post: function (apiEndpoint, params) {
        return fetch(config.baseUrl + apiEndpoint, {
            method: "POST",
            body: JSON.stringify(params),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('Token')
            }
        })
            .then(exports.JSONResponse);
    },
    put: function (apiEndpoint, params) {
        return fetch(config.baseUrl + apiEndpoint, {
            method: "PUT",
            body: JSON.stringify(params),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('Token')
            }
        })
            .then(exports.JSONResponse);
    },
    delete: function (apiEndpoint, params) {
        return fetch(config.baseUrl + apiEndpoint, {
            method: "DELETE",
            body: JSON.stringify(params),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('Token')
            }
        })
            .then(exports.JSONResponse);
    },
    upload: function (apiEndpoint, file, formData) {
        return axios({
            url: apiEndpoint,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: formData
        }).then(function (res) { return res; })
            .catch(function (err) { return console.error(err); });
    }
});
//# sourceMappingURL=base.js.map