import { Request, Response } from 'express'
import knex from '../database/connection'
import { authenticateLogin } from '../utils/hash'
import { Store } from '../models'
import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv';

dotenv.config()

class AuthController {
  async login(request: Request, response: Response) {
    const { login, password } = request.body
    const ACCESS_TOKEN = process.env.ACCESS_TOKEN || ''
    const store: Store =  await knex('stores').where('login', login).first()
    if(!store) {
      return response.sendStatus(400).send('User not found')
    } 
    try {
      if(await authenticateLogin(password, store.password)) {
        const accesToken = jwt.sign(store, ACCESS_TOKEN)
        response.send({accesToken})
      } 
      return response.sendStatus(403)
    } catch (error) {
      return response.sendStatus(500).send()
    }
  }
}

export default AuthController
