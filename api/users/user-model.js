const db = require('../../data/dbConfig');

    function find() {
    return db('users')
    }

    function findBy(username) {
        return db('users').where('username', username).first();
    }

    async function add(user) {
        const [id] = await db('users').insert(user);
        return db('users').where({ id }).first();
    }



module.exports = {
    find,
    findBy,
    add
}