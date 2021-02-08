CREATE TABLE books (
    id serial PRIMARY KEY,
    title varchar(200),
    author varchar(200)
);

CREATE TABLE users (
    id serial PRIMARY KEY,
    first_name varchar(100),
    last_name varchar(100),
    email varchar(200),
    password varchar(2000)
);

-- CREATE TABLE reviews (
--     review text
-- );