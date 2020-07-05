export interface Category {
  id_category: number,
  name: string,
  store_id: number
}

export interface Store {
  id_store: number,
  name: string,
  email: string,
  cnpj: string,
  login: string,
  password: string,
  city: string,
  uf: string,
  categories: string
}

export interface Product {
  id_product: number
  name: string,
  category_id: number
  store_id: number
  quantity: number
  price: number
}

export interface Sale {
  id_sale: number,
  quantity_sold: number,
  product_id: number,
  sale_income: number,
  sale_date: string
}

export interface Credentials {
  login: string
  password: string
}
