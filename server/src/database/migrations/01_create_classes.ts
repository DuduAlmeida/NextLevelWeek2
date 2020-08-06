import knex from 'knex';


//Faz as alterações no banco de dados:
export async function up(knex: knex){
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')    //Altera em todos os lugares que dependem da informação
            .onDelete('CASCADE');   //Apaga todos os dados relacionado ao id
    });
}

//Caso tenha algum problema ele desfaz as ações do up:
export async function down(knex: knex){
    return knex.schema.dropTable('classes');
}