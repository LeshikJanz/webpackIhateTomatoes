"use strict";
const config = {
    baseUrl: '/api/'
};
exports.JSONResponse = (response) => {
    if (response.ok) {
        return response.json();
    }
    const json = response.json();
    return json.then((err) => { throw err; });
};
exports.request = new Object({
    get: (apiEndpoint, params) => {
        const paramsString = Object
            .keys(params)
            .map((key) => `${key}=${encodeURIComponent(params[key])}`)
            .join("&");
        return fetch(config.baseUrl + apiEndpoint + (paramsString ? `?${paramsString}` : ""))
            .then(exports.JSONResponse);
    },
    post: (apiEndpoint, params) => {
        return fetch(config.baseUrl + apiEndpoint, {
            method: "POST",
            body: JSON.stringify(params),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(exports.JSONResponse);
    },
    put: (apiEndpoint, params) => {
        return fetch(config.baseUrl + apiEndpoint, {
            method: "PUT",
            body: JSON.stringify(params),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(exports.JSONResponse);
    },
    delete: (apiEndpoint, params) => {
        return fetch(config.baseUrl + apiEndpoint, {
            method: "DELETE",
            body: JSON.stringify(params),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(exports.JSONResponse);
    },
    upload: (apiEndpoint, file, params, onProgress) => {
        const futch = (url, opts, onProgress) => new Promise((res, rej) => {
            const xhr = new XMLHttpRequest();
            xhr.open(opts.method || 'post', url);
            for (let k in opts.headers || {}) {
                console.log("Adding ", k, opts.headers[k]);
                xhr.setRequestHeader(k, opts.headers[k]);
            }
            xhr.onload = (e) => res(e.target.responseText);
            xhr.onerror = rej;
            if (xhr.upload && onProgress)
                xhr.upload.onprogress = onProgress;
            xhr.send(opts.body);
        });
        let data = new FormData();
        data.append('file', file);
        return futch(config.baseUrl + apiEndpoint, {
            method: 'POST',
            headers: {
                "Accept": "application/json"
            },
            body: data
        }, onProgress);
    }
});
//# sourceMappingURL=base.js.map