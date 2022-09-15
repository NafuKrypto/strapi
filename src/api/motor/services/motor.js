'use strict';

/**
 * motor service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::motor.motor');
