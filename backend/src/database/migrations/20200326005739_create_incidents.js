<<<<<<< HEAD
=======

>>>>>>> ac37d29a924af3d2616237c67d4ac0e2d5d22a4b
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        
        table.string('ong_id').notNullable();
        table.foreign('ong_id').references('id').inTable('ongs');
  
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
