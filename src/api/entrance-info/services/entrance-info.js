'use strict';

/**
 * entrance-info service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::entrance-info.entrance-info');
