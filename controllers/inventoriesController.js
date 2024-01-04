const { ObjectId } = require("mongodb");
const { db } = require("../utils/connectDb");

const getProducts = async (req, res) => {
    try {
        // Thêm điều kiện lọc số lượng dưới 100 vào truy vấn
        const products = await db.inventories.find({ instock: { $lt: 100 } }).toArray();

        res.status(200).json({
            message: "Get products list successful",
            data: products,
        });
    } catch (error) {
        console.error("Error getting products:", error);
        res.status(500).json({
            message: "Internal Server Error",
        });
    }
};

module.exports = { getProducts };
