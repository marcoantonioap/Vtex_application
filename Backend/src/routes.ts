import express from 'express'
import unless from 'express-unless'
import StoreController from './controllers/StoreController';
import ProductController from './controllers/ProductController';
import SaleController from './controllers/SaleController';
import AuthController from './controllers/AuthController';
import { authorize } from './middleware';

const routes = express.Router();


const storeController = new StoreController()
const productController = new ProductController()
const saleController = new SaleController()
const authController = new AuthController()

routes.post('/login', authController.login)
routes.post('/stores', storeController.create)

routes.use(authorize)

routes.get('/stores/:id', storeController.show)

routes.get('/products', productController.index)
routes.get('/products/:id', productController.show)
routes.post('/products', productController.create)

routes.get('/sales', saleController.index)
routes.get('/sales/mostSoldByCategory/:store_id', saleController.mostSold)
routes.post('/sales', saleController.create)

export default routes
