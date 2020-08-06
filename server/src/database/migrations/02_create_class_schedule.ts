import knex from 'knex';


//Faz as alterações no banco de dados:
export async function up(knex: knex){
    return knex.schema.createTable('clas_schedule', table => {
        table.increments('id').primary();

        table.integer('week_day').notNullable();
        table.integer('from').notNullable();
        table.integer('to').notNullable();

        table.integer('class_id')
            .notNullable()
            .references('id')
            .inTable('classes')
            .onUpdate('CASCADE')    //Altera em todos os lugares que dependem da informação
            .onDelete('CASCADE');   //Apaga todos os dados relacionado ao id
    });
}

//Caso tenha algum problema ele desfaz as ações do up:
export async function down(knex: knex){
    return knex.schema.dropTable('clas_schedule');
}