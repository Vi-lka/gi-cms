'use strict';

/**
 * employees-page service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::employees-page.employees-page');
