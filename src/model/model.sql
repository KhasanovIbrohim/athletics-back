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
    product_id INT REFERENCES product(product_id)
);

SELECT p.product_name, p.product_company, p.product_price, p.product_image, p.product_sale, p.product_procent FROM orders o JOIN product p ON o.product_id = p.product_id WHERE o.user_id = 24;
SELECT p.product_name, p.product_company, p.product_price, p.product_image, p.product_sale, p.product_procent FROM category c JOIN product p ON c.category_id = p.category_id WHERE c.category_id = 1;