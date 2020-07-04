import Knex from 'knex'
export const up = async (knex: Knex) => {
  return knex.schema.createTable('categories', table => {
    table.increments('id_category').primary()
    table.string('name').notNullable()
    table.integer('store_id').unsigned().references('id_store').inTable('stores').notNullable()
  })
}

export const down = async (knex: Knex) => {
  return knex.schema.dropTable('categories')
}
