//Exports
const PG = require('../../lib/postgres')

//Class
class Chats extends PG {
    sendMessage(userId, chatId, messageText) {
        return this.fetchAll(`
            INSERT INTO chat_message(user_id, chat_id, message_text, message_sended_time) VALUES($1, $2, $3, now());
        `, userId, chatId, messageText)
    }
    getChatsById(userId) {
        return this.fetchAll(`
            SELECT c.chat_id, u.user_name, c.first_user, c.second_user FROM chat c JOIN users u 
            ON u.user_id = c.second_user WHERE c.first_user = $1;
        `, userId)
    }
    getMessages(chatId) {
        return this.fetchAll(`
        SELECT c.chat_id, m.user_id, m.message_id, m.message_text, m.message_sended_time FROM chat c JOIN
        chat_message m ON c.chat_id = m.chat_id WHERE c.chat_id = $1;
        `, chatId)
    }
}

//Module Exports
module.exports = new Chats()