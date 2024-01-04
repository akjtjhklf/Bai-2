const { ObjectId } = require("mongodb");
const { db } = require("../utils/connectDb");

const getOrdersWithProducts = async (req, res) => {
    try {
        // Perform an aggregation to join orders and products based on the "item" field
        const ordersWithProducts = await db.orders.aggregate([
            {
                $lookup: {
                    from: "inventories",
                    localField: "item",
                    foreignField: "sku",
                    as: "description"
                }
            },
            {
                $unwind: "$description"
            }
        ]).toArray();

        res.status(200).json({
            message: "Get orders with product details successful",
            data: ordersWithProducts,
        });
    } catch (error) {
        console.error("Error getting orders with product details:", error);
        res.status(500).json({
            message: "Internal Server Error",
        });
    }
};

module.exports = { getOrdersWithProducts };