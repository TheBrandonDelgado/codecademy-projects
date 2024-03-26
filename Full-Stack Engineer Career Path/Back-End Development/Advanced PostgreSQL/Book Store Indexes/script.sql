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
WHERE tablename = 'customers' OR tablename = 'orders' OR tablename = 'books';

CREATE INDEX orders_customer_id_idx ON orders (customer_id);
CREATE INDEX orders_book_id_idx ON orders (book_id);

EXPLAIN ANALYZE SELECT original_language, title, sales_in_millions
FROM books
WHERE original_language = 'French';

SELECT pg_size_pretty (pg_total_relation_size('books'));

CREATE INDEX books_original_language_title_sales_in_millions_idx ON books (original_language, title, sales_in_millions);

EXPLAIN ANALYZE SELECT original_language, title, sales_in_millions
FROM books
WHERE original_language = 'French';

DROP INDEX books_original_language_title_sales_in_millions_idx;

DROP INDEX orders_customers_id_idx;
DROP INDEX orders_book_id_idx;

SELECT NOW();

\COPY orders FROM 'orders_add.txt' DELIMITER ',' CSV HEADER;

SELECT NOW();

CREATE INDEX orders_customer_id_idx ON orders (customer_id);
CREATE INDEX orders_book_id_idx ON orders (book_id);

CREATE INDEX customers_first_name_email_address_idx ON customers (first_name, email_address);