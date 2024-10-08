'use strict';

/**
 * docs service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::docs.docs');
