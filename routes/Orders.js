const express = require('express');
const { createOrder, fetchOrdersByUser, deleteOrder, updateOrder, fetchAllOrders } = require('../controller/Order');
const router = express.Router();

router.post('/', createOrder)
    .get('/own/', fetchOrdersByUser)
    .get('/', fetchAllOrders)
    .delete('/:id', deleteOrder)
    .patch('/:id', updateOrder)
  

exports.router = router;