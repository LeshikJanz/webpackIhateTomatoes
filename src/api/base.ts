const config = {
  baseUrl: '/api/'
};

declare function fetch(...params);

export const JSONResponse = (response: any) => {
      if ( response.ok) {
        return response.json();
      }

      const json = response.json();
      return json.then((err: any) => { throw err; });
};

export
const request: any = new Object({
  get: (apiEndpoint: string, params?: any) => {
    const paramsString = Object
      .keys(params)
      .map((key) => `${key}=${encodeURIComponent(params[key])}`)
      .join("&");

    return fetch(config.baseUrl + apiEndpoint + ( paramsString ? `?${paramsString}` : ""))
      .then(JSONResponse);
  },
  post: (apiEndpoint: string, params?: any) => {
    return fetch(config.baseUrl + apiEndpoint, {
          method: "POST",
          body: JSON.stringify(params),
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "authorisation": "spoyfIohfIXtc5lSBsTnQBixhyFM5oICnC46UUJMjpjrUDPfTEJAJWf82R5UB2s5"
          }
    })
    .then(JSONResponse);
  },
  put: (apiEndpoint: string, params?: any) => {
    return fetch(config.baseUrl + apiEndpoint, {
          method: "PUT",
          body: JSON.stringify(params),
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorisation": "spoyfIohfIXtc5lSBsTnQBixhyFM5oICnC46UUJMjpjrUDPfTEJAJWf82R5UB2s5"
          }
    })
    .then(JSONResponse);
  },
  delete: (apiEndpoint: string, params?: any) => {
    return fetch(config.baseUrl + apiEndpoint, {
          method: "DELETE",
          body: JSON.stringify(params),
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          }
    })
    .then(JSONResponse);
  },
  upload: (apiEndpoint: string, file: File, params?: any, onProgress?: any) => {
    const futch = (url, opts: any, onProgress) => new Promise( (res, rej) => {
          const xhr = new XMLHttpRequest();
          xhr.open(opts.method || 'post', url);
          for (let k in opts.headers||{}) {
              console.log("Adding ", k, opts.headers[k]);
              xhr.setRequestHeader(k, opts.headers[k]);
          }
          xhr.onload = (e: any) => res(e.target.responseText);
          xhr.onerror = rej;
          if (xhr.upload && onProgress)
              xhr.upload.onprogress = onProgress; // event.loaded / event.total * 100 ; //event.lengthComputable
          xhr.send(opts.body);
      });

    let data = new FormData();
    data.append('file', file);
    return futch(config.baseUrl + apiEndpoint,
                  {
                    method: 'POST',
                    headers: {
                      "Accept": "application/json"
                    },
                    body: data
                  },
                  onProgress
    );
  }
});

