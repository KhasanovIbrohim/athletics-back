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


-- INSERT INTO order_info(orders_id, order_created_time, order_seller_id) VALUES(9, now(), 15);

-- UPDATE order_info SET order_changed_time = now() WHERE orders_id = 9;

-- SELECT AGE(order_changed_time, order_created_time) from order_info;