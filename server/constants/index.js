const URL_DEVELOPMENT = 'http://localhost:3000/';
const URL_PRODUCTION = 'http://45.76.129.216:3000/';

exports.SERVER_URL = process.env.NODE_ENV == 'development' ? URL_DEVELOPMENT : URL_PRODUCTION;
