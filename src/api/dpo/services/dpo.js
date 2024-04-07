'use strict';

/**
 * dpo service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dpo.dpo');
