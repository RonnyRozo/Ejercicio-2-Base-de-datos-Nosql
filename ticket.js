const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  subtotal: {
    type: Number,
    required: true,
  },
  iva: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  articulos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Articulo',
    },
  ],
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario', // Asumiendo que tienes un modelo de usuario
  },
});

module.exports = mongoose.model('Ticket', ticketSchema);