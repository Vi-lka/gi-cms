'use strict';

/**
 * hero-about service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hero-about.hero-about');
