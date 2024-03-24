'use strict';

/**
 * site-description service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::site-description.site-description');
