import Product1 from "Assets/product/product1.png"
import Product2 from "Assets/product/product2.png"

export default [
    {
        id: 1,
        product: {
            name: "MYFORD by Pantaloons New T-Shirt",
            rating: "3",
            images: [
                { url: Product1 },
                { url: Product2 },
            ],
            price: "45"
        },
        count: 3
    },
    {
        id: 2,
        product: {
            name: "BYFORD by Pantaloons New T-Shirt",
            rating: "3",
            images: [
                { url: Product1 },
                { url: Product2 },
            ],
            price: "45"
        },
        count: 2
    },
    {
        id: 3,
        product: {
            name: "CYFORD by Pantaloons New T-Shirt",
            rating: "3",
            images: [
                { url: Product1 },
                { url: Product2 },
            ],
            price: "45"
        },
        count: 1
    }
]