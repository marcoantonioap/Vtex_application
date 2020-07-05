import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv';

dotenv.config()

export const authorize = (request: Request, response: Response, next: NextFunction) => {
  const authHeader = request.headers.authorization
  const token = authHeader?.split(' ')[1]
  const ACCESS_TOKEN = process.env.ACCESS_TOKEN || ''
  if(!token) {
    return response.sendStatus(401)
  }

  jwt.verify(token, ACCESS_TOKEN, (error, store) => {
    if(error) {
      return response.sendStatus(403)
    }
    next()
  })

}
