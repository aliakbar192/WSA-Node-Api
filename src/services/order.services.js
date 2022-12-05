const { httpStatus, message } = require("../utils/constant");
const { Order } = require("../models/orders");
const ApiError = require("../utils/ApiError");
const bcrypt = require("bcrypt");
const _ = require("lodash");

const createOrders = async (orderBody) => {
  let order = new Order({
    userId: orderBody.userId,
    location: orderBody.location,
    status: orderBody.status,
    serviceId: orderBody.serviceId,
    payment: orderBody.payment,
    phnno: orderBody.phnno,
  });

  console.log(order);
  let result = await order.save();
  return result;
};

const queryOrders = async (filter, options) => {
  const order = await Order.find();
  return order;
};
const getOrder = async (orderId) => {
  console.log(orderId);
  let order = await Order.findById(orderId);

  return order;
};

const getOrderByUser = async (userId) => {
  console.log(userId);
  let order = await Order.find({ userId });
  console.log(order);
  return order;
};

const updateOrderById = async (orderId, orderBody) => {
  console.log(orderBody);
  console.log(orderId);

  const order = await Order.findByIdAndUpdate(
    orderId,
    _.pick(orderBody, ["status"]),
    {
      new: true,
    }
  );
  console.log(order);
  return order;
};
const deleteOrderById = async (orderId) => {
  const order = await Order.findByIdAndDelete(orderId);
  if (!order) {
    throw new ApiError(httpStatus.NOT_FOUND, message.NOT_FOUND);
  }
  return order;
};

module.exports = {
  createOrders,
  queryOrders,
  getOrder,
  getOrderByUser,
  updateOrderById,
  deleteOrderById,
};
