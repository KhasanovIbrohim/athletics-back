//Configs
const PORT = process.env.PORT || 9000;
const connection = {
    connectionString: 'postgres://bymxxozx:0VRhAclpx42rqhfYQ1PB3wT8tObNxxGF@satao.db.elephantsql.com/bymxxozx'
}
const SECRET_KEY = 'SECRET_KEY'

//Module exports
module.exports = {
    PORT,
    connection,
    SECRET_KEY
}


