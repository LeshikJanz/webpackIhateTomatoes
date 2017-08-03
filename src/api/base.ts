/**
 * Initial http configuration
 */
const config = {
  baseUrl: '/api/'
};

/**
 * Function for sending http requests
 *
 * @param {any[]} params - http parameters
 *
 * @returns {Response} response - http response
 */
declare function fetch( ...params );

/**
 * Function for converting http response to JSON format
 *
 * @param {any} response - http response
 *
 * @returns {any} response - http response
 */
export const JSONResponse = ( response: any ) => {
  if ( response.ok ) {
    return response.json();
  }

  const json = response.json();
  return json.then(( err: any ) => {
    throw err;
  });
};

/**
 * Object for sending GET, POST, PUT, DELETE, etc requests
 *
 * @type {any}
 */
export const request: any = new Object({
  get: ( apiEndpoint: string, params?: any ) => {

    const paramsString = Object
      .keys(params)
      .map(( key ) => `${key}=${encodeURIComponent(params[ key ])}`)
      .join("&");

    return fetch(config.baseUrl + apiEndpoint + ( paramsString ? `${paramsString}` : ""),
      {
        headers: {
          "Authorization": localStorage.getItem('Token')
        }
      })
      .then(JSONResponse);
  },
  post: ( apiEndpoint: string, params?: any ) => {
    return fetch(config.baseUrl + apiEndpoint, {
      method: "POST",
      body: JSON.stringify(params),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem('Token')
      }
    })
      .then(JSONResponse);
  },
  put: ( apiEndpoint: string, params?: any ) => {
    return fetch(config.baseUrl + apiEndpoint, {
      method: "PUT",
      body: JSON.stringify(params),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem('Token')
      }
    })
      .then(JSONResponse);
  },
  patch: ( apiEndpoint: string, params?: any ) => {
    return fetch(config.baseUrl + apiEndpoint, {
      method: "PATCH",
      body: JSON.stringify(params),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem('Token')
      }
    })
      .then(JSONResponse);
  },
  delete: ( apiEndpoint: string, params?: any ) => {
    return fetch(config.baseUrl + apiEndpoint, {
      method: "DELETE",
      body: JSON.stringify(params),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem('Token')
      }
    })
      .then(JSONResponse);
  },
  upload: ( apiEndpoint: string, file: File, formData: FormData ) => {
    return axios({
      url: apiEndpoint,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: formData
    }).then(res => res)
      .catch(err => console.error(err));
  }
});

