CREATE TABLE users(
    user_id serial PRIMARY KEY,
    user_name VARCHAR(64) not null,
    user_password VARCHAR(64) not null,
    user_phone VARCHAR(64) not null,
    user_isAdmin BOOLEAN not null,
    user_isSeller BOOLEAN not null
);

CREATE TABLE subscribers(
    subscriber_id serial PRIMARY KEY,
    subscriber_phone VARCHAR(64) not null,
    subscriber_email VARCHAR(64) not null
);

CREATE TABLE category(
    category_id serial PRIMARY KEY,
    category_name VARCHAR(64) not null
);

CREATE TABLE product(
    product_id serial PRIMARY KEY,
    product_name VARCHAR(64) not null,
    product_company text not null,
    product_price text not null,
    product_image text not null,
    product_sale text,
    product_procent text,
    category_id INT REFERENCES category(category_id)
);

CREATE TABLE orders(
    order_id serial PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    order_status VARCHAR(64) not null,
    user_phone VARCHAR(64) not null,
    product_id INT REFERENCES product(product_id)
);

CREATE TABLE order_info(
    orders_id INT REFERENCES orders(order_id),
    order_created_time timestamp not null,
    order_seller_id INT REFERENCES users(user_id),
    order_changed_time timestamp
);

CREATE TABLE popular_algoritm(
    product_id int REFERENCES product(product_id)
);

CREATE TABLE chat(
    chat_id serial PRIMARY KEY,
    first_user int REFERENCES users(user_id),
    second_user int REFERENCES users(user_id)
);

INSERT INTO chat(first_user, second_user) VALUES(1, 2);
INSERT INTO chat(first_user, second_user) VALUES(1, 5);

CREATE TABLE chat_message(
    message_id serial PRIMARY KEY,
    user_id int REFERENCES users(user_id),
    chat_id int REFERENCES chat(chat_id),
    message_text text not null,
    message_sended_time TIMESTAMP not null
);

INSERT INTO chat_message(user_id, chat_id, message_text, message_sended_time) VALUES(1, 1, 'OK', now());
INSERT INTO chat_message(user_id, chat_id, message_text, message_sended_time) VALUES(2, 1, 'Chundim', now());
INSERT INTO chat_message(user_id, chat_id, message_text, message_sended_time) VALUES(1, 1, 'Tinchuhami', now());
INSERT INTO chat_message(user_id, chat_id, message_text, message_sended_time) VALUES(2, 1, 'Da', now());


SELECT c.chat_id, u.user_name, c.first_user, c.second_user FROM chat c JOIN users u ON u.user_id = c.second_user WHERE c.first_user = 1;

SELECT c.chat_id, m.user_id, m.message_id, m.message_text, m.message_sended_time FROM chat c JOIN chat_message m ON c.chat_id = m.chat_id WHERE c.chat_id = 1;


















-- Alpha test 10.0

-- CREATE TABLE groups(
--     group_id serial PRIMARY KEY,
--     group_name VARCHAR(64) not null
-- );

-- CREATE TABLE group_members(
--     group_id int REFERENCES groups(group_id),
--     user_id int REFERENCES users(user_id),
--     is_admin boolean not null
-- );

-- CREATE TABLE group_messages(
--     group_id int REFERENCES groups(group_id),
--     sender_id int REFERENCES users(user_id),
--     message_text text not null,
--     message_sended_time TIMESTAMP not null
-- );

-- INSERT INTO groups(group_name) VALUES('Staff');

-- INSERT INTO group_members(group_id, user_id, is_admin) VALUES(1, 1, true);
-- INSERT INTO group_members(group_id, user_id, is_admin) VALUES(1, 2, false);
-- INSERT INTO group_members(group_id, user_id, is_admin) VALUES(1, 3, false);

-- INSERT INTO group_messages(group_id, sender_id, message_text, message_sended_time) 
-- VALUES(1, 1, 'Hello!', now());
-- INSERT INTO group_messages(group_id, sender_id, message_text, message_sended_time) 
-- VALUES(1, 1, 'Brothers, How are you?', now());
-- INSERT INTO group_messages(group_id, sender_id, message_text, message_sended_time) 
-- VALUES(1, 3, 'Im good', now());
-- INSERT INTO group_messages(group_id, sender_id, message_text, message_sended_time) 
-- VALUES(1, 4, 'Im too', now());

-- SELECT group_name, COUNT(user_id) as users FROM groups g JOIN group_members m ON g.group_id = m.group_id GROUP BY g.group_name;

-- SELECT * FROM group_messages WHERE group_id = 1;