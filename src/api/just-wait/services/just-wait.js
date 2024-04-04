'use strict';

/**
 * just-wait service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::just-wait.just-wait');
