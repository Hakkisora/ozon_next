import { Product } from "../models/product.models"
import { Query } from "../models/query.models"

export const getData = async (query: Query) => {
    console.log(query)

    const response = await fetch('https://ozon-7cd58-default-rtdb.firebaseio.com/goods.json')
    const data = await response.json()

    return data.filter((product: Product) => {
        if (query.category) {
            if (product.category !== query.category) {
                return false
            }
        }

        if (query.search) {
            if (!product.title.includes(query.search)) {
                return false
            }
        }

        return true
    })
}