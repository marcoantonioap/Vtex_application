import Knex from 'knex'
export const up = async (knex: Knex) => {
  return knex.schema.createTable('sales', table => {
    table.increments('id_sale').primary()
    table.string('quantity_sold').notNullable()
    table.integer('product_id').unsigned().references('id_product').inTable('products').notNullable()
    table.integer('sale_income')
    table.date('sale_date')
  })
}

export const down = async (knex: Knex) => {
  return knex.schema.dropTable('sales')
}
