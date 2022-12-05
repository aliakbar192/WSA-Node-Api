const express = require("express");
const validate = require("../middlewares/validate");
const { orderValidation } = require("../validations");
const { orderController } = require("../controllers");

const router = express.Router();

router
  .route("/")
  .post(validate(orderValidation.createOrder), orderController.createOrder)
  .get(validate(orderValidation.getOrders), orderController.getOrders);

router
  .route("/:orderId")
  .get(validate(orderValidation.getOrderById), orderController.getOrderById)
  .put(validate(orderValidation.updateOrder), orderController.updateOrderById)
  .delete(validate(orderValidation.deleteOrder), orderController.deleteOrder);

module.exports = router;
