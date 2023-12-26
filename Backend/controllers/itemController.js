const itemModel = require('../models/itemModel');
const httpStatus = require('http-status');

exports.getitem = async (req, res) => {
  try {
    const getitem = await itemModel.find();

    if (getitem.length > 0) {
      return res.status(200).json({ message: 'Items retrieved!', getitem });
    } else {
      return res.status(404).json({ message: 'No items found' });
    }
  } catch (error) {
    console.error('Error getting items list:', error);
    return res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

exports.addItem = async (req, res) => {
  try {
    const { itemName, itemDescription  ,itemPrice } = req.body; // Adjust the property names as needed
    const { itemImage } = req.body;

    const newItem = new itemModel({ itemName, itemDescription,itemPrice,itemImage });

    const savedItem = await newItem.save();
    return res.status(201).json({ message: 'Item added successfully', item: savedItem });
  } catch (error) {
    console.error('Error adding item:', error);
    return res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

exports.getImage = async (req, res) => {
  try {
    const itemId = req.params.itemId;
    const item = await itemModel.findById(itemId);

    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    // If an image URL or path is stored in the database, you can send it to the client
    if (item.itemImage) {
      return res.status(200).json({ message: 'Image retrieved', imageUrl: item.itemImage });
    } else {
      return res.status(404).json({ message: 'Image not found for this item' });
    }
  } catch (error) {
    console.error('Error getting image:', error);
    return res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};