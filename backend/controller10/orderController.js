import orderr from "../model10/orderModel.js";

export const orderCreate = async (req, res) => {
  try {
    const productIds = Array.isArray(req.body.products) ? req.body.products : [];

    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    const orderId = Array.from({ length: 10 }, () =>
      characters[Math.floor(Math.random() * characters.length)]
    ).join("");

    const data = await orderr.create({
      ...req.body,
      userId: req.user._id,
      orderId,
      products: productIds.map(id => ({ productId: id }))
    });

    return res.json({
      success: true,
      status: 200,
      message: "Order is placed successfully",
      body: data
    });

  } catch (error) {
    console.log("Order Creation Error:", error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};

export const orderGetAll = async (req, res) => {
  try {
    const data = await orderr
      .find({ userId: req.user._id })
      .populate("products.productId")
      .populate({
        path: "products.productId",
        populate: {
          path: "userId", // this is inside productId
          model: "user"
        }
      })      .populate("userId");

    return res.json({
      success: true,
      status: 200,
      message: "Here is your orders",
      body: data
    });

  } catch (error) {
    console.log("Get All Orders Error:", error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};

export const orderGetAllForAdmin = async (req, res) => {
  try {
    const data = await orderr
      .find()
      .populate("products.productId")
      .populate("userId");

    return res.json({
      success: true,
      status: 200,
      message: "Here is all orders",
      body: data
    });

  } catch (error) {
    console.log("Admin Get All Orders Error:", error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};
export const orderGetAllForShopkeeper = async (req, res) => {
    try {
        const allOrders = await orderr
        .find()
        .populate({
          path: "products.productId",
          populate: {
            path: "userId",
            model: "user"
          }
        });
      
      const filteredOrders = allOrders.filter(order =>
        
        order.products.some(product =>
            // console.log(product,"pro")
          product.productId?.userId?._id?.toString() === req.user._id.toString()
         )
      );
      
  
      return res.json({
        success: true,
        status: 200,
        message: "Here is all orders",
        body: filteredOrders
      });
  
    } catch (error) {
      console.log("Admin Get All Orders Error:", error);
      res.status(500).json({ success: false, message: "Something went wrong" });
    }
  };

export const singleOrderGet = async (req, res) => {
  try {
    const data = await orderr.findById(req.params.id);

    return res.json({
      success: true,
      status: 200,
      message: "Here is single order",
      body: data
    });

  } catch (error) {
    console.log("Single Order Get Error:", error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};

export const singleOrderGetForAdmin = async (req, res) => {
  try {
    const data = await orderr
      .findById(req.params.id)
      .populate("products.productId")
      .populate("userId");

    return res.json({
      success: true,
      status: 200,
      message: "Here is single order",
      body: data
    });

  } catch (error) {
    console.log("Admin Single Order Get Error:", error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};

export const orderDelete = async (req, res) => {
  try {
    await orderr.findByIdAndDelete(req.params.id);

    return res.json({
      success: true,
      status: 200,
      message: "Order is deleted successfully",
      body: {}
    });

  } catch (error) {
    console.log("Order Deletion Error:", error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};