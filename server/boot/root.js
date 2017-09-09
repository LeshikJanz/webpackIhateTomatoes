'use strict';
const imgur = require('imgur');

module.exports = function(server) {
  /**
   * Set up Imgur for uploading images to the clientId: 25a73dd4a79fdb9
   */
  imgur.setClientId('25a73dd4a79fdb9');
};
