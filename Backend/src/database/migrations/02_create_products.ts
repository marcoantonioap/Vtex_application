import Knex from 'knex'
export const up = async (knex: Knex) => {
  return knex.schema.createTable('products', table => {
    table.increments('id_product').primary()
    table.string('name').notNullable()
    table.integer('quantity').notNullable()
    table.float('price', 2).notNullable()
    table.integer('category_id').unsigned().references('id_category').inTable('categorys').notNullable()
    table.integer('store_id').unsigned().references('id_store').inTable('stores').notNullable()
  })
}

export const down = async (knex: Knex) => {
  return knex.schema.dropTable('products')
}
