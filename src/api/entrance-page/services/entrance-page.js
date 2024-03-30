'use strict';

/**
 * entrance-page service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::entrance-page.entrance-page');
