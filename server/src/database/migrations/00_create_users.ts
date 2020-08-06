import knex from 'knex';
//Olhar a documentação para verificar a sintaxe, procurar por 'migration API':
//www.knexjs.org


//Faz as alterações no banco de dados:
export async function up(knex: knex){
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.string('bio').notNullable();
    });
}

//Caso tenha algum problema ele desfaz as ações do up:
export async function down(knex: knex){
    return knex.schema.dropTable('users');
}