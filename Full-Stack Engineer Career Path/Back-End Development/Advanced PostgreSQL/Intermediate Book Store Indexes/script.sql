SELECT *
FROM customers
LIMIT 10;

SELECT *
FROM orders
LIMIT 10;

SELECT *
FROM books
LIMIT 10;

SELECT *
FROM pg_Indexes
WHERE tablename = 'customers';

SELECT *
FROM pg_Indexes
WHERE tablename = 'books';

SELECT *
FROM pg_Indexes
WHERE tablename = 'orders';

EXPLAIN ANALYZE SELECT customer_id, quantity
FROM orders
WHERE quantity > 18;

CREATE INDEX orders_quantity_idx ON orders (quantity)
WHERE quantity > 18;

EXPLAIN ANALYZE SELECT customer_id, quantity
FROM orders
WHERE quantity > 18;

EXPLAIN ANALYZE SELECT *
FROM customers
WHERE customer_id = 10;

ALTER TABLE customers
ADD CONSTRAINT customers_pkey
PRIMARY KEY (customer_id);

EXPLAIN ANALYZE SELECT *
FROM customers
WHERE customer_id = 10;

CLUSTER customers USING customers_pkey;

SELECT *
FROM customers
LIMIT 10;

CREATE INDEX orders_customer_id_book_id_idx ON orders (customer_id, book_id);

DROP INDEX orders_customer_id_book_id_idx;

CREATE INDEX orders_customer_id_book_id_quantity_idx ON orders (customer_id, book_id, quantity);

CREATE INDEX books_author_title_idx ON books (author, title);

EXPLAIN ANALYZE SELECT *
FROM orders
WHERE quantity * price_base > 100;

CREATE INDEX orders_total_price_idx ON orders ((quantity * price_base));

EXPLAIN ANALYZE SELECT *
FROM orders
WHERE quantity * price_base > 100;