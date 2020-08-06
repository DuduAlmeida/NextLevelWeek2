import knex from 'knex';


//Faz as alterações no banco de dados:
export async function up(knex: knex){
    return knex.schema.createTable('connection', table => {
        table.increments('id').primary();


        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')    //Altera em todos os lugares que dependem da informação
            .onDelete('CASCADE');  
            
        table.timestamp('created_at')
            .defaultTo('now()')
            .notNullable();
    });
}

//Caso tenha algum problema ele desfaz as ações do up:
export async function down(knex: knex){
    return knex.schema.dropTable('connection');
}