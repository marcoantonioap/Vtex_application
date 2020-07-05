import { Request, Response } from 'express'
import knex from '../database/connection'
import { Product } from '../models'

class ProductController {
  async create(request: Request, response: Response) {
    const { quantity, price, name, category_id, store_id }: Product = request.body   
    const trx = await knex.transaction()
    try {
      await trx('products').insert({
        name,
        quantity,
        price,
        category_id,
        store_id
      })
      await trx.commit()
    } catch (e) {
      await trx.rollback()
      return response.json({ sucess: false })
    }
    return response.json({ sucess: true })
  }

  async show(request: Request, response: Response) {
    const { id } = request.params
    const product = await knex('products').where('id_product', id).first()
    if (!product) {
      return response.json({ message: 'Product not found' })
    }
    return response.json(product)
  }
  
  async index(request: Request, response: Response) {
    const { store_id } = request.query
    const products = await knex('products').where('store_id', Number(store_id))
  
    return response.json(products)
  }
}

export default ProductController

