'use strict';

/**
 * product router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::product.product');
// module.exports = {
//         routes: [{
//                 method: "POST",
//                 path: "/product",
//                 handler: "product.index",
//                 config: {
//                     policies: [],
//                     middlewares: [],
//                 }
//             ]
//         }