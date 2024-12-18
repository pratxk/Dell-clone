const CartModel = require("../models/cartModel");

// create product

exports.createCart = async (req, res) => {
  try {
    const cart = await CartModel.create(req.body );
    res
      .status(200)
      .send({ success: true, message: "Product Added Successfully", cart });
  } catch (error) {
    res
      .status(500)
      .send({
        success: false,
        message: "Something Went Wrong",
        error: error.message,
      });
  }
};


// update cart item quantity

exports.updateCartItemQuantity = async (req, res) => {
  try {
    const { id } = req.params; // item ID to be updated
    const { items } = req.body; // new quantity

    const updatedCartItem = await CartModel.findByIdAndUpdate(
      id,
      { items },
      { new: true } // Return the updated document
    );

    if (!updatedCartItem) {
      return res.status(404).send({ success: false, message: "Item not found" });
    }

    res.status(200).send({
      success: true,
      message: "Quantity updated successfully",
      updatedCartItem,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

// get all carts only admin

exports.getAllCartData = async (req, res) => {
  try {
    const cart = await CartModel.find();
    res.status(200).send({
      success: true,
      message: "Success",
      cart,
      totalCount: cart.count,
    });
  } catch (error) {
    res.status(500).send({ success: false, message: "Something Went Wrong" });
  }
};

// get single product

exports.getSingleUserCart = async (req, res) => {
  try {
    const userCart =await CartModel.find({ user: req.body.user });
    res.status(200).send({
      success: true,
      message: "Success",
      userCart,
      totalCount: userCart.length,
    });
  } catch (error) {
    res.status(500).send({ success: false, message: "Something Went Wrong",error:error.message });
  }
};


// remove cart item

exports.removeSingleCartItem = async (req, res) => {
  try {
    await CartModel.findByIdAndDelete({ _id: req.params.id });
    res
      .status(200)
      .send({ success: true, message: "Product Deleted Successfully" });
  } catch (error) {
    res.status(500).send({ success: false, message: "Something Went Wrong" });
  }
};


//remove all cart item

exports.removeAllCartItem = async (req, res) => {
  try {
    await CartModel.deleteMany({ user: req.body.user });
    res
      .status(200)
      .send({ success: true, message: "All Product Deleted Successfully" });
  } catch (error) {
    res.status(500).send({ success: false, message: "Something Went Wrong" });
  }
}
