'use strict';

/**
 * motor controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::motor.motor');
