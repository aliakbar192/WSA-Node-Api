const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const { objectId } = require("./custom.validation");

const createOrder = {
  body: Joi.object().keys({
    userId: Joi.objectId().required(),
    serviceId: Joi.objectId().required(),
    location: Joi.array().required(),
    status: Joi.string().required(),
    payment: Joi.string().required(),
    phnno: Joi.string().required(),
  }),
};

const getOrders = {
  query: Joi.object().keys({
    filter: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getOrderByUserId = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};
const getOrderById = {
  params: Joi.object().keys({
    orderId: Joi.required().custom(objectId),
  }),
};
const getOrderByuserId = {
  params: Joi.object().keys({
    userId: Joi.required().custom(objectId),
  }),
};

const updateOrder = {
  params: Joi.object().keys({
    orderId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      location: Joi.array().required(),
      status: Joi.string().required(),
    })
    .min(1),
};

const deleteOrder = {
  params: Joi.object().keys({
    orderId: Joi.required().custom(objectId),
  }),
};

module.exports = {
  createOrder,
  getOrders,
  getOrderById,
  getOrderByuserId,
  getOrderByUserId,
  updateOrder,
  deleteOrder,
};
