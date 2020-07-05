import { Request, Response } from 'express'
import knex from '../database/connection'
import { Sale, Category, Product } from '../models'

class SaleController {
  async create(request: Request, response: Response) {
    const { product_id, quantity_sold, sale_income, sale_date }: Sale = request.body 
    const trx = await knex.transaction()
    try {
      const insertedSale = await trx('sales').insert({
        product_id,
        quantity_sold,
        sale_income,
        sale_date
      })

      const product = await trx<Product>('products').where('id_product', '=', product_id).first()
      if(!product) {
        await trx.rollback()
        return response.sendStatus(400).send('Product Not Found')
      }

      const newQuantity = product.quantity - quantity_sold
      if(newQuantity < 0) {
        await trx.rollback()
        return response.sendStatus(400).send('Quantity not available')
      }

      await trx('products').where('id_product', '=', product_id).update({quantity: newQuantity})

      await trx.commit()
      return response.json(insertedSale)
    } catch (e) {
      await trx.rollback()
      return response.sendStatus(500).send()
     
    }
   
  }

  async index(request: Request, response: Response) {
    const { since_date, product_id } = request.query
    const sinceDate = since_date ? Date.parse(String(since_date)) : new Date(0)
    
    const sales = product_id ? 
      await knex('sales')
        .where('sale_date', '>=', sinceDate)
        .where('product_id', '=', Number(product_id)) : 
      await knex('sales')
      .where('sale_date', '>=', sinceDate)
    
    return response.json(sales)
  }

  async mostSold(request: Request, response: Response) {
    const { store_id } = request.params
    const categories = await knex('categories').where('store_id', '=', store_id)
    let mostSold: {[category: string]: {}} = {}
    const promises = categories.map(async (category: Category) => {
      const sales = await knex('sales')
        .join('products', 'sales.product_id', '=', 'products.id_product')
        .select('*')
        .where('products.category_id', '=', category.id_category)
        .sum('quantity_sold as total_sold')
        .groupBy('product_id')
        .orderBy('total_sold', 'desc')
        .limit(5)

      mostSold = {
        ...mostSold,
        [category.name]: sales
      }
    })

    await Promise.all(promises)
    return response.json(mostSold)
  }
}

export default SaleController