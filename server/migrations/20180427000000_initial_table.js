exports.up = function(knex, Promise) {

  return knex.schema.createTable('tickets', function (t) {
    t.increments().primary()
    t.enu('rate', [0, 1, 2, 3]).notNullable()
    t.timestamps(true, true)
  })
  .then(() => {
    return knex.schema.createTable('payments', function(t) {
      t.increments().primary()
      t.integer('ticket_id').unsigned().references('id').inTable('tickets').onDelete('CASCADE').index().notNullable()
      t.boolean('paid').notNullable().default(false)
      t.timestamps(true, true)
    })
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('payments')
    .then(() => { 
      return knex.schema.dropTable('tickets') 
    })
};
