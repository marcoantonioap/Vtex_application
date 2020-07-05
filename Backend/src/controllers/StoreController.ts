import { Request, Response } from 'express'
import knex from '../database/connection'
import { Store } from '../models'
import { hashPasswordAsync } from '../utils/hash'

class StoreController {
  async create(request: Request, response: Response) {
    const { name, email, cnpj, login, password, city, uf, categories }: Store = request.body 
    const categoryArray: string[] = categories.split(',').map(item => item.trim())  
    const hasedPassword = await hashPasswordAsync(password)
    const trx = await knex.transaction()
    try {
      const insertedIds = await trx('stores').insert({
        name,
        email,
        cnpj,
        login,
        password: hasedPassword,
        city,
        uf
      })
      const store_id = insertedIds[0]
      const categoriesInsertions = categoryArray.map(category => {
        return {
          name: category,
          store_id
        }
      })

      await trx('categories').insert(categoriesInsertions)
      await trx.commit()
      return response.json({ sucess: true })
    } catch (e) {
      await trx.rollback()
      return response.sendStatus(500).send()
    }
   
  }

  async show(request: Request, response: Response) {
    const { id } = request.params
    const store = await knex('stores').where('id_store', id).first()
    if (!store) {
      return response.json({ message: 'Stores not found' })
    }
    const categories = await knex('categories').where('categories.store_id', '=', id)
    return response.json({ store, categories })
  }
  
}

export default StoreController
