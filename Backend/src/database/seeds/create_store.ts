import Knex from 'knex'

export const seed = async (knex: Knex) => {
  await knex('stores').insert([
    { name: 'Hering', cnpj: '92.693.085/0001-59', email: 'hering@gmail.com', login: 'hering', password: '12345', city: 'Belo Horizone', uf: 'MG' },
    { name: 'Extra', cnpj: '67.214.753/0001-70', email: 'Extra@gmail.com', login: 'Extra', password: '12345', city: 'Belo Horizone', uf: 'MG' },
    { name: 'Sucolândia', cnpj: '15.575.100/0001-13', email: 'sucolandia@gmail.com', login: 'sucolandia', password: '12345', city: 'Belo Horizone', uf: 'MG' },
  ])
}
