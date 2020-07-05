import Knex from 'knex'
export const up = async (knex: Knex) => {
  return knex.schema.createTable('stores', table => {
    table.increments('id_store').primary()
    table.string('name').notNullable()
    table.string('cnpj').notNullable()
    table.string('email').notNullable()
    table.string('login').notNullable().unique()
    table.string('password').notNullable()
    table.string('city').notNullable()
    table.string('uf', 2).notNullable()
  })
}

export const down = async (knex: Knex) => {
  return knex.schema.dropTable('stores')
}
