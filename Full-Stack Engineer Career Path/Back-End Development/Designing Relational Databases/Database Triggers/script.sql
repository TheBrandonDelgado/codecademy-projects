SELECT *
FROM customers
ORDER BY customer_id;

SELECT *
FROM customers_log;

CREATE TRIGGER customer_updated
  BEFORE UPDATE ON customers
  FOR EACH ROW
  EXECUTE PROCEDURE log_customers_change();

UPDATE customers
SET first_name = 'Steve'
WHERE last_name = 'Hall';

UPDATE customers
SET email_address = 'test@test.com'
WHERE last_name = 'Hall';

SELECT *
FROM customers
ORDER BY customer_id;

SELECT *
FROM customers_log;

CREATE TRIGGER customer_insert
  BEFORE INSERT ON customers
  FOR EACH STATEMENT
  EXECUTE PROCEDURE log_customers_change();

INSERT INTO customers (first_name, last_name, years_old)
VALUES
  ('Jeffrey', 'Cook', 66),
  ('Arthur', 'Turner', 49),
  ('Nathan', 'Cooper', 72);

SELECT *
FROM customers
ORDER BY customer_id;

SELECT *
FROM customers_log;

UPDATE customers
SET years_old = 12
WHERE first_name = 'Edward';

UPDATE customers
SET years_old = 14
WHERE last_name = 'Hall';

UPDATE customers
SET
  first_name = 'Melvin',
  years_old = 12
WHERE customer_id = 4;

SELECT *
FROM customers
ORDER BY customer_id;

SELECT *
FROM customers_log;